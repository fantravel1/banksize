/*
 * banksize_site/assets/js/data.js
 *
 * Defines the core data for the banks displayed on the site. Each bank
 * includes its total assets (in billions of US dollars), market capitalisation,
 * revenue, employee count and a few fun facts. This list is based on
 * publicly available financial data for 2024–2025. Assets are approximate
 * estimates drawn from sources such as the World Bank and S&P Global【123533932322425†L5-L7】.
 */

const banks = [
  {
    id: 'icbc',
    name: 'Industrial & Commercial Bank of China',
    shortName: 'ICBC',
    country: 'China',
    founded: 1984,
    assets: 6300, // total assets in USD billions【123533932322425†L5-L7】
    marketCap: 280,
    revenue: 195,
    employees: 460000,
    headquarters: 'Beijing, China',
    logo: '🏦',
    color: '#c41e3a',
    description:
      'The world’s largest bank by total assets, ICBC is a Chinese multinational banking corporation.',
    funFact:
      'If ICBC were a country, its assets would make it richer than Germany and India combined.',
    interestingStats: [
      'Serves over 7 million corporate customers',
      'Operates in 48 countries',
      'Processes over a billion transactions daily',
    ],
  },
  {
    id: 'abc',
    name: 'Agricultural Bank of China',
    shortName: 'ABC',
    country: 'China',
    founded: 1951,
    assets: 5600,
    marketCap: 190,
    revenue: 140,
    employees: 450000,
    headquarters: 'Beijing, China',
    logo: '🌾',
    color: '#228b22',
    description:
      'One of China’s “Big Four” banks, ABC focuses on agricultural and rural banking.',
    funFact:
      'ABC could buy every iPhone sold in 2024 twice over and still have trillions left.',
    interestingStats: [
      'Operates more than 23,000 branches',
      'Serves over 500 million individual customers',
      'Largest provider of agricultural loans globally',
    ],
  },
  {
    id: 'ccb',
    name: 'China Construction Bank',
    shortName: 'CCB',
    country: 'China',
    founded: 1954,
    assets: 5400,
    marketCap: 220,
    revenue: 165,
    employees: 350000,
    headquarters: 'Beijing, China',
    logo: '🏗️',
    color: '#003d7a',
    description:
      'CCB specialises in infrastructure development and construction financing.',
    funFact:
      'Its assets exceed the combined GDP of Brazil and Canada.',
    interestingStats: [
      'Financed over 60% of China’s major infrastructure projects',
      'Presence in 30+ countries',
      'Handles trillions in annual transactions',
    ],
  },
  {
    id: 'boc',
    name: 'Bank of China',
    shortName: 'BOC',
    country: 'China',
    founded: 1912,
    assets: 4500,
    marketCap: 170,
    revenue: 130,
    employees: 310000,
    headquarters: 'Beijing, China',
    logo: '🏛️',
    color: '#dc143c',
    description:
      'The most internationalised of China’s major banks with operations across the globe.',
    funFact:
      'BOC is older than most countries and has survived two world wars and multiple crises.',
    interestingStats: [
      'Operates in more than 60 countries',
      'Oldest continuously operating Chinese bank',
      'Processes the majority of China’s foreign exchange transactions',
    ],
  },
  {
    id: 'jpmorgan',
    name: 'JPMorgan Chase & Co.',
    shortName: 'JPMorgan',
    country: 'United States',
    founded: 2000,
    assets: 4000,
    marketCap: 650,
    revenue: 162,
    employees: 295000,
    headquarters: 'New York, USA',
    logo: '💎',
    color: '#0066b2',
    description:
      'America’s largest bank by assets and the world’s most valuable by market cap.',
    funFact:
      'JPMorgan could end world hunger for almost a century.',
    interestingStats: [
      'Serves 66+ million households',
      'Operates in over 100 countries',
      'Processes trillions in payments annually',
    ],
  },
  {
    id: 'bofa',
    name: 'Bank of America',
    shortName: 'BofA',
    country: 'United States',
    founded: 1904,
    assets: 3300,
    marketCap: 360,
    revenue: 95,
    employees: 217000,
    headquarters: 'Charlotte, USA',
    logo: '🇺🇸',
    color: '#e31837',
    description:
      'The second largest bank in the US with a strong retail banking network.',
    funFact:
      'BofA could buy Netflix and have trillions left to spare.',
    interestingStats: [
      '69 million consumer and small business clients',
      'Operates nearly 4,000 branches',
      '65 million digital users',
    ],
  },
  {
    id: 'mufg',
    name: 'Mitsubishi UFJ Financial Group',
    shortName: 'MUFG',
    country: 'Japan',
    founded: 2005,
    assets: 3400,
    marketCap: 95,
    revenue: 55,
    employees: 160000,
    headquarters: 'Tokyo, Japan',
    logo: '🔴',
    color: '#ff0000',
    description:
      'Japan’s largest financial group and one of the world’s largest banks.',
    funFact:
      'MUFG could buy every NFL team more than fifteen times.',
    interestingStats: [
      'Operations in 50+ countries',
      'Manages over $1.8 trillion in customer assets',
      'Among the world’s top foreign exchange dealers',
    ],
  },
  {
    id: 'hsbc',
    name: 'HSBC Holdings',
    shortName: 'HSBC',
    country: 'United Kingdom',
    founded: 1865,
    assets: 3000,
    marketCap: 130,
    revenue: 60,
    employees: 220000,
    headquarters: 'London, UK',
    logo: '🇬🇧',
    color: '#db0011',
    description:
      'Europe’s largest bank by assets with a strong presence in Asia.',
    funFact:
      'HSBC has survived two world wars and more than 150 years of financial upheavals.',
    interestingStats: [
      'Serves over 40 million customers',
      'Operates in more than 60 countries',
      'Facilitates trillions in payments annually',
    ],
  },
  {
    id: 'bnp',
    name: 'BNP Paribas',
    shortName: 'BNP Paribas',
    country: 'France',
    founded: 1848,
    assets: 2900,
    marketCap: 75,
    revenue: 50,
    employees: 190000,
    headquarters: 'Paris, France',
    logo: '🇫🇷',
    color: '#00915a',
    description:
      'A leading European bank with a significant global presence.',
    funFact:
      'Could purchase the entire luxury goods market for years on end.',
    interestingStats: [
      'Present in more than 65 countries',
      'Serves over 30 million clients',
      'Leader in sustainable finance in Europe',
    ],
  },
  {
    id: 'credit-agricole',
    name: 'Crédit Agricole',
    shortName: 'Crédit Agricole',
    country: 'France',
    founded: 1894,
    assets: 2600,
    marketCap: 60,
    revenue: 40,
    employees: 143000,
    headquarters: 'Montrouge, France',
    logo: '🌱',
    color: '#00694a',
    description:
      'France’s largest retail banking group and the world’s biggest cooperative bank.',
    funFact:
      'Started as agricultural cooperatives and now serves tens of millions of customers.',
    interestingStats: [
      'Operates over 10,000 branches in France',
      'Present in almost 50 countries',
      'Largest cooperative bank globally',
    ],
  },
  {
    id: 'wells',
    name: 'Wells Fargo',
    shortName: 'Wells Fargo',
    country: 'United States',
    founded: 1852,
    assets: 1900,
    marketCap: 180,
    revenue: 75,
    employees: 230000,
    headquarters: 'San Francisco, USA',
    logo: '🐎',
    color: '#d52b1e',
    description:
      'One of the largest US banks with a history dating to the California Gold Rush.',
    funFact:
      'Wells Fargo predates the state of California itself.',
    interestingStats: [
      'Serves more than 70 million customers',
      'Operates roughly 4,700 branches',
      'Founded during the California Gold Rush',
    ],
  },
  {
    id: 'smfg',
    name: 'Sumitomo Mitsui Financial Group',
    shortName: 'SMFG',
    country: 'Japan',
    founded: 2002,
    assets: 2200,
    marketCap: 55,
    revenue: 40,
    employees: 85000,
    headquarters: 'Tokyo, Japan',
    logo: '🔶',
    color: '#1e4d6b',
    description:
      'One of Japan’s three megabanks with roots stretching back centuries.',
    funFact:
      'SMFG traces its origins to 1683, making it over 340 years old.',
    interestingStats: [
      'Has a 340+ year history',
      'Operates in over 40 countries',
      'Strong presence throughout Asia–Pacific',
    ],
  },
  {
    id: 'rbc',
    name: 'Royal Bank of Canada',
    shortName: 'RBC',
    country: 'Canada',
    founded: 1864,
    assets: 1800,
    marketCap: 160,
    revenue: 50,
    employees: 92000,
    headquarters: 'Toronto, Canada',
    logo: '🍁',
    color: '#003b5c',
    description:
      'The largest bank in Canada by market capitalisation with a diversified portfolio.',
    funFact:
      'RBC could buy every hockey team in the NHL several times over.',
    interestingStats: [
      'Serves 17 million clients globally',
      'Branches in more than 30 countries',
      'Strong investment banking arm through RBC Capital Markets',
    ],
  },
  {
    id: 'ubs',
    name: 'UBS Group',
    shortName: 'UBS',
    country: 'Switzerland',
    founded: 1862,
    assets: 1200,
    marketCap: 70,
    revenue: 35,
    employees: 74000,
    headquarters: 'Zürich, Switzerland',
    logo: '🇨🇭',
    color: '#e60505',
    description:
      'A global wealth management powerhouse headquartered in Switzerland.',
    funFact:
      'UBS manages more private wealth than any other institution globally.',
    interestingStats: [
      'Operations in 50+ countries',
      'Manages over $3.5 trillion in client assets',
      'Strong investment banking and asset management divisions',
    ],
  },
];