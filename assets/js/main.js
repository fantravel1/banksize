/*
 * banksize_site/assets/js/main.js
 *
 * JavaScript for the index page. Handles populating the banks grid, updating
 * the comparison tool, and managing the responsive navigation menu. All
 * functions execute once the DOM content has loaded.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderBanksGrid();
  populateSelects();
  renderComparisons();
  setupNavToggle();
});

/**
 * Populate the grid on the home page with bank cards. Clicking a card
 * navigates to the individual bank page.
 */
function renderBanksGrid() {
  const container = document.getElementById('banksGrid');
  if (!container) return;
  const sorted = getBanksSorted();
  container.innerHTML = sorted
    .map((bank) => {
      return `
        <a href="bank.html?id=${bank.id}" class="card bank-card" style="border-top: 4px solid ${bank.color}">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
            <span style="font-size:2.5rem;">${bank.logo}</span>
            <div>
              <h3 style="margin:0; font-size:1.3rem;">${bank.shortName}</h3>
              <p style="margin:0; font-size:0.85rem; color: var(--muted-color);">${bank.country}</p>
            </div>
          </div>
          <div class="stat-number">${formatAssets(bank.assets)}</div>
          <p style="font-size:0.85rem; color: var(--muted-color); margin-top:0.5rem;">
            ${bank.funFact}
          </p>
        </a>
      `;
    })
    .join('');
}

/**
 * Populate the bank and category select controls.
 */
function populateSelects() {
  const bankSelect = document.getElementById('bankSelect');
  const categorySelect = document.getElementById('categorySelect');
  if (!bankSelect || !categorySelect) return;

  // Populate banks
  bankSelect.innerHTML = banks
    .map((bank) => `<option value="${bank.id}">${bank.shortName} (${formatAssets(bank.assets)})</option>`) 
    .join('');

  // Populate categories
  const categories = getComparisonCategories();
  categorySelect.innerHTML = ['all', ...categories]
    .map((cat) => `<option value="${cat}">${cat === 'all' ? 'All Categories' : capitalise(cat)}</option>`) 
    .join('');

  // Listen for changes
  bankSelect.addEventListener('change', renderComparisons);
  categorySelect.addEventListener('change', renderComparisons);
}

/**
 * Render comparison cards based on selected bank and category.
 */
function renderComparisons() {
  const bankSelect = document.getElementById('bankSelect');
  const categorySelect = document.getElementById('categorySelect');
  const results = document.getElementById('comparisonResults');
  if (!bankSelect || !categorySelect || !results) return;

  const bank = getBankById(bankSelect.value) || banks[0];
  const category = categorySelect.value;

  let items = [];
  if (category === 'all') {
    // pick a couple of highlights from each category
    Object.keys(comparisonData).forEach((key) => {
      items = items.concat(comparisonData[key].slice(0, 2));
    });
  } else {
    items = comparisonData[category] || [];
  }

  results.innerHTML = items
    .map((item) => {
      const quantity = calculateQuantity(bank.assets, item.price);
      const formatted = formatLargeNumber(quantity);
      // generate a short sentence
      let blurb = '';
      if (item.id === 'hunger') {
        // For hunger: number of years funded
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
        <div class="card" style="border-top: 4px solid ${bank.color}">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.5rem;">
            <span style="font-size:2rem;">${item.emoji}</span>
            <div>
              <h3 style="margin:0; font-size:1.1rem;">${item.name}</h3>
              <p style="margin:0; font-size:0.8rem; color: var(--muted-color);">${item.description}</p>
            </div>
          </div>
          <div class="stat-number">${formatted}</div>
          <p style="font-size:0.9rem; color: var(--text-color); margin-top:0.5rem;">
            ${blurb}
          </p>
        </div>
      `;
    })
    .join('');
}

/**
 * Toggle the mobile navigation menu.
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

/**
 * Capitalise the first letter of a string.
 *
 * @param {string} str
 * @returns {string}
 */
function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}