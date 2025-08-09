/*
 * banksize_site/assets/js/comparisons.js
 *
 * Defines the items that banks can be compared against. Each item has a
 * price field expressed in billions of US dollars. Prices are approximate and
 * derived from publicly reported data. For example, the cost to end world
 * hunger for a year is estimated at around $40 billion【257364826574269†L0-L3】.
 */

const comparisonData = {
  humanitarian: [
    {
      id: 'hunger',
      name: 'End World Hunger (1 year)',
      description: 'Fund programmes to end world hunger for an entire year',
      price: 40,
      category: 'Humanitarian',
      emoji: '🌍',
    },
    {
      id: 'education',
      name: 'Universal Primary Education',
      description: 'Provide basic education for every child on earth for a year',
      price: 39,
      category: 'Humanitarian',
      emoji: '📚',
    },
    {
      id: 'hospitals',
      name: 'Build 10,000 Hospitals',
      description: 'Construct 10,000 modern hospitals at an average cost of $10 million each',
      price: 100,
      category: 'Humanitarian',
      emoji: '🏥',
    },
  ],
  tech: [
    {
      id: 'iphones',
      name: 'All iPhones sold in 2024',
      description: 'Buy approximately 232 million iPhones at around $700 each',
      price: 162.5, // 232.1m units × $700 ≈ $162.5 billion
      category: 'Technology',
      emoji: '📱',
    },
    {
      id: 'tesla',
      name: 'Tesla, Inc.',
      description: 'Acquire Tesla based on its 2025 market capitalisation',
      price: 600,
      category: 'Tech Giants',
      emoji: '🚗',
    },
    {
      id: 'apple',
      name: 'Apple Inc.',
      description: 'Acquire Apple based on its 2025 market capitalisation',
      price: 2800,
      category: 'Tech Giants',
      emoji: '🍎',
    },
  ],
  sports: [
    {
      id: 'nfl',
      name: 'All 32 NFL Teams',
      description: 'Purchase every franchise in the National Football League – the average team is worth about $6.49 billion',
      price: 207.7, // 6.49 × 32
      category: 'Sports',
      emoji: '🏈',
    },
    {
      id: 'euro-clubs',
      name: 'Top 20 European Football Clubs',
      description: 'Acquire the top 20 football clubs in Europe at roughly $1 billion each',
      price: 20,
      category: 'Sports',
      emoji: '⚽',
    },
  ],
  countries: [
    {
      id: 'monaco',
      name: 'Monaco',
      description: 'Equivalent to Monaco’s entire GDP of about $10 billion',
      price: 10,
      category: 'Small Countries',
      emoji: '🇲🇨',
    },
    {
      id: 'luxembourg',
      name: 'Luxembourg',
      description: 'Equivalent to Luxembourg’s GDP (~$86 billion)',
      price: 86,
      category: 'Small Countries',
      emoji: '🇱🇺',
    },
    {
      id: 'jamaica',
      name: 'Jamaica',
      description: 'Equivalent to Jamaica’s GDP (~$27 billion)',
      price: 27,
      category: 'Small Countries',
      emoji: '🇯🇲',
    },
  ],
  luxury: [
    {
      id: 'luxury-market',
      name: 'Global Luxury Goods Market',
      description: 'Buy the entire luxury goods market (≈ $400 billion)',
      price: 400,
      category: 'Luxury',
      emoji: '💎',
    },
    {
      id: 'superyachts',
      name: '100 Superyachts',
      description: 'Purchase 100 superyachts at an average of $600 million each',
      price: 60,
      category: 'Luxury',
      emoji: '🛥️',
    },
    {
      id: 'private-islands',
      name: '100 Private Islands',
      description: 'Acquire 100 tropical islands at about $50 million each',
      price: 5,
      category: 'Luxury',
      emoji: '🏝️',
    },
  ],
  companies: [
    {
      id: 'netflix',
      name: 'Netflix',
      description: 'Acquire Netflix at a market capitalisation of roughly $250 billion',
      price: 250,
      category: 'Media',
      emoji: '🎬',
    },
    {
      id: 'nike',
      name: 'Nike',
      description: 'Acquire Nike at a market value of roughly $190 billion',
      price: 190,
      category: 'Consumer',
      emoji: '👟',
    },
    {
      id: 'coca-cola',
      name: 'Coca‑Cola',
      description: 'Acquire The Coca‑Cola Company at a value of roughly $260 billion',
      price: 260,
      category: 'Consumer',
      emoji: '🥤',
    },
  ],
};