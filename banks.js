// banks.js - Enhanced functionality for banks listing page

// State management
let currentView = 'cards';
let currentFilter = 'all';
let currentSort = 'assets-desc';
let searchTerm = '';
let banksDataArray = [];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if bankUtils is available
    if (typeof bankUtils === 'undefined' || typeof banksData === 'undefined') {
        console.error('Bank data not loaded. Please ensure banks-data.js is included.');
        showError();
        return;
    }
    
    // Get banks data
    banksDataArray = bankUtils.getAllBanks();
    
    // Initialize UI
    initializeFilters();
    initializeSort();
    initializeSearch();
    initializeViewToggle();
    initializeAnimations();
    
    // Initial render
    renderBanks();
    
    // Mobile menu
    initializeMobileMenu();
    
    // Scroll effects
    initializeScrollEffects();
});

// Initialize filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-pill');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter
            currentFilter = this.dataset.filter;
            
            // Re-render
            renderBanks();
        });
    });
}

// Initialize sort
function initializeSort() {
    const sortSelect = document.getElementById('sortSelect');
    
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        renderBanks();
    });
}

// Initialize search
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchTerm = this.value.toLowerCase();
            renderBanks();
        }, 300);
    });
}

// Initialize view toggle
function initializeViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update view
            currentView = this.dataset.view;
            
            // Re-render
            renderBanks();
        });
    });
}

