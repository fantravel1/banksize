/*
 * banksize_site/assets/js/utils.js
 *
 * Provides helper functions for formatting numbers, retrieving banks and
 * calculating comparisons. Keeping these functions in one place makes
 * maintenance easier and avoids duplicating logic across files.
 */

/**
 * Convert a number expressed in billions to a human readable string. For
 * example 6300 becomes "$6.3T". Values under 1000 are returned as
 * billions with one decimal place.
 *
 * @param {number} amount Amount in billions
 * @returns {string}
 */
function formatAssets(amount) {
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}T`;
  }
  return `$${amount.toFixed(1)}B`;
}

/**
 * Convert a number into a string with unit suffixes (K, M, B). Useful for
 * displaying quantities in comparison cards. Always rounds to one decimal place.
 *
 * @param {number} value Raw numeric value
 * @returns {string}
 */
function formatLargeNumber(value) {
  if (value >= 1e9) {
    return (value / 1e9).toFixed(1) + 'B';
  }
  if (value >= 1e6) {
    return (value / 1e6).toFixed(1) + 'M';
  }
  if (value >= 1e3) {
    return (value / 1e3).toFixed(1) + 'K';
  }
  return value.toFixed(0);
}

/**
 * Calculate how many units of a given item a bank could buy. Both bank assets
 * and item price should be in billions.
 *
 * @param {number} assets Bank assets in billions
 * @param {number} price Item price in billions
 * @returns {number}
 */
function calculateQuantity(assets, price) {
  if (!price || price <= 0) return 0;
  return assets / price;
}

/**
 * Find a bank by its ID.
 *
 * @param {string} id Bank identifier
 * @returns {object|undefined}
 */
function getBankById(id) {
  return banks.find((b) => b.id === id);
}

/**
 * Return the banks sorted by descending assets.
 *
 * @returns {Array<object>}
 */
function getBanksSorted() {
  return [...banks].sort((a, b) => b.assets - a.assets);
}

/**
 * Retrieve category keys from comparisonData.
 *
 * @returns {string[]}
 */
function getComparisonCategories() {
  return Object.keys(comparisonData);
}