/*
 * banksize_site/assets/js/bank.js
 *
 * Script for the individual bank page. It loads data based on the URL
 * parameter, populates the page with the bank’s stats and generates
 * comparisons, rankings and other bank suggestions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initBankPage();
  setupNavToggle();
});

/**
 * Initialise the bank page by reading the bank id from the query string and
 * populating all dynamic sections.
 */
function initBankPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const bank = getBankById(id) || banks[0];
  // Update meta
  document.title = `${bank.shortName} – BankSize`;
  const pageDesc = document.getElementById('pageDescription');
  const ogTitle = document.getElementById('ogTitle');
  const ogDesc = document.getElementById('ogDescription');
  if (pageDesc) pageDesc.setAttribute('content', `Explore what ${bank.shortName} could buy with its $${(bank.assets / 1000).toFixed(1)}T in assets.`);
  if (ogTitle) ogTitle.setAttribute('content', `${bank.shortName} – BankSize`);
  if (ogDesc) ogDesc.setAttribute('content', `Discover comparisons for ${bank.shortName}.`);

  // Populate hero
  document.getElementById('bankLogo').textContent = bank.logo;
  document.getElementById('bankName').textContent = bank.name;
  document.getElementById('bankCountry').textContent = bank.country;
  document.getElementById('bankFounded').textContent = `Founded: ${bank.founded}`;
  document.getElementById('bankDescription').textContent = bank.description;
  document.getElementById('statAssets').textContent = formatAssets(bank.assets);
  document.getElementById('statMarketCap').textContent = `$${bank.marketCap}B`;
  document.getElementById('statRevenue').textContent = `$${bank.revenue}B`;
  document.getElementById('statEmployees').textContent = `${Math.round(bank.employees / 1000)}K`;
  document.getElementById('bankFunFact').textContent = `💡 ${bank.funFact}`;
  document.getElementById('compareTitle').textContent = bank.shortName;

  // Rankings
  renderRankings(bank);
  // Stats
  renderStats(bank);
  // Comparisons
  populateCategorySelectBank(bank);
  renderBankComparisons(bank);
  // Other banks
  renderOtherBanks(bank);
}

/**
 * Render ranking information for the bank.
 * Shows global rank by assets and percentage of total global banking assets.
 * @param {object} bank
 */
function renderRankings(bank) {
  const rankingsContainer = document.getElementById('rankingsContainer');
  if (!rankingsContainer) return;
  const sorted = getBanksSorted();
  const rank = sorted.findIndex((b) => b.id === bank.id) + 1;
  const totalGlobalAssets = 160000; // 160 trillion estimated global banking assets
  const percentage = ((bank.assets / totalGlobalAssets) * 100).toFixed(2);
  rankingsContainer.innerHTML = `
    <div style="margin-bottom:0.5rem;">
      <strong>#${rank}</strong> in global bank assets
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong>${percentage}%</strong> of total global banking assets
    </div>
    <div style="margin-bottom:0.5rem;">
      <strong>${bank.employees.toLocaleString()}</strong> employees worldwide
    </div>
  `;
}

/**
 * Render interesting statistics for the bank.
 * @param {object} bank
 */
function renderStats(bank) {
  const statsContainer = document.getElementById('statsContainer');
  if (!statsContainer) return;
  statsContainer.innerHTML = `
    <div style="margin-bottom:0.5rem;">
      <strong>Headquarters:</strong> ${bank.headquarters}
    </div>
    ${bank.interestingStats
      .map(
        (stat) => `<div style="margin-bottom:0.5rem;">• ${stat}</div>`
      )
      .join('')}
  `;
}

/**
 * Populate the category select for this bank page.
 * @param {object} bank
 */
function populateCategorySelectBank(bank) {
  const select = document.getElementById('bankCategorySelect');
  if (!select) return;
  const categories = getComparisonCategories();
  select.innerHTML = ['all', ...categories]
    .map((cat) => `<option value="${cat}">${cat === 'all' ? 'All Categories' : capitalise(cat)}</option>`) 
    .join('');
  select.addEventListener('change', () => renderBankComparisons(bank));
}

/**
 * Render comparison cards on the bank page.
 * @param {object} bank
 */
function renderBankComparisons(bank) {
  const select = document.getElementById('bankCategorySelect');
  const container = document.getElementById('bankComparisonResults');
  if (!select || !container) return;
  const cat = select.value;
  let items = [];
  if (cat === 'all') {
    Object.keys(comparisonData).forEach((key) => {
      items = items.concat(comparisonData[key].slice(0, 2));
    });
  } else {
    items = comparisonData[cat] || [];
  }
  container.innerHTML = items
    .map((item) => {
      const quantity = calculateQuantity(bank.assets, item.price);
      const formatted = formatLargeNumber(quantity);
      let blurb = '';
      if (item.id === 'hunger') {
        const years = Math.floor(quantity);
        blurb = `${bank.shortName} could end world hunger for ${years} years`;
      } else if (item.category.toLowerCase().includes('countries')) {
        const copies = Math.floor(quantity);
        blurb = `${bank.shortName} could fund ${copies} × ${item.name}'s GDP`;
      } else if (item.category === 'Humanitarian') {
        const years = Math.floor(quantity);
        blurb = `${bank.shortName} could fund this for ${years} years`;
      } else {
        blurb = `${bank.shortName} could buy ${formatted} × ${item.name}`;
      }
      return `
        <div class="card" style="border-top:4px solid ${bank.color}">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
            <span style="font-size:2rem;">${item.emoji}</span>
            <div>
              <h3 style="margin:0; font-size:1.1rem;">${item.name}</h3>
              <p style="margin:0; font-size:0.8rem; color: var(--muted-color);">${item.description}</p>
            </div>
          </div>
          <div class="stat-number">${formatted}</div>
          <p style="font-size:0.9rem; margin-top:0.5rem;">${blurb}</p>
        </div>
      `;
    })
    .join('');
}

/**
 * Render other banks (excluding the current one). Picks three at random.
 * @param {object} bank
 */
function renderOtherBanks(bank) {
  const container = document.getElementById('otherBanksContainer');
  if (!container) return;
  const others = banks.filter((b) => b.id !== bank.id);
  // shuffle and pick three
  const shuffled = others.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);
  container.innerHTML = selected
    .map((b) => {
      return `
        <a href="bank.html?id=${b.id}" class="card bank-card" style="border-top:4px solid ${b.color}">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <span style="font-size:2rem;">${b.logo}</span>
            <div>
              <h3 style="margin:0; font-size:1.1rem;">${b.shortName}</h3>
              <p style="margin:0; font-size:0.8rem; color: var(--muted-color);">${b.country}</p>
            </div>
          </div>
          <div class="stat-number">${formatAssets(b.assets)}</div>
        </a>
      `;
    })
    .join('');
}

/**
 * Responsive nav toggle for mobile. Replicated here because main.js is not
 * loaded on the bank page.
 */
function setupNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });
}