// Filter banks based on current criteria
function filterBanks() {
    let filtered = [...banksDataArray];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(bank => {
            switch(currentFilter) {
                case 'trillion':
                    return bank.assets >= 1000;
                case 'us':
                    return bank.country === 'United States';
                case 'china':
                    return bank.country === 'China';
                case 'europe':
                    return ['United Kingdom', 'France', 'Germany', 'Spain'].includes(bank.country);
                case 'asia':
                    return ['China', 'Japan', 'South Korea', 'Singapore'].includes(bank.country);
                default:
                    return true;
            }
        });
    }
    
    // Apply search filter
    if (searchTerm) {
        filtered = filtered.filter(bank => 
            bank.name.toLowerCase().includes(searchTerm) ||
            bank.shortName.toLowerCase().includes(searchTerm) ||
            bank.country.toLowerCase().includes(searchTerm) ||
            bank.keyFact.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sort
    filtered.sort((a, b) => {
        switch(currentSort) {
            case 'assets-desc':
                return b.assets - a.assets;
            case 'assets-asc':
                return a.assets - b.assets;
            case 'market-cap':
                return b.marketCap - a.marketCap;
            case 'employees':
                return b.employees - a.employees;
            case 'countries':
                return b.countries - a.countries;
            default:
                return 0;
        }
    });
    
    return filtered;
}

// Render banks based on current view
function renderBanks() {
    const container = document.getElementById('banksContainer');
    const filteredBanks = filterBanks();
    
    // Update summary
    updateSummary(filteredBanks);
    
    // Check if empty
    if (filteredBanks.length === 0) {
        showEmptyState();
        return;
    }
    
    // Hide empty state
    document.getElementById('emptyState').style.display = 'none';
    
    // Remove loading state
    container.innerHTML = '';
    
    // Render based on view
    switch(currentView) {
        case 'cards':
            renderCardsView(filteredBanks);
            break;
        case 'compact':
            renderCompactView(filteredBanks);
            break;
        case 'visual':
            renderVisualView(filteredBanks);
            break;
    }
    
    // Animate in
    animateCards();
}

// Render cards view
function renderCardsView(banks) {
    const container = document.getElementById('banksContainer');
    container.className = 'banks-grid';
    
    container.innerHTML = banks.map(bank => `
        <a href="bank.html?id=${bank.id}" class="bank-card" data-bank-id="${bank.id}">
            <span class="bank-rank">#${bank.globalRank}</span>
            <div class="bank-header">
                <div class="bank-flag">${bank.flag}</div>
                <div class="bank-info">
                    <h3>${bank.name}</h3>
                    <p class="bank-country">${bank.country}</p>
                </div>
            </div>
            <div class="bank-stats">
                <div class="stat">
                    <span class="stat-value">${bankUtils.formatCurrency(bank.assets)}</span>
                    <span class="stat-label">Total Assets</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${bankUtils.formatCurrency(bank.marketCap)}</span>
                    <span class="stat-label">Market Cap</span>
                </div>
            </div>
            <div class="bank-highlight">
                💡 ${bank.keyFact}
            </div>
        </a>
    `).join('');
}

// Render compact view
function renderCompactView(banks) {
    const container = document.getElementById('banksContainer');
    container.className = 'banks-list';
    
    container.innerHTML = banks.map(bank => `
        <a href="bank.html?id=${bank.id}" class="bank-card" data-bank-id="${bank.id}">
            <span class="bank-rank">#${bank.globalRank}</span>
            <div class="bank-header">
                <div class="bank-flag">${bank.flag}</div>
                <div class="bank-info">
                    <h3>${bank.shortName}</h3>
                    <p class="bank-country">${bank.country}</p>
                </div>
            </div>
            <div class="bank-stats">
                <div class="stat">
                    <span class="stat-value">${bankUtils.formatCurrency(bank.assets)}</span>
                    <span class="stat-label">Assets</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${bankUtils.formatCurrency(bank.marketCap)}</span>
                    <span class="stat-label">Market Cap</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${bankUtils.formatNumber(bank.employees)}</span>
                    <span class="stat-label">Employees</span>
                </div>
            </div>
            <div class="bank-highlight">
                💡 ${bank.keyFact}
            </div>
        </a>
    `).join('');
}

// Render visual view (placeholder for D3.js visualization)
function renderVisualView(banks) {
    const container = document.getElementById('banksContainer');
    container.className = 'banks-visual';
    
    container.innerHTML = `
        <div class="visual-chart">
            <h3>Asset Size Comparison</h3>
            <div id="assetChart" style="height: 400px; display: flex; align-items: center; justify-content: center; color: var(--gray);">
                <p>Interactive visualization coming soon...</p>
            </div>
        </div>
        <div class="visual-chart">
            <h3>Geographic Distribution</h3>
            <div id="geoChart" style="height: 400px; display: flex; align-items: center; justify-content: center; color: var(--gray);">
                <p>Interactive map coming soon...</p>
            </div>
        </div>
    `;
    
    // In a real implementation, you would initialize D3.js charts here
}

// Update summary
function updateSummary(banks) {
    const viewingCount = document.getElementById('viewingCount');
    const viewingAssets = document.getElementById('viewingAssets');
    
    const totalAssets = banks.reduce((sum, bank) => sum + bank.assets, 0);
    
    viewingCount.textContent = banks.length;
    viewingAssets.textContent = bankUtils.formatCurrency(totalAssets);
}

// Show empty state
function showEmptyState() {
    document.getElementById('banksContainer').innerHTML = '';
    document.getElementById('emptyState').style.display = 'block';
}

// Show error state
function showError() {
    const container = document.getElementById('banksContainer');
    container.innerHTML = `
        <div class="loading-state">
            <div class="empty-icon">⚠️</div>
            <h3>Error Loading Banks</h3>
            <p>Unable to load bank data. Please refresh the page.</p>
        </div>
    `;
}

// Reset filters
function resetFilters() {
    // Reset all filters
    currentFilter = 'all';
    searchTerm = '';
    currentSort = 'assets-desc';
    
    // Reset UI
    document.querySelector('.filter-pill[data-filter="all"]').click();
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'assets-desc';
    
    // Re-render
    renderBanks();
}

// Initialize animations
function initializeAnimations() {
    // Animate hero stats
    const stats = document.querySelectorAll('.stat-value[data-count]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

// Animate number counting
function animateValue(element) {
    const endValue = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * endValue);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Animate cards on render
function animateCards() {
    const cards = document.querySelectorAll('.bank-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Export reset function to global scope
window.resetFilters = resetFilters;
