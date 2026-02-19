// banks-data.js - Complete bank data for Bank Size website

const banksData = {
  icbc: {
    id: 'icbc',
    name: 'Industrial & Commercial Bank of China',
    shortName: 'ICBC',
    country: 'China',
    flag: '🇨🇳',
    founded: 1984,
    headquarters: 'Beijing, China',
    assets: 6300,
    marketCap: 285,
    revenue: 195,
    netIncome: 54,
    employees: 460000,
    branches: 16000,
    countries: 48,
    globalRank: 1,
    description: "The world's largest bank by total assets, ICBC is a Chinese state-owned commercial bank.",
    keyFact: "ICBC's $6.3 trillion in assets exceeds the GDP of Germany, India, and the UK combined.",
    ceoQuote: "We are committed to building a world-class modern financial enterprise.",
    timeline: [
      { year: 1984, event: "Founded as a state-owned commercial bank during China's economic reforms" },
      { year: 2006, event: "Historic IPO raises $21.9 billion, the world's largest at the time" },
      { year: 2013, event: "Becomes the world's largest bank by total assets, surpassing $3 trillion" },
      { year: 2024, event: "Assets exceed $6.3 trillion, larger than the GDP of every country except US and China" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '140+ Years', desc: 'Could fund the complete end of world hunger for over 140 consecutive years based on UN estimates' },
        { icon: '💊', title: 'Global Healthcare', value: '63 Years', desc: 'Could provide basic healthcare for every person on Earth for over 6 decades' },
        { icon: '🎓', title: 'Free Education', value: '126M Students', desc: 'Could fund full college education for 126 million students worldwide' },
        { icon: '🏠', title: 'Housing Crisis', value: '12.6M Homes', desc: 'Could build affordable housing for over 50 million people globally' },
        { icon: '🌳', title: 'Climate Action', value: '3× Required', desc: 'Three times the amount needed to meet all global climate goals by 2030' },
        { icon: '💧', title: 'Clean Water', value: 'Everyone', desc: 'Could provide clean water access to every person lacking it for the next century' }
      ],
      corporate: [
        { icon: '🚗', title: 'Buy Tesla', value: '6.3× Over', desc: 'Could purchase Tesla 6.3 times at current market valuation' },
        { icon: '🛍️', title: 'Amazon + Apple', value: 'Both + $2T', desc: 'Could buy both Amazon and Apple and still have $2 trillion left' },
        { icon: '🏭', title: 'Fortune 500', value: 'Top 50', desc: 'Could acquire the 50 largest US corporations by revenue' },
        { icon: '✈️', title: 'All Airlines', value: '31× Over', desc: 'Could buy every major airline in the world 31 times' },
        { icon: '🛢️', title: 'Oil Giants', value: 'All Major', desc: 'Could purchase ExxonMobil, Chevron, Shell, and BP combined' },
        { icon: '🏪', title: 'Retail Empire', value: 'Walmart 14×', desc: 'Could buy Walmart 14 times over at current valuation' }
      ],
      sports: [
        { icon: '🏈', title: 'All NFL Teams', value: '30× Over', desc: 'Could purchase every NFL team 30 times and still have billions left' },
        { icon: '⚽', title: 'Soccer Clubs', value: 'Every Major', desc: 'Could buy Real Madrid, Man United, Barcelona, and 100+ more top clubs' },
        { icon: '🏀', title: 'NBA Teams', value: '42× Over', desc: 'Could own the entire NBA 42 times at current valuations' },
        { icon: '⚾', title: 'MLB Teams', value: '70× Over', desc: 'Could purchase all Major League Baseball teams 70 times' },
        { icon: '🏒', title: 'Sports Leagues', value: 'All Major', desc: 'Could own NFL, NBA, MLB, NHL, and Premier League combined' },
        { icon: '🏟️', title: 'Olympics', value: '420 Games', desc: 'Could fund 420 Olympic Games at average cost' }
      ],
      'real-estate': [
        { icon: '🏰', title: 'Manhattan', value: '3.5× Over', desc: 'Could buy all real estate in Manhattan 3.5 times' },
        { icon: '🌆', title: 'Dubai', value: 'Entire City', desc: 'Could purchase every property in Dubai with trillions to spare' },
        { icon: '🏝️', title: 'Private Islands', value: '126,000', desc: 'Could buy 126,000 private islands at $50M each' },
        { icon: '🏛️', title: 'Monaco', value: '2,100 Years', desc: 'Could buy all Monaco properties sold annually for 2,100 years' },
        { icon: '🌉', title: 'San Francisco', value: 'All Property', desc: 'Could purchase every building in San Francisco' },
        { icon: '🏙️', title: 'Skyscrapers', value: '6,300', desc: 'Could build 6,300 Empire State Buildings' }
      ],
      technology: [
        { icon: '📱', title: 'iPhones', value: '7.9 Billion', desc: 'Could buy an iPhone for every person on Earth at retail price' },
        { icon: '💻', title: 'Data Centers', value: '6,300', desc: 'Could build 6,300 massive Google-scale data centers' },
        { icon: '🚀', title: 'Space Programs', value: '42 NASA', desc: "Could fund NASA's annual budget for 42 years" },
        { icon: '🤖', title: 'AI Research', value: '630 Years', desc: 'Could fund global AI research at current levels for 630 years' },
        { icon: '🌐', title: 'Internet Infrastructure', value: 'Global Fiber', desc: 'Could provide fiber internet to every home on Earth' },
        { icon: '🔬', title: 'Research Labs', value: '126,000', desc: 'Could build 126,000 state-of-the-art research facilities' }
      ]
    }
  },
  
  jpmorgan: {
    id: 'jpmorgan',
    name: 'JPMorgan Chase & Co.',
    shortName: 'JPMorgan Chase',
    country: 'United States',
    flag: '🇺🇸',
    founded: 2000,
    headquarters: 'New York City, USA',
    assets: 4000,
    marketCap: 675,
    revenue: 162,
    netIncome: 49,
    employees: 295000,
    branches: 4700,
    countries: 100,
    globalRank: 5,
    description: "America's largest bank by total assets and market capitalization.",
    keyFact: "JPMorgan Chase could end world hunger for 89-100 years straight with its $4 trillion in assets.",
    ceoQuote: "We want to be the most respected financial services firm in the world.",
    timeline: [
      { year: 1799, event: "The Manhattan Company (predecessor) founded by Aaron Burr" },
      { year: 2000, event: "J.P. Morgan & Co. merges with Chase Manhattan Corporation" },
      { year: 2008, event: "Acquires Bear Stearns and Washington Mutual during financial crisis" },
      { year: 2024, event: "Reaches $4 trillion in assets, largest US bank by far" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '89 Years', desc: 'Could solve global hunger for nearly a century' },
        { icon: '🏥', title: 'Healthcare Access', value: '40 Years', desc: 'Could provide universal healthcare globally for 4 decades' },
        { icon: '🎓', title: 'Student Debt', value: 'All US + More', desc: 'Could pay off all US student debt and fund free college for a generation' },
        { icon: '🏘️', title: 'Affordable Housing', value: '8M Homes', desc: 'Could build 8 million affordable homes in the US' },
        { icon: '🌿', title: 'Green Energy', value: '2,000 GW', desc: 'Could build 2,000 gigawatts of renewable energy capacity' },
        { icon: '🚰', title: 'Water Infrastructure', value: 'US + Africa', desc: 'Could modernize water systems across US and Africa' }
      ],
      corporate: [
        { icon: '🎬', title: 'Entertainment Empire', value: 'Netflix + Disney', desc: 'Could buy Netflix, Disney, and Warner Bros Discovery combined' },
        { icon: '🍔', title: 'Food Giants', value: 'All Fast Food', desc: "Could own McDonald's, Starbucks, and Coca-Cola with room to spare" },
        { icon: '💻', title: 'Tech Companies', value: 'Meta + More', desc: 'Could acquire Meta (Facebook) and several other tech giants' },
        { icon: '🛒', title: 'Retail Dominance', value: 'Target 20×', desc: 'Could buy Target Corporation 20 times over' },
        { icon: '🚗', title: 'Auto Industry', value: 'Ford + GM', desc: 'Could purchase Ford and General Motors multiple times' },
        { icon: '⚡', title: 'Energy Sector', value: 'Multiple Utilities', desc: 'Could own several major energy companies' }
      ],
      sports: [
        { icon: '🏈', title: 'NFL Teams', value: '19× Over', desc: 'Could buy all 32 NFL teams 19 times' },
        { icon: '⚽', title: 'Premier League', value: 'All Clubs 5×', desc: 'Could purchase entire Premier League 5 times over' },
        { icon: '🏀', title: 'NBA Dynasty', value: '26× Over', desc: 'Could own the NBA 26 times at current valuations' },
        { icon: '⚾', title: 'Baseball Empire', value: '44× Over', desc: 'Could buy MLB 44 times over' },
        { icon: '🏎️', title: 'Formula 1', value: '40 Times', desc: 'Could purchase Formula 1 forty times' },
        { icon: '🎾', title: 'Sports Venues', value: '2,000 Stadiums', desc: 'Could build 2,000 professional sports stadiums' }
      ],
      'real-estate': [
        { icon: '🗽', title: 'NYC Real Estate', value: '20% of Manhattan', desc: 'Could buy 20% of all Manhattan real estate' },
        { icon: '🌴', title: 'Beverly Hills', value: 'Every Home 3×', desc: 'Could purchase every home in Beverly Hills 3 times' },
        { icon: '🏖️', title: 'Hamptons', value: 'All Properties', desc: 'Could buy every property in the Hamptons' },
        { icon: '🌃', title: 'Commercial Towers', value: '800 Towers', desc: 'Could build 800 Empire State Buildings' },
        { icon: '🏡', title: 'US Homes', value: '10 Million', desc: 'Could buy 10 million average American homes' },
        { icon: '🌍', title: 'Private Islands', value: '80,000', desc: 'Could purchase 80,000 private islands' }
      ],
      technology: [
        { icon: '📱', title: 'iPhone Production', value: '5B iPhones', desc: 'Could manufacture 5 billion iPhones' },
        { icon: '🖥️', title: 'Supercomputers', value: '20,000', desc: 'Could build 20,000 top-tier supercomputers' },
        { icon: '🛰️', title: 'Satellites', value: '40,000', desc: 'Could launch 40,000 communication satellites' },
        { icon: '🔋', title: 'Tesla Powerwalls', value: '400M Units', desc: 'Could install battery storage for 400 million homes' },
        { icon: '🌐', title: '5G Networks', value: 'Entire US', desc: 'Could build nationwide 5G for the entire United States' },
        { icon: '🤖', title: 'AI Development', value: '400 Years', desc: 'Could fund current global AI research for 400 years' }
      ]
    }
  },
  
  bofa: {
    id: 'bofa',
    name: 'Bank of America Corporation',
    shortName: 'Bank of America',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1904,
    headquarters: 'Charlotte, North Carolina, USA',
    assets: 3300,
    marketCap: 360,
    revenue: 95,
    netIncome: 26,
    employees: 217000,
    branches: 3900,
    countries: 35,
    globalRank: 7,
    description: "The second-largest bank in the United States by total assets.",
    keyFact: "Bank of America could buy Netflix and still have $2.8 trillion remaining.",
    ceoQuote: "What guides us is our purpose: to help make financial lives better.",
    timeline: [
      { year: 1904, event: "Founded as Bank of Italy by Amadeo Giannini in San Francisco" },
      { year: 1928, event: "Becomes Bank of America after merger with Bank of America, Los Angeles" },
      { year: 1998, event: "NationsBank acquires BankAmerica, creating modern Bank of America" },
      { year: 2008, event: "Acquires Merrill Lynch during financial crisis for $50 billion" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '73 Years', desc: 'Could end world hunger for over 7 decades' },
        { icon: '💉', title: 'Vaccine Programs', value: 'Everyone 10×', desc: 'Could vaccinate everyone on Earth 10 times over' },
        { icon: '📚', title: 'Libraries', value: '3.3 Million', desc: 'Could build 3.3 million public libraries worldwide' },
        { icon: '🏥', title: 'Hospitals', value: '33,000', desc: 'Could build 33,000 fully-equipped hospitals' },
        { icon: '🌱', title: 'Reforestation', value: '165B Trees', desc: 'Could plant 165 billion trees globally' },
        { icon: '☀️', title: 'Solar Power', value: '1,650 GW', desc: 'Could install 1,650 gigawatts of solar capacity' }
      ],
      corporate: [
        { icon: '🎮', title: 'Gaming Industry', value: 'All Major Studios', desc: 'Could buy EA, Activision, and Take-Two combined' },
        { icon: '✈️', title: 'Airlines', value: 'All US Carriers', desc: 'Could purchase every major US airline' },
        { icon: '🏨', title: 'Hotel Chains', value: 'Marriott + Hilton', desc: 'Could own the two largest hotel chains' },
        { icon: '🍕', title: 'Food Delivery', value: 'DoorDash 30×', desc: 'Could buy DoorDash 30 times over' },
        { icon: '🏬', title: 'Department Stores', value: 'All Major Chains', desc: "Could own Macy's, Nordstrom, and more" },
        { icon: '📱', title: 'Telecom', value: 'T-Mobile 2×', desc: 'Could purchase T-Mobile twice' }
      ],
      sports: [
        { icon: '🏈', title: 'NFL Ownership', value: '15× Over', desc: 'Could buy the entire NFL 15 times' },
        { icon: '⚽', title: 'Global Soccer', value: 'Top 50 Clubs', desc: 'Could own the 50 most valuable soccer clubs' },
        { icon: '🏀', title: 'NBA Empire', value: '22× Over', desc: 'Could purchase the NBA 22 times' },
        { icon: '🏌️', title: 'Golf Courses', value: '165,000', desc: 'Could buy 165,000 championship golf courses' },
        { icon: '🏊', title: 'Olympic Pools', value: '1.65 Million', desc: 'Could build 1.65 million Olympic pools' },
        { icon: '🎪', title: 'Sports Events', value: '110 Olympics', desc: 'Could fund 110 Olympic Games' }
      ],
      'real-estate': [
        { icon: '🌆', title: 'Miami', value: 'Downtown 5×', desc: 'Could buy all of downtown Miami 5 times' },
        { icon: '🎰', title: 'Las Vegas Strip', value: 'Every Casino', desc: 'Could purchase every casino on the Strip' },
        { icon: '🏰', title: 'Castles', value: '33,000', desc: 'Could buy 33,000 European castles' },
        { icon: '🌉', title: 'Golden Gate', value: '2,200 Bridges', desc: 'Could build 2,200 Golden Gate Bridges' },
        { icon: '🏢', title: 'Office Space', value: '6.6B sq ft', desc: 'Could buy 6.6 billion square feet of office space' },
        { icon: '🏖️', title: 'Beach Property', value: 'California Coast', desc: 'Could buy significant California coastline' }
      ],
      technology: [
        { icon: '💾', title: 'Data Storage', value: '330 Exabytes', desc: 'Could build storage for 330 exabytes of data' },
        { icon: '🔌', title: 'EV Chargers', value: '66 Million', desc: 'Could install 66 million EV charging stations' },
        { icon: '📡', title: 'Cell Towers', value: '3.3 Million', desc: 'Could build 3.3 million 5G cell towers' },
        { icon: '💻', title: 'Laptops', value: '3.3 Billion', desc: 'Could provide laptops to 3.3 billion people' },
        { icon: '🎮', title: 'Gaming Consoles', value: '6.6 Billion', desc: 'Could give everyone a gaming console' },
        { icon: '🚁', title: 'Drones', value: '33 Million', desc: 'Could deploy 33 million delivery drones' }
      ]
    }
  },
  
  abc: {
    id: 'abc',
    name: 'Agricultural Bank of China',
    shortName: 'ABC',
    country: 'China',
    flag: '🇨🇳',
    founded: 1951,
    headquarters: 'Beijing, China',
    assets: 5600,
    marketCap: 180,
    revenue: 140,
    netIncome: 38,
    employees: 450000,
    branches: 23000,
    countries: 13,
    globalRank: 2,
    description: 'One of China\'s "Big Four" banks, focusing on agricultural and rural banking.',
    keyFact: 'ABC could buy every single iPhone ever manufactured and still have $4+ trillion left.',
    ceoQuote: 'Serving agriculture, rural areas, and farmers is our fundamental mission.',
    timeline: [
      { year: 1951, event: "Established to support agricultural development in rural China" },
      { year: 1979, event: "Restored as a state-owned specialized bank after reform" },
      { year: 2010, event: "Completes world's largest IPO at the time, raising $22.1 billion" },
      { year: 2024, event: "Manages $5.6 trillion in assets, serving 500+ million customers" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '124 Years', desc: 'Could eliminate global hunger for over a century' },
        { icon: '🌾', title: 'Farm Development', value: '56M Farms', desc: 'Could modernize 56 million small farms worldwide' },
        { icon: '🚜', title: 'Agricultural Tech', value: 'Global Coverage', desc: 'Could provide modern equipment to every farm on Earth' },
        { icon: '💧', title: 'Irrigation Systems', value: '2.8B Acres', desc: 'Could irrigate 2.8 billion acres of farmland' },
        { icon: '🌱', title: 'Seed Banks', value: '56,000', desc: 'Could establish 56,000 seed preservation facilities' },
        { icon: '🥗', title: 'Food Security', value: '112 Years', desc: 'Could ensure global food security for 112 years' }
      ],
      corporate: [
        { icon: '📱', title: 'Apple Inc.', value: '1.8× Over', desc: 'Could buy Apple almost twice at current valuation' },
        { icon: '🛒', title: 'Amazon', value: '2.8× Over', desc: 'Could purchase Amazon nearly 3 times' },
        { icon: '🌾', title: 'Agribusiness', value: 'All Major', desc: 'Could own Cargill, ADM, Bunge, and Louis Dreyfus' },
        { icon: '🥤', title: 'Beverage Giants', value: 'Coke + Pepsi', desc: 'Could buy Coca-Cola and PepsiCo multiple times' },
        { icon: '🍔', title: 'Fast Food Empire', value: 'All Chains', desc: 'Could own every major fast food chain globally' },
        { icon: '🏪', title: 'Supermarkets', value: 'Global Chains', desc: 'Could purchase all major supermarket chains' }
      ],
      sports: [
        { icon: '🏈', title: 'NFL Teams', value: '27× Over', desc: 'Could buy the NFL 27 times over' },
        { icon: '⚽', title: 'World Cup', value: '1,120 Events', desc: 'Could fund 1,120 World Cup tournaments' },
        { icon: '🏀', title: 'Basketball Empire', value: '37× NBA', desc: 'Could own the NBA 37 times' },
        { icon: '🏇', title: 'Horse Racing', value: 'Every Track', desc: 'Could buy every horse racing venue globally' },
        { icon: '⛳', title: 'Golf Industry', value: 'Complete Control', desc: 'Could own every golf course and country club' },
        { icon: '🏅', title: 'Olympic Training', value: '5,600 Centers', desc: 'Could build 5,600 Olympic training facilities' }
      ],
      'real-estate': [
        { icon: '🌾', title: 'Farmland', value: '1.4B Acres', desc: 'Could buy 1.4 billion acres of prime farmland' },
        { icon: '🏘️', title: 'Rural Housing', value: '112M Homes', desc: 'Could build 112 million rural homes' },
        { icon: '🌳', title: 'Forests', value: '2.8B Acres', desc: 'Could purchase 2.8 billion acres of forest' },
        { icon: '🏭', title: 'Food Processing', value: '280,000 Plants', desc: 'Could build 280,000 food processing facilities' },
        { icon: '🚢', title: 'Ports', value: '5,600 Ports', desc: 'Could develop 5,600 major shipping ports' },
        { icon: '🛤️', title: 'Rail Networks', value: '1.4M Miles', desc: 'Could build 1.4 million miles of railway' }
      ],
      technology: [
        { icon: '🛰️', title: 'AgTech Satellites', value: '56,000', desc: 'Could launch 56,000 agricultural monitoring satellites' },
        { icon: '🤖', title: 'Farm Robots', value: '560 Million', desc: 'Could deploy 560 million farming robots' },
        { icon: '📊', title: 'IoT Sensors', value: '56 Billion', desc: 'Could install 56 billion agricultural IoT sensors' },
        { icon: '🧬', title: 'Biotech Labs', value: '56,000', desc: 'Could build 56,000 agricultural research labs' },
        { icon: '☁️', title: 'Weather Stations', value: '5.6 Million', desc: 'Could install 5.6 million weather monitoring stations' },
        { icon: '💻', title: 'Rural Internet', value: 'Global Coverage', desc: 'Could provide broadband to every rural area on Earth' }
      ]
    }
  },
  
  ccb: {
    id: 'ccb',
    name: 'China Construction Bank',
    shortName: 'CCB',
    country: 'China',
    flag: '🇨🇳',
    founded: 1954,
    headquarters: 'Beijing, China',
    assets: 5400,
    marketCap: 220,
    revenue: 165,
    netIncome: 46,
    employees: 350000,
    branches: 14000,
    countries: 30,
    globalRank: 3,
    description: 'China Construction Bank focuses on infrastructure development and construction financing.',
    keyFact: "CCB's assets exceed the combined GDP of Brazil, Canada, and Russia.",
    ceoQuote: 'Building dreams, constructing the future.',
    timeline: [
      { year: 1954, event: "Founded as People's Construction Bank of China" },
      { year: 1996, event: "Restructured as state-owned commercial bank" },
      { year: 2005, event: "Bank of America acquires 9% stake for $3 billion" },
      { year: 2024, event: "Assets reach $5.4 trillion, financing major global infrastructure" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '120 Years', desc: 'Could solve world hunger for 120 years' },
        { icon: '🏗️', title: 'Infrastructure', value: 'Africa + Asia', desc: 'Could build modern infrastructure across two continents' },
        { icon: '🏫', title: 'Schools', value: '5.4 Million', desc: 'Could construct 5.4 million schools globally' },
        { icon: '🏥', title: 'Medical Centers', value: '54,000', desc: 'Could build 54,000 world-class medical centers' },
        { icon: '🌉', title: 'Bridges', value: '540,000', desc: 'Could construct 540,000 major bridges' },
        { icon: '🚇', title: 'Metro Systems', value: '1,080 Cities', desc: 'Could build metro systems in 1,080 cities' }
      ],
      corporate: [
        { icon: '🏗️', title: 'Construction Giants', value: 'All Global', desc: 'Could buy every major construction company' },
        { icon: '🏢', title: 'Real Estate Firms', value: 'Top 100', desc: 'Could acquire 100 largest property developers' },
        { icon: '🚧', title: 'Equipment Makers', value: 'Caterpillar 10×', desc: 'Could buy Caterpillar 10 times over' },
        { icon: '🏭', title: 'Cement Industry', value: 'Global Control', desc: 'Could own worldwide cement production' },
        { icon: '🔩', title: 'Steel Producers', value: 'All Major', desc: 'Could control global steel production' },
        { icon: '🏗️', title: 'Engineering Firms', value: 'Complete Sector', desc: 'Could own all major engineering companies' }
      ],
      sports: [
        { icon: '🏟️', title: 'Stadium Building', value: '10,800', desc: 'Could build 10,800 world-class stadiums' },
        { icon: '🏈', title: 'NFL Ownership', value: '26× Over', desc: 'Could purchase NFL 26 times' },
        { icon: '⚽', title: 'Soccer Infrastructure', value: 'Every Stadium', desc: 'Could rebuild every soccer stadium on Earth' },
        { icon: '🏊', title: 'Aquatic Centers', value: '540,000', desc: 'Could build 540,000 Olympic pools' },
        { icon: '🏃', title: 'Athletics Tracks', value: '2.7 Million', desc: 'Could construct 2.7 million running tracks' },
        { icon: '⛷️', title: 'Winter Sports', value: '54,000 Resorts', desc: 'Could build 54,000 ski resorts' }
      ],
      'real-estate': [
        { icon: '🏙️', title: 'New Cities', value: '540 Cities', desc: 'Could build 540 new smart cities' },
        { icon: '🏢', title: 'Skyscrapers', value: '54,000', desc: 'Could construct 54,000 supertall buildings' },
        { icon: '🏘️', title: 'Housing Projects', value: '108M Units', desc: 'Could build housing for 400 million people' },
        { icon: '🏗️', title: 'Industrial Parks', value: '27,000', desc: 'Could develop 27,000 industrial complexes' },
        { icon: '🌉', title: 'Megaprojects', value: '5,400', desc: 'Could fund 5,400 infrastructure megaprojects' },
        { icon: '🏖️', title: 'Resort Cities', value: '10,800', desc: 'Could build 10,800 luxury resort destinations' }
      ],
      technology: [
        { icon: '🏗️', title: '3D Printing', value: '540k Printers', desc: 'Could deploy 540,000 construction 3D printers' },
        { icon: '🤖', title: 'Construction Robots', value: '54 Million', desc: 'Could deploy 54 million construction robots' },
        { icon: '📡', title: 'Smart Cities', value: '1,080 Cities', desc: 'Could create 1,080 fully smart cities' },
        { icon: '🌐', title: 'IoT Infrastructure', value: 'Global Network', desc: 'Could build worldwide IoT infrastructure' },
        { icon: '🚄', title: 'Hyperloop', value: '108,000 km', desc: 'Could build 108,000 km of hyperloop track' },
        { icon: '⚡', title: 'Power Grids', value: '540 Countries', desc: 'Could modernize power grids for 540 countries' }
      ]
    }
  },
  
  boc: {
    id: 'boc',
    name: 'Bank of China',
    shortName: 'BOC',
    country: 'China',
    flag: '🇨🇳',
    founded: 1912,
    headquarters: 'Beijing, China',
    assets: 4500,
    marketCap: 160,
    revenue: 130,
    netIncome: 33,
    employees: 310000,
    branches: 11000,
    countries: 61,
    globalRank: 4,
    description: 'The most internationally focused of China\'s major banks, with a century-long history.',
    keyFact: 'BOC is older than most countries and has survived two world wars and multiple economic crises.',
    ceoQuote: 'Connecting China with the world through comprehensive financial services.',
    timeline: [
      { year: 1912, event: "Founded as China's first state bank after Qing Dynasty fell" },
      { year: 1949, event: "Becomes state-owned foreign exchange bank" },
      { year: 1980, event: "First Chinese bank to offer foreign currency credit cards" },
      { year: 2006, event: "Lists on Hong Kong and Shanghai stock exchanges" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '100 Years', desc: 'Could end global hunger for a full century' },
        { icon: '🌐', title: 'Global Connect', value: 'Internet for All', desc: 'Could provide internet access to everyone on Earth' },
        { icon: '🎓', title: 'Education Fund', value: '90M Students', desc: 'Could fund higher education for 90 million students' },
        { icon: '🏥', title: 'Health Systems', value: '45 Countries', desc: 'Could build modern healthcare for 45 countries' },
        { icon: '💊', title: 'Medicine Access', value: '15 Years Global', desc: 'Could provide free medicine globally for 15 years' },
        { icon: '🌳', title: 'Carbon Capture', value: '450 Gt CO2', desc: 'Could fund capture of 450 gigatons of CO2' }
      ],
      corporate: [
        { icon: '🏦', title: 'Banking Sector', value: 'Many Banks', desc: 'Could acquire numerous international banks' },
        { icon: '💱', title: 'Forex Market', value: 'Major Player', desc: 'Could dominate global foreign exchange' },
        { icon: '🚢', title: 'Shipping Lines', value: 'Top 10', desc: 'Could own 10 largest shipping companies' },
        { icon: '✈️', title: 'Airlines Alliance', value: 'Major Carriers', desc: 'Could buy multiple international airlines' },
        { icon: '🏨', title: 'Hotel Chains', value: 'Global Brands', desc: 'Could own major international hotel brands' },
        { icon: '💳', title: 'Payment Networks', value: 'New System', desc: 'Could create global payment infrastructure' }
      ],
      sports: [
        { icon: '🏈', title: 'NFL Teams', value: '21× Over', desc: 'Could buy entire NFL 21 times' },
        { icon: '⚽', title: 'FIFA Events', value: '900 World Cups', desc: 'Could fund 900 World Cup tournaments' },
        { icon: '🏀', title: 'Global Basketball', value: 'Every League', desc: 'Could own every basketball league worldwide' },
        { icon: '🎾', title: 'Tennis Empire', value: 'All Tournaments', desc: 'Could own all major tennis tournaments' },
        { icon: '🏏', title: 'Cricket Leagues', value: 'Global Control', desc: 'Could own every cricket league' },
        { icon: '🥇', title: 'Olympic Legacy', value: '300 Games', desc: 'Could fund 300 Olympic Games' }
      ],
      'real-estate': [
        { icon: '🌏', title: 'Asian Cities', value: 'Major Downtowns', desc: 'Could buy downtown areas of major Asian cities' },
        { icon: '🏛️', title: 'Historic Sites', value: 'Preservation', desc: 'Could preserve every historic site globally' },
        { icon: '🌃', title: 'Financial Centers', value: '450 Districts', desc: 'Could build 450 financial districts' },
        { icon: '🏝️', title: 'Island Nations', value: 'Several Small', desc: 'Could purchase several small island nations' },
        { icon: '🏰', title: 'Heritage Hotels', value: '45,000', desc: 'Could convert 45,000 castles to hotels' },
        { icon: '🌉', title: 'Iconic Bridges', value: '4,500', desc: 'Could build 4,500 Golden Gate-scale bridges' }
      ],
      technology: [
        { icon: '💱', title: 'Digital Currency', value: 'Global System', desc: 'Could create worldwide digital currency' },
        { icon: '🔐', title: 'Blockchain Network', value: 'Full Deploy', desc: 'Could build global blockchain infrastructure' },
        { icon: '💳', title: 'ATM Network', value: '45 Million', desc: 'Could install 45 million next-gen ATMs' },
        { icon: '📱', title: 'Banking Apps', value: 'For Everyone', desc: 'Could provide banking app to everyone on Earth' },
        { icon: '🖥️', title: 'Data Centers', value: '4,500', desc: 'Could build 4,500 massive data centers' },
        { icon: '🛡️', title: 'Cybersecurity', value: '900 Years', desc: 'Could fund global cybersecurity for 900 years' }
      ]
    }
  },
  
  hsbc: {
    id: 'hsbc',
    name: 'HSBC Holdings plc',
    shortName: 'HSBC',
    country: 'United Kingdom',
    flag: '🇬🇧',
    founded: 1865,
    headquarters: 'London, UK',
    assets: 3000,
    marketCap: 130,
    revenue: 60,
    netIncome: 14,
    employees: 220000,
    branches: 3900,
    countries: 63,
    globalRank: 8,
    description: 'Europe\'s largest bank with deep roots in Asia, founded in Hong Kong.',
    keyFact: 'HSBC has been operating for 159 years and survived both World Wars.',
    ceoQuote: 'Opening up a world of opportunity.',
    timeline: [
      { year: 1865, event: "Founded in Hong Kong to finance trade between Europe and Asia" },
      { year: 1991, event: "Acquires Midland Bank, moving headquarters to London" },
      { year: 2002, event: "Becomes world's second-largest bank by assets" },
      { year: 2024, event: "Operates across 63 countries with focus on Asia growth" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '66 Years', desc: 'Could eliminate hunger for 66 years' },
        { icon: '🏥', title: 'NHS Funding', value: '15 Years', desc: 'Could fund UK\'s NHS for 15 years' },
        { icon: '🎓', title: 'Free University', value: '600M Students', desc: 'Could provide free university to 600 million' },
        { icon: '🌊', title: 'Ocean Cleanup', value: 'Complete', desc: 'Could fund complete ocean plastic cleanup' },
        { icon: '🏘️', title: 'Social Housing', value: '6M Homes', desc: 'Could build 6 million affordable homes' },
        { icon: '🚆', title: 'Rail Networks', value: '30 Countries', desc: 'Could modernize rail in 30 countries' }
      ],
      corporate: [
        { icon: '🏪', title: 'UK Retail', value: 'Major Chains', desc: 'Could buy Tesco, Sainsbury\'s, and more' },
        { icon: '☕', title: 'Coffee Empire', value: 'Starbucks 10×', desc: 'Could buy Starbucks 10 times over' },
        { icon: '📰', title: 'Media Groups', value: 'Multiple Giants', desc: 'Could own several media conglomerates' },
        { icon: '🛩️', title: 'British Airways', value: '30× Over', desc: 'Could buy BA\'s parent company 30 times' },
        { icon: '🏦', title: 'Regional Banks', value: 'Many Mid-size', desc: 'Could acquire numerous regional banks' },
        { icon: '💼', title: 'Consultancies', value: 'Big Four', desc: 'Could buy major consulting firms' }
      ],
      sports: [
        { icon: '⚽', title: 'Premier League', value: 'All Clubs 3×', desc: 'Could buy entire Premier League 3 times' },
        { icon: '🏏', title: 'Cricket Empire', value: 'Every Team', desc: 'Could own all international cricket' },
        { icon: '🏉', title: 'Rugby Global', value: 'All Leagues', desc: 'Could control world rugby' },
        { icon: '🎾', title: 'Wimbledon', value: '3,000 Times', desc: 'Could buy Wimbledon 3,000 times' },
        { icon: '🏇', title: 'Horse Racing', value: 'UK Industry', desc: 'Could own entire UK racing industry' },
        { icon: '⛳', title: 'Golf Courses', value: '150,000', desc: 'Could buy 150,000 golf courses' }
      ],
      'real-estate': [
        { icon: '🏰', title: 'London Property', value: 'Central Areas', desc: 'Could buy much of central London' },
        { icon: '🌆', title: 'Hong Kong', value: 'Major Holdings', desc: 'Could own significant Hong Kong property' },
        { icon: '🏖️', title: 'Caribbean', value: 'Many Islands', desc: 'Could buy numerous Caribbean islands' },
        { icon: '🌃', title: 'City of London', value: 'Financial District', desc: 'Could own London\'s financial district' },
        { icon: '🏘️', title: 'UK Towns', value: '300 Towns', desc: 'Could buy 300 entire UK towns' },
        { icon: '🌉', title: 'Thames Bridges', value: 'All + More', desc: 'Could rebuild every Thames bridge' }
      ],
      technology: [
        { icon: '💷', title: 'Digital Pound', value: 'Full System', desc: 'Could create UK digital currency' },
        { icon: '🌐', title: 'Fintech Hubs', value: '300 Centers', desc: 'Could build 300 fintech centers' },
        { icon: '🔒', title: 'Security Systems', value: 'National Scale', desc: 'Could secure entire nations\' banking' },
        { icon: '📡', title: 'Satellite Banking', value: '3,000 Sats', desc: 'Could launch 3,000 banking satellites' },
        { icon: '🤖', title: 'AI Banking', value: '60 Years', desc: 'Could fund AI banking research for 60 years' },
        { icon: '💻', title: 'Quantum Computing', value: '30,000 Systems', desc: 'Could build 30,000 quantum computers' }
      ]
    }
  },
  
  'wells-fargo': {
    id: 'wells-fargo',
    name: 'Wells Fargo & Company',
    shortName: 'Wells Fargo',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1852,
    headquarters: 'San Francisco, California, USA',
    assets: 1900,
    marketCap: 180,
    revenue: 75,
    netIncome: 20,
    employees: 230000,
    branches: 4700,
    countries: 37,
    globalRank: 11,
    description: 'A diversified financial services company with deep American roots dating to the Gold Rush.',
    keyFact: 'Wells Fargo is older than the state of California and survived the Gold Rush era.',
    ceoQuote: 'Helping customers succeed financially is at the center of everything we do.',
    timeline: [
      { year: 1852, event: "Founded by Henry Wells and William Fargo during California Gold Rush" },
      { year: 1905, event: "Survives San Francisco earthquake, keeping bank open in temporary locations" },
      { year: 1998, event: "Merges with Norwest Corporation, adopting Wells Fargo name" },
      { year: 2008, event: "Acquires Wachovia for $15.1 billion during financial crisis" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '42 Years', desc: 'Could solve hunger for over 4 decades' },
        { icon: '🚰', title: 'Clean Water USA', value: 'Full Upgrade', desc: 'Could modernize all US water systems' },
        { icon: '🏫', title: 'Schools', value: '38,000', desc: 'Could build 38,000 new schools' },
        { icon: '🏥', title: 'Rural Hospitals', value: '19,000', desc: 'Could build 19,000 rural hospitals' },
        { icon: '🌲', title: 'National Parks', value: '1,900 New', desc: 'Could create 1,900 national parks' },
        { icon: '☀️', title: 'Solar Panels', value: '380M Homes', desc: 'Could install solar for 380 million homes' }
      ],
      corporate: [
        { icon: '🏦', title: 'Regional Banks', value: 'Many Small', desc: 'Could acquire many community banks' },
        { icon: '🏪', title: 'Retail Chains', value: 'Mid-size', desc: 'Could buy several retail chains' },
        { icon: '⛽', title: 'Gas Stations', value: '190,000', desc: 'Could own 190,000 gas stations' },
        { icon: '🏨', title: 'Hotel Properties', value: '38,000', desc: 'Could buy 38,000 hotels' },
        { icon: '🚚', title: 'Logistics', value: 'Major Firms', desc: 'Could own major shipping companies' },
        { icon: '📱', title: 'Telecom', value: 'Regional', desc: 'Could buy regional telecom providers' }
      ],
      sports: [
        { icon: '🏈', title: 'NFL Teams', value: '9× Over', desc: 'Could buy NFL 9 times' },
        { icon: '⚾', title: 'MLB Complete', value: '21× Over', desc: 'Could own MLB 21 times over' },
        { icon: '🏀', title: 'NBA Teams', value: '12× Over', desc: 'Could purchase NBA 12 times' },
        { icon: '🏒', title: 'NHL Empire', value: '38× Over', desc: 'Could buy NHL 38 times' },
        { icon: '⚽', title: 'MLS Growth', value: '95× Over', desc: 'Could own MLS 95 times' },
        { icon: '🏟️', title: 'Stadiums', value: '1,900', desc: 'Could build 1,900 stadiums' }
      ],
      'real-estate': [
        { icon: '🌉', title: 'Bay Area', value: 'Significant', desc: 'Could buy significant Bay Area property' },
        { icon: '🏙️', title: 'Downtown SF', value: 'Major Portion', desc: 'Could own much of downtown San Francisco' },
        { icon: '🏖️', title: 'California Coast', value: '1,900 Miles', desc: 'Could buy 1,900 miles of coastline' },
        { icon: '🏡', title: 'US Homes', value: '3.8 Million', desc: 'Could purchase 3.8 million homes' },
        { icon: '🌵', title: 'Ranch Land', value: '190M Acres', desc: 'Could buy 190 million acres of ranch land' },
        { icon: '🏢', title: 'Office Buildings', value: '9,500', desc: 'Could own 9,500 office towers' }
      ],
      technology: [
        { icon: '💳', title: 'ATMs', value: '1.9 Million', desc: 'Could install 1.9 million ATMs' },
        { icon: '📱', title: 'Mobile Banking', value: 'For All US', desc: 'Could provide apps to all Americans' },
        { icon: '🔒', title: 'Security Upgrade', value: 'Every Bank', desc: 'Could upgrade security nationwide' },
        { icon: '💻', title: 'Branch Tech', value: 'Full Modern', desc: 'Could modernize every US bank branch' },
        { icon: '🌐', title: 'Rural Internet', value: 'Full US', desc: 'Could bring broadband to rural America' },
        { icon: '🤖', title: 'Banking Bots', value: '19 Million', desc: 'Could deploy 19 million service bots' }
      ]
    }
  },
  
  mitsubishi: {
    id: 'mitsubishi',
    name: 'Mitsubishi UFJ Financial Group',
    shortName: 'MUFG',
    country: 'Japan',
    flag: '🇯🇵',
    founded: 2005,
    headquarters: 'Tokyo, Japan',
    assets: 3400,
    marketCap: 95,
    revenue: 55,
    netIncome: 12,
    employees: 160000,
    branches: 2300,
    countries: 50,
    globalRank: 6,
    description: "Japan's largest financial group and one of the world's largest banks.",
    keyFact: 'MUFG could purchase every NFL team 16+ times over.',
    ceoQuote: 'Creating shared value for all stakeholders through financial innovation.',
    timeline: [
      { year: 1880, event: "Mitsubishi Bank predecessor founded" },
      { year: 1996, event: "Bank of Tokyo and Mitsubishi Bank merge" },
      { year: 2005, event: "Merger creates Mitsubishi UFJ Financial Group" },
      { year: 2008, event: "Invests $9 billion in Morgan Stanley during crisis" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '75 Years', desc: 'Could end hunger for 75 years' },
        { icon: '🌸', title: 'Disaster Relief', value: '3,400 Years', desc: 'Could fund Japan disaster relief for millennia' },
        { icon: '🏥', title: 'Healthcare Japan', value: '8 Years', desc: 'Could fund Japan\'s healthcare for 8 years' },
        { icon: '🎓', title: 'Education', value: '680M Students', desc: 'Could educate 680 million students' },
        { icon: '🚄', title: 'Rail Expansion', value: '34,000 km', desc: 'Could build 34,000 km of high-speed rail' },
        { icon: '🌊', title: 'Tsunami Defense', value: 'Complete', desc: 'Could build complete tsunami defense system' }
      ],
      corporate: [
        { icon: '🚗', title: 'Toyota', value: '1.5× Over', desc: 'Could buy Toyota 1.5 times' },
        { icon: '🎮', title: 'Nintendo', value: '50× Over', desc: 'Could purchase Nintendo 50 times' },
        { icon: '📺', title: 'Sony', value: '25× Over', desc: 'Could buy Sony 25 times over' },
        { icon: '🏢', title: 'Japanese Corps', value: 'Many Major', desc: 'Could own many major Japanese companies' },
        { icon: '🍜', title: 'Food Industry', value: 'Complete', desc: 'Could own Japan\'s food industry' },
        { icon: '🏬', title: 'Retail Sector', value: 'All Chains', desc: 'Could buy all Japanese retail chains' }
      ],
      sports: [
        { icon: '🏈', title: 'NFL Teams', value: '16× Over', desc: 'Could buy NFL 16 times' },
        { icon: '⚾', title: 'MLB + NPB', value: 'Both Leagues', desc: 'Could own MLB and Japanese baseball' },
        { icon: '🥋', title: 'Martial Arts', value: 'Global Dojos', desc: 'Could build dojos worldwide' },
        { icon: '🏃', title: 'Olympics Tokyo', value: '340 Games', desc: 'Could fund 340 Olympics' },
        { icon: '⚽', title: 'J-League', value: '170× Over', desc: 'Could buy J-League 170 times' },
        { icon: '🏎️', title: 'Racing Circuits', value: '3,400', desc: 'Could build 3,400 racing circuits' }
      ],
      'real-estate': [
        { icon: '🗾', title: 'Tokyo Property', value: 'Significant', desc: 'Could buy significant Tokyo real estate' },
        { icon: '🗻', title: 'Mount Fuji Area', value: 'Complete', desc: 'Could buy all property around Mt. Fuji' },
        { icon: '🏯', title: 'Historic Sites', value: 'Preserve All', desc: 'Could preserve all Japanese castles' },
        { icon: '🌸', title: 'Cherry Gardens', value: '340,000', desc: 'Could create 340,000 cherry gardens' },
        { icon: '♨️', title: 'Hot Springs', value: 'Every Onsen', desc: 'Could own every hot spring resort' },
        { icon: '🏙️', title: 'City Centers', value: '34 Cities', desc: 'Could buy downtown of 34 major cities' }
      ],
      technology: [
        { icon: '🤖', title: 'Robotics', value: '34M Robots', desc: 'Could build 34 million robots' },
        { icon: '🚅', title: 'Maglev Trains', value: '6,800 Lines', desc: 'Could build 6,800 maglev lines' },
        { icon: '💴', title: 'Digital Yen', value: 'Complete', desc: 'Could create digital yen system' },
        { icon: '🎮', title: 'Gaming Industry', value: 'Revolutionize', desc: 'Could transform global gaming' },
        { icon: '📱', title: '6G Network', value: 'Japan + Asia', desc: 'Could build 6G for Japan and Asia' },
        { icon: '🛸', title: 'Space Tech', value: '340 Missions', desc: 'Could fund 340 space missions' }
      ]
    }
  },
  
  'bnp-paribas': {
    id: 'bnp-paribas',
    name: 'BNP Paribas',
    shortName: 'BNP Paribas',
    country: 'France',
    flag: '🇫🇷',
    founded: 1848,
    headquarters: 'Paris, France',
    assets: 2900,
    marketCap: 70,
    revenue: 50,
    netIncome: 11,
    employees: 190000,
    branches: 7000,
    countries: 68,
    globalRank: 9,
    description: 'A leading European bank with a significant global presence.',
    keyFact: 'BNP Paribas could purchase the entire luxury goods market for 7+ years.',
    ceoQuote: 'The bank for a changing world.',
    timeline: [
      { year: 1848, event: "Comptoir National d'Escompte de Paris founded" },
      { year: 1966, event: "Banque Nationale de Paris (BNP) created through merger" },
      { year: 2000, event: "BNP and Paribas merge to form BNP Paribas" },
      { year: 2009, event: "Acquires Fortis operations, becoming eurozone's largest bank" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '64 Years', desc: 'Could solve hunger for 64 years' },
        { icon: '🏥', title: 'EU Healthcare', value: '5 Years', desc: 'Could fund EU healthcare for 5 years' },
        { icon: '🎓', title: 'Free University', value: 'All Europe', desc: 'Could make European university free' },
        { icon: '🌿', title: 'Green Europe', value: 'Complete', desc: 'Could make Europe carbon neutral' },
        { icon: '🚊', title: 'Rail Network', value: 'Connect All', desc: 'Could connect all European cities by rail' },
        { icon: '🏛️', title: 'Culture Fund', value: '290 Years', desc: 'Could fund European culture for 290 years' }
      ],
      corporate: [
        { icon: '👜', title: 'LVMH', value: '8× Over', desc: 'Could buy LVMH 8 times' },
        { icon: '🍷', title: 'Wine Industry', value: 'All Vineyards', desc: 'Could own every French vineyard' },
        { icon: '✈️', title: 'Air France', value: '100× Over', desc: 'Could buy Air France-KLM 100 times' },
        { icon: '🏪', title: 'Carrefour', value: '50× Over', desc: 'Could purchase Carrefour 50 times' },
        { icon: '🚗', title: 'Renault', value: '40× Over', desc: 'Could buy Renault 40 times' },
        { icon: '🏨', title: 'Accor Hotels', value: '30× Over', desc: 'Could own Accor 30 times over' }
      ],
      sports: [
        { icon: '⚽', title: 'Ligue 1', value: '29× Over', desc: 'Could buy French league 29 times' },
        { icon: '🏉', title: 'Rugby Europe', value: 'All Teams', desc: 'Could own European rugby' },
        { icon: '🚴', title: 'Tour de France', value: '14,500 Tours', desc: 'Could fund 14,500 Tours' },
        { icon: '🎿', title: 'Ski Resorts', value: 'All Alps', desc: 'Could own every Alpine ski resort' },
        { icon: '🏎️', title: 'Formula 1', value: '29 Times', desc: 'Could buy F1 29 times' },
        { icon: '⛵', title: 'Yacht Clubs', value: 'Every One', desc: 'Could own every yacht club' }
      ],
      'real-estate': [
        { icon: '🗼', title: 'Paris Property', value: 'Major Areas', desc: 'Could buy major Paris districts' },
        { icon: '🏖️', title: 'French Riviera', value: 'Significant', desc: 'Could own much of Côte d\'Azur' },
        { icon: '🏰', title: 'Châteaux', value: 'Every One', desc: 'Could buy every French château' },
        { icon: '🍇', title: 'Wine Regions', value: 'All Land', desc: 'Could own all wine regions' },
        { icon: '🎨', title: 'Museums', value: 'Create 2,900', desc: 'Could build 2,900 world-class museums' },
        { icon: '🌆', title: 'Business Districts', value: '58 Cities', desc: 'Could develop 58 city centers' }
      ],
      technology: [
        { icon: '💶', title: 'Digital Euro', value: 'Lead Role', desc: 'Could lead digital euro creation' },
        { icon: '🚄', title: 'Hyperloop EU', value: 'Full Network', desc: 'Could build European hyperloop' },
        { icon: '🛰️', title: 'EU Satellites', value: '2,900', desc: 'Could launch 2,900 satellites' },
        { icon: '🌐', title: 'Fiber Network', value: 'All Europe', desc: 'Could connect all of Europe' },
        { icon: '⚡', title: 'Green Energy', value: '1,450 GW', desc: 'Could build 1,450 GW renewable' },
        { icon: '🔬', title: 'Research Labs', value: '29,000', desc: 'Could fund 29,000 research labs' }
      ]
    }
  },
  
  'credit-agricole': {
    id: 'credit-agricole',
    name: 'Crédit Agricole',
    shortName: 'Crédit Agricole',
    country: 'France',
    flag: '🇫🇷',
    founded: 1894,
    headquarters: 'Montrouge, France',
    assets: 2600,
    marketCap: 55,
    revenue: 40,
    netIncome: 8,
    employees: 143000,
    branches: 10000,
    countries: 47,
    globalRank: 10,
    description: "France's largest retail banking group and the world's largest cooperative bank.",
    keyFact: 'Started as agricultural cooperatives and now serves 54 million customers globally.',
    ceoQuote: 'Supporting all life projects, from the most everyday to the most ambitious.',
    timeline: [
      { year: 1894, event: "Founded as network of local agricultural credit cooperatives" },
      { year: 1920, event: "Becomes national institution for French farmers" },
      { year: 1990, event: "Expands beyond agriculture to full retail banking" },
      { year: 2024, event: "Operates as world's largest cooperative financial institution" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '58 Years', desc: 'Could solve hunger for nearly 6 decades' },
        { icon: '🌾', title: 'Farm Support', value: '52M Farms', desc: 'Could modernize 52 million farms' },
        { icon: '🏫', title: 'Rural Schools', value: '260,000', desc: 'Could build 260,000 rural schools' },
        { icon: '💧', title: 'Irrigation', value: '1.3B Acres', desc: 'Could irrigate 1.3 billion acres' },
        { icon: '🌱', title: 'Sustainable Ag', value: 'Global Shift', desc: 'Could convert world to sustainable farming' },
        { icon: '🏥', title: 'Rural Health', value: '26,000 Clinics', desc: 'Could build 26,000 rural health clinics' }
      ],
      corporate: [
        { icon: '🥐', title: 'French Food', value: 'All Companies', desc: 'Could own French food industry' },
        { icon: '🧀', title: 'Dairy Sector', value: 'Global Control', desc: 'Could control global dairy' },
        { icon: '🍷', title: 'Wine Industry', value: 'Major Regions', desc: 'Could own major wine regions' },
        { icon: '🚜', title: 'John Deere', value: '20× Over', desc: 'Could buy John Deere 20 times' },
        { icon: '🌻', title: 'Seed Companies', value: 'All Major', desc: 'Could own all seed companies' },
        { icon: '🏪', title: 'Co-ops', value: 'Every One', desc: 'Could buy every cooperative' }
      ],
      sports: [
        { icon: '⚽', title: 'Rural Sports', value: '2.6M Fields', desc: 'Could build 2.6 million sports fields' },
        { icon: '🏇', title: 'Equestrian', value: 'Global Industry', desc: 'Could own horse sports industry' },
        { icon: '🚴', title: 'Cycling', value: '260k Velodromes', desc: 'Could build 260,000 velodromes' },
        { icon: '🏉', title: 'Rugby Clubs', value: 'Every Rural', desc: 'Could fund every rural rugby club' },
        { icon: '⛳', title: 'Golf Courses', value: '130,000', desc: 'Could build 130,000 golf courses' },
        { icon: '🎣', title: 'Fishing Lakes', value: '520,000', desc: 'Could create 520,000 fishing lakes' }
      ],
      'real-estate': [
        { icon: '🌾', title: 'Farmland', value: '650M Acres', desc: 'Could buy 650 million acres farmland' },
        { icon: '🏘️', title: 'Villages', value: '26,000', desc: 'Could revitalize 26,000 villages' },
        { icon: '🍇', title: 'Vineyards', value: 'All French', desc: 'Could own all French vineyards' },
        { icon: '🌻', title: 'Greenhouses', value: '2.6 Million', desc: 'Could build 2.6 million greenhouses' },
        { icon: '🏚️', title: 'Rural Renewal', value: '5.2M Homes', desc: 'Could renovate 5.2 million rural homes' },
        { icon: '🌲', title: 'Forest Land', value: '1.3B Acres', desc: 'Could buy 1.3 billion acres forest' }
      ],
      technology: [
        { icon: '🚜', title: 'Smart Farming', value: 'Global Deploy', desc: 'Could digitize all farming globally' },
        { icon: '📡', title: 'Rural Internet', value: 'Worldwide', desc: 'Could connect all rural areas' },
        { icon: '🌱', title: 'AgTech', value: '260k Centers', desc: 'Could build 260,000 AgTech centers' },
        { icon: '🛰️', title: 'Farm Satellites', value: '26,000', desc: 'Could launch 26,000 ag satellites' },
        { icon: '🤖', title: 'Farm Robots', value: '260 Million', desc: 'Could deploy 260 million farm bots' },
        { icon: '☁️', title: 'Weather Tech', value: '2.6M Stations', desc: 'Could install 2.6 million weather stations' }
      ]
    }
  },
  
  sumitomo: {
    id: 'sumitomo',
    name: 'Sumitomo Mitsui Financial Group',
    shortName: 'SMFG',
    country: 'Japan',
    flag: '🇯🇵',
    founded: 2002,
    headquarters: 'Tokyo, Japan',
    assets: 2200,
    marketCap: 50,
    revenue: 40,
    netIncome: 9,
    employees: 85000,
    branches: 1400,
    countries: 40,
    globalRank: 12,
    description: "One of Japan's three megabanks with roots dating back over 400 years.",
    keyFact: 'SMFG traces its origins back to 1683, making it over 340 years old.',
    ceoQuote: 'Growing and prospering together with our customers and society.',
    timeline: [
      { year: 1683, event: "Sumitomo family starts copper trading business" },
      { year: 1895, event: "Sumitomo Bank established" },
      { year: 2001, event: "Sumitomo and Sakura banks merge" },
      { year: 2002, event: "Forms Sumitomo Mitsui Financial Group" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '49 Years', desc: 'Could end hunger for 49 years' },
        { icon: '🌸', title: 'Disaster Prep', value: 'All Japan', desc: 'Could disaster-proof all of Japan' },
        { icon: '🏥', title: 'Healthcare', value: 'Japan 5 Years', desc: 'Could fund Japanese healthcare 5 years' },
        { icon: '🎓', title: 'Education', value: '44M Students', desc: 'Could educate 44 million students' },
        { icon: '🌊', title: 'Coastal Defense', value: 'Complete', desc: 'Could build complete tsunami barriers' },
        { icon: '♻️', title: 'Recycling', value: 'Global System', desc: 'Could build global recycling system' }
      ],
      corporate: [
        { icon: '🏢', title: 'Keiretsu', value: 'Strengthen', desc: 'Could strengthen Sumitomo group' },
        { icon: '🚗', title: 'Mazda', value: '40× Over', desc: 'Could buy Mazda 40 times' },
        { icon: '🎮', title: 'Sega', value: '100× Over', desc: 'Could purchase Sega 100 times' },
        { icon: '🍜', title: 'Restaurant Chains', value: 'All Major', desc: 'Could own all Japanese chains' },
        { icon: '🏬', title: 'Convenience', value: 'Every Store', desc: 'Could buy every konbini in Japan' },
        { icon: '📱', title: 'Tech Startups', value: '22,000', desc: 'Could fund 22,000 startups' }
      ],
      sports: [
        { icon: '⚾', title: 'Baseball', value: 'NPB 110×', desc: 'Could buy Japanese baseball 110 times' },
        { icon: '🥋', title: 'Martial Arts', value: 'Global Dojos', desc: 'Could build dojos worldwide' },
        { icon: '🏃', title: 'Marathon', value: '22,000 Events', desc: 'Could sponsor 22,000 marathons' },
        { icon: '⚽', title: 'J-League', value: '110× Over', desc: 'Could own J-League 110 times' },
        { icon: '🏊', title: 'Aquatic Centers', value: '220,000', desc: 'Could build 220,000 pools' },
        { icon: '🎯', title: 'Traditional Sports', value: 'Preserve All', desc: 'Could preserve all traditional sports' }
      ],
      'real-estate': [
        { icon: '🗾', title: 'Osaka Property', value: 'Downtown', desc: 'Could buy downtown Osaka' },
        { icon: '🏯', title: 'Castle Towns', value: 'All Historic', desc: 'Could preserve all castle towns' },
        { icon: '♨️', title: 'Onsen Resorts', value: '22,000', desc: 'Could build 22,000 hot spring resorts' },
        { icon: '🌸', title: 'Sakura Parks', value: '220,000', desc: 'Could create 220,000 cherry parks' },
        { icon: '🏢', title: 'Office Towers', value: '4,400', desc: 'Could build 4,400 office towers' },
        { icon: '🏘️', title: 'Smart Cities', value: '22 Cities', desc: 'Could build 22 smart cities' }
      ],
      technology: [
        { icon: '🤖', title: 'Robotics R&D', value: '220 Years', desc: 'Could fund robotics for 220 years' },
        { icon: '🚅', title: 'Shinkansen', value: '4,400 km', desc: 'Could build 4,400 km bullet train' },
        { icon: '💹', title: 'Fintech', value: 'Transform Japan', desc: 'Could digitize all Japanese banking' },
        { icon: '🌐', title: '6G Research', value: '44 Years', desc: 'Could fund 6G research 44 years' },
        { icon: '⚡', title: 'Renewable', value: '1,100 GW', desc: 'Could build 1,100 GW renewable' },
        { icon: '🏭', title: 'Smart Factories', value: '22,000', desc: 'Could build 22,000 smart factories' }
      ]
    }
  },
  
  'deutsche-bank': {
      id: 'deutsche-bank',
      name: 'Deutsche Bank AG',
      shortName: 'Deutsche Bank',
      country: 'Germany',
      flag: '🇩🇪',
      founded: 1870,
      headquarters: 'Frankfurt, Germany',
      assets: 1400,
      marketCap: 25,
      revenue: 28,
      netIncome: 5,
      employees: 87000,
      branches: 1900,
      countries: 58,
      globalRank: 15,
      description: "Germany's largest bank and a major global investment bank.",
      keyFact: "Deutsche Bank has survived 154 years including two world wars, hyperinflation, and multiple financial crises.",
      ceoQuote: "Transforming for sustainable profitability.",
      timeline: [
          { year: 1870, event: "Founded in Berlin to finance foreign trade and promote German commerce" },
          { year: 1914, event: "Becomes Germany's largest bank before World War I" },
          { year: 1999, event: "Acquires Bankers Trust for $10 billion, becoming global investment powerhouse" },
          { year: 2024, event: "Manages $1.4 trillion after years of restructuring and regulatory challenges" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '31 Years', desc: 'Could eliminate global hunger for over 3 decades' },
              { icon: '🏥', title: 'EU Healthcare', value: '2 Years', desc: 'Could fund Germany\'s entire healthcare system for 2 years' },
              { icon: '🎓', title: 'Free Education', value: '28M Students', desc: 'Could provide free university education to 28 million students' },
              { icon: '🌳', title: 'Reforestation', value: '70B Trees', desc: 'Could plant 70 billion trees across Europe' },
              { icon: '🚇', title: 'Metro Systems', value: '280 Cities', desc: 'Could build metro systems in 280 European cities' },
              { icon: '☀️', title: 'Solar Power', value: '700 GW', desc: 'Could install 700 gigawatts of solar capacity' }
          ],
          corporate: [
              { icon: '🚗', title: 'Buy BMW', value: '20× Over', desc: 'Could purchase BMW 20 times over' },
              { icon: '✈️', title: 'Lufthansa', value: '140× Over', desc: 'Could buy Lufthansa 140 times' },
              { icon: '🏭', title: 'German Industry', value: 'Major Stakes', desc: 'Could own significant portions of DAX 30 companies' },
              { icon: '💊', title: 'Bayer', value: '25× Over', desc: 'Could purchase Bayer 25 times' },
              { icon: '🏪', title: 'Metro AG', value: '100× Over', desc: 'Could buy Metro AG retail giant 100 times' },
              { icon: '⚡', title: 'E.ON', value: '35× Over', desc: 'Could acquire energy giant E.ON 35 times' }
          ],
          sports: [
              { icon: '⚽', title: 'Bundesliga', value: '20× Over', desc: 'Could buy entire Bundesliga 20 times' },
              { icon: '🏎️', title: 'Formula 1', value: '14 Times', desc: 'Could purchase Formula 1 fourteen times' },
              { icon: '🏆', title: 'Champions League', value: '280 Seasons', desc: 'Could fund Champions League for 280 seasons' },
              { icon: '🎿', title: 'Winter Olympics', value: '93 Games', desc: 'Could fund 93 Winter Olympic Games' },
              { icon: '🏊', title: 'Aquatic Centers', value: '140,000', desc: 'Could build 140,000 Olympic pools' },
              { icon: '🚴', title: 'Cycling Tours', value: '7,000', desc: 'Could sponsor 7,000 Tour de France events' }
          ],
          'real-estate': [
              { icon: '🏙️', title: 'Frankfurt CBD', value: 'Entire District', desc: 'Could buy Frankfurt\'s entire financial district' },
              { icon: '🏰', title: 'German Castles', value: 'Every One', desc: 'Could purchase every castle in Germany' },
              { icon: '🏔️', title: 'Alpine Resorts', value: '1,400', desc: 'Could buy 1,400 Alpine ski resorts' },
              { icon: '🏢', title: 'Office Towers', value: '2,800', desc: 'Could build 2,800 skyscrapers' },
              { icon: '🏘️', title: 'Housing', value: '2.8M Homes', desc: 'Could build 2.8 million homes' },
              { icon: '🌉', title: 'Infrastructure', value: '1,400 Bridges', desc: 'Could build 1,400 major bridges' }
          ],
          technology: [
              { icon: '🤖', title: 'Industry 4.0', value: 'Transform EU', desc: 'Could digitize all European manufacturing' },
              { icon: '🚄', title: 'Hyperloop', value: '28,000 km', desc: 'Could build 28,000 km of hyperloop' },
              { icon: '💾', title: 'Data Centers', value: '1,400', desc: 'Could build 1,400 massive data centers' },
              { icon: '🔋', title: 'Battery Plants', value: '140 Gigafactories', desc: 'Could build 140 Tesla-scale battery plants' },
              { icon: '5️⃣', title: '5G Network', value: 'All Europe', desc: 'Could build 5G for entire Europe' },
              { icon: '🧬', title: 'Biotech Labs', value: '14,000', desc: 'Could fund 14,000 research laboratories' }
          ]
      }
  },
  
  'santander': {
      id: 'santander',
      name: 'Banco Santander S.A.',
      shortName: 'Santander',
      country: 'Spain',
      flag: '🇪🇸',
      founded: 1857,
      headquarters: 'Madrid, Spain',
      assets: 1800,
      marketCap: 60,
      revenue: 52,
      netIncome: 12,
      employees: 210000,
      branches: 9200,
      countries: 10,
      globalRank: 13,
      description: "Europe's largest bank by market cap and a major force in Latin America.",
      keyFact: "Santander serves 168 million customers across Europe and the Americas, more than half of Brazil's population.",
      ceoQuote: "Building a more responsible bank.",
      timeline: [
          { year: 1857, event: "Founded in Santander, northern Spain, to facilitate trade" },
          { year: 1999, event: "Merges with BCH to become Spain's largest bank" },
          { year: 2007, event: "Acquires ABN AMRO's Brazilian operations, becoming Latin America leader" },
          { year: 2024, event: "Operates as truly global bank with $1.8 trillion in assets" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '40 Years', desc: 'Could solve world hunger for 4 decades' },
              { icon: '🏥', title: 'Healthcare Iberia', value: '9 Years', desc: 'Could fund Spain and Portugal healthcare for 9 years' },
              { icon: '🎓', title: 'Latin Education', value: '36M Students', desc: 'Could educate 36 million Latin American students' },
              { icon: '💧', title: 'Water Access', value: '1.8B People', desc: 'Could provide clean water to 1.8 billion people' },
              { icon: '🏘️', title: 'Social Housing', value: '3.6M Homes', desc: 'Could build 3.6 million affordable homes' },
              { icon: '🌿', title: 'Amazon Protection', value: '180 Years', desc: 'Could fund Amazon rainforest protection for 180 years' }
          ],
          corporate: [
              { icon: '🏪', title: 'Inditex', value: '20× Over', desc: 'Could buy Zara parent company 20 times' },
              { icon: '📱', title: 'Telefónica', value: '40× Over', desc: 'Could purchase Telefónica 40 times' },
              { icon: '✈️', title: 'IAG', value: '60× Over', desc: 'Could buy British Airways parent 60 times' },
              { icon: '🏗️', title: 'ACS Group', value: '50× Over', desc: 'Could acquire construction giant 50 times' },
              { icon: '⚡', title: 'Iberdrola', value: '18× Over', desc: 'Could buy renewable giant Iberdrola 18 times' },
              { icon: '🛢️', title: 'Repsol', value: '45× Over', desc: 'Could purchase Repsol 45 times' }
          ],
          sports: [
              { icon: '⚽', title: 'La Liga', value: '18× Over', desc: 'Could buy entire La Liga 18 times' },
              { icon: '🏆', title: 'Real Madrid', value: '300× Over', desc: 'Could purchase Real Madrid 300 times' },
              { icon: '🐂', title: 'Bullfighting', value: 'Every Arena', desc: 'Could buy every bullring in Spain and Latin America' },
              { icon: '🏖️', title: 'Beach Clubs', value: '180,000', desc: 'Could build 180,000 beach clubs' },
              { icon: '🎾', title: 'Tennis Centers', value: '90,000', desc: 'Could build 90,000 tennis facilities' },
              { icon: '🏇', title: 'Polo Clubs', value: '18,000', desc: 'Could create 18,000 polo clubs' }
          ],
          'real-estate': [
              { icon: '🏖️', title: 'Ibiza', value: 'Entire Island', desc: 'Could buy all property on Ibiza' },
              { icon: '🌴', title: 'Costa del Sol', value: 'Complete Coast', desc: 'Could purchase entire Costa del Sol' },
              { icon: '🏙️', title: 'Madrid Center', value: 'Major Portion', desc: 'Could buy central Madrid' },
              { icon: '🏰', title: 'Spanish Castles', value: 'All 2,500', desc: 'Could buy every castle in Spain' },
              { icon: '🍷', title: 'Rioja Region', value: 'All Vineyards', desc: 'Could purchase entire wine regions' },
              { icon: '🏢', title: 'Latin Towers', value: '3,600', desc: 'Could build 3,600 skyscrapers in Latin America' }
          ],
          technology: [
              { icon: '🌐', title: 'Digital Banking', value: 'All LatAm', desc: 'Could digitize all Latin American banking' },
              { icon: '📱', title: 'Mobile Payments', value: '1.8B Users', desc: 'Could provide mobile banking to 1.8 billion' },
              { icon: '🛰️', title: 'Satellites', value: '1,800', desc: 'Could launch 1,800 communication satellites' },
              { icon: '💳', title: 'ATM Network', value: '1.8 Million', desc: 'Could install 1.8 million ATMs' },
              { icon: '🔐', title: 'Cybersecurity', value: '360 Years', desc: 'Could fund banking security for 360 years' },
              { icon: '⚡', title: 'Fiber Optic', value: 'All Spain', desc: 'Could wire all of Spain with fiber' }
          ]
      }
  },
  
  'ubs': {
      id: 'ubs',
      name: 'UBS Group AG',
      shortName: 'UBS',
      country: 'Switzerland',
      flag: '🇨🇭',
      founded: 1862,
      headquarters: 'Zurich, Switzerland',
      assets: 1700,
      marketCap: 100,
      revenue: 40,
      netIncome: 15,
      employees: 115000,
      branches: 1000,
      countries: 50,
      globalRank: 14,
      description: "Switzerland's banking giant, now including Credit Suisse after historic 2023 merger.",
      keyFact: "UBS manages over $5.5 trillion in invested assets, more than Switzerland's GDP by 7 times.",
      ceoQuote: "Reimagining investing. Connecting people for a better world.",
      timeline: [
          { year: 1862, event: "Bank in Winterthur founded, UBS predecessor" },
          { year: 1998, event: "Union Bank of Switzerland merges with Swiss Bank Corporation" },
          { year: 2023, event: "Acquires Credit Suisse in historic $3.2 billion rescue deal" },
          { year: 2024, event: "Becomes undisputed Swiss banking champion with $1.7 trillion assets" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '38 Years', desc: 'Could end global hunger for nearly 4 decades' },
              { icon: '🏔️', title: 'Climate Protection', value: 'Alps Forever', desc: 'Could fund Alpine conservation indefinitely' },
              { icon: '🎓', title: 'Education', value: '34M Students', desc: 'Could provide free education to 34 million' },
              { icon: '🏥', title: 'Swiss Healthcare', value: '20 Years', desc: 'Could fund Switzerland\'s healthcare for 20 years' },
              { icon: '🚂', title: 'Rail Networks', value: '1,700 Systems', desc: 'Could build 1,700 mountain rail systems' },
              { icon: '❄️', title: 'Glacier Protection', value: 'All Alps', desc: 'Could protect every Alpine glacier' }
          ],
          corporate: [
              { icon: '🍫', title: 'Nestlé', value: '5× Over', desc: 'Could buy Nestlé 5 times over' },
              { icon: '💊', title: 'Novartis', value: '8× Over', desc: 'Could purchase Novartis 8 times' },
              { icon: '⌚', title: 'Rolex', value: '34× Over', desc: 'Could buy Rolex 34 times (if public)' },
              { icon: '🏭', title: 'ABB', value: '25× Over', desc: 'Could acquire ABB 25 times' },
              { icon: '🧀', title: 'Swiss Food', value: 'Entire Industry', desc: 'Could own all Swiss food companies' },
              { icon: '💎', title: 'Luxury Goods', value: '5 Years Global', desc: 'Could buy global luxury market for 5 years' }
          ],
          sports: [
              { icon: '⛷️', title: 'Ski Resorts', value: 'Every Resort', desc: 'Could buy every ski resort globally' },
              { icon: '⚽', title: 'FIFA', value: '170× Budget', desc: 'Could fund FIFA for 170 years' },
              { icon: '🏔️', title: 'Climbing Centers', value: '170,000', desc: 'Could build 170,000 climbing facilities' },
              { icon: '🏒', title: 'Ice Hockey', value: 'Global League', desc: 'Could create worldwide hockey league' },
              { icon: '🎿', title: 'Winter Sports', value: 'All Infrastructure', desc: 'Could own all winter sports facilities' },
              { icon: '🚵', title: 'Mountain Biking', value: '1.7M Trails', desc: 'Could build 1.7 million bike trails' }
          ],
          'real-estate': [
              { icon: '🏔️', title: 'Swiss Alps', value: 'Significant', desc: 'Could buy significant Alpine property' },
              { icon: '🏙️', title: 'Zurich', value: 'Banking District', desc: 'Could own Zurich\'s financial center' },
              { icon: '🏰', title: 'Châteaux', value: 'Every One', desc: 'Could buy every Swiss castle and château' },
              { icon: '🌊', title: 'Lake Geneva', value: 'Entire Shore', desc: 'Could purchase Lake Geneva shoreline' },
              { icon: '🏢', title: 'Banking Towers', value: '3,400', desc: 'Could build 3,400 bank towers' },
              { icon: '🎿', title: 'Ski Chalets', value: '850,000', desc: 'Could build 850,000 luxury chalets' }
          ],
          technology: [
              { icon: '🔐', title: 'Bank Vaults', value: '170,000', desc: 'Could build 170,000 high-tech vaults' },
              { icon: '💰', title: 'Crypto Infrastructure', value: 'Global System', desc: 'Could build worldwide crypto banking' },
              { icon: '🖥️', title: 'Quantum Finance', value: '1,700 Systems', desc: 'Could deploy 1,700 quantum computers' },
              { icon: '🌐', title: 'Private Banking', value: 'Ultimate Network', desc: 'Could create ultimate wealth management network' },
              { icon: '📡', title: 'Satellite Banking', value: '8,500', desc: 'Could launch 8,500 banking satellites' },
              { icon: '🤖', title: 'Wealth AI', value: '340 Years R&D', desc: 'Could fund wealth management AI for 340 years' }
          ]
      }
  },
  
  'barclays': {
      id: 'barclays',
      name: 'Barclays plc',
      shortName: 'Barclays',
      country: 'United Kingdom',
      flag: '🇬🇧',
      founded: 1690,
      headquarters: 'London, UK',
      assets: 1900,
      marketCap: 45,
      revenue: 30,
      netIncome: 7,
      employees: 92000,
      branches: 1500,
      countries: 40,
      globalRank: 16,
      description: "A British universal bank with over 330 years of history.",
      keyFact: "Barclays is older than the Bank of England and has operated through 50+ recessions and 15 monarchs.",
      ceoQuote: "We measure success not just by commercial results, but also by how we act.",
      timeline: [
          { year: 1690, event: "John Freame and Thomas Gould start banking in Lombard Street" },
          { year: 1896, event: "Multiple banks join to form Barclay and Company Limited" },
          { year: 1986, event: "Becomes first foreign bank on Tokyo and New York stock exchanges" },
          { year: 2024, event: "Continues as major global bank despite post-2008 restructuring" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '42 Years', desc: 'Could solve hunger for over 4 decades' },
              { icon: '🏥', title: 'NHS Funding', value: '10 Years', desc: 'Could fund UK\'s NHS for a decade' },
              { icon: '🎓', title: 'Student Debt', value: 'All UK', desc: 'Could erase all UK student debt' },
              { icon: '🏘️', title: 'Council Housing', value: '3.8M Homes', desc: 'Could build 3.8 million council homes' },
              { icon: '🚇', title: 'Transport', value: '38 Cities', desc: 'Could build underground systems in 38 cities' },
              { icon: '🌳', title: 'Green Britain', value: 'Complete', desc: 'Could make UK carbon neutral' }
          ],
          corporate: [
              { icon: '🛒', title: 'Tesco', value: '50× Over', desc: 'Could buy Tesco 50 times' },
              { icon: '✈️', title: 'British Airways', value: '25× Over', desc: 'Could purchase IAG/BA 25 times' },
              { icon: '📱', title: 'Vodafone', value: '35× Over', desc: 'Could buy Vodafone 35 times' },
              { icon: '🍺', title: 'Diageo', value: '20× Over', desc: 'Could purchase drinks giant 20 times' },
              { icon: '💊', title: 'GSK', value: '15× Over', desc: 'Could buy GlaxoSmithKline 15 times' },
              { icon: '🏪', title: 'Marks & Spencer', value: '190× Over', desc: 'Could buy M&S 190 times' }
          ],
          sports: [
              { icon: '⚽', title: 'Premier League', value: '4× Over', desc: 'Could buy entire Premier League 4 times' },
              { icon: '🏏', title: 'Cricket', value: 'Global Control', desc: 'Could own world cricket' },
              { icon: '🏉', title: 'Rugby Union', value: 'All Leagues', desc: 'Could purchase all rugby leagues' },
              { icon: '🎾', title: 'Wimbledon', value: '1,900 Times', desc: 'Could buy Wimbledon 1,900 times' },
              { icon: '🏇', title: 'Racing', value: 'Every Track', desc: 'Could own all UK horse racing' },
              { icon: '⛳', title: 'Golf Courses', value: '95,000', desc: 'Could build 95,000 golf courses' }
          ],
          'real-estate': [
              { icon: '🏰', title: 'London Property', value: 'The City', desc: 'Could buy London\'s Square Mile' },
              { icon: '👑', title: 'Crown Estate', value: '10× Over', desc: 'Could buy Crown Estate 10 times' },
              { icon: '🏘️', title: 'UK Towns', value: '190 Towns', desc: 'Could purchase 190 entire towns' },
              { icon: '🌉', title: 'Thames Crossings', value: 'All + 100 More', desc: 'Could build 100 new Thames bridges' },
              { icon: '🏛️', title: 'Historic Buildings', value: 'Preserve All', desc: 'Could preserve all UK heritage sites' },
              { icon: '🏢', title: 'Canary Wharf', value: '3× Over', desc: 'Could buy Canary Wharf 3 times' }
          ],
          technology: [
              { icon: '💷', title: 'Digital Pound', value: 'Complete System', desc: 'Could create UK digital currency' },
              { icon: '🏦', title: 'Open Banking', value: 'Transform UK', desc: 'Could revolutionize UK banking' },
              { icon: '🔒', title: 'Security', value: '380 Years', desc: 'Could fund UK cybersecurity for 380 years' },
              { icon: '📱', title: 'Mobile Banking', value: 'Every Briton', desc: 'Could give premium banking to all UK' },
              { icon: '🌐', title: 'Fintech Hub', value: '1,900 Centers', desc: 'Could build 1,900 fintech centers' },
              { icon: '🤖', title: 'AI Banking', value: '190 Years', desc: 'Could fund AI banking research for 190 years' }
          ]
      }
  },
  
  'rbc': {
      id: 'rbc',
      name: 'Royal Bank of Canada',
      shortName: 'RBC',
      country: 'Canada',
      flag: '🇨🇦',
      founded: 1869,
      headquarters: 'Toronto, Canada',
      assets: 1400,
      marketCap: 180,
      revenue: 50,
      netIncome: 15,
      employees: 93000,
      branches: 1200,
      countries: 36,
      globalRank: 17,
      description: "Canada's largest bank and one of North America's leading financial institutions.",
      keyFact: "RBC serves 17 million clients and could buy every Tim Hortons location 700 times over.",
      ceoQuote: "Helping clients thrive and communities prosper.",
      timeline: [
          { year: 1869, event: "Founded as Merchants Bank of Halifax during Canadian Confederation" },
          { year: 1901, event: "Changes name to Royal Bank of Canada" },
          { year: 1962, event: "First Canadian bank with computer-based banking system" },
          { year: 2024, event: "Dominates Canadian banking with $1.4 trillion in assets" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '31 Years', desc: 'Could solve hunger for over 3 decades' },
              { icon: '🏥', title: 'Healthcare Canada', value: '6 Years', desc: 'Could fund Canadian healthcare for 6 years' },
              { icon: '🎓', title: 'Free University', value: 'All Canadians', desc: 'Could make university free for all Canadians forever' },
              { icon: '❄️', title: 'Arctic Protection', value: 'Permanent', desc: 'Could fund Arctic conservation permanently' },
              { icon: '🌲', title: 'Forest Protection', value: '140 Years', desc: 'Could protect Canadian forests for 140 years' },
              { icon: '🏘️', title: 'Indigenous Housing', value: 'Complete', desc: 'Could solve Indigenous housing crisis completely' }
          ],
          corporate: [
              { icon: '🛢️', title: 'Suncor', value: '35× Over', desc: 'Could buy Suncor Energy 35 times' },
              { icon: '🚂', title: 'CN Rail', value: '12× Over', desc: 'Could purchase CN Railway 12 times' },
              { icon: '🛒', title: 'Loblaw', value: '28× Over', desc: 'Could buy Loblaw Companies 28 times' },
              { icon: '☕', title: 'Tim Hortons', value: '70× Over', desc: 'Could buy Tim Hortons 70 times' },
              { icon: '🏪', title: 'Canadian Tire', value: '100× Over', desc: 'Could purchase Canadian Tire 100 times' },
              { icon: '✈️', title: 'Air Canada', value: '140× Over', desc: 'Could buy Air Canada 140 times' }
          ],
          sports: [
              { icon: '🏒', title: 'NHL', value: '7× Over', desc: 'Could buy entire NHL 7 times' },
              { icon: '🍁', title: 'Maple Leafs', value: '700× Over', desc: 'Could buy Toronto Maple Leafs 700 times' },
              { icon: '⚾', title: 'Blue Jays', value: '875× Over', desc: 'Could purchase Blue Jays 875 times' },
              { icon: '🏈', title: 'CFL', value: '140× Over', desc: 'Could own Canadian Football League 140 times' },
              { icon: '🥌', title: 'Curling Rinks', value: '140,000', desc: 'Could build 140,000 curling rinks' },
              { icon: '⛷️', title: 'Ski Resorts', value: '2,800', desc: 'Could buy 2,800 ski resorts' }
          ],
          'real-estate': [
              { icon: '🏙️', title: 'Toronto Downtown', value: 'Significant', desc: 'Could buy major portion of downtown Toronto' },
              { icon: '🌊', title: 'Vancouver', value: 'Waterfront', desc: 'Could purchase Vancouver\'s waterfront' },
              { icon: '🏔️', title: 'Banff', value: 'Entire Town', desc: 'Could buy all of Banff (if allowed)' },
              { icon: '🏘️', title: 'Suburban Homes', value: '1.4M', desc: 'Could buy 1.4 million Canadian homes' },
              { icon: '🌉', title: 'Infrastructure', value: '280 Bridges', desc: 'Could build 280 major bridges' },
              { icon: '🏢', title: 'CN Tower', value: '2,800× Over', desc: 'Could build 2,800 CN Towers' }
          ],
          technology: [
              { icon: '💰', title: 'Digital Loonie', value: 'National System', desc: 'Could create Canadian digital currency' },
              { icon: '🌐', title: 'Rural Internet', value: 'All Canada', desc: 'Could bring broadband to all rural Canada' },
              { icon: '🛰️', title: 'Arctic Satellites', value: '1,400', desc: 'Could launch 1,400 Arctic monitoring satellites' },
              { icon: '🤖', title: 'AI Research', value: '280 Years', desc: 'Could fund Canadian AI research for 280 years' },
              { icon: '🔋', title: 'Clean Energy', value: '700 GW', desc: 'Could build 700 GW renewable capacity' },
              { icon: '🚇', title: 'Metro Systems', value: '28 Cities', desc: 'Could build metros in 28 Canadian cities' }
          ]
      }
  },

  'td-bank': {
      id: 'td-bank',
      name: 'Toronto-Dominion Bank',
      shortName: 'TD Bank',
      country: 'Canada',
      flag: '🇨🇦',
      founded: 1855,
      headquarters: 'Toronto, Canada',
      assets: 1300,
      marketCap: 150,
      revenue: 48,
      netIncome: 14,
      employees: 95000,
      branches: 2200,
      countries: 15,
      globalRank: 18,
      description: "Canada's second-largest bank with major US retail presence.",
      keyFact: "TD has more branches in the US than in Canada, making it America's most Canadian bank.",
      ceoQuote: "Ready for you - building the better bank.",
      timeline: [
          { year: 1855, event: "Dominion Bank founded by grain millers and merchants" },
          { year: 1955, event: "Merges with Toronto Bank to form TD Bank" },
          { year: 2005, event: "Acquires 51% of Banknorth, entering US market aggressively" },
          { year: 2024, event: "Operates over 1,100 US branches from Maine to Florida" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '29 Years', desc: 'Could end hunger for nearly 3 decades' },
              { icon: '🏥', title: 'Healthcare', value: 'Canada 5 Years', desc: 'Could fund Canadian healthcare for 5 years' },
              { icon: '🎓', title: 'Student Support', value: '26M Students', desc: 'Could fund education for 26 million students' },
              { icon: '🏘️', title: 'Affordable Housing', value: '2.6M Homes', desc: 'Could build 2.6 million homes' },
              { icon: '🌲', title: 'Great Lakes', value: 'Clean Forever', desc: 'Could fund Great Lakes cleanup permanently' },
              { icon: '🚇', title: 'Transit', value: '26 Systems', desc: 'Could build transit in 26 North American cities' }
          ],
          corporate: [
              { icon: '🏪', title: 'Shopify', value: '15× Over', desc: 'Could buy Shopify 15 times' },
              { icon: '🍔', title: 'Restaurant Brands', value: '40× Over', desc: 'Could buy Tim Hortons/Burger King parent 40 times' },
              { icon: '📡', title: 'Rogers', value: '35× Over', desc: 'Could purchase Rogers Communications 35 times' },
              { icon: '🏗️', title: 'Brookfield', value: '18× Over', desc: 'Could buy Brookfield Asset Management 18 times' },
              { icon: '🎮', title: 'BlackBerry', value: '325× Over', desc: 'Could purchase BlackBerry 325 times' },
              { icon: '⛏️', title: 'Barrick Gold', value: '45× Over', desc: 'Could buy Barrick Gold 45 times' }
          ],
          sports: [
              { icon: '🏒', title: 'NHL Teams', value: '6× Over', desc: 'Could buy entire NHL 6 times' },
              { icon: '🏀', title: 'Raptors', value: '325× Over', desc: 'Could buy Toronto Raptors 325 times' },
              { icon: '⚾', title: 'MLB Teams', value: '14× Over', desc: 'Could purchase all MLB teams 14 times' },
              { icon: '🏈', title: 'Bills', value: '200× Over', desc: 'Could buy Buffalo Bills 200 times' },
              { icon: '⚽', title: 'MLS', value: '65× Over', desc: 'Could own MLS 65 times over' },
              { icon: '🥍', title: 'Lacrosse', value: 'Global League', desc: 'Could create worldwide lacrosse league' }
          ],
          'real-estate': [
              { icon: '🏙️', title: 'Toronto Financial', value: 'PATH System', desc: 'Could buy Toronto\'s underground city' },
              { icon: '🗽', title: 'Manhattan', value: 'Several Blocks', desc: 'Could buy several Manhattan blocks' },
              { icon: '🌊', title: 'Cottage Country', value: 'All Muskoka', desc: 'Could purchase entire Muskoka region' },
              { icon: '🏢', title: 'Office Towers', value: '2,600', desc: 'Could build 2,600 office towers' },
              { icon: '🌉', title: 'Border Crossings', value: '260 Bridges', desc: 'Could build 260 border bridges' },
              { icon: '🏘️', title: 'Suburbs', value: '13 Cities', desc: 'Could build 13 suburban cities' }
          ],
          technology: [
              { icon: '💳', title: 'Payment Network', value: 'North America', desc: 'Could build continental payment system' },
              { icon: '🏦', title: 'Branch Tech', value: 'Ultra Modern', desc: 'Could create most advanced branch network' },
              { icon: '📱', title: 'Mobile First', value: '130M Users', desc: 'Could provide premium banking to 130 million' },
              { icon: '🤖', title: 'AI Advisors', value: '1.3 Million', desc: 'Could deploy 1.3 million AI advisors' },
              { icon: '🔐', title: 'Fraud Protection', value: '260 Years', desc: 'Could fund fraud protection for 260 years' },
              { icon: '☁️', title: 'Cloud Banking', value: 'Transform NA', desc: 'Could modernize all North American banking' }
          ]
      }
  },
  
  'mizuho': {
      id: 'mizuho',
      name: 'Mizuho Financial Group',
      shortName: 'Mizuho',
      country: 'Japan',
      flag: '🇯🇵',
      founded: 2003,
      headquarters: 'Tokyo, Japan',
      assets: 2100,
      marketCap: 45,
      revenue: 35,
      netIncome: 8,
      employees: 60000,
      branches: 800,
      countries: 40,
      globalRank: 19,
      description: "Japan's third megabank formed from the merger of three major banks.",
      keyFact: "Mizuho's name means 'abundant rice' in Japanese, symbolizing prosperity and harvest.",
      ceoQuote: "One Mizuho: Building the future with finance.",
      timeline: [
          { year: 1873, event: "Yasuda Bank founded, one of Mizuho's predecessors" },
          { year: 2000, event: "Three major banks announce merger to form Mizuho" },
          { year: 2003, event: "Mizuho Financial Group officially established" },
          { year: 2024, event: "Manages $2.1 trillion serving 34 million customers" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '47 Years', desc: 'Could solve hunger for nearly 5 decades' },
              { icon: '🌊', title: 'Tsunami Defense', value: 'Complete System', desc: 'Could build comprehensive tsunami protection' },
              { icon: '🎓', title: 'Education', value: '42M Students', desc: 'Could educate 42 million students globally' },
              { icon: '🏥', title: 'Healthcare Japan', value: '5 Years', desc: 'Could fund Japan\'s healthcare for 5 years' },
              { icon: '🍱', title: 'Food Security', value: 'Japan Forever', desc: 'Could ensure Japan\'s food security permanently' },
              { icon: '🚅', title: 'Shinkansen', value: '42,000 km', desc: 'Could build 42,000 km of bullet train tracks' }
          ],
          corporate: [
              { icon: '🚗', title: 'Honda', value: '45× Over', desc: 'Could buy Honda 45 times' },
              { icon: '📱', title: 'SoftBank', value: '35× Over', desc: 'Could purchase SoftBank 35 times' },
              { icon: '🎮', title: 'Square Enix', value: '350× Over', desc: 'Could buy Square Enix 350 times' },
              { icon: '🍜', title: 'Food Industry', value: 'All Chains', desc: 'Could own every Japanese restaurant chain' },
              { icon: '🏪', title: '7-Eleven Japan', value: '70× Over', desc: 'Could buy 7-Eleven Japan 70 times' },
              { icon: '📺', title: 'Panasonic', value: '100× Over', desc: 'Could purchase Panasonic 100 times' }
          ],
          sports: [
              { icon: '⚾', title: 'NPB', value: '70× Over', desc: 'Could buy Japanese baseball 70 times' },
              { icon: '🥋', title: 'Martial Arts', value: 'Global Network', desc: 'Could build worldwide dojo network' },
              { icon: '🏃', title: 'Olympics', value: '140 Games', desc: 'Could fund 140 Olympic Games' },
              { icon: '⚽', title: 'J-League', value: '105× Over', desc: 'Could purchase J-League 105 times' },
              { icon: '🏊', title: 'Pools', value: '210,000', desc: 'Could build 210,000 Olympic pools' },
              { icon: '🎯', title: 'Training Centers', value: '21,000', desc: 'Could build 21,000 sports facilities' }
          ],
          'real-estate': [
              { icon: '🗼', title: 'Tokyo Towers', value: '4,200', desc: 'Could build 4,200 Tokyo Tower replicas' },
              { icon: '🏯', title: 'Castles', value: 'Restore All', desc: 'Could restore every Japanese castle' },
              { icon: '🌸', title: 'Parks', value: '210,000', desc: 'Could create 210,000 cherry blossom parks' },
              { icon: '♨️', title: 'Onsen', value: '42,000', desc: 'Could build 42,000 hot spring resorts' },
              { icon: '🏙️', title: 'Shibuya', value: 'Entire District', desc: 'Could buy all of Shibuya district' },
              { icon: '🗾', title: 'Islands', value: '2,100', desc: 'Could purchase 2,100 small islands' }
          ],
          technology: [
              { icon: '🤖', title: 'Robots', value: '21 Million', desc: 'Could build 21 million service robots' },
              { icon: '🚄', title: 'Maglev', value: '4,200 Lines', desc: 'Could build 4,200 maglev train lines' },
              { icon: '💹', title: 'Trading Systems', value: 'Revolutionary', desc: 'Could create next-gen trading platform' },
              { icon: '🌐', title: '6G Network', value: 'All Japan', desc: 'Could build 6G for entire Japan' },
              { icon: '🔋', title: 'Battery Tech', value: '210 Years R&D', desc: 'Could fund battery research for 210 years' },
              { icon: '🛸', title: 'Space Finance', value: '210 Missions', desc: 'Could fund 210 space missions' }
          ]
      }
  },
  
  'ing': {
      id: 'ing',
      name: 'ING Group',
      shortName: 'ING',
      country: 'Netherlands',
      flag: '🇳🇱',
      founded: 1991,
      headquarters: 'Amsterdam, Netherlands',
      assets: 1100,
      marketCap: 50,
      revenue: 22,
      netIncome: 7,
      employees: 60000,
      branches: 1000,
      countries: 40,
      globalRank: 20,
      description: "A Dutch multinational banking and financial services corporation.",
      keyFact: "ING's orange lion logo has become synonymous with digital banking innovation across Europe.",
      ceoQuote: "Empowering people to stay a step ahead in life and in business.",
      timeline: [
          { year: 1991, event: "Merger of NMB Postbank and Nationale-Nederlanden creates ING" },
          { year: 1997, event: "Launches ING Direct, pioneering online-only banking" },
          { year: 2009, event: "Repays Dutch government bailout ahead of schedule" },
          { year: 2024, event: "Serves 40 million customers as digital banking leader" }
      ],
      comparisons: {
          humanitarian: [
              { icon: '🌍', title: 'End World Hunger', value: '24 Years', desc: 'Could end hunger for over 2 decades' },
              { icon: '🌷', title: 'Dutch Healthcare', value: '3 Years', desc: 'Could fund Netherlands healthcare for 3 years' },
              { icon: '🚲', title: 'Bike Infrastructure', value: 'Global Network', desc: 'Could build bike lanes worldwide' },
              { icon: '💧', title: 'Water Management', value: 'Protect World', desc: 'Could build global flood protection' },
              { icon: '🌱', title: 'Sustainability', value: '110 Years', desc: 'Could fund green transition for 110 years' },
              { icon: '🎓', title: 'Education', value: '22M Students', desc: 'Could educate 22 million students' }
          ],
          corporate: [
              { icon: '🍺', title: 'Heineken', value: '20× Over', desc: 'Could buy Heineken 20 times' },
              { icon: '💡', title: 'Philips', value: '55× Over', desc: 'Could purchase Philips 55 times' },
              { icon: '🛢️', title: 'Shell', value: '4× Over', desc: 'Could buy Royal Dutch Shell 4 times' },
              { icon: '✈️', title: 'KLM', value: '110× Over', desc: 'Could buy KLM 110 times' },
              { icon: '🏪', title: 'Ahold Delhaize', value: '35× Over', desc: 'Could buy supermarket giant 35 times' },
              { icon: '🚢', title: 'Port of Rotterdam', value: 'Control', desc: 'Could control Europe\'s largest port' }
          ],
          sports: [
              { icon: '⚽', title: 'Eredivisie', value: '55× Over', desc: 'Could buy Dutch league 55 times' },
              { icon: '🏑', title: 'Field Hockey', value: 'Global Dominance', desc: 'Could dominate world field hockey' },
              { icon: '⛸️', title: 'Speed Skating', value: '11,000 Rinks', desc: 'Could build 11,000 ice rinks' },
              { icon: '🚴', title: 'Cycling', value: 'Tour Forever', desc: 'Could sponsor cycling forever' },
              { icon: '🏊', title: 'Swimming', value: '110,000 Pools', desc: 'Could build 110,000 pools' },
              { icon: '⛵', title: 'Sailing', value: 'Every Yacht', desc: 'Could buy every yacht in Netherlands' }
          ],
          'real-estate': [
              { icon: '🌷', title: 'Amsterdam', value: 'Canal Ring', desc: 'Could buy Amsterdam\'s canal ring' },
              { icon: '🏡', title: 'Dutch Homes', value: '1.1M Houses', desc: 'Could buy 1.1 million Dutch homes' },
              { icon: '🌬️', title: 'Windmills', value: 'Every One', desc: 'Could buy every windmill in Netherlands' },
              { icon: '🧀', title: 'Cheese Markets', value: 'All Historic', desc: 'Could own all cheese market buildings' },
              { icon: '🌊', title: 'Polders', value: 'Create New', desc: 'Could create new land from sea' },
              { icon: '🏢', title: 'Office Space', value: '2,200 Towers', desc: 'Could build 2,200 office towers' }
          ],
          technology: [
              { icon: '💳', title: 'Digital Banking', value: 'Transform EU', desc: 'Could digitize all European banking' },
              { icon: '🔐', title: 'Cybersecurity', value: '220 Years', desc: 'Could fund security for 220 years' },
              { icon: '📱', title: 'Mobile First', value: '1.1B Users', desc: 'Could give mobile banking to 1.1 billion' },
              { icon: '🌐', title: 'Open Banking', value: 'EU Platform', desc: 'Could create unified EU banking platform' },
              { icon: '🤖', title: 'AI Banking', value: '110 Years R&D', desc: 'Could fund AI research for 110 years' },
              { icon: '☁️', title: 'Cloud Infrastructure', value: 'All Europe', desc: 'Could build cloud banking for Europe' }
          ]
      }
  },

  sbi: {
    id: 'sbi',
    name: 'State Bank of India',
    shortName: 'SBI',
    country: 'India',
    flag: '🇮🇳',
    founded: 1806,
    headquarters: 'Mumbai, India',
    assets: 900, // ~₹74.9 trillion = ~$900 billion
    marketCap: 90, // ~₹7.6 trillion = ~$90 billion  
    revenue: 70, // ~₹5.9 trillion revenue
    netIncome: 10, // ~₹82,550 crore profit
    employees: 232000,
    branches: 22405,
    countries: 36,
    globalRank: 47,
    description: "India's largest bank and the oldest commercial bank in the Indian subcontinent, serving 500 million customers.",
    keyFact: "SBI serves 500 million customers - more than the entire population of the United States and Canada combined.",
    ceoQuote: "Banking is necessary, banks are not - we're transforming SBI into a digital powerhouse for New India.",
    timeline: [
      { year: 1806, event: "Bank of Calcutta founded, becoming first bank in India" },
      { year: 1955, event: "Imperial Bank of India becomes State Bank of India" },
      { year: 2017, event: "Merges with 5 associate banks, becoming one of world's 50 largest" },
      { year: 2024, event: "Serves 500 million customers with ₹75 trillion in assets" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '20 Years', desc: 'Could solve global hunger for 2 decades across all continents' },
        { icon: '🏥', title: 'Healthcare India', value: 'Free Forever', desc: 'Could provide free healthcare to all 1.4 billion Indians permanently' },
        { icon: '🎓', title: 'Education', value: '180M Students', desc: 'Could fund complete education for every child in India for a generation' },
        { icon: '🚰', title: 'Clean Water', value: 'All Villages', desc: 'Could bring clean drinking water to every Indian village' },
        { icon: '🌾', title: 'Farmer Support', value: '90M Farmers', desc: 'Could modernize equipment for every farmer in India' },
        { icon: '🏘️', title: 'Housing', value: '18M Homes', desc: 'Could build homes for 72 million Indians' }
      ],
      corporate: [
        { icon: '🏏', title: 'IPL Teams', value: 'All Teams 10×', desc: 'Could buy entire Indian Premier League 10 times over' },
        { icon: '✈️', title: 'Air India', value: '90× Over', desc: 'Could purchase Air India 90 times' },
        { icon: '🚗', title: 'Tata Motors', value: '25× Over', desc: 'Could buy Tata Motors 25 times' },
        { icon: '📱', title: 'Indian Tech', value: 'All Unicorns', desc: 'Could acquire every Indian unicorn startup' },
        { icon: '🏪', title: 'Reliance Retail', value: '6× Over', desc: 'Could buy Reliance Retail 6 times' },
        { icon: '🍛', title: 'Food Delivery', value: 'Zomato+Swiggy', desc: 'Could own entire Indian food delivery market' }
      ],
      sports: [
        { icon: '🏏', title: 'Cricket Empire', value: 'BCCI 180×', desc: 'Could buy Indian cricket board 180 times' },
        { icon: '🏑', title: 'Hockey Revival', value: '9,000 Academies', desc: 'Could build 9,000 world-class hockey academies' },
        { icon: '🥇', title: 'Olympic Training', value: '1,800 Centers', desc: 'Could build Olympic training centers in every district' },
        { icon: '⚽', title: 'Football Leagues', value: 'ISL 450×', desc: 'Could buy Indian Super League 450 times' },
        { icon: '🏸', title: 'Badminton', value: 'Global Dominance', desc: 'Could create world\'s largest badminton infrastructure' },
        { icon: '🎯', title: 'Sports Cities', value: '90 Cities', desc: 'Could build 90 complete sports cities' }
      ],
      'real-estate': [
        { icon: '🏙️', title: 'Mumbai BKC', value: 'Entire District', desc: 'Could buy all of Bandra Kurla Complex' },
        { icon: '🏛️', title: 'Heritage Sites', value: 'Restore All', desc: 'Could restore every heritage site in India' },
        { icon: '🌴', title: 'Goa', value: 'Half the State', desc: 'Could purchase half of Goa\'s real estate' },
        { icon: '🏔️', title: 'Hill Stations', value: 'All Premium', desc: 'Could buy every premium hill station property' },
        { icon: '🏢', title: 'Tech Parks', value: '900 Parks', desc: 'Could build 900 IT parks across India' },
        { icon: '🛍️', title: 'Malls', value: '1,800 Malls', desc: 'Could build 1,800 mega shopping malls' }
      ],
      technology: [
        { icon: '💳', title: 'Digital India', value: 'Complete Vision', desc: 'Could digitize entire Indian economy' },
        { icon: '📱', title: 'UPI Revolution', value: 'Global Expansion', desc: 'Could take UPI payments system worldwide' },
        { icon: '🛰️', title: 'Satellites', value: '900 Satellites', desc: 'Could launch India\'s own satellite constellation' },
        { icon: '🤖', title: 'AI Research', value: '180 Years', desc: 'Could fund Indian AI research for 180 years' },
        { icon: '🌐', title: 'Rural Internet', value: 'Every Village', desc: 'Could bring 5G to every Indian village' },
        { icon: '🔐', title: 'Cyber Defense', value: 'National Grid', desc: 'Could build impenetrable national cyber defense' }
      ]
    }
  },

  cba: {
    id: 'cba',
    name: 'Commonwealth Bank of Australia',
    shortName: 'CBA',
    country: 'Australia',
    flag: '🇦🇺',
    founded: 1911,
    headquarters: 'Sydney, Australia',
    assets: 850, // A$1.35 trillion = ~$850 billion USD
    marketCap: 190, // A$290 billion = ~$190 billion USD
    revenue: 30, // Based on reported financials
    netIncome: 7, // A$11 billion = ~$7 billion USD
    employees: 52000,
    branches: 1000,
    countries: 12,
    globalRank: 45,
    description: "Australia's largest bank by market cap and the leading financial institution in the Southern Hemisphere.",
    keyFact: "CBA is worth more than the entire GDP of New Zealand, and could buy every house in Tasmania twice over.",
    ceoQuote: "Building tomorrow's bank today - simpler, safer, and better for all Australians.",
    timeline: [
      { year: 1911, event: "Established by the Commonwealth Bank Act as Australia's first national bank" },
      { year: 1991, event: "Begins privatization under Keating government" },
      { year: 2006, event: "Becomes first Australian bank to reach $100 billion market cap" },
      { year: 2025, event: "Surpasses BHP as Australia's most valuable company at A$290 billion" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End World Hunger', value: '19 Years', desc: 'Could solve global hunger for nearly two decades' },
        { icon: '🏥', title: 'Medicare Forever', value: 'All Australia', desc: 'Could fund Australia\'s healthcare system permanently' },
        { icon: '🎓', title: 'Free University', value: 'Every Aussie', desc: 'Could make university free for all Australians forever' },
        { icon: '🔥', title: 'Bushfire Defense', value: '8,500 Years', desc: 'Could fund bushfire prevention for 8,500 years' },
        { icon: '🐨', title: 'Wildlife Protection', value: 'Save All Species', desc: 'Could protect every endangered Australian species' },
        { icon: '🏘️', title: 'Housing Crisis', value: '1.7M Homes', desc: 'Could build affordable homes for 6.8 million Australians' }
      ],
      corporate: [
        { icon: '🛒', title: 'Woolworths Group', value: '13× Over', desc: 'Could buy Woolworths 13 times over' },
        { icon: '✈️', title: 'Qantas Airways', value: '85× Over', desc: 'Could purchase Qantas 85 times' },
        { icon: '📱', title: 'Telstra', value: '10× Over', desc: 'Could buy Telstra 10 times' },
        { icon: '⛏️', title: 'Fortescue', value: '12× Over', desc: 'Could acquire mining giant Fortescue 12 times' },
        { icon: '🏗️', title: 'Lendlease', value: '170× Over', desc: 'Could buy Lendlease 170 times' },
        { icon: '🎮', title: 'Aristocrat Leisure', value: '25× Over', desc: 'Could own pokies maker Aristocrat 25 times' }
      ],
      sports: [
        { icon: '🏈', title: 'AFL League', value: '85× Over', desc: 'Could buy entire AFL 85 times over' },
        { icon: '🏏', title: 'Cricket Australia', value: '850× Over', desc: 'Could fund Cricket Australia for 850 years' },
        { icon: '🏉', title: 'NRL Empire', value: '170× Over', desc: 'Could purchase NRL 170 times' },
        { icon: '🏊', title: 'Olympic Pools', value: '85,000', desc: 'Could build 85,000 Olympic swimming pools' },
        { icon: '🎾', title: 'Tennis Centers', value: '42,500', desc: 'Could build 42,500 world-class tennis centers' },
        { icon: '🏇', title: 'Melbourne Cup', value: '28,000 Races', desc: 'Could fund Melbourne Cup for 28,000 years' }
      ],
      'real-estate': [
        { icon: '🌆', title: 'Sydney CBD', value: '30% of City', desc: 'Could buy 30% of Sydney\'s CBD' },
        { icon: '🏖️', title: 'Gold Coast', value: 'Entire Coastline', desc: 'Could purchase entire Gold Coast property' },
        { icon: '🍷', title: 'Barossa Valley', value: 'All Wineries', desc: 'Could buy every winery in Australia' },
        { icon: '🏝️', title: 'Private Islands', value: '8,500 Islands', desc: 'Could buy 8,500 tropical islands' },
        { icon: '🌉', title: 'Sydney Harbour', value: 'Waterfront', desc: 'Could buy all Sydney Harbour waterfront' },
        { icon: '🏔️', title: 'Ski Resorts', value: 'Every Resort 5×', desc: 'Could buy every Australian ski resort 5 times' }
      ],
      technology: [
        { icon: '💳', title: 'Digital Banking', value: 'Pacific Leader', desc: 'Could digitize banking for entire Pacific region' },
        { icon: '🛰️', title: 'Satellites', value: '850 Satellites', desc: 'Could launch Australia\'s own GPS system' },
        { icon: '🤖', title: 'AI Research', value: '170 Years', desc: 'Could fund CSIRO AI research for 170 years' },
        { icon: '🌐', title: 'NBN Upgrade', value: 'Fiber Everyone', desc: 'Could give fiber internet to every Australian' },
        { icon: '🔋', title: 'Solar Farms', value: '425 GW', desc: 'Could power Australia entirely with solar' },
        { icon: '🚄', title: 'High Speed Rail', value: 'Full Network', desc: 'Could build Melbourne-Sydney-Brisbane bullet train' }
      ]
    }
  },

  'standard-bank': {
    id: 'standard-bank',
    name: 'Standard Bank Group',
    shortName: 'Standard Bank',
    country: 'South Africa',
    flag: '🇿🇦',
    founded: 1862,
    headquarters: 'Johannesburg, South Africa',
    assets: 190, // R3.4 trillion = ~$190 billion USD
    marketCap: 21, // R372 billion = ~$21 billion USD
    revenue: 8, // Based on financial reports
    netIncome: 1.3, // R23.8 billion = ~$1.3 billion USD
    employees: 50000,
    branches: 1180,
    countries: 20,
    globalRank: 160,
    description: "Africa's largest bank by assets, with a 162-year legacy of driving African growth and prosperity.",
    keyFact: "Standard Bank serves more people than the entire population of Australia across 20 African countries.",
    ceoQuote: "Africa is our home, we drive her growth.",
    timeline: [
      { year: 1862, event: "Founded as Standard Bank of British South Africa in Port Elizabeth" },
      { year: 1969, event: "Merges with Chartered Bank to briefly form Standard Chartered" },
      { year: 1987, event: "Demerges from Standard Chartered to focus on Africa" },
      { year: 2025, event: "Leads African banking with R3.4 trillion in assets across 20 countries" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End Hunger Africa', value: '10 Years', desc: 'Could end hunger across entire African continent for a decade' },
        { icon: '💧', title: 'Water Access', value: '380M People', desc: 'Could provide clean water to 380 million Africans' },
        { icon: '🎓', title: 'Education', value: '38M Students', desc: 'Could fund complete education for 38 million African children' },
        { icon: '🏥', title: 'Healthcare', value: '1,900 Hospitals', desc: 'Could build 1,900 fully-equipped hospitals across Africa' },
        { icon: '☀️', title: 'Solar Power', value: '95 GW', desc: 'Could electrify rural Africa with 95 GW solar capacity' },
        { icon: '🏘️', title: 'Township Upgrade', value: 'All SA Townships', desc: 'Could modernize every South African township' }
      ],
      corporate: [
        { icon: '💎', title: 'De Beers', value: '3× Over', desc: 'Could buy diamond giant De Beers 3 times' },
        { icon: '🛒', title: 'Shoprite', value: '5× Over', desc: 'Could purchase Africa\'s largest retailer 5 times' },
        { icon: '📱', title: 'MTN Group', value: '4× Over', desc: 'Could buy telecom giant MTN 4 times' },
        { icon: '🍺', title: 'SABMiller Legacy', value: 'Rebuild Empire', desc: 'Could rebuild entire SABMiller brewing empire' },
        { icon: '✈️', title: 'SAA + Kenya Airways', value: 'Both + More', desc: 'Could buy multiple African airlines' },
        { icon: '⛏️', title: 'Gold Fields', value: '2× Over', desc: 'Could acquire Gold Fields twice' }
      ],
      sports: [
        { icon: '🏉', title: 'Springboks', value: '950 Years', desc: 'Could fund South African rugby for 950 years' },
        { icon: '⚽', title: 'PSL', value: '190× Over', desc: 'Could buy Premier Soccer League 190 times' },
        { icon: '🏏', title: 'Cricket SA', value: '380× Over', desc: 'Could fund Cricket South Africa for 380 years' },
        { icon: '🏃', title: 'Comrades Marathon', value: '19,000 Races', desc: 'Could sponsor Comrades for 19,000 years' },
        { icon: '🥊', title: 'Boxing Academies', value: '3,800', desc: 'Could build 3,800 world-class boxing academies' },
        { icon: '🏊', title: 'Swimming Pools', value: '38,000', desc: 'Could build 38,000 Olympic pools across Africa' }
      ],
      'real-estate': [
        { icon: '🌆', title: 'Sandton CBD', value: 'Entire District', desc: 'Could buy all of Africa\'s richest square mile' },
        { icon: '🏖️', title: 'Cape Town Waterfront', value: '5× Over', desc: 'Could buy V&A Waterfront 5 times' },
        { icon: '🦁', title: 'Game Reserves', value: '190 Krugers', desc: 'Could create 190 Kruger-sized parks' },
        { icon: '🍷', title: 'Wine Farms', value: 'All Stellenbosch', desc: 'Could buy every wine farm in Western Cape' },
        { icon: '🏢', title: 'Johannesburg', value: '20% of City', desc: 'Could purchase 20% of Johannesburg' },
        { icon: '🏝️', title: 'Mauritius Property', value: 'Half the Island', desc: 'Could buy half of Mauritius real estate' }
      ],
      technology: [
        { icon: '📱', title: 'Mobile Money', value: 'All Africa', desc: 'Could create continent-wide mobile banking' },
        { icon: '🛰️', title: 'African Satellites', value: '190 Satellites', desc: 'Could launch Africa\'s satellite network' },
        { icon: '🌐', title: 'Fiber Network', value: 'Connect Africa', desc: 'Could connect every African city with fiber' },
        { icon: '💳', title: 'Digital ID', value: '1B Africans', desc: 'Could give digital identity to 1 billion Africans' },
        { icon: '🤖', title: 'Tech Hubs', value: '1,900 Centers', desc: 'Could build 1,900 innovation centers' },
        { icon: '⚡', title: 'Load Shedding', value: 'End Forever', desc: 'Could end South Africa\'s power crisis permanently' }
      ]
    }
  },

  'saudi-national-bank': {
    id: 'saudi-national-bank',
    name: 'Saudi National Bank',
    shortName: 'SNB',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    founded: 1953,
    headquarters: 'Riyadh, Saudi Arabia',
    assets: 310, // SAR 1.17 trillion = ~$310 billion USD
    marketCap: 56, // ~$56 billion USD
    revenue: 10, // ~$10 billion USD
    netIncome: 3.3, // SAR 12.2 billion H1 2025
    employees: 14000,
    branches: 500,
    countries: 8,
    globalRank: 95,
    description: "The Middle East's banking powerhouse, formed from the largest merger in regional history between NCB and Samba.",
    keyFact: "SNB lost $1 billion overnight when Credit Suisse collapsed in 2023, yet still posted record profits the same year.",
    ceoQuote: "Building bridges between opportunities - from the Kingdom to the world.",
    timeline: [
      { year: 1953, event: "Founded as National Commercial Bank, Saudi Arabia's first bank" },
      { year: 2021, event: "Merges with Samba Financial Group in $15 billion deal" },
      { year: 2023, event: "Survives Credit Suisse collapse despite 10% stake writeoff" },
      { year: 2025, event: "Leads Islamic banking globally with SAR 1.17 trillion in assets" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🕌', title: 'Hajj Forever', value: 'All Pilgrims Free', desc: 'Could fund free Hajj for every Muslim forever' },
        { icon: '💧', title: 'Desert Greening', value: '310k km²', desc: 'Could turn 310,000 km² of desert into farmland' },
        { icon: '🏥', title: 'Healthcare', value: 'GCC Forever', desc: 'Could fund healthcare for entire Gulf region permanently' },
        { icon: '🎓', title: 'Education', value: '62M Students', desc: 'Could educate 62 million students through university' },
        { icon: '☀️', title: 'Solar Cities', value: '310 Cities', desc: 'Could build 310 carbon-neutral cities in the desert' },
        { icon: '🏘️', title: 'NEOM Project', value: '1.2× Over', desc: 'Could fund entire NEOM megacity project' }
      ],
      corporate: [
        { icon: '🛢️', title: 'Saudi Aramco', value: 'Significant Stake', desc: 'Could buy meaningful stake in world\'s most valuable company' },
        { icon: '✈️', title: 'Saudi Airlines', value: '31× Over', desc: 'Could purchase Saudia 31 times' },
        { icon: '🏪', title: 'Retail Empire', value: 'All GCC Retail', desc: 'Could buy every major retailer in Gulf states' },
        { icon: '⚡', title: 'ACWA Power', value: '10× Over', desc: 'Could buy renewable giant ACWA 10 times' },
        { icon: '🏗️', title: 'Saudi Binladin', value: '15× Over', desc: 'Could acquire construction giant 15 times' },
        { icon: '📱', title: 'STC', value: '5× Over', desc: 'Could buy Saudi Telecom 5 times' }
      ],
      sports: [
        { icon: '⚽', title: 'Saudi Pro League', value: '310× Over', desc: 'Could fund Saudi Pro League for 310 years' },
        { icon: '🏇', title: 'Saudi Cup', value: '15,500 Races', desc: 'Could fund world\'s richest horse race for millennia' },
        { icon: '🏎️', title: 'F1 Tracks', value: '310 Circuits', desc: 'Could build 310 Formula 1 grade circuits' },
        { icon: '⛳', title: 'LIV Golf', value: '62 Years', desc: 'Could fund LIV Golf tour for 62 years' },
        { icon: '🥊', title: 'Boxing Events', value: '3,100 Mega-fights', desc: 'Could host 3,100 heavyweight championship fights' },
        { icon: '🏟️', title: 'Stadium Cities', value: '31 Complexes', desc: 'Could build 31 mega sports city complexes' }
      ],
      'real-estate': [
        { icon: '🕌', title: 'Mecca Expansion', value: '6× Over', desc: 'Could fund Grand Mosque expansion 6 times' },
        { icon: '🏙️', title: 'Riyadh Downtown', value: 'Entire CBD', desc: 'Could buy all of central Riyadh' },
        { icon: '🏖️', title: 'Red Sea Project', value: '10× Over', desc: 'Could fund Red Sea tourism project 10 times' },
        { icon: '🏰', title: 'Luxury Resorts', value: '3,100', desc: 'Could build 3,100 ultra-luxury desert resorts' },
        { icon: '🌴', title: 'Palm Islands', value: '62 Islands', desc: 'Could create 62 Dubai-style palm islands' },
        { icon: '🏢', title: 'Kingdom Tower', value: '310× Over', desc: 'Could build 310 Kingdom Towers' }
      ],
      technology: [
        { icon: '🤖', title: 'AI City', value: 'Complete NEOM AI', desc: 'Could build world\'s most advanced AI city' },
        { icon: '☀️', title: 'Solar Power', value: '155 GW', desc: 'Could power entire Middle East with solar' },
        { icon: '💧', title: 'Desalination', value: 'Regional Supply', desc: 'Could provide fresh water to entire Gulf region' },
        { icon: '🚄', title: 'Hyperloop', value: 'GCC Network', desc: 'Could connect all Gulf capitals with hyperloop' },
        { icon: '🛰️', title: 'Space Program', value: '31 Years', desc: 'Could fund Saudi space program for 31 years' },
        { icon: '🌐', title: '6G Network', value: 'Middle East', desc: 'Could build 6G for entire Middle East' }
      ]
    }
  },

  dbs: {
    id: 'dbs',
    name: 'DBS Bank',
    shortName: 'DBS',
    country: 'Singapore',
    flag: '🇸🇬',
    founded: 1968,
    headquarters: 'Marina Bay, Singapore',
    assets: 550, // S$739 billion = ~$550 billion USD
    marketCap: 105, // S$141 billion = ~$105 billion USD
    revenue: 17, // S$22.3 billion
    netIncome: 8.5, // S$11.4 billion
    employees: 35000,
    branches: 280,
    countries: 18,
    globalRank: 65,
    description: "Southeast Asia's largest bank and the world's best digital bank, driving Asian prosperity.",
    keyFact: "DBS was the first Singapore company to hit $100 billion market cap, worth more than Singapore Airlines, Singtel and Keppel combined.",
    ceoQuote: "Making banking joyful - Live more, Bank less.",
    timeline: [
      { year: 1968, event: "Founded by Singapore government to finance industrialization" },
      { year: 1998, event: "Acquires POSB, gaining 4 million customers overnight" },
      { year: 2016, event: "Named World's Best Digital Bank by Euromoney" },
      { year: 2025, event: "First Singapore firm to exceed $100 billion market cap" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End Hunger Asia', value: '12 Years', desc: 'Could end hunger across all of Asia for 12 years' },
        { icon: '🏥', title: 'Healthcare ASEAN', value: '5 Years', desc: 'Could fund healthcare for all ASEAN nations for 5 years' },
        { icon: '🎓', title: 'Digital Education', value: '110M Students', desc: 'Could provide tablets and internet to 110 million Asian students' },
        { icon: '🏘️', title: 'Smart Cities', value: '55 Cities', desc: 'Could build 55 smart sustainable cities' },
        { icon: '🌊', title: 'Ocean Cleanup', value: 'All Asian Seas', desc: 'Could clean all plastic from Asian waters' },
        { icon: '🚇', title: 'Metro Systems', value: '110 Cities', desc: 'Could build metros in 110 Southeast Asian cities' }
      ],
      corporate: [
        { icon: '✈️', title: 'Singapore Airlines', value: '35× Over', desc: 'Could buy SIA 35 times over' },
        { icon: '📱', title: 'Singtel', value: '10× Over', desc: 'Could purchase Singtel 10 times' },
        { icon: '🏗️', title: 'CapitaLand', value: '18× Over', desc: 'Could buy property giant 18 times' },
        { icon: '🛢️', title: 'Keppel Corp', value: '55× Over', desc: 'Could acquire Keppel 55 times' },
        { icon: '🎮', title: 'Sea Limited', value: '11× Over', desc: 'Could buy gaming giant Sea 11 times' },
        { icon: '🚢', title: 'PSA Ports', value: '27× Over', desc: 'Could own global port operator 27 times' }
      ],
      sports: [
        { icon: '🏎️', title: 'F1 Singapore GP', value: '550 Races', desc: 'Could host Singapore Grand Prix for 550 years' },
        { icon: '⚽', title: 'S-League', value: '5,500× Over', desc: 'Could fund Singapore Premier League for 5,500 years' },
        { icon: '🏊', title: 'Aquatic Centers', value: '55,000', desc: 'Could build 55,000 Olympic-standard pools' },
        { icon: '🏃', title: 'Sports Hubs', value: '550 Complexes', desc: 'Could build 550 world-class sports complexes' },
        { icon: '🏸', title: 'Badminton Empire', value: 'Global Dominance', desc: 'Could dominate world badminton forever' },
        { icon: '🥋', title: 'Martial Arts', value: '110k Dojos', desc: 'Could build 110,000 training centers' }
      ],
      'real-estate': [
        { icon: '🌆', title: 'Marina Bay', value: 'Entire District', desc: 'Could buy all of Marina Bay' },
        { icon: '🏝️', title: 'Sentosa Island', value: '55× Over', desc: 'Could buy Sentosa 55 times' },
        { icon: '🏢', title: 'CBD Towers', value: '110 Towers', desc: 'Could build 110 supertall towers' },
        { icon: '🌴', title: 'Tropical Resorts', value: '5,500', desc: 'Could build 5,500 luxury island resorts' },
        { icon: '🏘️', title: 'HDB Towns', value: '110 Towns', desc: 'Could build 110 new satellite towns' },
        { icon: '✈️', title: 'Changi Expansion', value: '55× Over', desc: 'Could fund Changi expansion 55 times' }
      ],
      technology: [
        { icon: '🤖', title: 'AI Nation', value: 'Complete Vision', desc: 'Could make Singapore world\'s first AI nation' },
        { icon: '💳', title: 'Digital Banking', value: 'All ASEAN', desc: 'Could digitize banking for 650 million people' },
        { icon: '🌐', title: 'Smart Nation', value: '5× Over', desc: 'Could fund Smart Nation initiative 5 times' },
        { icon: '🔒', title: 'Cybersecurity', value: 'Regional Hub', desc: 'Could secure all ASEAN digital infrastructure' },
        { icon: '🛰️', title: 'Satellites', value: '550 Satellites', desc: 'Could launch ASEAN satellite network' },
        { icon: '⚡', title: 'Quantum Tech', value: '110 Years R&D', desc: 'Could fund quantum computing for 110 years' }
      ]
    }
  },

  'itau-unibanco': {
    id: 'itau-unibanco',
    name: 'Itaú Unibanco',
    shortName: 'Itaú',
    country: 'Brazil',
    flag: '🇧🇷',
    founded: 1924,
    headquarters: 'São Paulo, Brazil',
    assets: 530, // ~$530 billion USD
    marketCap: 65, // ~$65 billion USD  
    revenue: 45, // Based on financial reports
    netIncome: 8, // Based on reported profits
    employees: 100000,
    branches: 4800,
    countries: 19,
    globalRank: 75,
    description: "Latin America's largest private bank, powering Brazilian dreams and regional prosperity.",
    keyFact: "Itaú serves 1 in 4 Brazilians and could fund Carnival in Rio forever with just one year's profits.",
    ceoQuote: "Transforming lives through the power to transform - Feito para você.",
    timeline: [
      { year: 1924, event: "Founded as Casa Bancária Moreira Salles in Minas Gerais" },
      { year: 1964, event: "Becomes Banco Itaú during Brazil's economic miracle" },
      { year: 2008, event: "Merges with Unibanco creating Latin America's largest bank" },
      { year: 2025, event: "Dominates Brazilian banking with R$2.9 trillion in assets" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'End Hunger Brazil', value: 'Forever', desc: 'Could end hunger in Brazil permanently' },
        { icon: '🏥', title: 'SUS Healthcare', value: '5 Years', desc: 'Could fund Brazil\'s public healthcare for 5 years' },
        { icon: '🎓', title: 'Free University', value: '106M Students', desc: 'Could educate every young Brazilian through college' },
        { icon: '🏘️', title: 'Favela Upgrade', value: 'All Favelas', desc: 'Could modernize every favela in Brazil' },
        { icon: '🌳', title: 'Amazon Protection', value: '106 Years', desc: 'Could protect Amazon rainforest for over a century' },
        { icon: '💧', title: 'Water Access', value: 'All Brazil', desc: 'Could bring clean water to every Brazilian' }
      ],
      corporate: [
        { icon: '✈️', title: 'Embraer', value: '10× Over', desc: 'Could buy aircraft maker Embraer 10 times' },
        { icon: '🛢️', title: 'Petrobras', value: 'Major Stake', desc: 'Could buy significant stake in oil giant Petrobras' },
        { icon: '🥩', title: 'JBS', value: '5× Over', desc: 'Could purchase meat giant JBS 5 times' },
        { icon: '⛏️', title: 'Vale', value: '2× Over', desc: 'Could buy mining giant Vale twice' },
        { icon: '🍺', title: 'Ambev', value: '3× Over', desc: 'Could own brewing empire Ambev 3 times' },
        { icon: '🏪', title: 'Magazine Luiza', value: '53× Over', desc: 'Could buy retailer Magalu 53 times' }
      ],
      sports: [
        { icon: '⚽', title: 'Brasileirão', value: '530× Over', desc: 'Could fund Brazilian league for 530 years' },
        { icon: '🏆', title: 'Copa América', value: '1,060 Cups', desc: 'Could host Copa América 1,060 times' },
        { icon: '🎪', title: 'Carnival', value: 'Forever Free', desc: 'Could make Rio Carnival free forever' },
        { icon: '🏎️', title: 'Interlagos', value: '530 Tracks', desc: 'Could build 530 F1-grade circuits' },
        { icon: '🏐', title: 'Beach Volleyball', value: 'Global Empire', desc: 'Could dominate beach volleyball worldwide' },
        { icon: '🥊', title: 'MMA Centers', value: '53,000', desc: 'Could build 53,000 MMA training centers' }
      ],
      'real-estate': [
        { icon: '🌆', title: 'São Paulo CBD', value: 'Paulista Avenue', desc: 'Could buy entire Avenida Paulista' },
        { icon: '🏖️', title: 'Copacabana', value: 'Entire Beach', desc: 'Could purchase all Copacabana beachfront' },
        { icon: '🏝️', title: 'Fernando de Noronha', value: '106× Over', desc: 'Could buy paradise island 106 times' },
        { icon: '🌴', title: 'Beach Resorts', value: '10,600', desc: 'Could build 10,600 luxury beach resorts' },
        { icon: '🏢', title: 'Business Centers', value: '530 Towers', desc: 'Could build 530 corporate towers' },
        { icon: '🏘️', title: 'Affordable Housing', value: '5.3M Homes', desc: 'Could house 21 million Brazilians' }
      ],
      technology: [
        { icon: '💳', title: 'PIX Dominance', value: 'Forever Free', desc: 'Could make PIX payments free forever' },
        { icon: '📱', title: 'Digital Inclusion', value: 'All Brazil', desc: 'Could give smartphones to every Brazilian' },
        { icon: '🛰️', title: 'Amazon Monitoring', value: '530 Satellites', desc: 'Could launch complete Amazon monitoring system' },
        { icon: '🌐', title: 'Internet Access', value: 'Every Village', desc: 'Could connect every remote village to internet' },
        { icon: '🤖', title: 'Tech Hubs', value: '1,060 Centers', desc: 'Could build 1,060 innovation centers' },
        { icon: '⚡', title: 'Solar Amazon', value: '265 GW', desc: 'Could power Brazil with Amazonian solar' }
      ]
    }
  },

  'kb-financial': {
    id: 'kb-financial',
    name: 'KB Financial Group',
    shortName: 'KB',
    country: 'South Korea',
    flag: '🇰🇷',
    founded: 1963,
    headquarters: 'Seoul, South Korea',
    assets: 400, // ~540 trillion KRW = ~$400 billion USD
    marketCap: 29, // ~$29 billion USD
    revenue: 14, // Based on financial reports
    netIncome: 2.5, // ~3.4 trillion KRW
    employees: 25000,
    branches: 1100,
    countries: 12,
    globalRank: 120,
    description: "Korea's leading financial group, powering the miracle on the Han River into the digital age.",
    keyFact: "KB could buy every K-pop entertainment company and still have billions left to fund BTS concerts forever.",
    ceoQuote: "From Korea to the world - your lifetime financial partner.",
    timeline: [
      { year: 1963, event: "Founded as Kookmin Bank to support Korea's economic development" },
      { year: 2008, event: "Transforms into KB Financial Group holding structure" },
      { year: 2015, event: "Acquires LIG Insurance and Hyundai Securities" },
      { year: 2025, event: "Breaks into Korea's top 5 companies by market cap" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'Korean Reunification', value: '8× Fund', desc: 'Could fund estimated reunification costs 8 times' },
        { icon: '🏥', title: 'Healthcare', value: '4 Years', desc: 'Could fund Korea\'s universal healthcare for 4 years' },
        { icon: '🎓', title: 'Education', value: '80M Students', desc: 'Could provide free university to 80 million students' },
        { icon: '🏘️', title: 'Housing Crisis', value: '800k Homes', desc: 'Could solve Seoul\'s housing crisis completely' },
        { icon: '🌳', title: 'Reforestation', value: 'All Korea 5×', desc: 'Could reforest entire Korean peninsula 5 times' },
        { icon: '💻', title: 'Digital Divide', value: 'Connect Asia', desc: 'Could bring high-speed internet to all of Asia' }
      ],
      corporate: [
        { icon: '🚗', title: 'Hyundai Motor', value: '14× Over', desc: 'Could buy Hyundai Motor 14 times' },
        { icon: '📱', title: 'Samsung Elec', value: 'Small Stake', desc: 'Could buy meaningful stake in tech giant' },
        { icon: '🎮', title: 'Gaming Empire', value: 'All Companies', desc: 'Could own Nexon, NCsoft, and all Korean gaming' },
        { icon: '🎬', title: 'Entertainment', value: 'SM + YG + JYP', desc: 'Could buy all major K-pop agencies' },
        { icon: '✈️', title: 'Korean Air', value: '40× Over', desc: 'Could purchase Korean Air 40 times' },
        { icon: '🏪', title: 'E-Mart', value: '80× Over', desc: 'Could buy retail giant E-Mart 80 times' }
      ],
      sports: [
        { icon: '⚽', title: 'K-League', value: '400× Over', desc: 'Could fund K-League for 400 years' },
        { icon: '⚾', title: 'KBO League', value: '800× Over', desc: 'Could own Korean baseball for 800 years' },
        { icon: '🏌️', title: 'LPGA Dominance', value: 'Forever Fund', desc: 'Could fund Korean golf dominance forever' },
        { icon: '🥋', title: 'Taekwondo', value: 'Global Empire', desc: 'Could build taekwondo centers worldwide' },
        { icon: '🎯', title: 'Archery Centers', value: '40,000', desc: 'Could build 40,000 Olympic archery centers' },
        { icon: '🎮', title: 'E-Sports', value: '4,000 Years', desc: 'Could fund Korean e-sports for 4,000 years' }
      ],
      'real-estate': [
        { icon: '🏙️', title: 'Gangnam District', value: '20% of Area', desc: 'Could buy 20% of Seoul\'s Gangnam' },
        { icon: '🏝️', title: 'Jeju Island', value: 'Half the Island', desc: 'Could purchase half of Jeju Island' },
        { icon: '🏢', title: 'Lotte Tower', value: '80× Over', desc: 'Could build 80 Lotte World Towers' },
        { icon: '🏘️', title: 'New Cities', value: '8 Sejongs', desc: 'Could build 8 cities like Sejong' },
        { icon: '🌉', title: 'Han Bridges', value: '400 Bridges', desc: 'Could build 400 bridges across Han River' },
        { icon: '🎪', title: 'Theme Parks', value: '80 Parks', desc: 'Could build 80 Lotte World-sized parks' }
      ],
      technology: [
        { icon: '🚄', title: 'KTX Network', value: 'Double Coverage', desc: 'Could double Korea\'s bullet train network' },
        { icon: '🤖', title: 'Robot Factories', value: '4,000', desc: 'Could build 4,000 robot factories' },
        { icon: '💻', title: '6G Research', value: '80 Years', desc: 'Could fund 6G development for 80 years' },
        { icon: '🛰️', title: 'Space Program', value: '40 Years', desc: 'Could fund Korean space program for 40 years' },
        { icon: '🔋', title: 'Battery Plants', value: '80 Gigafactories', desc: 'Could build 80 battery gigafactories' },
        { icon: '🌐', title: 'Metaverse', value: 'Korean Matrix', desc: 'Could build complete Korean metaverse' }
      ]
    }
  },

  'national-bank-egypt': {
    id: 'national-bank-egypt',
    name: 'National Bank of Egypt',
    shortName: 'NBE',
    country: 'Egypt',
    flag: '🇪🇬',
    founded: 1898,
    headquarters: 'Cairo, Egypt',
    assets: 155, // ~$155 billion USD
    marketCap: 12, // Estimated based on regional comparisons
    revenue: 6, // Based on financial reports
    netIncome: 0.9, // ~$877 million profit
    employees: 20000,
    branches: 540,
    countries: 8,
    globalRank: 180,
    description: "Egypt's oldest and largest bank, financing the land of pharaohs for over 125 years.",
    keyFact: "NBE is older than the discovery of King Tut's tomb and has financed every major Egyptian project since 1898.",
    ceoQuote: "Building Egypt's future on the foundations of our ancient glory.",
    timeline: [
      { year: 1898, event: "Founded by British and Egyptian investors during colonial era" },
      { year: 1960, event: "Nationalized by Nasser, becomes state-owned bank" },
      { year: 1975, event: "Co-founds Commercial International Bank (CIB)" },
      { year: 2024, event: "Leads Egyptian banking with 25% market share" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'Nile Development', value: 'Complete Project', desc: 'Could fund entire Nile conservation project' },
        { icon: '🏥', title: 'Healthcare', value: '31 Years', desc: 'Could fund Egypt\'s healthcare for 31 years' },
        { icon: '🎓', title: 'Education', value: '31M Students', desc: 'Could educate 31 million Egyptian students' },
        { icon: '🏘️', title: 'New Capital', value: '5× Over', desc: 'Could fund New Administrative Capital 5 times' },
        { icon: '☀️', title: 'Solar Sahara', value: '77 GW', desc: 'Could turn Sahara into solar powerhouse' },
        { icon: '💧', title: 'Desalination', value: 'Water Security', desc: 'Could solve Egypt\'s water crisis permanently' }
      ],
      corporate: [
        { icon: '📱', title: 'Telecom Egypt', value: '31× Over', desc: 'Could buy Telecom Egypt 31 times' },
        { icon: '🏗️', title: 'Orascom', value: '15× Over', desc: 'Could purchase Orascom Construction 15 times' },
        { icon: '✈️', title: 'EgyptAir', value: '77× Over', desc: 'Could buy national airline 77 times' },
        { icon: '🏨', title: 'Tourism Sector', value: 'All Hotels', desc: 'Could own Egypt\'s entire tourism industry' },
        { icon: '🛢️', title: 'Energy Sector', value: 'Major Stakes', desc: 'Could buy stakes in all energy companies' },
        { icon: '🏪', title: 'Retail Chains', value: 'Complete Control', desc: 'Could own every major retail chain' }
      ],
      sports: [
        { icon: '⚽', title: 'Egyptian League', value: '155× Over', desc: 'Could fund Egyptian Premier League forever' },
        { icon: '🏛️', title: 'Pharaohs Team', value: '1,550 Years', desc: 'Could fund national team for millennia' },
        { icon: '🏊', title: 'Olympic Pools', value: '15,500', desc: 'Could build 15,500 Olympic pools' },
        { icon: '🎾', title: 'Tennis Centers', value: '7,750', desc: 'Could build 7,750 world-class tennis centers' },
        { icon: '🏇', title: 'Horse Racing', value: 'Revival', desc: 'Could revive Egypt\'s equestrian heritage' },
        { icon: '🏆', title: 'African Games', value: '77 Events', desc: 'Could host African Games 77 times' }
      ],
      'real-estate': [
        { icon: '🏛️', title: 'Historic Cairo', value: 'Full Restoration', desc: 'Could restore all of historic Cairo' },
        { icon: '🏖️', title: 'Red Sea Coast', value: 'Major Development', desc: 'Could develop entire Red Sea coastline' },
        { icon: '🌴', title: 'New Cities', value: '15 Cities', desc: 'Could build 15 new desert cities' },
        { icon: '🏰', title: 'Heritage Sites', value: 'Preserve All', desc: 'Could preserve every ancient site' },
        { icon: '🏢', title: 'Cairo Towers', value: '310 Towers', desc: 'Could build 310 Cairo Tower replicas' },
        { icon: '🌉', title: 'Nile Bridges', value: '155 Bridges', desc: 'Could build 155 bridges across Nile' }
      ],
      technology: [
        { icon: '🛰️', title: 'Space Program', value: 'Launch Egypt', desc: 'Could create Egyptian space agency' },
        { icon: '💻', title: 'Tech Cities', value: '31 Hubs', desc: 'Could build 31 technology cities' },
        { icon: '🌐', title: 'Digital Egypt', value: 'Complete Vision', desc: 'Could digitize entire Egyptian economy' },
        { icon: '🤖', title: 'AI Research', value: '155 Years', desc: 'Could fund AI research for 155 years' },
        { icon: '🚄', title: 'High Speed Rail', value: 'Full Network', desc: 'Could connect all Egypt with bullet trains' },
        { icon: '⚡', title: 'Smart Grid', value: 'National Coverage', desc: 'Could modernize Egypt\'s entire power grid' }
      ]
    }
  },

  'banco-do-brasil': {
    id: 'banco-do-brasil',
    name: 'Banco do Brasil',
    shortName: 'BB',
    country: 'Brazil',
    flag: '🇧🇷',
    founded: 1808,
    headquarters: 'Brasília, Brazil',
    assets: 420, // Based on financial reports
    marketCap: 21, // ~$21 billion USD
    revenue: 30, // ~$30 billion USD
    netIncome: 3, // Based on reported profits
    employees: 85000,
    branches: 4900,
    countries: 24,
    globalRank: 130,
    description: "Brazil's oldest bank and the first bank in all of Latin America, founded by Portuguese royalty fleeing Napoleon.",
    keyFact: "Banco do Brasil is older than Brazil's independence and has more branches than McDonald's has restaurants in Brazil.",
    ceoQuote: "O banco de todos os brasileiros - serving Brazil for over two centuries.",
    timeline: [
      { year: 1808, event: "Founded by King João VI after fleeing Napoleon to Brazil" },
      { year: 1905, event: "Survives multiple crises, becomes Brazil's central bank" },
      { year: 1986, event: "Loses central bank functions, focuses on commercial banking" },
      { year: 2024, event: "Remains Brazil's second-largest bank with government control" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'Amazon Forever', value: '84 Years', desc: 'Could protect Amazon rainforest for 84 years' },
        { icon: '🏥', title: 'SUS Upgrade', value: '2 Years', desc: 'Could modernize Brazil\'s public healthcare' },
        { icon: '🎓', title: 'Free College', value: '84M Students', desc: 'Could educate 84 million Brazilians' },
        { icon: '🏘️', title: 'Favela Housing', value: '840k Homes', desc: 'Could build decent housing for all favelas' },
        { icon: '🌾', title: 'Family Farms', value: '4.2M Farms', desc: 'Could modernize 4.2 million small farms' },
        { icon: '💧', title: 'Water Access', value: 'All Northeast', desc: 'Could solve Northeast water crisis forever' }
      ],
      corporate: [
        { icon: '⛏️', title: 'Vale Stake', value: 'Major Share', desc: 'Could buy significant stake in Vale' },
        { icon: '🛒', title: 'Carrefour Brazil', value: '21× Over', desc: 'Could buy Carrefour Brazil 21 times' },
        { icon: '✈️', title: 'Azul Airlines', value: '42× Over', desc: 'Could purchase Azul 42 times' },
        { icon: '🍖', title: 'BRF', value: '14× Over', desc: 'Could buy food giant BRF 14 times' },
        { icon: '⚡', title: 'Eletrobras', value: 'Control Stake', desc: 'Could regain control of Eletrobras' },
        { icon: '📱', title: 'TIM Brasil', value: '8× Over', desc: 'Could buy telecom TIM Brasil 8 times' }
      ],
      sports: [
        { icon: '⚽', title: 'All Stadiums', value: 'Buy + Rebuild', desc: 'Could buy and rebuild every Brazilian stadium' },
        { icon: '🏆', title: 'World Cups', value: '21 Hosts', desc: 'Could host 21 World Cups in Brazil' },
        { icon: '🏐', title: 'Volleyball Empire', value: '4,200 Centers', desc: 'Could build 4,200 volleyball centers' },
        { icon: '🏖️', title: 'Beach Sports', value: 'Every Beach', desc: 'Could build facilities on every beach' },
        { icon: '🥋', title: 'Jiu-Jitsu', value: '42,000 Dojos', desc: 'Could build 42,000 BJJ academies' },
        { icon: '🏎️', title: 'F1 Tracks', value: '84 Circuits', desc: 'Could build 84 Formula 1 tracks' }
      ],
      'real-estate': [
        { icon: '🌆', title: 'São Paulo CBD', value: 'Faria Lima', desc: 'Could buy Avenida Faria Lima district' },
        { icon: '🏖️', title: 'Beach Property', value: 'Santos to Rio', desc: 'Could buy coastline from Santos to Rio' },
        { icon: '🌳', title: 'Pantanal', value: '10% Protected', desc: 'Could protect 10% of Pantanal wetlands' },
        { icon: '🏢', title: 'Corporate Towers', value: '420 Towers', desc: 'Could build 420 corporate towers' },
        { icon: '🎪', title: 'Samba Cities', value: '42 Complexes', desc: 'Could build 42 carnival complexes' },
        { icon: '🏰', title: 'Historic Towns', value: 'Restore All', desc: 'Could restore every colonial town' }
      ],
      technology: [
        { icon: '💳', title: 'PIX Evolution', value: 'PIX 2.0', desc: 'Could create next-gen payment system' },
        { icon: '🛰️', title: 'Amazon Satellites', value: '420 Satellites', desc: 'Could monitor entire Amazon from space' },
        { icon: '🌐', title: 'Rural Internet', value: 'Every Village', desc: 'Could connect every Brazilian village' },
        { icon: '🤖', title: 'AgTech Revolution', value: '84 Years R&D', desc: 'Could fund agricultural tech for 84 years' },
        { icon: '⚡', title: 'Solar Brazil', value: '210 GW', desc: 'Could make Brazil solar powered' },
        { icon: '🚊', title: 'Metro Systems', value: '42 Cities', desc: 'Could build metros in 42 cities' }
      ]
    }
  },

  nordea: {
    id: 'nordea',
    name: 'Nordea Bank Abp',
    shortName: 'Nordea',
    country: 'Sweden',
    flag: '🇫🇮',
    founded: 2000,
    headquarters: 'Helsinki, Finland',
    assets: 750,
    marketCap: 42,
    revenue: 11,
    netIncome: 5.2,
    employees: 29000,
    branches: 1400,
    countries: 20,
    globalRank: 50,
    description: "The Nordic region's largest financial services group, serving 11 million customers across Northern Europe.",
    keyFact: "Nordea could fund the entire Nordic welfare model for 3 years, or buy IKEA, Spotify, H&M and Volvo combined.",
    ceoQuote: "Enabling dreams and aspirations for a greater good.",
    timeline: [
      { year: 1820, event: "Oldest predecessor Sparekassen for Kjøbenhavn og Omegn founded" },
      { year: 2000, event: "Merger of Merita, Nordbanken, Unibank and Christiania creates Nordea" },
      { year: 2018, event: "Moves headquarters from Stockholm to Helsinki" },
      { year: 2024, event: "Dominates Nordic banking with €750 billion in assets" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🌍', title: 'Nordic Welfare', value: '3 Years', desc: 'Could fund entire Nordic welfare state for 3 years' },
        { icon: '🏥', title: 'Free Healthcare', value: 'Forever Nordic', desc: 'Could provide free healthcare to Nordics forever' },
        { icon: '🎓', title: 'Education', value: '150M Students', desc: 'Could fund free university for 150 million students' },
        { icon: '❄️', title: 'Arctic Protection', value: 'Complete', desc: 'Could protect entire Arctic ecosystem permanently' },
        { icon: '🏘️', title: 'Housing First', value: '3.75M Homes', desc: 'Could solve homelessness globally with housing' },
        { icon: '🌲', title: 'Forest Protection', value: 'All Boreal', desc: 'Could protect all boreal forests forever' }
      ],
      corporate: [
        { icon: '🏬', title: 'IKEA', value: '15× Over', desc: 'Could buy IKEA 15 times over' },
        { icon: '👕', title: 'H&M', value: '50× Over', desc: 'Could purchase H&M 50 times' },
        { icon: '🎵', title: 'Spotify', value: '12× Over', desc: 'Could buy Spotify 12 times' },
        { icon: '🚗', title: 'Volvo', value: '30× Over', desc: 'Could acquire Volvo 30 times' },
        { icon: '📱', title: 'Ericsson', value: '25× Over', desc: 'Could buy Ericsson 25 times' },
        { icon: '🎮', title: 'Gaming Giants', value: 'All Nordic', desc: 'Could own Rovio, King, and all Nordic gaming' }
      ],
      sports: [
        { icon: '⛷️', title: 'Winter Olympics', value: '50 Games', desc: 'Could fund 50 Winter Olympics' },
        { icon: '🏒', title: 'Hockey Leagues', value: 'Global Empire', desc: 'Could own every hockey league worldwide' },
        { icon: '⚽', title: 'Nordic Leagues', value: '375× Over', desc: 'Could buy all Nordic football leagues 375 times' },
        { icon: '🎿', title: 'Ski Resorts', value: 'Every Resort', desc: 'Could own every ski resort globally' },
        { icon: '🚣', title: 'Viking Ships', value: '7.5M Ships', desc: 'Could build 7.5 million Viking longships' },
        { icon: '🏊', title: 'Heated Pools', value: '750,000', desc: 'Could build 750,000 heated Olympic pools' }
      ],
      'real-estate': [
        { icon: '🏙️', title: 'Stockholm', value: 'Entire City', desc: 'Could buy all of Stockholm' },
        { icon: '❄️', title: 'Ice Hotels', value: '75,000', desc: 'Could build 75,000 ice hotels' },
        { icon: '🏰', title: 'Nordic Castles', value: 'Every One 10×', desc: 'Could buy every Nordic castle 10 times' },
        { icon: '🌡️', title: 'Heated Streets', value: 'All Cities', desc: 'Could install heated sidewalks in every Nordic city' },
        { icon: '🏘️', title: 'Eco-Villages', value: '15,000', desc: 'Could build 15,000 sustainable communities' },
        { icon: '🌉', title: 'Øresund Bridges', value: '300 Bridges', desc: 'Could build 300 Øresund-scale bridges' }
      ],
      technology: [
        { icon: '🏆', title: 'Nobel Prizes', value: '15,000 Years', desc: 'Could fund Nobel Prizes for 15,000 years' },
        { icon: '🔋', title: 'Tesla Factories', value: '150 Plants', desc: 'Could build 150 gigafactories' },
        { icon: '🌐', title: 'Digital Nations', value: 'All Nordic', desc: 'Could digitize every Nordic government service' },
        { icon: '♨️', title: 'Geothermal', value: 'Heat Europe', desc: 'Could provide geothermal heating to all Europe' },
        { icon: '🛰️', title: 'Arctic Satellites', value: '750 Satellites', desc: 'Could monitor entire Arctic with satellites' },
        { icon: '🧬', title: 'Biotech Research', value: '150 Years', desc: 'Could fund Nordic biotech for 150 years' }
      ]
    }
  },
  
  bri: {
    id: 'bri',
    name: 'Bank Rakyat Indonesia',
    shortName: 'BRI',
    country: 'Indonesia',
    flag: '🇮🇩',
    founded: 1895,
    headquarters: 'Jakarta, Indonesia',
    assets: 120,
    marketCap: 50,
    revenue: 12,
    netIncome: 2.8,
    employees: 125000,
    branches: 10000,
    countries: 8,
    globalRank: 140,
    description: "The world's most profitable microfinance institution, serving 120 million customers across 17,000 Indonesian islands.",
    keyFact: "BRI has more branches than Starbucks has stores globally and reaches villages that Google Maps hasn't found yet.",
    ceoQuote: "From village to nation - empowering Indonesia's dreams.",
    timeline: [
      { year: 1895, event: "Founded as De Poerwokertosche Hulp en Spaarbank der Inlandsche Hoofden" },
      { year: 1946, event: "Becomes Bank Rakyat Indonesia after independence" },
      { year: 1984, event: "Pioneers village unit (BRI Unit Desa) microfinance model" },
      { year: 2024, event: "World's most profitable microfinance bank with 120 million customers" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '💰', title: 'Microloans', value: '2.4B People', desc: 'Could give microloans to 2.4 billion people' },
        { icon: '🏪', title: 'Village Markets', value: 'Every Village', desc: 'Could build traditional markets in all Indonesian villages' },
        { icon: '🎓', title: 'Island Schools', value: '240,000', desc: 'Could build schools on every inhabited island' },
        { icon: '🚤', title: 'Floating Schools', value: '120,000', desc: 'Could build 120,000 floating schools for remote areas' },
        { icon: '🏥', title: 'Health Clinics', value: '60,000', desc: 'Could build health clinics in every subdistrict' },
        { icon: '🌾', title: 'Farmer Support', value: '24M Farmers', desc: 'Could modernize 24 million small farms' }
      ],
      corporate: [
        { icon: '🏦', title: 'Bank Mandiri', value: '2× Over', desc: 'Could buy largest competitor twice' },
        { icon: '✈️', title: 'Garuda Indonesia', value: '40× Over', desc: 'Could purchase national airline 40 times' },
        { icon: '🏪', title: 'Indomaret', value: '6× Over', desc: 'Could buy convenience store giant 6 times' },
        { icon: '🏍️', title: 'Gojek', value: '8× Over', desc: 'Could acquire super-app Gojek 8 times' },
        { icon: '📱', title: 'Telkomsel', value: '3× Over', desc: 'Could buy telecom leader 3 times' },
        { icon: '🍜', title: 'Indofood', value: '15× Over', desc: 'Could own instant noodle empire 15 times' }
      ],
      sports: [
        { icon: '🏸', title: 'Badminton Empire', value: 'Global Dominance', desc: 'Could ensure Indonesian badminton dominance forever' },
        { icon: '⚽', title: 'Liga 1', value: '600× Over', desc: 'Could fund Indonesian league for 600 years' },
        { icon: '🥋', title: 'Pencak Silat', value: '120,000 Centers', desc: 'Could build 120,000 martial arts centers' },
        { icon: '🏃', title: 'Sports Villages', value: '12,000', desc: 'Could build sports facilities in 12,000 villages' },
        { icon: '🎭', title: 'Cultural Centers', value: '24,000', desc: 'Could preserve traditional arts with 24,000 centers' },
        { icon: '🎪', title: 'Gamelan Schools', value: 'Every School', desc: 'Could give gamelan orchestras to every school' }
      ],
      'real-estate': [
        { icon: '🏝️', title: 'Private Islands', value: '1,200 Islands', desc: 'Could buy 1,200 Indonesian islands' },
        { icon: '🏛️', title: 'Borobudur Scale', value: '1,000 Temples', desc: 'Could build 1,000 Borobudur-sized temples' },
        { icon: '🌴', title: 'Bali Property', value: 'Half the Island', desc: 'Could purchase half of Bali' },
        { icon: '🏘️', title: 'Transmigration', value: '2.4M Homes', desc: 'Could build homes for 10 million people' },
        { icon: '🌉', title: 'Island Bridges', value: '600 Bridges', desc: 'Could connect 600 island pairs' },
        { icon: '🏖️', title: 'Beach Resorts', value: '6,000', desc: 'Could build 6,000 eco-resorts' }
      ],
      technology: [
        { icon: '📱', title: 'Digital Villages', value: 'All Connected', desc: 'Could bring internet to every Indonesian village' },
        { icon: '🛰️', title: 'Satellite Network', value: '120 Satellites', desc: 'Could launch complete archipelago coverage' },
        { icon: '🚁', title: 'Drone Delivery', value: '120,000 Drones', desc: 'Could connect remote islands with drones' },
        { icon: '☀️', title: 'Solar Islands', value: '60 GW', desc: 'Could power Indonesia with island solar' },
        { icon: '🌊', title: 'Tsunami Warning', value: 'Complete System', desc: 'Could build comprehensive warning network' },
        { icon: '🤖', title: 'AgTech', value: '24 Years R&D', desc: 'Could revolutionize Indonesian farming' }
      ]
    }
  },
  
  nbk: {
    id: 'nbk',
    name: 'National Bank of Kuwait',
    shortName: 'NBK',
    country: 'Kuwait',
    flag: '🇰🇼',
    founded: 1952,
    headquarters: 'Kuwait City, Kuwait',
    assets: 140,
    marketCap: 18,
    revenue: 4.5,
    netIncome: 1.8,
    employees: 7000,
    branches: 170,
    countries: 14,
    globalRank: 150,
    description: "The Gulf's first indigenous bank, surviving invasion, oil crashes, and regional turmoil for over 70 years.",
    keyFact: "NBK remained open during the 1990 Iraqi invasion, operating from a London hotel room to keep Kuwait's finances alive.",
    ceoQuote: "Stability and trust through every storm - Kuwait's financial fortress.",
    timeline: [
      { year: 1952, event: "Founded as first national bank by Kuwaiti merchants" },
      { year: 1990, event: "Survives Iraqi invasion, operates from London in exile" },
      { year: 2008, event: "Weathers global crisis without government support" },
      { year: 2024, event: "Maintains position as Kuwait's largest bank" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '❄️', title: 'Air Conditioning', value: 'Entire Country', desc: 'Could air-condition all of Kuwait permanently' },
        { icon: '💧', title: 'Desalination', value: 'GCC Forever', desc: 'Could provide fresh water to Gulf states forever' },
        { icon: '🎓', title: 'Education Fund', value: '28M Students', desc: 'Could fund university for 28 million students' },
        { icon: '🏥', title: 'Medical Cities', value: '140 Cities', desc: 'Could build 140 world-class medical cities' },
        { icon: '🏘️', title: 'Housing', value: 'All Kuwaitis', desc: 'Could provide luxury homes to every Kuwaiti' },
        { icon: '🌴', title: 'Green Kuwait', value: 'Desert to Oasis', desc: 'Could transform Kuwait into green oasis' }
      ],
      corporate: [
        { icon: '✈️', title: 'Kuwait Airways', value: '70× Over', desc: 'Could buy national airline 70 times' },
        { icon: '📱', title: 'Zain', value: '10× Over', desc: 'Could purchase telecom giant Zain 10 times' },
        { icon: '🛢️', title: 'KPC Stake', value: 'Significant', desc: 'Could buy major stake in Kuwait Petroleum' },
        { icon: '🏪', title: 'The Sultan Center', value: '140× Over', desc: 'Could buy retail chain 140 times' },
        { icon: '🏗️', title: 'Construction', value: 'All Firms', desc: 'Could own entire construction sector' },
        { icon: '🚗', title: 'Luxury Cars', value: 'Every Car', desc: 'Could buy every luxury car in Middle East' }
      ],
      sports: [
        { icon: '⚽', title: 'Kuwait League', value: '1,400 Years', desc: 'Could fund Kuwait Premier League for millennia' },
        { icon: '🏇', title: 'Camel Racing', value: 'Global Empire', desc: 'Could create worldwide camel racing league' },
        { icon: '🏊', title: 'Indoor Beaches', value: '1,400', desc: 'Could build 1,400 indoor beach resorts' },
        { icon: '⛷️', title: 'Indoor Ski', value: 'Every GCC City', desc: 'Could build indoor slopes in every Gulf city' },
        { icon: '🏎️', title: 'F1 Tracks', value: '140 Circuits', desc: 'Could build 140 Formula 1 tracks' },
        { icon: '⛵', title: 'Marina Cities', value: '140 Complexes', desc: 'Could build 140 mega marina complexes' }
      ],
      'real-estate': [
        { icon: '🏙️', title: 'Kuwait City', value: 'Entire Downtown', desc: 'Could buy all of Kuwait City center' },
        { icon: '🌊', title: 'Floating Cities', value: '14 Cities', desc: 'Could build 14 floating cities for climate change' },
        { icon: '🏰', title: 'Desert Palaces', value: '14,000', desc: 'Could build 14,000 luxury desert palaces' },
        { icon: '🏢', title: 'Kuwait Towers', value: '2,800 Sets', desc: 'Could build 2,800 sets of Kuwait Towers' },
        { icon: '🏖️', title: 'Beach Development', value: 'Entire Coast', desc: 'Could develop Kuwait\'s entire coastline' },
        { icon: '🌴', title: 'Oasis Cities', value: '28 Cities', desc: 'Could create 28 oasis cities in desert' }
      ],
      technology: [
        { icon: '☀️', title: 'Solar Kuwait', value: 'Energy Forever', desc: 'Could power Kuwait with solar forever' },
        { icon: '🏗️', title: 'Cooling Tech', value: 'Cool the Gulf', desc: 'Could develop tech to cool entire Gulf region' },
        { icon: '💧', title: 'Water Tech', value: '1,400 Plants', desc: 'Could build 1,400 desalination plants' },
        { icon: '🛰️', title: 'Space Program', value: '140 Years', desc: 'Could fund Kuwait space program for 140 years' },
        { icon: '🌐', title: '6G Network', value: 'All GCC', desc: 'Could build 6G for entire Gulf region' },
        { icon: '🤖', title: 'Robot Workforce', value: '1.4 Million', desc: 'Could deploy 1.4 million service robots' }
      ]
    }
  },

  sberbank: {
    id: 'sberbank',
    name: 'Sberbank of Russia',
    shortName: 'Sberbank',
    country: 'Russia',
    flag: '🇷🇺',
    founded: 1841,
    headquarters: 'Moscow, Russia',
    assets: 620,
    marketCap: 15,
    revenue: 35,
    netIncome: 2.5,
    employees: 250000,
    branches: 14000,
    countries: 18,
    globalRank: 60,
    description: "Eastern Europe's largest bank, serving 100 million retail customers across 11 time zones despite sanctions.",
    keyFact: "Sberbank processes 40% of all payments in Russia and could heat every Russian home for free forever.",
    ceoQuote: "More than a bank - the circulatory system of Russia's economy.",
    timeline: [
      { year: 1841, event: "Founded by Tsar Nicholas I as Russia's first savings bank" },
      { year: 1991, event: "Survives Soviet collapse, transforms from state savings monopoly" },
      { year: 2020, event: "Rebrands as 'Sber' ecosystem beyond banking" },
      { year: 2024, event: "Operates under sanctions but maintains domestic dominance" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🔥', title: 'Free Heating', value: 'All Russia Forever', desc: 'Could heat every Russian home for free forever' },
        { icon: '🏥', title: 'Healthcare', value: '12 Years', desc: 'Could fund Russian healthcare for 12 years' },
        { icon: '🎓', title: 'Education', value: '124M Students', desc: 'Could provide free university to 124 million students' },
        { icon: '🚂', title: 'Trans-Siberian', value: '62 Railways', desc: 'Could build 62 Trans-Siberian Railways' },
        { icon: '🏘️', title: 'Soviet Housing', value: 'Replace All', desc: 'Could replace every Soviet-era apartment block' },
        { icon: '❄️', title: 'Arctic Cities', value: '620 Cities', desc: 'Could build 620 heated Arctic cities' }
      ],
      corporate: [
        { icon: '⛽', title: 'Gazprom', value: '8× Over', desc: 'Could buy gas giant Gazprom 8 times' },
        { icon: '🛢️', title: 'Rosneft', value: '10× Over', desc: 'Could purchase Rosneft 10 times' },
        { icon: '💎', title: 'Alrosa Diamonds', value: '62× Over', desc: 'Could buy diamond monopoly 62 times' },
        { icon: '🏭', title: 'Norilsk Nickel', value: '15× Over', desc: 'Could acquire mining giant 15 times' },
        { icon: '🚁', title: 'Russian Helicopters', value: '124× Over', desc: 'Could buy helicopter maker 124 times' },
        { icon: '🥃', title: 'Vodka Industry', value: '100× Over', desc: 'Could buy every vodka distillery 100 times' }
      ],
      sports: [
        { icon: '🏒', title: 'KHL Empire', value: '310× Over', desc: 'Could fund KHL hockey for 310 years' },
        { icon: '⚽', title: 'Russian Premier', value: '620× Over', desc: 'Could own Russian football for 620 years' },
        { icon: '🏋️', title: 'Olympic Training', value: '6,200 Centers', desc: 'Could build 6,200 Olympic training centers' },
        { icon: '⛸️', title: 'Ice Palaces', value: '62,000', desc: 'Could build 62,000 ice skating palaces' },
        { icon: '🎿', title: 'Ski Resorts', value: '3,100', desc: 'Could build 3,100 world-class ski resorts' },
        { icon: '♟️', title: 'Chess Academies', value: '62,000', desc: 'Could fund 62,000 chess academies' }
      ],
      'real-estate': [
        { icon: '🏰', title: 'Kremlin Replicas', value: '6,200', desc: 'Could build 6,200 Kremlin replicas' },
        { icon: '🏙️', title: 'Moscow City', value: '10× Over', desc: 'Could buy Moscow City district 10 times' },
        { icon: '🏖️', title: 'Black Sea Coast', value: 'Entire Shore', desc: 'Could buy entire Black Sea coastline' },
        { icon: '🏛️', title: 'St. Basil\'s', value: '6,200 Copies', desc: 'Could build 6,200 St. Basil\'s Cathedrals' },
        { icon: '🏘️', title: 'Dachas', value: 'Every Russian', desc: 'Could give every Russian family a dacha' },
        { icon: '🌉', title: 'Arctic Bridges', value: '1,240 Bridges', desc: 'Could connect Arctic with 1,240 bridges' }
      ],
      technology: [
        { icon: '🚀', title: 'Space Program', value: '124 Years', desc: 'Could fund Russian space program for 124 years' },
        { icon: '🛰️', title: 'GLONASS', value: '20× Over', desc: 'Could rebuild GLONASS system 20 times' },
        { icon: '⚛️', title: 'Nuclear Plants', value: '62 Plants', desc: 'Could build 62 nuclear power plants' },
        { icon: '🤖', title: 'Tech Cities', value: '62 Skolkovos', desc: 'Could build 62 Skolkovo innovation centers' },
        { icon: '🌐', title: 'Runet', value: 'Independent Internet', desc: 'Could build completely independent internet' },
        { icon: '❄️', title: 'Permafrost Tech', value: 'Preserve Forever', desc: 'Could develop tech to preserve permafrost' }
      ]
    }
  },
  
  fab: {
    id: 'fab',
    name: 'First Abu Dhabi Bank',
    shortName: 'FAB',
    country: 'UAE',
    flag: '🇦🇪',
    founded: 2017,
    headquarters: 'Abu Dhabi, UAE',
    assets: 320,
    marketCap: 53,
    revenue: 9,
    netIncome: 4.2,
    employees: 12000,
    branches: 650,
    countries: 19,
    globalRank: 85,
    description: "The UAE's largest bank and Middle East's leading financial institution, born from a mega-merger.",
    keyFact: "FAB could build 32 more Burj Khalifas or air-condition the entire Arabian desert using current technology.",
    ceoQuote: "Growing stronger together - from the UAE to the world.",
    timeline: [
      { year: 1968, event: "First National Bank of Abu Dhabi founded" },
      { year: 2017, event: "Merges with National Bank of Abu Dhabi to create FAB" },
      { year: 2019, event: "Becomes Middle East's largest bank by assets" },
      { year: 2024, event: "Manages $320 billion while funding UAE's global ambitions" }
    ],
    comparisons: {
      humanitarian: [
        { icon: '🏜️', title: 'Desert Cooling', value: 'Entire Arabia', desc: 'Could air-condition the entire Arabian desert' },
        { icon: '💧', title: 'Water Security', value: 'GCC 100 Years', desc: 'Could provide water to Gulf states for a century' },
        { icon: '🎓', title: 'Education City', value: '64 Cities', desc: 'Could build 64 education cities like Qatar\'s' },
        { icon: '🏥', title: 'Medical Tourism', value: '320 Hospitals', desc: 'Could build 320 world-class medical centers' },
        { icon: '🌴', title: 'Green Desert', value: '320k km²', desc: 'Could green 320,000 km² of desert' },
        { icon: '☀️', title: 'Solar Arabia', value: '160 GW', desc: 'Could power entire Arabian Peninsula with solar' }
      ],
      corporate: [
        { icon: '✈️', title: 'Emirates + Etihad', value: 'Both 3× Over', desc: 'Could buy both UAE airlines 3 times each' },
        { icon: '🏗️', title: 'Emaar Properties', value: '5× Over', desc: 'Could purchase Dubai developer 5 times' },
        { icon: '🛢️', title: 'ADNOC Stake', value: 'Significant', desc: 'Could buy major stake in oil giant ADNOC' },
        { icon: '🏖️', title: 'Jumeirah Group', value: '64× Over', desc: 'Could buy luxury hotel chain 64 times' },
        { icon: '🚗', title: 'Every Ferrari', value: 'Ever Made 2×', desc: 'Could buy every Ferrari ever made twice' },
        { icon: '💎', title: 'Gold Souks', value: 'All Gold', desc: 'Could buy all gold in Dubai Gold Souk' }
      ],
      sports: [
        { icon: '🏇', title: 'Dubai World Cup', value: '3,200 Races', desc: 'Could fund world\'s richest horse race for 3,200 years' },
        { icon: '🏎️', title: 'F1 Tracks', value: '320 Circuits', desc: 'Could build 320 Formula 1 grade circuits' },
        { icon: '⚽', title: 'UAE League', value: '640× Over', desc: 'Could fund UAE Pro League for 640 years' },
        { icon: '🏌️', title: 'Golf Paradise', value: '3,200 Courses', desc: 'Could build 3,200 championship golf courses' },
        { icon: '🎾', title: 'Tennis Cities', value: '320 Complexes', desc: 'Could build 320 tennis city complexes' },
        { icon: '🏟️', title: 'Stadium Cities', value: '64 Complexes', desc: 'Could build 64 sports city megaprojects' }
      ],
      'real-estate': [
        { icon: '🏗️', title: 'Burj Khalifas', value: '32 More', desc: 'Could build 32 more Burj Khalifas' },
        { icon: '🏝️', title: 'Palm Islands', value: '64 Islands', desc: 'Could create 64 Dubai-style palm islands' },
        { icon: '🏙️', title: 'Dubai Marina', value: '16× Over', desc: 'Could buy Dubai Marina district 16 times' },
        { icon: '🏰', title: 'Desert Palaces', value: '32,000', desc: 'Could build 32,000 luxury desert palaces' },
        { icon: '🌊', title: 'Floating Cities', value: '32 Cities', desc: 'Could build 32 floating cities' },
        { icon: '✈️', title: 'Airports', value: '64 Airports', desc: 'Could build 64 Dubai-sized airports' }
      ],
      technology: [
        { icon: '🚀', title: 'Mars Mission', value: '1,600 Years', desc: 'Could fund UAE Mars mission for 1,600 years' },
        { icon: '🏙️', title: 'Smart Cities', value: '32 Cities', desc: 'Could build 32 AI-powered smart cities' },
        { icon: '🚁', title: 'Flying Cars', value: '3.2M Cars', desc: 'Could deploy 3.2 million flying cars' },
        { icon: '🌐', title: 'Hyperloop', value: 'Connect GCC', desc: 'Could build hyperloop connecting all Gulf capitals' },
        { icon: '💎', title: 'Blockchain Gold', value: 'Digitize Trade', desc: 'Could digitize entire gold trade on blockchain' },
        { icon: '🤖', title: 'Robot Police', value: '320,000', desc: 'Could deploy 320,000 robot police officers' }
      ]
    }
  }
,
  'commerzbank': {
    id: 'commerzbank',
    name: 'Commerzbank',
    shortName: 'Commerzbank',
    country: 'Germany',
    flag: '\u{1F1E9}\u{1F1EA}',
    founded: 1870,
    headquarters: 'Frankfurt, Germany',
    assets: 560,
    marketCap: 18,
    revenue: 15,
    netIncome: 2.5,
    employees: 36000,
    branches: 800,
    countries: 40,
    globalRank: 35,
    description: "Germany's second-largest retail bank, founded by Hamburg merchants to finance foreign trade, with deep expertise in SME and commercial banking across Europe.",
    keyFact: "With $560B in assets, Commerzbank is one of the few banks to survive both World Wars, the Great Depression, and German reunification while remaining a cornerstone of European trade finance.",
    ceoQuote: "Our history shows impressively that Commerzbank has an expertise in trade and SME financing that has grown over 155 years -- these business areas are firmly anchored in our DNA. - Bettina Orlopp, CEO",
    timeline: [
      { year: 1870, event: "Founded as Commerz- und Disconto-Bank in Hamburg by merchants and private bankers to finance German foreign trade." },
      { year: 1958, event: "Reunified after post-WWII breakup into three regional banks, later moving headquarters to Frankfurt in 1970." },
      { year: 2009, event: "Acquired Dresdner Bank to become Germany's second-largest bank, with the German government taking a 25% stake during the financial crisis." },
      { year: 2024, event: "Appointed Bettina Orlopp as first female CEO in 154-year history, while fending off a hostile takeover approach from Italy's UniCredit." }
    ],
    comparisons: null
  },
  'bbva': {
    id: 'bbva',
    name: 'BBVA',
    shortName: 'BBVA',
    country: 'Spain',
    flag: '\u{1F1EA}\u{1F1F8}',
    founded: 1857,
    headquarters: 'Bilbao, Spain',
    assets: 820,
    marketCap: 55,
    revenue: 30,
    netIncome: 8,
    employees: 115000,
    branches: 6000,
    countries: 25,
    globalRank: 28,
    description: "Spain's second-largest bank and a global leader in digital banking, with a dominant presence in Latin America through its transformative acquisition of Mexico's Bancomer.",
    keyFact: "With $820B in assets, BBVA's Mexican subsidiary alone represents 40% of the group's total revenue, making it the largest bank in Mexico by market share.",
    ceoQuote: "The opportunities in the world today are enormous for those who are willing to embrace change and innovation. - Carlos Torres Vila, Chairman",
    timeline: [
      { year: 1857, event: "Banco de Bilbao founded by the Board of Trade in the Basque country as an issuing and discount bank." },
      { year: 1988, event: "Banco de Bilbao and Banco de Vizcaya merged to form BBV, creating one of Spain's largest financial institutions." },
      { year: 2000, event: "Acquired Mexico's Bancomer for $2.4B, gaining control of nearly 30% of Mexico's banking assets and 2,000 branches." },
      { year: 2024, event: "Launched a $13.1B takeover bid for rival Banco Sabadell while continuing to lead in digital banking with over 60% of sales through digital channels." }
    ],
    comparisons: null
  },
  'credit-suisse': {
    id: 'credit-suisse',
    name: 'Credit Suisse',
    shortName: 'Credit Suisse',
    country: 'Switzerland',
    flag: '\u{1F1E8}\u{1F1ED}',
    founded: 1856,
    headquarters: 'Zurich, Switzerland',
    assets: 580,
    marketCap: 0,
    revenue: 16,
    netIncome: -3,
    employees: 50000,
    branches: 95,
    countries: 50,
    globalRank: 33,
    description: "Once a pillar of Swiss banking and a bulge-bracket investment bank, Credit Suisse collapsed in 2023 after a series of scandals and losses, culminating in an emergency acquisition by rival UBS.",
    keyFact: "At its peak, Credit Suisse held over $580B in assets and operated in 50 countries, but its acquisition price of $3.25B was just 1% of its all-time high market value from 2007.",
    ceoQuote: "We have decided to take decisive action to create a simpler, more focused bank. - Ulrich Koerner, final CEO",
    timeline: [
      { year: 1856, event: "Founded by Alfred Escher in Zurich to fund Switzerland's industrialization and railroad expansion." },
      { year: 1990, event: "Acquired First Boston to become a global bulge-bracket investment bank competing with Wall Street's elite." },
      { year: 2021, event: "Suffered $5.5B in losses from the Archegos Capital collapse and fallout from the Greensill Capital scandal." },
      { year: 2023, event: "Acquired by UBS for $3.25B in an emergency government-brokered deal after massive client withdrawals of CHF 171B, ending 167 years of independent operation." }
    ],
    comparisons: null
  },
  'rabobank': {
    id: 'rabobank',
    name: 'Rabobank',
    shortName: 'Rabobank',
    country: 'Netherlands',
    flag: '\u{1F1F3}\u{1F1F1}',
    founded: 1972,
    headquarters: 'Utrecht, Netherlands',
    assets: 680,
    marketCap: 0,
    revenue: 18,
    netIncome: 4,
    employees: 40000,
    branches: 340,
    countries: 38,
    globalRank: 31,
    description: "The world's leading cooperative bank and the foremost financier of the global food and agriculture sector, with roots tracing back to 19th-century Dutch farmers' credit unions.",
    keyFact: "With $680B in assets and no shareholders, Rabobank is the only major Dutch bank structured as a cooperative with over 2.3 million members instead of stockholders.",
    ceoQuote: "We believe that banking should be rooted in the real economy and serve the communities we operate in. - Wiebe Draijer, former Chairman",
    timeline: [
      { year: 1898, event: "Two cooperative central banks founded in Utrecht and Eindhoven to support Dutch farmers' credit cooperatives inspired by Friedrich Raiffeisen." },
      { year: 1972, event: "The two cooperatives merged to form Rabobank, instantly becoming one of the Netherlands' top three financial institutions with over 1,500 member banks." },
      { year: 2002, event: "Launched International Direct Banking to expand global savings and banking services via the internet." },
      { year: 2024, event: "Continues as the Netherlands' second-largest bank by assets and the world's premier agricultural lender, operating across 38 countries." }
    ],
    comparisons: null
  },
  'hdfc-bank': {
    id: 'hdfc-bank',
    name: 'HDFC Bank',
    shortName: 'HDFC Bank',
    country: 'India',
    flag: '\u{1F1EE}\u{1F1F3}',
    founded: 1994,
    headquarters: 'Mumbai, India',
    assets: 360,
    marketCap: 160,
    revenue: 28,
    netIncome: 6,
    employees: 180000,
    branches: 7800,
    countries: 4,
    globalRank: 42,
    description: "India's largest private sector bank by assets and market capitalization, born from the 1990s liberalization of Indian banking and grown into one of the world's most valuable financial institutions.",
    keyFact: "With $360B in assets and 7,800 branches across India, HDFC Bank serves over 120 million customers -- more than the entire population of Germany.",
    ceoQuote: "We are building a bank for the ages, one that will stand the test of time and serve generations of Indians. - Aditya Puri, founding CEO",
    timeline: [
      { year: 1994, event: "Incorporated as one of India's first private sector banks after RBI liberalized the banking industry, with Aditya Puri as founding CEO." },
      { year: 1995, event: "IPO raised 500 million rupees and was oversubscribed 55 times; shares listed on the Bombay Stock Exchange." },
      { year: 2008, event: "Acquired Centurion Bank of Punjab for $2.19B in the largest acquisition in Indian financial sector history at that time." },
      { year: 2023, event: "Completed merger with parent HDFC Ltd in India's largest-ever M&A deal, becoming the seventh most valuable bank in the world at $154B market cap." }
    ],
    comparisons: null
  },
  'anz': {
    id: 'anz',
    name: 'ANZ Bank',
    shortName: 'ANZ',
    country: 'Australia',
    flag: '\u{1F1E6}\u{1F1FA}',
    founded: 1835,
    headquarters: 'Melbourne, Australia',
    assets: 700,
    marketCap: 55,
    revenue: 17,
    netIncome: 6,
    employees: 39000,
    branches: 600,
    countries: 32,
    globalRank: 29,
    description: "One of Australia's Big Four banks and the largest bank in New Zealand, with origins dating back to the earliest days of European settlement in Australia.",
    keyFact: "With $700B in assets, ANZ is one of the world's oldest continuously operating banks, tracing its lineage to 1835 when a young Scottish entrepreneur sailed six months from London to open its first Sydney branch.",
    ceoQuote: "Our purpose is to shape a world where people and communities thrive. - Shayne Elliott, CEO",
    timeline: [
      { year: 1835, event: "The Bank of Australasia was founded in London and opened its first branch in Sydney, established by Scottish entrepreneur George Kinnear." },
      { year: 1951, event: "Bank of Australasia merged with Union Bank of Australia to form the Australia and New Zealand Bank." },
      { year: 1970, event: "Merged with the English, Scottish & Australian Bank in the largest bank merger in Australian history at the time, forming the modern ANZ." },
      { year: 2024, event: "Operates as one of Australia's Big Four banks with presence in 32 countries, serving over 11 million customers across the Asia-Pacific region." }
    ],
    comparisons: null
  },
  'firstrand': {
    id: 'firstrand',
    name: 'FirstRand',
    shortName: 'FirstRand',
    country: 'South Africa',
    flag: '\u{1F1FF}\u{1F1E6}',
    founded: 1998,
    headquarters: 'Johannesburg, South Africa',
    assets: 115,
    marketCap: 28,
    revenue: 8,
    netIncome: 2.5,
    employees: 50000,
    branches: 750,
    countries: 10,
    globalRank: 80,
    description: "One of the largest financial institutions in Africa, built from the merger of Anglo American's financial interests with RMB Holdings, operating through its flagship First National Bank brand.",
    keyFact: "With $115B in assets, FirstRand is the largest financial services group in Africa by market capitalization and operates across ten countries including key markets in sub-Saharan Africa.",
    ceoQuote: "We believe in building a future where everyone has access to the financial services they need to prosper. - Alan Memory, CEO",
    timeline: [
      { year: 1838, event: "Predecessor First National Bank traces its roots to the earliest banking operations in South Africa." },
      { year: 1998, event: "FirstRand formed through merger of Anglo American's financial services interests with RMB Holdings, listing on the Johannesburg Stock Exchange." },
      { year: 2012, event: "Expanded into West Africa with RMB Nigeria receiving one of the first merchant banking licenses issued in over a decade by Nigeria's Central Bank." },
      { year: 2024, event: "Operates as one of Africa's five largest banking groups through its franchises: Rand Merchant Bank, First National Bank, WesBank, and Ashburton Investments." }
    ],
    comparisons: null
  },
  'al-rajhi': {
    id: 'al-rajhi',
    name: 'Al Rajhi Bank',
    shortName: 'Al Rajhi',
    country: 'Saudi Arabia',
    flag: '\u{1F1F8}\u{1F1E6}',
    founded: 1957,
    headquarters: 'Riyadh, Saudi Arabia',
    assets: 200,
    marketCap: 95,
    revenue: 12,
    netIncome: 5,
    employees: 20000,
    branches: 570,
    countries: 5,
    globalRank: 60,
    description: "The world's largest Islamic bank by capital and the largest bank in Saudi Arabia, operating entirely under Sharia-compliant principles since its founding as a modest money exchange house.",
    keyFact: "With $200B in assets, Al Rajhi Bank serves over 19 million customers and is the world's most valuable Islamic bank, with a market cap exceeding $95B.",
    ceoQuote: "We are committed to fulfilling the banking needs of our customers in accordance with the highest Sharia standards while driving innovation. - Stefano Bertamini, CEO",
    timeline: [
      { year: 1957, event: "Founded by four brothers of the Al Rajhi family as a money exchange house in Riyadh, becoming the first formally recognized exchange in the Najd region." },
      { year: 1988, event: "Converted to a joint stock company and listed on the Saudi Tadawul stock exchange, formalizing its transformation into a full Islamic bank." },
      { year: 2006, event: "Rebranded as Al Rajhi Bank and expanded internationally for the first time by launching operations in Malaysia." },
      { year: 2024, event: "Total assets surpassed SAR 1 trillion as the bank continues to play a central role in Saudi Arabia's Vision 2030 economic transformation." }
    ],
    comparisons: null
  },
  'ocbc': {
    id: 'ocbc',
    name: 'OCBC Bank',
    shortName: 'OCBC',
    country: 'Singapore',
    flag: '\u{1F1F8}\u{1F1EC}',
    founded: 1932,
    headquarters: 'Singapore, Singapore',
    assets: 400,
    marketCap: 50,
    revenue: 12,
    netIncome: 5,
    employees: 30000,
    branches: 420,
    countries: 18,
    globalRank: 40,
    description: "Singapore's oldest local bank and the second-largest banking group in Southeast Asia, formed from the merger of three Chinese community banks during the Great Depression.",
    keyFact: "With $400B in assets, OCBC is one of the world's most highly rated banks with Aa1/AA credit ratings and was ranked among the top three safest banks globally by Global Finance magazine.",
    ceoQuote: "Our ambition is to be a great bank that creates lasting value for our stakeholders and the communities we serve. - Helen Wong, CEO",
    timeline: [
      { year: 1932, event: "Formed from the merger of three Hokkien community banks -- Chinese Commercial Bank, Ho Hong Bank, and Oversea-Chinese Bank -- during the Great Depression." },
      { year: 1976, event: "Completed the iconic OCBC Centre headquarters in Singapore, designed by renowned architect I.M. Pei." },
      { year: 2009, event: "Acquired ING Asia Private Bank and launched Bank of Singapore as its private banking subsidiary for high-net-worth clients." },
      { year: 2024, event: "Named Singapore's strongest bank by The Asian Banker, with total assets exceeding S$625 billion across 18 countries." }
    ],
    comparisons: null
  },
  'shinhan': {
    id: 'shinhan',
    name: 'Shinhan Financial Group',
    shortName: 'Shinhan',
    country: 'South Korea',
    flag: '\u{1F1F0}\u{1F1F7}',
    founded: 1897,
    headquarters: 'Seoul, South Korea',
    assets: 480,
    marketCap: 18,
    revenue: 22,
    netIncome: 4,
    employees: 22000,
    branches: 900,
    countries: 20,
    globalRank: 37,
    description: "One of South Korea's Big Five financial conglomerates, tracing its heritage to Hanseong Bank, the first modern bank ever established in Korea in 1897.",
    keyFact: "With $480B in assets, Shinhan traces its lineage to 1897 when Hanseong Bank became Korea's first modern bank, operating from a small two-room house -- making it one of Asia's oldest banking institutions.",
    ceoQuote: "We will continue to lead financial innovation and grow as a globally competitive financial group. - Jin Ok-dong, CEO",
    timeline: [
      { year: 1897, event: "Hanseong Bank established as Korea's first modern bank by Kim Jong-Han, originally operating from a small two-room house." },
      { year: 1982, event: "Shinhan Bank founded with private Korean capital as the first privately-funded bank in South Korea, with 279 employees and three branches." },
      { year: 2001, event: "Shinhan Financial Group incorporated as Korea's first civilian-controlled financial holding company." },
      { year: 2006, event: "Merged with Chohung Bank (successor of Hanseong Bank), becoming South Korea's second-largest banking group and unifying 109 years of Korean banking heritage." }
    ],
    comparisons: null
  },
  'bbva-mexico': {
    id: 'bbva-mexico',
    name: 'BBVA M\u00e9xico',
    shortName: 'BBVA M\u00e9xico',
    country: 'Mexico',
    flag: '\u{1F1F2}\u{1F1FD}',
    founded: 1932,
    headquarters: 'Mexico City, Mexico',
    assets: 120,
    marketCap: 15,
    revenue: 10,
    netIncome: 4,
    employees: 37000,
    branches: 1800,
    countries: 1,
    globalRank: 75,
    description: "Mexico's largest bank by market share, originally founded as Banco de Comercio and transformed into a powerhouse after Spanish giant BBVA acquired Bancomer in 2000.",
    keyFact: "With $120B in assets and a 27% market share, BBVA Mexico is the largest bank in the country and generates 40% of parent BBVA's total worldwide revenue.",
    ceoQuote: "Mexico has extraordinary potential, and we are committed to being the engine that drives financial inclusion for millions of Mexicans. - Eduardo Osuna, CEO",
    timeline: [
      { year: 1932, event: "Founded as Banco de Comercio by Salvador Ugarte and a group of 28 visionaries in Mexico City with initial capital of 500,000 pesos." },
      { year: 1977, event: "Consolidated 34 affiliated regional banks into a single entity renamed Bancomer, becoming Mexico's largest bank with 23% of all branches." },
      { year: 2000, event: "BBVA acquired Bancomer for $2.4B, creating Grupo Financiero BBVA Bancomer and gaining control of nearly 30% of Mexican banking assets." },
      { year: 2024, event: "Operates as Mexico's largest financial institution with over 30 million customers, 1,691 branches, and pioneering mobile banking services." }
    ],
    comparisons: null
  },
  'banorte': {
    id: 'banorte',
    name: 'Grupo Financiero Banorte',
    shortName: 'Banorte',
    country: 'Mexico',
    flag: '\u{1F1F2}\u{1F1FD}',
    founded: 1899,
    headquarters: 'Monterrey, Mexico',
    assets: 95,
    marketCap: 14,
    revenue: 8,
    netIncome: 3,
    employees: 28000,
    branches: 1200,
    countries: 1,
    globalRank: 85,
    description: "Mexico's largest domestically-owned bank, born in the industrial heartland of Monterrey and grown through strategic acquisitions into a full-service financial conglomerate.",
    keyFact: "With $95B in assets, Banorte is the largest Mexican-controlled bank in the country, having survived nationalization, privatization, and multiple financial crises across 125 years.",
    ceoQuote: "Banorte is at the heart of Mexico's progress, and we will continue to drive the country's economic growth through innovation and financial inclusion. - Carlos Hank Gonzalez, Chairman",
    timeline: [
      { year: 1899, event: "Founded as Banco Mercantil de Monterrey in the industrial capital of Nuevo Leon, Mexico." },
      { year: 1986, event: "Banco Mercantil de Monterrey merged with Banco Regional del Norte to form Banco Mercantil del Norte (Banorte)." },
      { year: 1992, event: "Privatized when a consortium led by Roberto Gonzalez Barrera acquired 66% of the bank for 1.78 billion pesos." },
      { year: 2025, event: "Purchased naming rights to Mexico City's iconic Estadio Azteca, renaming it Estadio Banorte ahead of the 2026 FIFA World Cup." }
    ],
    comparisons: null
  },
  'ziraat': {
    id: 'ziraat',
    name: 'Ziraat Bank',
    shortName: 'Ziraat',
    country: 'Turkey',
    flag: '\u{1F1F9}\u{1F1F7}',
    founded: 1863,
    headquarters: 'Ankara, Turkey',
    assets: 140,
    marketCap: 0,
    revenue: 12,
    netIncome: 3,
    employees: 25000,
    branches: 1800,
    countries: 18,
    globalRank: 70,
    description: "Turkey's oldest and largest state-owned bank, founded in the Ottoman Empire to free farmers from predatory moneylenders, now the country's biggest bank by assets and branch network.",
    keyFact: "With $140B in assets and over 1,800 branches, Ziraat Bank is one of the world's oldest continuously operating banks, founded 60 years before the Turkish Republic itself was established.",
    ceoQuote: "Ziraat Bank has been financing the development of Turkey for over 160 years, from agriculture to industry to the modern digital economy. - Alpaslan Cakar, CEO",
    timeline: [
      { year: 1863, event: "Established as 'Homeland Funds' by Ottoman governor Midhat Pasha in Pirot to provide farmers with credit and free them from usurious moneylenders." },
      { year: 1888, event: "Formally constituted as Ziraat Bank (Agriculture Bank) to take over operations of the Benefit Funds, with branches across the Ottoman Empire." },
      { year: 1919, event: "Played a critical role in Turkey's War of Independence by secretly transporting gold from Istanbul to Ankara on the orders of Mustafa Kemal Ataturk." },
      { year: 2024, event: "Continues as Turkey's largest bank by assets and branch network, operating across 18 countries with the widest international reach of any Turkish bank." }
    ],
    comparisons: null
  },
  'isbank': {
    id: 'isbank',
    name: 'T\u00fcrkiye \u0130\u015f Bankas\u0131',
    shortName: '\u0130\u015fbank',
    country: 'Turkey',
    flag: '\u{1F1F9}\u{1F1F7}',
    founded: 1924,
    headquarters: 'Istanbul, Turkey',
    assets: 100,
    marketCap: 8,
    revenue: 9,
    netIncome: 2,
    employees: 24000,
    branches: 1200,
    countries: 15,
    globalRank: 82,
    description: "Turkey's largest private bank and one of its most important corporations, founded on the personal initiative of Mustafa Kemal Ataturk to build the financial infrastructure of the new Turkish Republic.",
    keyFact: "With $100B in assets, Isbank was founded with a personal investment of 250,000 Turkish Liras from Ataturk himself and has since grown into Turkey's largest private sector bank by assets, loans, and deposits.",
    ceoQuote: "We carry the legacy of our founder Ataturk, who envisioned a strong, independent Turkish economy built on the foundation of modern banking. - Hakan Aran, CEO",
    timeline: [
      { year: 1924, event: "Founded on August 26 at the First Economy Congress in Izmir, with 250,000 Turkish Liras personally contributed by Mustafa Kemal Ataturk." },
      { year: 1934, event: "Backed the establishment of Sisecam to create Turkey's glassmaking industry, exemplifying its role in building the nation's industrial base." },
      { year: 1987, event: "Set up Turkey's first ATM and launched the country's first mutual fund, pioneering modern retail banking." },
      { year: 2024, event: "Operates as Turkey's largest private bank with over 1,000 domestic branches and 22 international branches across 11 countries." }
    ],
    comparisons: null
  },
  'bangkok-bank': {
    id: 'bangkok-bank',
    name: 'Bangkok Bank',
    shortName: 'Bangkok Bank',
    country: 'Thailand',
    flag: '\u{1F1F9}\u{1F1ED}',
    founded: 1944,
    headquarters: 'Bangkok, Thailand',
    assets: 110,
    marketCap: 12,
    revenue: 6,
    netIncome: 2,
    employees: 26000,
    branches: 1000,
    countries: 14,
    globalRank: 78,
    description: "Thailand's largest bank by total assets and the sixth-largest in Southeast Asia, founded by visionary banker Chin Sophonpanich and still led by his descendants three generations later.",
    keyFact: "With $110B in assets, Bangkok Bank has the largest international network of any Thai bank with over 240 branches across 14 economies, and received a royal garuda emblem from the Thai monarchy.",
    ceoQuote: "We are committed to being a reliable partner for our customers through every economic cycle, just as we have been for over 80 years. - Chartsiri Sophonpanich, President",
    timeline: [
      { year: 1944, event: "Founded on December 1 by Chin Sophonpanich, who despite limited formal finance education became one of Southeast Asia's most respected bankers." },
      { year: 1967, event: "Received the prestigious royal garuda emblem from the Thai monarchy, symbolizing royal endorsement of the bank's contributions to Thailand's economy." },
      { year: 2020, event: "Acquired 89% of Indonesia's PermataBank for $2.3B in the largest intra-ASEAN banking M&A transaction in history." },
      { year: 2024, event: "Recognized by TIME magazine as one of the World's Best Companies -- the only Thai bank to receive this distinction." }
    ],
    comparisons: null
  },
  'kasikornbank': {
    id: 'kasikornbank',
    name: 'Kasikornbank',
    shortName: 'KBank',
    country: 'Thailand',
    flag: '\u{1F1F9}\u{1F1ED}',
    founded: 1945,
    headquarters: 'Bangkok, Thailand',
    assets: 105,
    marketCap: 13,
    revenue: 6,
    netIncome: 2,
    employees: 22000,
    branches: 850,
    countries: 8,
    globalRank: 79,
    description: "One of Thailand's largest commercial banks, originally founded as Thai Farmers Bank to rebuild the nation's post-war agricultural economy, now a leader in digital banking innovation.",
    keyFact: "With $105B in assets, Kasikornbank was Thailand's first bank to offer credit card services in 1973, the first to issue green bonds in 2018, and a pioneer in serving Myanmar migrant workers.",
    ceoQuote: "Technology and innovation are the cornerstones of our strategy to deliver financial services that truly serve the needs of all our customers. - Kattiya Indaravijaya, CEO",
    timeline: [
      { year: 1945, event: "Founded as Thai Farmers Bank by Choti Lamsam with 5 million baht in capital and 21 employees, aiming to rebuild Thailand's post-war agricultural economy." },
      { year: 1973, event: "Became the first bank in Thailand to offer credit card services with the Multi-Purpose Credit Card." },
      { year: 2003, event: "Renamed from Thai Farmers Bank to Kasikornbank, reflecting its evolution from an agricultural lender to a modern universal bank." },
      { year: 2024, event: "Continues to lead in digital innovation through KASIKORNBUSINESS-TECHNOLOGY GROUP (KBTG), with operations across 8 ASEAN countries." }
    ],
    comparisons: null
  },
  'maybank': {
    id: 'maybank',
    name: 'Maybank',
    shortName: 'Maybank',
    country: 'Malaysia',
    flag: '\u{1F1F2}\u{1F1FE}',
    founded: 1960,
    headquarters: 'Kuala Lumpur, Malaysia',
    assets: 230,
    marketCap: 27,
    revenue: 13,
    netIncome: 3,
    employees: 42000,
    branches: 2200,
    countries: 18,
    globalRank: 55,
    description: "Malaysia's largest bank and one of the biggest in Southeast Asia, founded as the nation's first homegrown bank to serve local businesses that foreign banks had long ignored.",
    keyFact: "With $230B in assets, Maybank grew from a single corner shop in 1960 to over 2,600 branches across all 10 ASEAN nations in just six decades, and its Islamic banking arm is the largest in ASEAN.",
    ceoQuote: "Maybank's mission has always been to humanize financial services -- to ensure that banking reaches every corner of society. - Dato' Khairussaleh Ramli, CEO",
    timeline: [
      { year: 1960, event: "Founded by Khoo Teck Puat, opening its first branch in a corner shop on Jalan H S Lee in Kuala Lumpur as Malaysia's first homegrown bank." },
      { year: 1962, event: "Listed on the Kuala Lumpur Stock Exchange after explosive growth to over 150 branches in just three years, earning the nickname 'the coffee-shop bank.'" },
      { year: 2008, event: "Acquired Bank Internasional Indonesia, An Binh Bank in Vietnam, and MCB Bank in Pakistan, establishing Maybank Islamic as ASEAN's largest Islamic bank." },
      { year: 2024, event: "Operates as Malaysia's most valuable bank brand with 2,600 branches across all 10 ASEAN nations and 43,000 employees worldwide." }
    ],
    comparisons: null
  },
  'cimb': {
    id: 'cimb',
    name: 'CIMB Group',
    shortName: 'CIMB',
    country: 'Malaysia',
    flag: '\u{1F1F2}\u{1F1FE}',
    founded: 1956,
    headquarters: 'Kuala Lumpur, Malaysia',
    assets: 130,
    marketCap: 13,
    revenue: 7,
    netIncome: 2,
    employees: 33000,
    branches: 650,
    countries: 15,
    globalRank: 72,
    description: "Malaysia's second-largest financial services provider and the fifth-largest banking group in ASEAN, formed through a series of landmark mergers spanning a century of Malaysian banking history.",
    keyFact: "With $130B in assets, CIMB Group traces its origins to 1924 and was the first major emerging-market bank globally to commit to phasing out coal from its portfolio by 2040.",
    ceoQuote: "ASEAN is one of the most dynamic regions in the world, and CIMB is uniquely positioned to capture its growth as the region's universal bank. - Abdul Rahman Ahmad, CEO",
    timeline: [
      { year: 1956, event: "Key predecessor entity incorporated in Kuala Lumpur, forming part of the foundation that would evolve into today's CIMB Group." },
      { year: 1999, event: "Bank Bumiputra merged with Bank of Commerce to create Bumiputra-Commerce Bank, the largest banking merger in Malaysian history at the time." },
      { year: 2006, event: "Modern CIMB Group launched through the three-way merger of CIMB, Bumiputra-Commerce Bank, and Southern Bank, creating a universal banking group." },
      { year: 2024, event: "Celebrated its centenary tracing back to 1924, operating as ASEAN's fifth-largest banking group across 15 countries with 33,000 employees." }
    ],
    comparisons: null
  },
  bdo: {
    id: 'bdo',
    name: 'BDO Unibank',
    shortName: 'BDO',
    country: 'Philippines',
    flag: '🇵🇭',
    founded: 1968,
    headquarters: 'Manila, Philippines',
    assets: 75,
    marketCap: 10,
    revenue: 5,
    netIncome: 1.5,
    employees: 42000,
    branches: 1500,
    countries: 4,
    globalRank: 90,
    description: "The largest bank in the Philippines by assets, BDO Unibank provides a comprehensive range of banking and financial services to millions of Filipino families and businesses.",
    keyFact: "With $75 billion in assets and over 1,500 branches, BDO operates the most extensive banking network in the Philippines.",
    ceoQuote: "Our mission is to serve every Filipino and be the bank of choice for generations to come.",
    timeline: [
      { year: 1968, event: "Founded as Acme Savings Bank by the SM Group in Manila." },
      { year: 1996, event: "Renamed to Banco de Oro and began aggressive expansion across the Philippines." },
      { year: 2007, event: "Merged with Equitable PCI Bank to become the largest bank in the Philippines." },
      { year: 2024, event: "Surpasses $75 billion in assets, reinforcing its position as the Philippines' leading universal bank." }
    ],
    comparisons: null
  },
  metrobank: {
    id: 'metrobank',
    name: 'Metropolitan Bank',
    shortName: 'Metrobank',
    country: 'Philippines',
    flag: '🇵🇭',
    founded: 1962,
    headquarters: 'Manila, Philippines',
    assets: 40,
    marketCap: 4,
    revenue: 3,
    netIncome: 0.8,
    employees: 15000,
    branches: 950,
    countries: 3,
    globalRank: 110,
    description: "One of the Philippines' premier universal banks, Metropolitan Bank has earned a reputation for trust and financial stability across more than six decades of service.",
    keyFact: "With $40 billion in assets and 950 branches, Metrobank is one of the most recognized and trusted banking brands in the Philippines.",
    ceoQuote: "We have always believed that the strength of a bank lies in the trust of its clients.",
    timeline: [
      { year: 1962, event: "Founded by George S.K. Ty in Manila with a vision to serve the Filipino-Chinese business community." },
      { year: 1981, event: "Became one of the first Philippine banks to establish an international presence with offices abroad." },
      { year: 2013, event: "Celebrated 50 years as one of the Philippines' most stable and profitable financial institutions." },
      { year: 2024, event: "Manages $40 billion in assets and continues expanding its digital banking capabilities." }
    ],
    comparisons: null
  },
  vietcombank: {
    id: 'vietcombank',
    name: 'Vietcombank',
    shortName: 'Vietcombank',
    country: 'Vietnam',
    flag: '🇻🇳',
    founded: 1963,
    headquarters: 'Hanoi, Vietnam',
    assets: 80,
    marketCap: 18,
    revenue: 5,
    netIncome: 2,
    employees: 22000,
    branches: 600,
    countries: 3,
    globalRank: 88,
    description: "Vietnam's most profitable and highly valued bank, Vietcombank has evolved from a state foreign trade bank into a modern commercial banking powerhouse.",
    keyFact: "With $80 billion in assets and a market capitalization of $18 billion, Vietcombank is the most valuable bank in Vietnam.",
    ceoQuote: "Vietcombank's transformation reflects Vietnam's own remarkable economic journey on the world stage.",
    timeline: [
      { year: 1963, event: "Established as the Bank for Foreign Trade of Vietnam to handle the country's international banking transactions." },
      { year: 1996, event: "Transformed into a joint-stock commercial bank and began diversifying its services." },
      { year: 2009, event: "Listed on the Ho Chi Minh City Stock Exchange, attracting significant foreign investment." },
      { year: 2024, event: "Holds $80 billion in assets and ranks as Vietnam's most profitable bank with strong international partnerships." }
    ],
    comparisons: null
  },
  bidv: {
    id: 'bidv',
    name: 'BIDV',
    shortName: 'BIDV',
    country: 'Vietnam',
    flag: '🇻🇳',
    founded: 1957,
    headquarters: 'Hanoi, Vietnam',
    assets: 85,
    marketCap: 12,
    revenue: 5,
    netIncome: 1.5,
    employees: 27000,
    branches: 1000,
    countries: 2,
    globalRank: 86,
    description: "The Bank for Investment and Development of Vietnam is the country's largest bank by assets, playing a central role in financing Vietnam's infrastructure and industrial growth.",
    keyFact: "With $85 billion in assets and 1,000 branches, BIDV is the largest bank in Vietnam and a cornerstone of the nation's development financing.",
    ceoQuote: "BIDV has been at the heart of every major development project that has shaped modern Vietnam.",
    timeline: [
      { year: 1957, event: "Founded as the Bank for Construction of Vietnam to finance post-war national reconstruction." },
      { year: 1990, event: "Renamed to Bank for Investment and Development of Vietnam and expanded into full commercial banking." },
      { year: 2019, event: "South Korea's KEB Hana Bank acquired a strategic stake, marking one of Vietnam's largest banking deals." },
      { year: 2024, event: "Manages $85 billion in assets as Vietnam's largest bank, serving 27,000 employees across 1,000 branches." }
    ],
    comparisons: null
  },
  'habib-bank': {
    id: 'habib-bank',
    name: 'Habib Bank Limited',
    shortName: 'HBL',
    country: 'Pakistan',
    flag: '🇵🇰',
    founded: 1941,
    headquarters: 'Karachi, Pakistan',
    assets: 25,
    marketCap: 2,
    revenue: 3,
    netIncome: 0.5,
    employees: 18000,
    branches: 1700,
    countries: 15,
    globalRank: 120,
    description: "Pakistan's largest and most internationally connected bank, Habib Bank Limited has served as the backbone of the country's financial system for over eight decades.",
    keyFact: "With $25 billion in assets and a presence in 15 countries, HBL has the largest international footprint of any Pakistani bank.",
    ceoQuote: "HBL's story is Pakistan's story — one of resilience, ambition, and an unwavering commitment to progress.",
    timeline: [
      { year: 1941, event: "Founded in Bombay by the Habib family and later relocated to Karachi following the partition of British India." },
      { year: 1974, event: "Nationalized by the Government of Pakistan as part of sweeping banking sector reforms." },
      { year: 2004, event: "Privatized through acquisition by the Aga Khan Fund for Economic Development, ushering in a new era of modernization." },
      { year: 2024, event: "Operates $25 billion in assets across 15 countries with 1,700 branches, maintaining its position as Pakistan's leading bank." }
    ],
    comparisons: null
  },
  nbp: {
    id: 'nbp',
    name: 'National Bank of Pakistan',
    shortName: 'NBP',
    country: 'Pakistan',
    flag: '🇵🇰',
    founded: 1949,
    headquarters: 'Karachi, Pakistan',
    assets: 22,
    marketCap: 1,
    revenue: 2.5,
    netIncome: 0.4,
    employees: 16000,
    branches: 1500,
    countries: 8,
    globalRank: 125,
    description: "As Pakistan's principal state-owned commercial bank, the National Bank of Pakistan plays a vital role in government financial operations and rural banking outreach.",
    keyFact: "With $22 billion in assets and 1,500 branches, NBP serves as the treasury agent for the Government of Pakistan across the entire country.",
    ceoQuote: "NBP carries the responsibility of serving every corner of Pakistan, from bustling cities to the most remote villages.",
    timeline: [
      { year: 1949, event: "Established shortly after Pakistan's independence to support the fledgling nation's financial infrastructure." },
      { year: 1970, event: "Expanded its branch network to become the largest bank in Pakistan by geographic reach." },
      { year: 2002, event: "Launched a major restructuring and technology modernization program to improve service delivery." },
      { year: 2024, event: "Holds $22 billion in assets and operates in 8 countries as Pakistan's leading state-owned commercial bank." }
    ],
    comparisons: null
  },
  'banco-nacion': {
    id: 'banco-nacion',
    name: 'Banco de la Nación Argentina',
    shortName: 'Banco Nación',
    country: 'Argentina',
    flag: '🇦🇷',
    founded: 1891,
    headquarters: 'Buenos Aires, Argentina',
    assets: 35,
    marketCap: 0,
    revenue: 5,
    netIncome: 1,
    employees: 18000,
    branches: 630,
    countries: 1,
    globalRank: 115,
    description: "Argentina's largest state-owned bank, Banco de la Nación Argentina has served as the primary instrument of national economic policy and agricultural credit for over a century.",
    keyFact: "With $35 billion in assets and 630 branches, Banco Nación is the largest bank in Argentina and a critical engine for the country's agricultural and industrial financing.",
    ceoQuote: "Banco Nación exists to serve Argentina's productive economy and ensure financial inclusion reaches every province.",
    timeline: [
      { year: 1891, event: "Founded by President Carlos Pellegrini to stabilize Argentina's banking system during a severe financial crisis." },
      { year: 1946, event: "Became a central instrument of Perón's economic policy, dramatically expanding agricultural and industrial lending." },
      { year: 2002, event: "Played a stabilizing role during Argentina's devastating financial crisis, maintaining public trust in the banking system." },
      { year: 2024, event: "Manages $35 billion in assets as Argentina's largest bank, continuing its mission of supporting national development." }
    ],
    comparisons: null
  },
  'banco-galicia': {
    id: 'banco-galicia',
    name: 'Banco Galicia',
    shortName: 'Galicia',
    country: 'Argentina',
    flag: '🇦🇷',
    founded: 1905,
    headquarters: 'Buenos Aires, Argentina',
    assets: 15,
    marketCap: 4,
    revenue: 3,
    netIncome: 0.8,
    employees: 7000,
    branches: 280,
    countries: 1,
    globalRank: 140,
    description: "Argentina's largest private bank, Banco Galicia is widely regarded as the country's most innovative financial institution, known for its strong digital banking platform and customer service.",
    keyFact: "With $15 billion in assets, Banco Galicia is Argentina's leading private-sector bank and a pioneer in digital banking across Latin America.",
    ceoQuote: "In a country of economic volatility, trust is our most valuable asset, and innovation is how we earn it every day.",
    timeline: [
      { year: 1905, event: "Founded by a group of Spanish immigrants from Galicia as a mutual financial institution in Buenos Aires." },
      { year: 1968, event: "Transformed into a full commercial bank and began expanding its branch network across Argentina." },
      { year: 2010, event: "Launched one of Argentina's first comprehensive digital banking platforms, setting new industry standards." },
      { year: 2024, event: "Holds $15 billion in assets and leads Argentina's private banking sector with cutting-edge digital services." }
    ],
    comparisons: null
  },
  'banco-chile': {
    id: 'banco-chile',
    name: 'Banco de Chile',
    shortName: 'Banco de Chile',
    country: 'Chile',
    flag: '🇨🇱',
    founded: 1893,
    headquarters: 'Santiago, Chile',
    assets: 65,
    marketCap: 12,
    revenue: 5,
    netIncome: 1.5,
    employees: 12000,
    branches: 340,
    countries: 1,
    globalRank: 92,
    description: "One of Chile's oldest and most prestigious financial institutions, Banco de Chile is a leading private bank known for its strong profitability and conservative risk management.",
    keyFact: "With $65 billion in assets, Banco de Chile is one of the most profitable banks in Latin America relative to its size.",
    ceoQuote: "Our strength comes from over a century of prudent management and an unwavering commitment to our clients and shareholders.",
    timeline: [
      { year: 1893, event: "Founded through the merger of three major Chilean banks, creating the country's preeminent financial institution." },
      { year: 1982, event: "Restructured during Chile's banking crisis, emerging stronger under new ownership and management." },
      { year: 2008, event: "Merged with Citibank Chile, significantly expanding its corporate and international banking capabilities." },
      { year: 2024, event: "Manages $65 billion in assets and consistently ranks among the most profitable banks in Latin America." }
    ],
    comparisons: null
  },
  bancoestado: {
    id: 'bancoestado',
    name: 'BancoEstado',
    shortName: 'BancoEstado',
    country: 'Chile',
    flag: '🇨🇱',
    founded: 1953,
    headquarters: 'Santiago, Chile',
    assets: 55,
    marketCap: 0,
    revenue: 3,
    netIncome: 0.8,
    employees: 10000,
    branches: 410,
    countries: 1,
    globalRank: 95,
    description: "Chile's only state-owned bank, BancoEstado plays a critical social role by providing financial services to all Chileans, particularly those in underserved and rural communities.",
    keyFact: "With $55 billion in assets and 410 branches, BancoEstado serves more individual customers than any other bank in Chile, including millions of unbanked citizens.",
    ceoQuote: "BancoEstado exists to ensure that every Chilean, regardless of income or location, has access to the financial system.",
    timeline: [
      { year: 1953, event: "Created by the Chilean government through the consolidation of several state financial entities to promote financial inclusion." },
      { year: 1976, event: "Survived Chile's banking privatization wave as the sole remaining state-owned bank due to its social mandate." },
      { year: 2005, event: "Launched the CuentaRUT debit account program, bringing millions of unbanked Chileans into the formal financial system." },
      { year: 2024, event: "Holds $55 billion in assets and remains Chile's primary vehicle for financial inclusion and public banking services." }
    ],
    comparisons: null
  },
  bancolombia: {
    id: 'bancolombia',
    name: 'Bancolombia',
    shortName: 'Bancolombia',
    country: 'Colombia',
    flag: '🇨🇴',
    founded: 1945,
    headquarters: 'Medellín, Colombia',
    assets: 70,
    marketCap: 10,
    revenue: 6,
    netIncome: 1.5,
    employees: 30000,
    branches: 1000,
    countries: 6,
    globalRank: 91,
    description: "Colombia's largest bank by assets, Bancolombia is a leading Central and South American financial group with a strong presence in digital innovation and sustainable finance.",
    keyFact: "With $70 billion in assets and operations in 6 countries, Bancolombia is the largest financial conglomerate in Colombia and a regional banking leader.",
    ceoQuote: "We are building a bank that not only drives economic growth but also contributes to a more sustainable and equitable society.",
    timeline: [
      { year: 1945, event: "Founded as Banco Industrial Colombiano in Medellín to support the country's growing industrial sector." },
      { year: 1998, event: "Merged with Banco de Colombia to create Bancolombia, becoming the largest bank in the country." },
      { year: 2013, event: "Expanded into Central America through the acquisition of HSBC's operations in Panama, Honduras, and El Salvador." },
      { year: 2024, event: "Manages $70 billion in assets across 6 countries, leading Colombia's banking sector in digital transformation." }
    ],
    comparisons: null
  },
  'banco-bogota': {
    id: 'banco-bogota',
    name: 'Banco de Bogotá',
    shortName: 'Banco de Bogotá',
    country: 'Colombia',
    flag: '🇨🇴',
    founded: 1870,
    headquarters: 'Bogotá, Colombia',
    assets: 45,
    marketCap: 5,
    revenue: 4,
    netIncome: 1,
    employees: 15000,
    branches: 700,
    countries: 5,
    globalRank: 105,
    description: "The oldest commercial bank in Colombia, Banco de Bogotá has been a pillar of the nation's financial system for over 150 years and is a key subsidiary of the Grupo Aval conglomerate.",
    keyFact: "With $45 billion in assets and 700 branches across 5 countries, Banco de Bogotá is Colombia's oldest continuously operating bank.",
    ceoQuote: "For more than 150 years, Banco de Bogotá has been synonymous with the financial development of Colombia.",
    timeline: [
      { year: 1870, event: "Founded as Colombia's first commercial bank, establishing the foundation of the country's modern banking system." },
      { year: 1967, event: "Expanded internationally by opening branches in Panama, New York, and other key financial centers." },
      { year: 2010, event: "Acquired BAC International Bank, dramatically expanding its footprint across Central America." },
      { year: 2024, event: "Holds $45 billion in assets as a cornerstone of Grupo Aval, Colombia's largest financial conglomerate." }
    ],
    comparisons: null
  },
  bcp: {
    id: 'bcp',
    name: 'Banco de Crédito del Perú',
    shortName: 'BCP',
    country: 'Peru',
    flag: '🇵🇪',
    founded: 1889,
    headquarters: 'Lima, Peru',
    assets: 55,
    marketCap: 12,
    revenue: 5,
    netIncome: 1.2,
    employees: 20000,
    branches: 400,
    countries: 3,
    globalRank: 96,
    description: "Peru's largest and most influential bank, Banco de Crédito del Perú has been the dominant force in Peruvian banking for over 130 years and is the flagship of the Credicorp group.",
    keyFact: "With $55 billion in assets, BCP commands approximately one-third of Peru's entire banking market, making it the undisputed leader in Peruvian finance.",
    ceoQuote: "BCP's purpose is to transform plans into achievements for millions of Peruvians and the businesses that drive our economy.",
    timeline: [
      { year: 1889, event: "Founded as Banco Italiano by Italian immigrants in Lima to serve the growing commercial needs of Peru." },
      { year: 1942, event: "Renamed to Banco de Crédito del Perú, reflecting its evolution into a truly national institution." },
      { year: 1995, event: "Became the cornerstone of Credicorp, the largest financial holding company in Peru." },
      { year: 2024, event: "Manages $55 billion in assets and leads Peru's banking sector with a dominant market share across all segments." }
    ],
    comparisons: null
  },
  'bbva-peru': {
    id: 'bbva-peru',
    name: 'BBVA Peru',
    shortName: 'BBVA Peru',
    country: 'Peru',
    flag: '🇵🇪',
    founded: 1951,
    headquarters: 'Lima, Peru',
    assets: 28,
    marketCap: 4,
    revenue: 2,
    netIncome: 0.5,
    employees: 6000,
    branches: 300,
    countries: 1,
    globalRank: 118,
    description: "A subsidiary of Spain's BBVA Group, BBVA Peru is the country's second-largest private bank and a leader in digital banking innovation in the Peruvian market.",
    keyFact: "With $28 billion in assets, BBVA Peru benefits from the global expertise of its Spanish parent while maintaining deep roots in the Peruvian economy.",
    ceoQuote: "We are bringing the best of global banking technology to Peru to create opportunities for every customer we serve.",
    timeline: [
      { year: 1951, event: "Founded as Banco Continental to serve Peru's expanding commercial and industrial sectors." },
      { year: 1995, event: "Acquired by Spain's BBVA Group, integrating into one of the world's largest banking networks." },
      { year: 2012, event: "Pioneered mobile banking in Peru, becoming one of the first banks to offer comprehensive digital services." },
      { year: 2024, event: "Holds $28 billion in assets as Peru's second-largest private bank, driving digital transformation in the market." }
    ],
    comparisons: null
  },
  pko: {
    id: 'pko',
    name: 'PKO Bank Polski',
    shortName: 'PKO BP',
    country: 'Poland',
    flag: '🇵🇱',
    founded: 1919,
    headquarters: 'Warsaw, Poland',
    assets: 100,
    marketCap: 18,
    revenue: 8,
    netIncome: 2.5,
    employees: 25000,
    branches: 1000,
    countries: 3,
    globalRank: 83,
    description: "Poland's largest bank by assets, PKO Bank Polski is a national financial champion that serves over 11 million customers and plays a central role in the country's economic development.",
    keyFact: "With $100 billion in assets and over 11 million customers, PKO Bank Polski is the undisputed leader of Poland's banking sector and one of the largest banks in Central Europe.",
    ceoQuote: "PKO BP is more than a bank — it is a symbol of Poland's economic resilience and ambition on the European stage.",
    timeline: [
      { year: 1919, event: "Founded as Pocztowa Kasa Oszczędności to encourage savings among Polish citizens in the newly independent nation." },
      { year: 1950, event: "Transformed into a universal bank serving millions of Polish households during the country's post-war reconstruction." },
      { year: 2004, event: "Listed on the Warsaw Stock Exchange in one of the largest IPOs in Polish history, coinciding with Poland's EU accession." },
      { year: 2024, event: "Manages $100 billion in assets as Poland's largest bank, leading the country's digital banking revolution." }
    ],
    comparisons: null
  },
  pekao: {
    id: 'pekao',
    name: 'Bank Pekao',
    shortName: 'Pekao',
    country: 'Poland',
    flag: '🇵🇱',
    founded: 1929,
    headquarters: 'Warsaw, Poland',
    assets: 60,
    marketCap: 10,
    revenue: 4,
    netIncome: 1.2,
    employees: 14000,
    branches: 700,
    countries: 1,
    globalRank: 94,
    description: "Poland's second-largest bank, Bank Pekao has a storied history of serving the Polish diaspora and domestic market, and today is a major pillar of the country's financial system.",
    keyFact: "With $60 billion in assets, Bank Pekao is Poland's second-largest bank and one of the most valuable companies listed on the Warsaw Stock Exchange.",
    ceoQuote: "Bank Pekao combines nearly a century of tradition with modern innovation to serve the evolving needs of Polish society.",
    timeline: [
      { year: 1929, event: "Founded as Bank Polska Kasa Opieki to serve Polish emigrants and facilitate international financial transfers." },
      { year: 1999, event: "Privatized through acquisition by Italy's UniCredit Group, gaining access to European banking expertise." },
      { year: 2017, event: "Reacquired by Polish state-controlled PZU insurance group, returning the bank to domestic ownership." },
      { year: 2024, event: "Holds $60 billion in assets as Poland's second-largest bank, focused on digital innovation and corporate banking." }
    ],
    comparisons: null
  },
  kbc: {
    id: 'kbc',
    name: 'KBC Group',
    shortName: 'KBC',
    country: 'Belgium',
    flag: '🇧🇪',
    founded: 1998,
    headquarters: 'Brussels, Belgium',
    assets: 340,
    marketCap: 30,
    revenue: 12,
    netIncome: 3,
    employees: 41000,
    branches: 1300,
    countries: 5,
    globalRank: 44,
    description: "A leading European bancassurance group, KBC Group provides integrated banking, insurance, and asset management services across Belgium and Central Europe.",
    keyFact: "With $340 billion in assets and operations in 5 countries, KBC is one of Europe's most efficient bancassurers, consistently delivering top-tier returns on equity.",
    ceoQuote: "KBC's integrated bank-insurance model is our competitive advantage, allowing us to serve clients holistically across every stage of their financial lives.",
    timeline: [
      { year: 1998, event: "Created through the merger of Kredietbank, CERA Bank, and ABB Insurance, forming a unique bancassurance group." },
      { year: 2005, event: "Expanded aggressively into Central Europe, acquiring leading positions in Czech Republic, Hungary, Slovakia, and Bulgaria." },
      { year: 2012, event: "Successfully repaid all government bailout funds received during the 2008 financial crisis ahead of schedule." },
      { year: 2024, event: "Manages $340 billion in assets and is recognized as one of Europe's most profitable and well-managed financial groups." }
    ],
    comparisons: null
  },
  belfius: {
    id: 'belfius',
    name: 'Belfius Bank',
    shortName: 'Belfius',
    country: 'Belgium',
    flag: '🇧🇪',
    founded: 2011,
    headquarters: 'Brussels, Belgium',
    assets: 190,
    marketCap: 0,
    revenue: 4,
    netIncome: 0.8,
    employees: 7000,
    branches: 500,
    countries: 1,
    globalRank: 58,
    description: "Born from the ashes of the Dexia crisis, Belfius Bank is a Belgian state-owned financial institution that has reinvented itself as a modern, digitally focused bank serving Belgian households, businesses, and public institutions.",
    keyFact: "With $190 billion in assets, Belfius has transformed from a crisis-era rescue into one of Belgium's most innovative and stable banking institutions.",
    ceoQuote: "Belfius has proven that a bank born from crisis can become a force for innovation, sustainability, and trust.",
    timeline: [
      { year: 2011, event: "Created when the Belgian government nationalized Dexia Bank Belgium for €4 billion during the European sovereign debt crisis." },
      { year: 2012, event: "Rebranded as Belfius Bank and launched a comprehensive transformation strategy focused on the Belgian domestic market." },
      { year: 2018, event: "Plans for an IPO were shelved as the government decided to retain full ownership of the profitable institution." },
      { year: 2024, event: "Manages $190 billion in assets as a fully state-owned bank, leading Belgium's digital banking innovation." }
    ],
    comparisons: null
  },

  intesa: {
    id: 'intesa',
    name: 'Intesa Sanpaolo',
    shortName: 'Intesa',
    country: 'Italy',
    flag: '🇮🇹',
    founded: 2007,
    headquarters: 'Turin, Italy',
    assets: 1050,
    marketCap: 65,
    revenue: 28,
    netIncome: 8,
    employees: 97000,
    branches: 4400,
    countries: 40,
    globalRank: 24,
    description: "Italy's largest banking group by market capitalization, formed from the 2007 merger of Banca Intesa and Sanpaolo IMI, serving as a cornerstone of European finance.",
    keyFact: "With $1.05 trillion in assets, Intesa Sanpaolo is the largest bank in Italy and one of the most profitable in Europe, operating across 40 countries.",
    ceoQuote: "Our strength lies in our ability to combine growth with sustainability, creating value for all stakeholders across the communities we serve.",
    timeline: [
      { year: 2007, event: "Founded through the merger of Banca Intesa and Sanpaolo IMI, creating Italy's largest banking group." },
      { year: 2011, event: "Maintained stability during the European sovereign debt crisis, reinforcing its role as a pillar of the Italian financial system." },
      { year: 2020, event: "Completed the acquisition of UBI Banca, further consolidating its domestic market leadership." },
      { year: 2024, event: "Manages over $1 trillion in assets with 97,000 employees across 4,400 branches in 40 countries worldwide." }
    ],
    comparisons: null
  },
  unicredit: {
    id: 'unicredit',
    name: 'UniCredit',
    shortName: 'UniCredit',
    country: 'Italy',
    flag: '🇮🇹',
    founded: 1998,
    headquarters: 'Milan, Italy',
    assets: 950,
    marketCap: 60,
    revenue: 24,
    netIncome: 7,
    employees: 82000,
    branches: 3500,
    countries: 13,
    globalRank: 26,
    description: "A major pan-European commercial bank formed in 1998 through the merger of several Italian banks, with deep roots in Central and Eastern European markets.",
    keyFact: "With $950 billion in assets, UniCredit operates one of the largest banking networks in Central and Eastern Europe, spanning 13 countries from its Milan headquarters.",
    ceoQuote: "We are building a bank that is simpler, more efficient, and better equipped to serve clients across Europe with a unified vision.",
    timeline: [
      { year: 1998, event: "Formed through the merger of Credito Italiano and several other Italian banking institutions." },
      { year: 2005, event: "Merged with German HypoVereinsbank, becoming one of Europe's largest cross-border banking groups." },
      { year: 2016, event: "Launched a major restructuring plan and €13 billion capital increase to strengthen its balance sheet." },
      { year: 2024, event: "Operates with $950 billion in assets and 82,000 employees across 3,500 branches in 13 countries." }
    ],
    comparisons: null
  },
  dnb: {
    id: 'dnb',
    name: 'DNB ASA',
    shortName: 'DNB',
    country: 'Norway',
    flag: '🇳🇴',
    founded: 1822,
    headquarters: 'Oslo, Norway',
    assets: 340,
    marketCap: 35,
    revenue: 8,
    netIncome: 3.5,
    employees: 9000,
    branches: 52,
    countries: 10,
    globalRank: 43,
    description: "Norway's largest financial services group with over 200 years of history, serving as the backbone of the Norwegian economy and a major lender to the maritime and energy sectors.",
    keyFact: "With $340 billion in assets, DNB is the dominant bank in Norway and one of the world's leading financiers of the shipping and offshore energy industries.",
    ceoQuote: "As Norway's largest bank, we have a responsibility to drive sustainable economic growth while helping our customers navigate an evolving financial landscape.",
    timeline: [
      { year: 1822, event: "Founded as Christiania Sparebank, one of Norway's earliest savings banks." },
      { year: 1990, event: "Formed Den norske Bank through the merger of Bergen Bank and Den norske Creditbank." },
      { year: 2012, event: "Rebranded as DNB ASA after merging with Gjensidige NOR, consolidating Norway's largest financial group." },
      { year: 2024, event: "Manages $340 billion in assets with 9,000 employees, maintaining its position as Norway's premier bank." }
    ],
    comparisons: null
  },
  sparebank1: {
    id: 'sparebank1',
    name: 'SpareBank 1',
    shortName: 'SpareBank 1',
    country: 'Norway',
    flag: '🇳🇴',
    founded: 1823,
    headquarters: 'Trondheim, Norway',
    assets: 85,
    marketCap: 5,
    revenue: 3,
    netIncome: 1,
    employees: 8000,
    branches: 180,
    countries: 1,
    globalRank: 87,
    description: "A Norwegian banking alliance of independent savings banks that cooperate under a shared brand, providing comprehensive financial services to local communities across Norway.",
    keyFact: "With $85 billion in combined assets, SpareBank 1 operates 180 branches throughout Norway, making it the country's second-largest banking alliance.",
    ceoQuote: "Our cooperative model proves that local presence and deep community ties create lasting financial strength for both the bank and the people we serve.",
    timeline: [
      { year: 1823, event: "The earliest member banks were founded as local Norwegian savings institutions serving their communities." },
      { year: 1996, event: "The SpareBank 1 alliance was formally established to enable independent savings banks to collaborate and compete." },
      { year: 2010, event: "Expanded product offerings through joint ventures in insurance, asset management, and digital banking." },
      { year: 2024, event: "Operates with $85 billion in assets and 8,000 employees across 180 branches throughout Norway." }
    ],
    comparisons: null
  },
  'danske-bank': {
    id: 'danske-bank',
    name: 'Danske Bank',
    shortName: 'Danske',
    country: 'Denmark',
    flag: '🇩🇰',
    founded: 1871,
    headquarters: 'Copenhagen, Denmark',
    assets: 550,
    marketCap: 22,
    revenue: 12,
    netIncome: 3,
    employees: 21000,
    branches: 200,
    countries: 15,
    globalRank: 34,
    description: "Denmark's largest bank and a leading Nordic financial institution, offering a broad range of banking services across Scandinavia and Northern Europe for over 150 years.",
    keyFact: "With $550 billion in assets, Danske Bank is the largest financial institution in Denmark and a systemically important bank for the entire Nordic region.",
    ceoQuote: "We are committed to being a trusted partner for our customers, rebuilding confidence through transparency, strong governance, and responsible banking.",
    timeline: [
      { year: 1871, event: "Founded as Den Danske Landmandsbank in Copenhagen to serve Denmark's agricultural sector." },
      { year: 2000, event: "Acquired Finnish bank Sampo Pankki and Norwegian Fokus Bank, expanding into a major Nordic banking group." },
      { year: 2018, event: "Faced a major money laundering scandal involving its Estonian branch, leading to significant governance reforms." },
      { year: 2024, event: "Manages $550 billion in assets with 21,000 employees across 200 branches in 15 countries." }
    ],
    comparisons: null
  },
  'jyske-bank': {
    id: 'jyske-bank',
    name: 'Jyske Bank',
    shortName: 'Jyske',
    country: 'Denmark',
    flag: '🇩🇰',
    founded: 1967,
    headquarters: 'Silkeborg, Denmark',
    assets: 95,
    marketCap: 4,
    revenue: 3,
    netIncome: 0.7,
    employees: 4000,
    branches: 80,
    countries: 5,
    globalRank: 84,
    description: "Denmark's third-largest independent bank, known for its customer-centric approach and innovative banking practices rooted in the Jutland peninsula.",
    keyFact: "With $95 billion in assets, Jyske Bank is one of Denmark's most distinctive financial institutions, famously offering the world's first negative interest rate mortgage in 2019.",
    ceoQuote: "We believe that genuine personal advice and unconventional thinking are what set a bank apart in an increasingly digital world.",
    timeline: [
      { year: 1967, event: "Founded through the merger of four Jutland-based banks to create a strong regional banking institution." },
      { year: 2001, event: "Revolutionized its branch concept with open-plan layouts and a customer-first philosophy that gained international attention." },
      { year: 2019, event: "Made global headlines by offering negative interest rate mortgages, a first in the history of banking." },
      { year: 2024, event: "Operates with $95 billion in assets and 4,000 employees across 80 branches in 5 countries." }
    ],
    comparisons: null
  },
  erste: {
    id: 'erste',
    name: 'Erste Group',
    shortName: 'Erste',
    country: 'Austria',
    flag: '🇦🇹',
    founded: 1819,
    headquarters: 'Vienna, Austria',
    assets: 320,
    marketCap: 20,
    revenue: 12,
    netIncome: 3,
    employees: 46000,
    branches: 2000,
    countries: 7,
    globalRank: 45,
    description: "One of the largest financial services providers in Central and Eastern Europe, tracing its origins to the first Austrian savings bank founded over two centuries ago in Vienna.",
    keyFact: "With $320 billion in assets, Erste Group serves 16 million customers across 2,000 branches in 7 Central and Eastern European countries.",
    ceoQuote: "Financial literacy and inclusion are at the heart of our mission — we exist to help people in Central Europe prosper and build financial independence.",
    timeline: [
      { year: 1819, event: "Founded as the Erste oesterreichische Spar-Casse, the first savings bank in the Austrian Empire." },
      { year: 1997, event: "Listed on the Vienna Stock Exchange and began expanding across Central and Eastern Europe." },
      { year: 2008, event: "Navigated the global financial crisis while maintaining operations across its CEE network." },
      { year: 2024, event: "Manages $320 billion in assets with 46,000 employees across 2,000 branches in 7 countries." }
    ],
    comparisons: null
  },
  'raiffeisen-intl': {
    id: 'raiffeisen-intl',
    name: 'Raiffeisen Bank International',
    shortName: 'RBI',
    country: 'Austria',
    flag: '🇦🇹',
    founded: 1927,
    headquarters: 'Vienna, Austria',
    assets: 200,
    marketCap: 8,
    revenue: 8,
    netIncome: 2,
    employees: 45000,
    branches: 1800,
    countries: 13,
    globalRank: 59,
    description: "An Austrian banking group with one of the most extensive networks in Central and Eastern Europe, built on the cooperative principles of Friedrich Wilhelm Raiffeisen.",
    keyFact: "With $200 billion in assets, Raiffeisen Bank International operates in 13 countries, making it one of the most geographically diversified banks in the CEE region.",
    ceoQuote: "Our deep roots in Central and Eastern Europe give us a unique understanding of the region's potential and allow us to be a bridge between East and West.",
    timeline: [
      { year: 1927, event: "Established as part of the Austrian Raiffeisen cooperative banking movement to serve agricultural communities." },
      { year: 1991, event: "Pioneered expansion into Central and Eastern Europe following the fall of the Iron Curtain, entering Hungary, Poland, and the Czech Republic." },
      { year: 2010, event: "Merged Raiffeisen International with the corporate banking arm of Raiffeisen Zentralbank to form Raiffeisen Bank International." },
      { year: 2024, event: "Operates with $200 billion in assets and 45,000 employees across 1,800 branches in 13 countries." }
    ],
    comparisons: null
  },
  aib: {
    id: 'aib',
    name: 'AIB Group',
    shortName: 'AIB',
    country: 'Ireland',
    flag: '🇮🇪',
    founded: 1966,
    headquarters: 'Dublin, Ireland',
    assets: 115,
    marketCap: 10,
    revenue: 5,
    netIncome: 2,
    employees: 9000,
    branches: 170,
    countries: 3,
    globalRank: 77,
    description: "One of Ireland's leading retail and commercial banks, serving personal and business customers across the island of Ireland and the United Kingdom.",
    keyFact: "With $115 billion in assets, AIB Group is one of the two pillar banks of the Irish financial system, serving over 3 million customers.",
    ceoQuote: "We are focused on being a bank that customers, colleagues, and communities can be proud of, while delivering sustainable returns for shareholders.",
    timeline: [
      { year: 1966, event: "Formed through the merger of three long-established Irish banks: Provincial Bank, Royal Bank, and Munster & Leinster Bank." },
      { year: 2001, event: "Became embroiled in a foreign exchange trading scandal at its subsidiary AllFirst Bank in the United States." },
      { year: 2010, event: "Required a €20.7 billion government bailout during the Irish banking crisis, with the state taking a majority stake." },
      { year: 2024, event: "Manages $115 billion in assets with 9,000 employees across 170 branches, having substantially repaid government support." }
    ],
    comparisons: null
  },
  'bank-of-ireland': {
    id: 'bank-of-ireland',
    name: 'Bank of Ireland',
    shortName: 'Bank of Ireland',
    country: 'Ireland',
    flag: '🇮🇪',
    founded: 1783,
    headquarters: 'Dublin, Ireland',
    assets: 140,
    marketCap: 8,
    revenue: 6,
    netIncome: 2,
    employees: 10000,
    branches: 200,
    countries: 3,
    globalRank: 71,
    description: "Ireland's oldest bank and one of its most storied financial institutions, providing a full range of banking and financial services for nearly 250 years.",
    keyFact: "With $140 billion in assets, Bank of Ireland is Ireland's oldest continuously operating bank, founded just two decades after the establishment of the Irish Parliament.",
    ceoQuote: "Our heritage gives us a deep connection to the communities we serve, and our future is about harnessing innovation to deliver for our customers.",
    timeline: [
      { year: 1783, event: "Established by royal charter of the Irish Parliament, making it one of the oldest banks in continuous operation worldwide." },
      { year: 1922, event: "Navigated the transition to the Irish Free State and continued operations as a pillar of the new nation's financial system." },
      { year: 2011, event: "Received state support during the Irish banking crisis but was the only major Irish bank to avoid majority government ownership." },
      { year: 2024, event: "Operates with $140 billion in assets and 10,000 employees across 200 branches in 3 countries." }
    ],
    comparisons: null
  },
  'millennium-bcp': {
    id: 'millennium-bcp',
    name: 'Millennium BCP',
    shortName: 'Millennium BCP',
    country: 'Portugal',
    flag: '🇵🇹',
    founded: 1985,
    headquarters: 'Lisbon, Portugal',
    assets: 95,
    marketCap: 6,
    revenue: 4,
    netIncome: 0.8,
    employees: 16000,
    branches: 450,
    countries: 6,
    globalRank: 84,
    description: "Portugal's largest private-sector bank, offering retail and commercial banking services with significant operations in Poland and Mozambique alongside its domestic market.",
    keyFact: "With $95 billion in assets, Millennium BCP is the largest privately owned bank in Portugal and has built a notable international presence including Bank Millennium in Poland.",
    ceoQuote: "Digital transformation and operational efficiency are the foundations upon which we build a stronger, more resilient bank for our customers and shareholders.",
    timeline: [
      { year: 1985, event: "Founded as Banco Comercial Português in the wave of Portuguese banking privatization." },
      { year: 2000, event: "Expanded internationally with acquisitions in Poland, Greece, and Mozambique, establishing a diversified European presence." },
      { year: 2012, event: "Underwent significant restructuring and capital increases following the European sovereign debt crisis." },
      { year: 2024, event: "Manages $95 billion in assets with 16,000 employees across 450 branches in 6 countries." }
    ],
    comparisons: null
  },
  cgd: {
    id: 'cgd',
    name: 'Caixa Geral de Depósitos',
    shortName: 'CGD',
    country: 'Portugal',
    flag: '🇵🇹',
    founded: 1876,
    headquarters: 'Lisbon, Portugal',
    assets: 115,
    marketCap: 0,
    revenue: 4,
    netIncome: 1,
    employees: 14000,
    branches: 600,
    countries: 8,
    globalRank: 76,
    description: "Portugal's largest and only state-owned bank, serving as the country's premier savings institution and a key instrument of national economic policy for nearly 150 years.",
    keyFact: "With $115 billion in assets, Caixa Geral de Depósitos is the largest bank in Portugal and remains fully state-owned, acting as the financial backbone of the Portuguese economy.",
    ceoQuote: "As a public bank, our mandate goes beyond profit — we exist to support the Portuguese economy, its businesses, and its families in building a prosperous future.",
    timeline: [
      { year: 1876, event: "Established by the Portuguese government as a state savings institution and public credit facility." },
      { year: 1969, event: "Expanded into a universal bank offering full commercial and investment banking services." },
      { year: 2017, event: "Received a €3.9 billion state recapitalization and launched a comprehensive restructuring plan." },
      { year: 2024, event: "Operates with $115 billion in assets and 14,000 employees across 600 branches in 8 countries as Portugal's largest bank." }
    ],
    comparisons: null
  },
  nbg: {
    id: 'nbg',
    name: 'National Bank of Greece',
    shortName: 'NBG',
    country: 'Greece',
    flag: '🇬🇷',
    founded: 1841,
    headquarters: 'Athens, Greece',
    assets: 80,
    marketCap: 8,
    revenue: 4,
    netIncome: 1,
    employees: 8000,
    branches: 350,
    countries: 10,
    globalRank: 89,
    description: "The oldest and one of the most prominent commercial banks in Greece, having served as the country's central bank before the establishment of the Bank of Greece.",
    keyFact: "With $80 billion in assets, National Bank of Greece is the country's oldest bank at over 180 years old and once served as Greece's de facto central bank.",
    ceoQuote: "Greece's banking sector has emerged stronger from its trials, and NBG is leading the way in demonstrating that resilience and renewal are possible.",
    timeline: [
      { year: 1841, event: "Founded in Athens as Greece's first banking institution, initially serving as both a commercial and central bank." },
      { year: 1928, event: "Relinquished central banking functions to the newly established Bank of Greece, focusing on commercial banking." },
      { year: 2015, event: "Survived the Greek debt crisis and capital controls, participating in a major recapitalization to restore financial stability." },
      { year: 2024, event: "Manages $80 billion in assets with 8,000 employees across 350 branches in 10 countries." }
    ],
    comparisons: null
  },
  piraeus: {
    id: 'piraeus',
    name: 'Piraeus Bank',
    shortName: 'Piraeus',
    country: 'Greece',
    flag: '🇬🇷',
    founded: 1916,
    headquarters: 'Athens, Greece',
    assets: 75,
    marketCap: 6,
    revenue: 3,
    netIncome: 1,
    employees: 12000,
    branches: 400,
    countries: 4,
    globalRank: 90,
    description: "Greece's largest bank by total assets following its absorption of significant portfolios during the Greek financial crisis, now focused on domestic recovery and digital transformation.",
    keyFact: "With $75 billion in assets, Piraeus Bank became Greece's largest bank after acquiring the Greek operations of three foreign banks during the 2010s financial crisis.",
    ceoQuote: "Our transformation journey is about more than financial recovery — it is about building a modern, digital bank that powers the Greek economy forward.",
    timeline: [
      { year: 1916, event: "Founded in Piraeus, the historic port city of Athens, as a regional commercial bank." },
      { year: 2013, event: "Absorbed the Greek operations of Bank of Cyprus, Cyprus Popular Bank, and Hellenic Bank, becoming Greece's largest lender." },
      { year: 2021, event: "Completed a landmark €1.4 billion capital increase to accelerate balance sheet de-risking and digital transformation." },
      { year: 2024, event: "Operates with $75 billion in assets and 12,000 employees across 400 branches in 4 countries." }
    ],
    comparisons: null
  },
  'bank-leumi': {
    id: 'bank-leumi',
    name: 'Bank Leumi',
    shortName: 'Leumi',
    country: 'Israel',
    flag: '🇮🇱',
    founded: 1902,
    headquarters: 'Tel Aviv, Israel',
    assets: 170,
    marketCap: 18,
    revenue: 7,
    netIncome: 2.5,
    employees: 11000,
    branches: 200,
    countries: 5,
    globalRank: 62,
    description: "One of Israel's oldest and largest banks, founded in the pre-state era as the financial arm of the Zionist movement and now a pillar of the Israeli economy.",
    keyFact: "With $170 billion in assets, Bank Leumi predates the State of Israel by 46 years and has been instrumental in financing the nation's economic development since its inception.",
    ceoQuote: "Innovation is in our DNA — from financing the building of a nation to leading the digital banking revolution in Israel.",
    timeline: [
      { year: 1902, event: "Founded in Jaffa as the Anglo-Palestine Company, serving as the financial institution of the Zionist movement." },
      { year: 1950, event: "Renamed Bank Leumi le-Israel after the establishment of the State of Israel, becoming a national banking institution." },
      { year: 2005, event: "Privatized as part of Israel's banking reform, transitioning from government to private ownership." },
      { year: 2024, event: "Manages $170 billion in assets with 11,000 employees across 200 branches in 5 countries." }
    ],
    comparisons: null
  },
  'bank-hapoalim': {
    id: 'bank-hapoalim',
    name: 'Bank Hapoalim',
    shortName: 'Hapoalim',
    country: 'Israel',
    flag: '🇮🇱',
    founded: 1921,
    headquarters: 'Tel Aviv, Israel',
    assets: 175,
    marketCap: 17,
    revenue: 7,
    netIncome: 2.5,
    employees: 11000,
    branches: 200,
    countries: 5,
    globalRank: 61,
    description: "Israel's largest bank by assets, originally founded by the labor Zionist movement and now a leading commercial bank serving millions of customers domestically and internationally.",
    keyFact: "With $175 billion in assets, Bank Hapoalim is Israel's largest bank and a key financier of the country's thriving technology sector.",
    ceoQuote: "As Israel's largest bank, we are committed to fueling the innovation economy while providing stable, reliable banking to every segment of society.",
    timeline: [
      { year: 1921, event: "Founded by the Histadrut labor federation in British Mandate Palestine to serve workers and cooperative enterprises." },
      { year: 1983, event: "Caught up in the Israeli bank stock crisis, leading to government intervention and eventual restructuring of the banking sector." },
      { year: 2005, event: "Sold by the government to private investors as part of comprehensive Israeli banking reforms." },
      { year: 2024, event: "Operates with $175 billion in assets and 11,000 employees across 200 branches in 5 countries as Israel's largest bank." }
    ],
    comparisons: null
  },
  qnb: {
    id: 'qnb',
    name: 'Qatar National Bank',
    shortName: 'QNB',
    country: 'Qatar',
    flag: '🇶🇦',
    founded: 1964,
    headquarters: 'Doha, Qatar',
    assets: 350,
    marketCap: 42,
    revenue: 14,
    netIncome: 5,
    employees: 28000,
    branches: 800,
    countries: 28,
    globalRank: 41,
    description: "The largest bank in the Middle East and Africa by assets, majority-owned by the Qatar Investment Authority, with an expansive network spanning 28 countries across three continents.",
    keyFact: "With $350 billion in assets, QNB is the largest financial institution in the Middle East and Africa, operating in more countries than any other bank in the region.",
    ceoQuote: "Our vision is to be a leading bank in the Middle East, Africa, and Southeast Asia, and our geographic diversification strategy is delivering that ambition.",
    timeline: [
      { year: 1964, event: "Founded as the first Qatari-owned commercial bank, with the government as the majority shareholder." },
      { year: 2008, event: "Began aggressive international expansion, acquiring stakes in banks across Southeast Asia and Africa." },
      { year: 2016, event: "Acquired a majority stake in Turkey's Finansbank, significantly expanding its presence in the Eastern Mediterranean." },
      { year: 2024, event: "Manages $350 billion in assets with 28,000 employees across 800 branches in 28 countries." }
    ],
    comparisons: null
  },
  cbq: {
    id: 'cbq',
    name: 'Commercial Bank of Qatar',
    shortName: 'CBQ',
    country: 'Qatar',
    flag: '🇶🇦',
    founded: 1975,
    headquarters: 'Doha, Qatar',
    assets: 45,
    marketCap: 4,
    revenue: 2,
    netIncome: 0.6,
    employees: 3000,
    branches: 30,
    countries: 4,
    globalRank: 104,
    description: "Qatar's first privately owned commercial bank, providing a comprehensive range of banking and financial services to retail and corporate customers in the Gulf region.",
    keyFact: "With $45 billion in assets, the Commercial Bank of Qatar was the first privately owned bank in the country and has grown into a respected regional institution.",
    ceoQuote: "We are focused on delivering innovative financial solutions that reflect the dynamism and ambition of Qatar and the broader Gulf economy.",
    timeline: [
      { year: 1975, event: "Founded as Qatar's first privately owned commercial bank, marking a milestone in the country's financial development." },
      { year: 2000, event: "Expanded regionally through investments in banking subsidiaries in Turkey, the UAE, and Oman." },
      { year: 2014, event: "Partnered with National Bank of Oman and acquired a strategic stake, strengthening its Gulf footprint." },
      { year: 2024, event: "Operates with $45 billion in assets and 3,000 employees across 30 branches in 4 countries." }
    ],
    comparisons: null
  },
  'access-bank': {
    id: 'access-bank',
    name: 'Access Bank',
    shortName: 'Access Bank',
    country: 'Nigeria',
    flag: '🇳🇬',
    founded: 1989,
    headquarters: 'Lagos, Nigeria',
    assets: 25,
    marketCap: 3,
    revenue: 3,
    netIncome: 0.5,
    employees: 30000,
    branches: 700,
    countries: 12,
    globalRank: 122,
    description: "Nigeria's largest bank by assets and one of Africa's most ambitious financial institutions, rapidly expanding across the continent through strategic acquisitions.",
    keyFact: "With $25 billion in assets, Access Bank is Nigeria's largest bank and has built the most extensive pan-African banking network among Nigerian lenders, operating in 12 countries.",
    ceoQuote: "Africa's gateway to the world starts with building a financial institution that Africans can trust and that the world can rely on.",
    timeline: [
      { year: 1989, event: "Founded in Lagos as a commercial bank, receiving its banking license from the Central Bank of Nigeria." },
      { year: 2005, event: "Successfully completed one of Nigeria's largest banking recapitalizations, emerging as a top-tier financial institution." },
      { year: 2019, event: "Merged with Diamond Bank to become Nigeria's largest bank by assets and customer base." },
      { year: 2024, event: "Operates with $25 billion in assets and 30,000 employees across 700 branches in 12 African countries." }
    ],
    comparisons: null
  },
  'zenith-bank': {
    id: 'zenith-bank',
    name: 'Zenith Bank',
    shortName: 'Zenith',
    country: 'Nigeria',
    flag: '🇳🇬',
    founded: 1990,
    headquarters: 'Lagos, Nigeria',
    assets: 22,
    marketCap: 3,
    revenue: 2.5,
    netIncome: 0.6,
    employees: 8000,
    branches: 500,
    countries: 6,
    globalRank: 126,
    description: "One of Nigeria's most profitable and well-capitalized banks, known for its strong corporate banking franchise and conservative risk management approach.",
    keyFact: "With $22 billion in assets, Zenith Bank has consistently ranked among the most profitable banks in Nigeria and across West Africa.",
    ceoQuote: "Our philosophy is simple: prudent risk management and investment in technology create the foundation for sustainable growth in Africa's largest economy.",
    timeline: [
      { year: 1990, event: "Founded in Lagos by Jim Ovia with a vision to build a world-class financial institution in Nigeria." },
      { year: 2004, event: "Listed on the Nigerian Stock Exchange and became one of the best-capitalized banks following sector reforms." },
      { year: 2013, event: "Expanded internationally with subsidiaries in Ghana, Sierra Leone, Gambia, and the United Kingdom." },
      { year: 2024, event: "Manages $22 billion in assets with 8,000 employees across 500 branches in 6 countries." }
    ],
    comparisons: null
  },
  kcb: {
    id: 'kcb',
    name: 'KCB Group',
    shortName: 'KCB',
    country: 'Kenya',
    flag: '🇰🇪',
    founded: 1896,
    headquarters: 'Nairobi, Kenya',
    assets: 12,
    marketCap: 1.5,
    revenue: 1.5,
    netIncome: 0.4,
    employees: 7000,
    branches: 500,
    countries: 7,
    globalRank: 145,
    description: "East Africa's largest banking group, tracing its roots to 1896 when a branch of the National Bank of India opened in Mombasa, now operating across seven countries in the region.",
    keyFact: "KCB Group maintains the largest ATM network in Kenya and was the first financial group to establish subsidiaries in all East African Community countries.",
    ceoQuote: "Our mission is to be the preferred financial solutions provider in Africa with global reach.",
    timeline: [
      { year: 1896, event: "Founded as a branch of the National Bank of India in Mombasa, Kenya." },
      { year: 1970, event: "Government of Kenya acquired 100% ownership and renamed it Kenya Commercial Bank." },
      { year: 2019, event: "Acquired National Bank of Kenya, consolidating its position as East Africa's largest bank." },
      { year: 2024, event: "Operates over 500 branches across 7 countries with $12B in total assets." }
    ],
    comparisons: null
  },
  'equity-group': {
    id: 'equity-group',
    name: 'Equity Group',
    shortName: 'Equity',
    country: 'Kenya',
    flag: '🇰🇪',
    founded: 1984,
    headquarters: 'Nairobi, Kenya',
    assets: 13,
    marketCap: 2,
    revenue: 1.5,
    netIncome: 0.5,
    employees: 12000,
    branches: 350,
    countries: 6,
    globalRank: 142,
    description: "The largest financial services conglomerate in East and Central Africa, founded as a small building society to provide mortgages to low-income Kenyans and now serving over 21 million customers.",
    keyFact: "Equity Group was ranked 66th out of 66 financial institutions in Kenya in 1991 and nearly closed by regulators, but grew to become the continent's second-strongest bank brand by 2024.",
    ceoQuote: "We exist to transform lives, give dignity, and expand opportunities for wealth creation.",
    timeline: [
      { year: 1984, event: "Founded as Equity Building Society to provide mortgage financing for low-income Kenyans." },
      { year: 2004, event: "Converted to a full commercial bank, acquiring a comprehensive banking license." },
      { year: 2015, event: "Acquired Pro-credit Bank in the DRC, expanding into Central Africa." },
      { year: 2024, event: "Serves over 21 million customers across 6 countries with $13B in assets." }
    ],
    comparisons: null
  },
  attijariwafa: {
    id: 'attijariwafa',
    name: 'Attijariwafa Bank',
    shortName: 'Attijariwafa',
    country: 'Morocco',
    flag: '🇲🇦',
    founded: 2003,
    headquarters: 'Casablanca, Morocco',
    assets: 65,
    marketCap: 10,
    revenue: 5,
    netIncome: 1.2,
    employees: 20000,
    branches: 5500,
    countries: 25,
    globalRank: 93,
    description: "Morocco's largest bank and one of Africa's top five financial institutions by assets, created through the 2003 merger of century-old Banque Commerciale du Maroc and Wafabank.",
    keyFact: "Attijariwafa operates the densest branch network in Africa with over 5,500 branches across 25 countries, serving more than 12 million clients.",
    ceoQuote: "Our ambition is to be the leading financial group accompanying Africa's economic transformation.",
    timeline: [
      { year: 1904, event: "Wafabank, one of the predecessor institutions, was founded in Morocco." },
      { year: 1911, event: "Banque Commerciale du Maroc established as a branch of Banque Transatlantique in Tangier." },
      { year: 2003, event: "Attijariwafa Bank created through the merger of Wafabank and Banque Commerciale du Maroc." },
      { year: 2024, event: "Ranks among Africa's top five banks with $65B in assets across 25 countries." }
    ],
    comparisons: null
  },
  bmce: {
    id: 'bmce',
    name: 'BMCE Bank of Africa',
    shortName: 'Bank of Africa',
    country: 'Morocco',
    flag: '🇲🇦',
    founded: 1959,
    headquarters: 'Casablanca, Morocco',
    assets: 35,
    marketCap: 4,
    revenue: 2,
    netIncome: 0.5,
    employees: 13000,
    branches: 1600,
    countries: 20,
    globalRank: 114,
    description: "Morocco's third-largest bank and a pan-African banking pioneer, originally founded to support Morocco's foreign trade and now operating across 20 African countries under the Bank of Africa brand.",
    keyFact: "BMCE was the first bank in the MENA region to obtain ISO 14001 environmental certification and the first to issue a green bond at COP 22.",
    ceoQuote: "Africa is the continent of the future, and our role is to be the financial bridge connecting its economies.",
    timeline: [
      { year: 1959, event: "Founded as Banque Marocaine du Commerce Extérieur to support Morocco's foreign trade." },
      { year: 1995, event: "Privatized and acquired by financier Othman Benjelloun through Royale Marocaine d'Assurance." },
      { year: 2010, event: "Acquired Bank of Africa network, gaining presence across multiple African nations." },
      { year: 2024, event: "Operates in 20 countries across Africa and Europe with $35B in total assets." }
    ],
    comparisons: null
  },
  gcb: {
    id: 'gcb',
    name: 'GCB Bank',
    shortName: 'GCB',
    country: 'Ghana',
    flag: '🇬🇭',
    founded: 1953,
    headquarters: 'Accra, Ghana',
    assets: 4,
    marketCap: 0.5,
    revenue: 0.5,
    netIncome: 0.15,
    employees: 2000,
    branches: 200,
    countries: 1,
    globalRank: 190,
    description: "Ghana's largest bank by total assets and industry deposits, originally founded as the Bank of the Gold Coast to serve Ghanaian traders and farmers excluded from expatriate banking services.",
    keyFact: "In 2017, GCB acquired two failing banks — UT Bank and Capital Bank — in a single day, an unprecedented transaction in Ghana's banking history.",
    ceoQuote: "We remain committed to driving financial inclusion and supporting Ghana's socio-economic development.",
    timeline: [
      { year: 1953, event: "Founded as Bank of the Gold Coast with 27 employees to serve the emerging nation." },
      { year: 1957, event: "Rebranded to Ghana Commercial Bank following independence from Britain." },
      { year: 2017, event: "Acquired UT Bank and Capital Bank in an unprecedented same-day Purchase and Assumption transaction." },
      { year: 2024, event: "Largest bank in Ghana with over 200 branches and 14.2% of total industry deposits." }
    ],
    comparisons: null
  },
  'ecobank-ghana': {
    id: 'ecobank-ghana',
    name: 'Ecobank Ghana',
    shortName: 'Ecobank GH',
    country: 'Ghana',
    flag: '🇬🇭',
    founded: 1990,
    headquarters: 'Accra, Ghana',
    assets: 3,
    marketCap: 0.3,
    revenue: 0.4,
    netIncome: 0.1,
    employees: 1500,
    branches: 70,
    countries: 1,
    globalRank: 195,
    description: "A leading Ghanaian subsidiary of the pan-African Ecobank Group, which operates across 32 African countries, originally licensed as a merchant bank in 1989 before converting to universal banking.",
    keyFact: "Ecobank Ghana is part of the Ecobank-Nedbank alliance, currently the largest banking network on the African continent by geographic coverage.",
    ceoQuote: "Our pan-African platform gives us an unmatched ability to serve businesses and individuals across the continent.",
    timeline: [
      { year: 1990, event: "Commenced banking operations in Accra as part of the pan-African Ecobank network." },
      { year: 2003, event: "Acquired a universal banking license, expanding beyond merchant banking services." },
      { year: 2012, event: "Acquired The Trust Bank in a share swap, becoming the number one bank in Ghana by assets." },
      { year: 2024, event: "Operates 70 branches and over 200 ATMs as part of Ecobank's 32-country African network." }
    ],
    comparisons: null
  },
  'anz-nz': {
    id: 'anz-nz',
    name: 'ANZ New Zealand',
    shortName: 'ANZ NZ',
    country: 'New Zealand',
    flag: '🇳🇿',
    founded: 1840,
    headquarters: 'Wellington, New Zealand',
    assets: 130,
    marketCap: 0,
    revenue: 5,
    netIncome: 2,
    employees: 8000,
    branches: 130,
    countries: 1,
    globalRank: 73,
    description: "New Zealand's oldest and largest bank, tracing its origins to 1840 when the Union Bank of Australia accompanied settlers to Port Nicholson, now serving nearly one in two New Zealanders.",
    keyFact: "ANZ is New Zealand's largest company by profit and assets, and the country's biggest corporate taxpayer, serving nearly half of all New Zealanders.",
    ceoQuote: "For over 180 years we have been here to support New Zealanders with their financial goals.",
    timeline: [
      { year: 1840, event: "Union Bank of Australia opened New Zealand's first commercial bank branch at Port Nicholson." },
      { year: 1989, event: "Acquired PostBank from the New Zealand government in a major privatization deal." },
      { year: 2003, event: "Purchased the National Bank of New Zealand from Lloyds Bank, doubling its presence." },
      { year: 2024, event: "New Zealand's largest bank with $130B in assets and 130 branches nationwide." }
    ],
    comparisons: null
  },
  asb: {
    id: 'asb',
    name: 'ASB Bank',
    shortName: 'ASB',
    country: 'New Zealand',
    flag: '🇳🇿',
    founded: 1847,
    headquarters: 'Auckland, New Zealand',
    assets: 80,
    marketCap: 0,
    revenue: 3,
    netIncome: 1,
    employees: 5000,
    branches: 110,
    countries: 1,
    globalRank: 88,
    description: "New Zealand's first savings bank, founded in 1847 as the Auckland Savings Bank, now a wholly owned subsidiary of Commonwealth Bank of Australia and a leading innovator in digital banking.",
    keyFact: "ASB was the first bank in New Zealand to offer internet banking and the first in the world to launch a virtual branch on Facebook for secure customer service.",
    ceoQuote: "We are committed to being New Zealand's leading bank for customer experience and digital innovation.",
    timeline: [
      { year: 1847, event: "Founded as Auckland Savings Bank, New Zealand's first savings institution, on Queen Street." },
      { year: 1989, event: "ASB Community Trust sold 75% of shares to Commonwealth Bank of Australia." },
      { year: 2000, event: "Commonwealth Bank acquired remaining 25%, making ASB a wholly owned subsidiary." },
      { year: 2024, event: "Serves over 1.3 million customers with $80B in assets and award-winning digital services." }
    ],
    comparisons: null
  },
  ctbc: {
    id: 'ctbc',
    name: 'CTBC Financial Holding',
    shortName: 'CTBC',
    country: 'Taiwan',
    flag: '🇹🇼',
    founded: 1966,
    headquarters: 'Taipei, Taiwan',
    assets: 190,
    marketCap: 20,
    revenue: 8,
    netIncome: 2,
    employees: 25000,
    branches: 150,
    countries: 14,
    globalRank: 57,
    description: "One of Taiwan's largest privately led financial groups, founded by the Koo family in 1966, pioneering the country's first credit card and first customer service center.",
    keyFact: "CTBC's 2014 acquisition of Tokyo Star Bank marked the first-ever full takeover of a Japanese bank by a foreign entity.",
    ceoQuote: "We are building a leading international Asian financial institution rooted in Taiwan's entrepreneurial spirit.",
    timeline: [
      { year: 1966, event: "Founded as China Securities and Investment Corporation by Koo Chen-fu and Jeffrey Koo." },
      { year: 1992, event: "Transformed into Chinatrust Commercial Bank with a full commercial banking license." },
      { year: 2013, event: "Rebranded from Chinatrust to CTBC as part of its international expansion strategy." },
      { year: 2024, event: "Oversees nine subsidiaries across 14 countries with $190B in total assets." }
    ],
    comparisons: null
  },
  'cathay-financial': {
    id: 'cathay-financial',
    name: 'Cathay Financial Holdings',
    shortName: 'Cathay Financial',
    country: 'Taiwan',
    flag: '🇹🇼',
    founded: 1962,
    headquarters: 'Taipei, Taiwan',
    assets: 320,
    marketCap: 25,
    revenue: 20,
    netIncome: 3,
    employees: 55000,
    branches: 250,
    countries: 8,
    globalRank: 46,
    description: "Taiwan's largest financial holding company by assets, originating from Cathay Life Insurance founded in 1962 by the Tsai family, now encompassing banking, insurance, and securities.",
    keyFact: "Cathay Life Insurance was so dominant that it became the highest-priced stock on Taiwan's entire stock exchange in 1989.",
    ceoQuote: "Our vision is to become the most-valued financial group in the Asia-Pacific region through relentless customer focus.",
    timeline: [
      { year: 1962, event: "Cathay Life Insurance founded by the Tsai brothers, becoming Taiwan's first private listed insurer." },
      { year: 2001, event: "Cathay Financial Holding Company formally established through a strategic share swap in Taipei." },
      { year: 2003, event: "Merged two banking subsidiaries to create Cathay United Bank, Taiwan's largest private bank." },
      { year: 2024, event: "Taiwan's largest financial holding with $320B in assets across banking, insurance, and securities." }
    ],
    comparisons: null
  },
  'hang-seng': {
    id: 'hang-seng',
    name: 'Hang Seng Bank',
    shortName: 'Hang Seng',
    country: 'Hong Kong',
    flag: '🇭🇰',
    founded: 1933,
    headquarters: 'Hong Kong',
    assets: 210,
    marketCap: 30,
    revenue: 7,
    netIncome: 3,
    employees: 8000,
    branches: 260,
    countries: 5,
    globalRank: 56,
    description: "One of Hong Kong's most iconic financial institutions, founded in 1933 as a small currency exchange and creator of the Hang Seng Index, the primary barometer of the Hong Kong stock market.",
    keyFact: "Hang Seng Bank created and published the Hang Seng Index in 1969, which remains the most widely quoted indicator of the Hong Kong stock market to this day.",
    ceoQuote: "The name Hang Seng means 'ever-growing' in Cantonese, and for over 90 years that promise has guided everything we do.",
    timeline: [
      { year: 1933, event: "Founded as Hang Seng Ngan Ho, a small currency exchange in Sheung Wan with just 11 employees." },
      { year: 1965, event: "HSBC acquired a 51% controlling interest after a severe bank run depleted reserves." },
      { year: 1969, event: "Established the Hang Seng Index, now the primary indicator of Hong Kong's stock market." },
      { year: 2024, event: "Serves nearly 4 million customers through 260 service outlets across Hong Kong and mainland China." }
    ],
    comparisons: null
  },
  bea: {
    id: 'bea',
    name: 'Bank of East Asia',
    shortName: 'BEA',
    country: 'Hong Kong',
    flag: '🇭🇰',
    founded: 1918,
    headquarters: 'Hong Kong',
    assets: 90,
    marketCap: 4,
    revenue: 3,
    netIncome: 0.5,
    employees: 6000,
    branches: 60,
    countries: 8,
    globalRank: 85,
    description: "Hong Kong's largest independent local bank, founded in 1918 by prominent Chinese businessmen to serve the local community underserved by British colonial banks, and still run by the founding Li family.",
    keyFact: "BEA was the only foreign bank allowed to maintain operations in mainland China after the Communist revolution in 1949, preserving its Shanghai branch for decades.",
    ceoQuote: "For over a century, BEA has blended the best of East and West in banking, and we remain proudly rooted in Hong Kong.",
    timeline: [
      { year: 1918, event: "Founded by four prominent Hong Kong Chinese families to serve the local community." },
      { year: 1969, event: "Listed on the Stock Exchange of Hong Kong as the bank expanded beyond its founding base." },
      { year: 2007, event: "Established Bank of East Asia (China) Ltd, among the first foreign banks locally incorporated in China." },
      { year: 2024, event: "Remains the largest independent local Hong Kong bank with $90B in assets across 8 countries." }
    ],
    comparisons: null
  },
  'islami-bank': {
    id: 'islami-bank',
    name: 'Islami Bank Bangladesh',
    shortName: 'IBBL',
    country: 'Bangladesh',
    flag: '🇧🇩',
    founded: 1983,
    headquarters: 'Dhaka, Bangladesh',
    assets: 15,
    marketCap: 0.5,
    revenue: 2,
    netIncome: 0.3,
    employees: 15000,
    branches: 400,
    countries: 1,
    globalRank: 138,
    description: "Bangladesh's largest commercial bank and the first interest-free Islamic Shariah-based bank in South and Southeast Asia, established as a joint venture with Middle Eastern investors.",
    keyFact: "IBBL received 170 applications to open accounts on its very first day of operations in 1983 and was named best bank in Bangladesh by Global Finance for multiple years.",
    ceoQuote: "We are committed to providing Shariah-compliant financial solutions that uplift the people of Bangladesh.",
    timeline: [
      { year: 1983, event: "Incorporated as the first Islamic Shariah-based bank in Bangladesh with Middle Eastern investors." },
      { year: 1985, event: "Listed on the Dhaka Stock Exchange, becoming a publicly traded company." },
      { year: 2005, event: "Named best bank of Bangladesh by Global Finance magazine for the second time." },
      { year: 2024, event: "Bangladesh's largest commercial bank with 400 branches and over 2,600 agent banking outlets." }
    ],
    comparisons: null
  },
  'brac-bank': {
    id: 'brac-bank',
    name: 'BRAC Bank',
    shortName: 'BRAC Bank',
    country: 'Bangladesh',
    flag: '🇧🇩',
    founded: 2001,
    headquarters: 'Dhaka, Bangladesh',
    assets: 8,
    marketCap: 1,
    revenue: 1,
    netIncome: 0.2,
    employees: 8000,
    branches: 190,
    countries: 1,
    globalRank: 160,
    description: "A leading Bangladeshi bank founded by BRAC, the world's largest NGO, specifically designed to bring formal banking services to small and medium enterprises excluded from traditional finance.",
    keyFact: "BRAC Bank has disbursed over $5 billion to more than 650,000 small and medium enterprises since inception, and its subsidiary bKash became Bangladesh's first unicorn valued at $2 billion.",
    ceoQuote: "We believe small enterprises are the backbone of Bangladesh's economy, and financing them is financing the future.",
    timeline: [
      { year: 2001, event: "Founded by Sir Fazle Hasan Abed to serve Bangladesh's unbanked SME population." },
      { year: 2007, event: "Listed on both the Dhaka and Chittagong Stock Exchanges." },
      { year: 2021, event: "Subsidiary bKash became Bangladesh's first unicorn, valued at $2 billion." },
      { year: 2024, event: "Serves 1.3 million customers through 190 branches and 800 agent banking outlets." }
    ],
    comparisons: null
  },
  seb: {
    id: 'seb',
    name: 'SEB Group',
    shortName: 'SEB',
    country: 'Sweden',
    flag: '🇸🇪',
    founded: 1856,
    headquarters: 'Stockholm, Sweden',
    assets: 380,
    marketCap: 28,
    revenue: 10,
    netIncome: 3,
    employees: 16000,
    branches: 200,
    countries: 15,
    globalRank: 39,
    description: "Sweden's largest bank by assets, founded in 1856 by the Wallenberg dynasty and still guided by the family, with deep roots in financing Scandinavian industrialization including Volvo and SKF.",
    keyFact: "SEB partnered with the World Bank to create the world's first green bond and claims to be the first bank in history to employ women.",
    ceoQuote: "For over 165 years, SEB has empowered people with ideas to turn their ambitions into reality.",
    timeline: [
      { year: 1856, event: "Andre Oscar Wallenberg founded Stockholms Enskilda Bank as Stockholm's first private bank." },
      { year: 1927, event: "Helped finance the founding of Volvo, with the first car rolling out of the factory on April 14." },
      { year: 1972, event: "Stockholms Enskilda Bank and Skandinaviska Banken merged to form SEB." },
      { year: 2024, event: "Sweden's largest bank with $380B in assets, operating across 15 countries under Wallenberg leadership." }
    ],
    comparisons: null
  },
  bca: {
    id: 'bca',
    name: 'Bank Central Asia',
    shortName: 'BCA',
    country: 'Indonesia',
    flag: '🇮🇩',
    founded: 1957,
    headquarters: 'Jakarta, Indonesia',
    assets: 100,
    marketCap: 72,
    revenue: 8,
    netIncome: 4,
    employees: 26000,
    branches: 1250,
    countries: 1,
    globalRank: 81,
    description: "Indonesia's largest private bank and most valuable listed company, founded in 1957 by Liem Sioe Liong, which survived the 1998 Asian financial crisis to become the nation's dominant retail banking franchise.",
    keyFact: "BCA's market capitalization of $72 billion makes it worth more than many banks with far larger asset bases, reflecting investor confidence in its exceptional profitability.",
    ceoQuote: "We are focused on becoming Indonesia's bank of choice through technology-driven excellence in transaction banking.",
    timeline: [
      { year: 1957, event: "Founded by Sudono Salim as PT Bank Central Asia in Jakarta." },
      { year: 1998, event: "Nationalized during the Asian financial crisis and placed under government restructuring." },
      { year: 2000, event: "Successfully returned to public markets through an IPO on the Indonesia Stock Exchange." },
      { year: 2024, event: "Indonesia's most valuable listed company with 1,250 branches and $72B market capitalization." }
    ],
    comparisons: null
  },
  kfh: {
    id: 'kfh',
    name: 'Kuwait Finance House',
    shortName: 'KFH',
    country: 'Kuwait',
    flag: '🇰🇼',
    founded: 1977,
    headquarters: 'Kuwait City, Kuwait',
    assets: 115,
    marketCap: 40,
    revenue: 8,
    netIncome: 2.5,
    employees: 9000,
    branches: 450,
    countries: 8,
    globalRank: 74,
    description: "One of the world's largest and most recognized Islamic financial institutions, established by Amiri Decree in 1977 as the first Islamic bank in Kuwait and a global pioneer in Shariah-compliant banking.",
    keyFact: "Dubbed the 'Harvard of Islamic banks' by Forbes magazine, KFH received 170 account applications on its very first day of operations in 1978.",
    ceoQuote: "KFH has proven that Islamic banking is not just an alternative, but a competitive global financial system.",
    timeline: [
      { year: 1977, event: "Established by Amiri Decree as Kuwait's first Islamic bank with KD 10 million in capital." },
      { year: 1984, event: "Listed on the Kuwait Stock Exchange and recognized as the sole Islamic bank among the top 100 Arab banks." },
      { year: 2022, event: "Completed landmark merger with Ahli United Bank, significantly expanding regional footprint." },
      { year: 2024, event: "Operates over 450 branches across 8 countries with $115B in total assets." }
    ],
    comparisons: null
  },
  vtb: {
    id: 'vtb',
    name: 'VTB Bank',
    shortName: 'VTB',
    country: 'Russia',
    flag: '🇷🇺',
    founded: 1990,
    headquarters: 'Moscow, Russia',
    assets: 250,
    marketCap: 8,
    revenue: 15,
    netIncome: 2,
    employees: 75000,
    branches: 1200,
    countries: 20,
    globalRank: 52,
    description: "Russia's second-largest bank by assets, originally created in 1990 to service the country's foreign trade operations and later transformed into a universal banking group spanning retail, corporate, and investment services.",
    keyFact: "VTB's 2007 IPO raised $8 billion, making it the largest international banking IPO in history at the time.",
    ceoQuote: "VTB's mission is to provide world-class financial services that support Russia's integration into the global economy.",
    timeline: [
      { year: 1990, event: "Established as Vneshtorgbank to handle foreign trade operations for the Russian SFSR." },
      { year: 2002, event: "Russian government took direct control and appointed Andrey Kostin as chairman to modernize the bank." },
      { year: 2007, event: "Completed a record $8 billion IPO, the largest international banking IPO at that time." },
      { year: 2024, event: "Russia's second-largest bank with $250B in assets and 75,000 employees across 20 countries." }
    ],
    comparisons: null
  },
  'emirates-nbd': {
    id: 'emirates-nbd',
    name: 'Emirates NBD',
    shortName: 'Emirates NBD',
    country: 'UAE',
    flag: '🇦🇪',
    founded: 2007,
    headquarters: 'Dubai, UAE',
    assets: 210,
    marketCap: 25,
    revenue: 10,
    netIncome: 4,
    employees: 25000,
    branches: 900,
    countries: 12,
    globalRank: 55,
    description: "A leading banking group in the MENAT region, formed through the 2007 merger of National Bank of Dubai and Emirates Bank International, with origins dating back to Dubai's first national bank in 1963.",
    keyFact: "Emirates NBD launched Liv. in 2016, the UAE's first fully digital bank targeting millennials, and now serves over 9 million active customers across 12 countries.",
    ceoQuote: "Our merger created a banking champion capable of delivering enhanced value across the entire MENAT region.",
    timeline: [
      { year: 1963, event: "National Bank of Dubai established by Sheikh Rashid as the first national bank in Dubai." },
      { year: 2007, event: "Emirates Bank International and National Bank of Dubai merged to form Emirates NBD." },
      { year: 2016, event: "Launched Liv., the UAE's first digital-only bank targeting a new generation of customers." },
      { year: 2024, event: "A leading MENAT banking group with $210B in assets and 900 branches across 12 countries." }
    ],
    comparisons: null
  },
  'cib-egypt': {
    id: 'cib-egypt',
    name: 'Commercial International Bank',
    shortName: 'CIB Egypt',
    country: 'Egypt',
    flag: '🇪🇬',
    founded: 1975,
    headquarters: 'Cairo, Egypt',
    assets: 25,
    marketCap: 5,
    revenue: 2,
    netIncome: 0.8,
    employees: 7000,
    branches: 200,
    countries: 2,
    globalRank: 121,
    description: "Egypt's leading and largest private-sector bank, originally founded in 1975 as a joint venture between National Bank of Egypt and Chase Manhattan Bank, and repeatedly named the world's best bank in emerging markets.",
    keyFact: "CIB is the first institution in the Middle East to be featured as a business case study at London Business School, and has been named World's Best Emerging Markets Bank by both Global Finance and Euromoney.",
    ceoQuote: "CIB's fifty-year journey proves that a bank can thrive in emerging markets by putting innovation and governance first.",
    timeline: [
      { year: 1975, event: "Founded as Chase National Bank of Egypt, a joint venture between National Bank of Egypt and Chase Manhattan." },
      { year: 1987, event: "Chase sold its stake, NBE took 99.9% ownership, and the bank was renamed Commercial International Bank." },
      { year: 2015, event: "Acquired Citibank Egypt's retail operations, expanding its branch network and customer base." },
      { year: 2024, event: "Egypt's largest private-sector bank with over 200 branches and $25B in total assets." }
    ],
    comparisons: null
  },

  citigroup: {
    id: 'citigroup',
    name: 'Citigroup Inc.',
    shortName: 'Citigroup',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1812,
    headquarters: 'New York City, USA',
    assets: 2400,
    marketCap: 190,
    revenue: 105,
    netIncome: 18,
    employees: 238000,
    branches: 1800,
    countries: 160,
    globalRank: 4,
    description: "A global financial services company operating in investment banking, wealth management, and consumer banking across more than 160 countries with roots in the First City Bank of New York founded in 1812.",
    keyFact: "Citigroup operates in over 160 countries and territories, serving over 200 million customers worldwide, making it one of the most geographically diverse banks globally.",
    ceoQuote: "We serve as a trusted advisor to institutional clients and individuals worldwide.",
    timeline: [
      { year: 1812, event: "First City Bank of New York established" },
      { year: 1998, event: "Citicorp and Travelers Group merge to form Citigroup Inc." },
      { year: 2008, event: "Receives $45 billion US government bailout during financial crisis" },
      { year: 2024, event: "Operating with $2.4T in assets across 160+ countries" }
    ],
    comparisons: null
  },

  'morgan-stanley': {
    id: 'morgan-stanley',
    name: 'Morgan Stanley',
    shortName: 'Morgan Stanley',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1935,
    headquarters: 'New York City, USA',
    assets: 1300,
    marketCap: 235,
    revenue: 55,
    netIncome: 12,
    employees: 75000,
    branches: 600,
    countries: 75,
    globalRank: 7,
    description: "A leading global financial services firm providing investment banking, wealth management, and asset management services to corporations, governments, and individuals.",
    keyFact: "Morgan Stanley manages approximately $900 billion in client assets and operates in major financial centers across 75 countries with over 75,000 employees.",
    ceoQuote: "We remain committed to being a leading global financial advisor.",
    timeline: [
      { year: 1935, event: "Morgan Stanley founded following separation from J.P. Morgan Bank" },
      { year: 1997, event: "Merges with Dean Witter, Discover & Co. to form Morgan Stanley Dean Witter" },
      { year: 2009, event: "Completes acquisition of Citigroup's Smith Barney brokerage business" },
      { year: 2024, event: "Major investment and wealth management leader with $1.3T assets" }
    ],
    comparisons: null
  },

  'goldman-sachs': {
    id: 'goldman-sachs',
    name: 'The Goldman Sachs Group, Inc.',
    shortName: 'Goldman Sachs',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1869,
    headquarters: 'New York City, USA',
    assets: 1050,
    marketCap: 220,
    revenue: 48,
    netIncome: 10,
    employees: 45000,
    branches: 40,
    countries: 60,
    globalRank: 8,
    description: "A leading global investment banking, securities, and investment management firm known for advising major corporations and institutions on significant financial transactions.",
    keyFact: "Goldman Sachs manages over $2.5 trillion in assets under supervision and provides financial advisory services to virtually all major corporations and many governments.",
    ceoQuote: "We serve as a trusted advisor to the world's leading corporations and institutions.",
    timeline: [
      { year: 1869, event: "Goldman Sachs founded by Marcus Goldman in New York" },
      { year: 1906, event: "Samuel Sachs joins as partner, firm becomes Goldman Sachs" },
      { year: 1999, event: "Goldman Sachs IPO, becoming a publicly-traded company" },
      { year: 2024, event: "Premier investment bank with $1.05T in assets and global influence" }
    ],
    comparisons: null
  },

  westpac: {
    id: 'westpac',
    name: 'Westpac Banking Corporation',
    shortName: 'Westpac',
    country: 'Australia',
    flag: '🇦🇺',
    founded: 1817,
    headquarters: 'Sydney, Australia',
    assets: 900,
    marketCap: 85,
    revenue: 30,
    netIncome: 8,
    employees: 40000,
    branches: 1000,
    countries: 20,
    globalRank: 12,
    description: "Australia's oldest bank and one of the Big Four Australian banks, with roots tracing back to 1817, serving over 13 million customers globally.",
    keyFact: "Westpac is the largest bank in Australia by market capitalization and serves approximately 13 million customers across multiple countries with sophisticated digital banking capabilities.",
    ceoQuote: "We are committed to being a world-class bank delivering customer-focused services.",
    timeline: [
      { year: 1817, event: "Bank of New South Wales established, Australia's first bank" },
      { year: 1850, event: "Westpac established as Western Australian Bank" },
      { year: 1970, event: "Bank of New South Wales merges with Westpac to form Westpac Banking Corporation" },
      { year: 2024, event: "Australia's largest bank with $900B in assets and 13 million customers" }
    ],
    comparisons: null
  },

  'bank-of-montreal': {
    id: 'bank-of-montreal',
    name: 'Bank of Montreal',
    shortName: 'BMO',
    country: 'Canada',
    flag: '🇨🇦',
    founded: 1817,
    headquarters: 'Toronto, Canada',
    assets: 850,
    marketCap: 75,
    revenue: 28,
    netIncome: 7.5,
    employees: 45000,
    branches: 1100,
    countries: 12,
    globalRank: 13,
    description: "Canada's oldest bank and one of the Big Five Canadian banks, providing retail banking, wealth management, and investment services across North America and globally.",
    keyFact: "Bank of Montreal serves over 12 million customers and operates across Canada, the United States, and internationally with a rich 200+ year banking heritage.",
    ceoQuote: "We are committed to building a better future for our customers and communities.",
    timeline: [
      { year: 1817, event: "Bank of Montreal established as Canada's first bank by Montreal merchants" },
      { year: 1925, event: "Establishes US presence through acquisition of Molson Bank" },
      { year: 2012, event: "Completes acquisition of Marshall & Ilsley Corporation, strengthening US position" },
      { year: 2024, event: "Leading Canadian bank with $850B in assets serving North America" }
    ],
    comparisons: null
  },

  'citic-bank': {
    id: 'citic-bank',
    name: 'CITIC Bank Corporation Limited',
    shortName: 'CITIC Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 1987,
    headquarters: 'Beijing, China',
    assets: 1400,
    marketCap: 95,
    revenue: 85,
    netIncome: 22,
    employees: 280000,
    branches: 3200,
    globalRank: 6,
    description: "A major Chinese state-owned commercial bank and subsidiary of CITIC Group, operating as one of China's most important financial institutions with substantial global presence.",
    keyFact: "CITIC Bank operates over 3,200 branches across China and maintains international operations in major financial centers, serving both corporate and retail customers.",
    ceoQuote: "We are committed to being a leading modern financial services provider.",
    timeline: [
      { year: 1987, event: "CITIC Industrial Bank established" },
      { year: 2007, event: "Lists on Shanghai and Hong Kong stock exchanges through IPO" },
      { year: 2015, event: "Completes major expansion into wealth management and investment banking" },
      { year: 2024, event: "One of China's major banks with $1.4T in assets and 3,200+ branches" }
    ],
    comparisons: null
  },

  'united-overseas-bank': {
    id: 'united-overseas-bank',
    name: 'United Overseas Bank Limited',
    shortName: 'UOB',
    country: 'Singapore',
    flag: '🇸🇬',
    founded: 1935,
    headquarters: 'Singapore',
    assets: 540,
    marketCap: 55,
    revenue: 18,
    netIncome: 5.2,
    employees: 30000,
    branches: 500,
    countries: 19,
    globalRank: 16,
    description: "Singapore's largest bank and one of Asia's leading financial institutions, operating across Southeast Asia and globally with strong corporate and wealth management franchises.",
    keyFact: "UOB operates in 19 countries with a strong presence in ASEAN region and serves as a preferred banking partner for businesses and individuals across Asia.",
    ceoQuote: "We are building a digital-first bank for a digital-first world.",
    timeline: [
      { year: 1935, event: "United Overseas Bank established in Singapore" },
      { year: 1965, event: "Singapore gains independence; UOB becomes Singapore's largest bank" },
      { year: 2020, event: "Launches digital banking platform digital banking services for Asian expansion" },
      { year: 2024, event: "Asia-Pacific banking leader with $540B in assets across 19 countries" }
    ],
    comparisons: null
  },

  'natwest-group': {
    id: 'natwest-group',
    name: 'NatWest Group plc',
    shortName: 'NatWest',
    country: 'United Kingdom',
    flag: '🇬🇧',
    founded: 1968,
    headquarters: 'Edinburgh, Scotland',
    assets: 850,
    marketCap: 68,
    revenue: 27,
    netIncome: 6.8,
    employees: 60000,
    branches: 1200,
    countries: 13,
    globalRank: 14,
    description: "A leading UK banking group (formerly Royal Bank of Scotland Group) with strong retail and corporate banking operations across the UK and internationally.",
    keyFact: "NatWest Group serves over 13 million customers through its main brands including NatWest, The Royal Bank of Scotland, and Ulster Bank across multiple countries.",
    ceoQuote: "We are focused on being a leading financial services group serving customers across the UK and beyond.",
    timeline: [
      { year: 1968, event: "National Westminster Bank formed through merger of Westminster Bank and National Provincial Bank" },
      { year: 2000, event: "Merges with Royal Bank of Scotland to form RBSG" },
      { year: 2008, event: "Receives UK government bailout following financial crisis" },
      { year: 2024, event: "Rebranded as NatWest Group with $850B in assets and strong UK market position" }
    ],
    comparisons: null
  },

  'china-development-bank': {
    id: 'china-development-bank',
    name: 'China Development Bank',
    shortName: 'CDB',
    country: 'China',
    flag: '🇨🇳',
    founded: 1994,
    headquarters: 'Beijing, China',
    assets: 2200,
    marketCap: 120,
    revenue: 95,
    netIncome: 28,
    employees: 25000,
    branches: 350,
    countries: 50,
    globalRank: 3,
    description: "One of the largest policy banks in the world, providing long-term financing and advisory services for Chinese economic and social development projects, particularly supporting infrastructure and Belt and Road Initiative.",
    keyFact: "CDB is the world's largest development bank by total assets and plays a crucial role in financing infrastructure projects across Asia, Africa, and Latin America through the Belt and Road Initiative.",
    ceoQuote: "We serve as a strategic financial instrument for national development and international cooperation.",
    timeline: [
      { year: 1994, event: "Founded by the Chinese government to support large-scale infrastructure development" },
      { year: 2000, event: "Becomes primary financier of China's infrastructure boom and urbanization projects" },
      { year: 2013, event: "Emerges as key financial backer of Belt and Road Initiative projects" },
      { year: 2024, event: "With $2.2T in assets, the world's largest development bank with global influence" }
    ],
    comparisons: null
  },

  'bank-of-communications': {
    id: 'bank-of-communications',
    name: 'Bank of Communications',
    shortName: 'BoCom',
    country: 'China',
    flag: '🇨🇳',
    founded: 1908,
    headquarters: 'Shanghai, China',
    assets: 1500,
    marketCap: 85,
    revenue: 92,
    netIncome: 24,
    employees: 160000,
    branches: 2500,
    countries: 25,
    globalRank: 5,
    description: "China's oldest bank still in operation, founded in 1908, and one of the country's largest commercial banks with extensive domestic and international presence.",
    keyFact: "BoCom operates over 2,500 branches across China and maintains a significant international presence with subsidiaries in major financial centers worldwide.",
    ceoQuote: "We are committed to becoming a world-class commercial bank.",
    timeline: [
      { year: 1908, event: "Founded as China's first national bank during the Qing Dynasty" },
      { year: 1949, event: "Continues operations after founding of People's Republic of China" },
      { year: 2006, event: "IPO on Hong Kong and Shanghai stock exchanges" },
      { year: 2024, event: "Major commercial bank with $1.5T in assets and global expansion" }
    ],
    comparisons: null
  },

  'shanghai-pudong-development-bank': {
    id: 'shanghai-pudong-development-bank',
    name: 'Shanghai Pudong Development Bank',
    shortName: 'SPDB',
    country: 'China',
    flag: '🇨🇳',
    founded: 1993,
    headquarters: 'Shanghai, China',
    assets: 800,
    marketCap: 48,
    revenue: 60,
    netIncome: 16,
    employees: 120000,
    branches: 1800,
    countries: 18,
    globalRank: 15,
    description: "A major Chinese commercial bank headquartered in Shanghai's Pudong financial district, known for innovation in digital banking and strong presence in the Yangtze River Delta region.",
    keyFact: "SPDB pioneered digital banking services in China and operates over 1,800 branches with a reputation for technological innovation and customer service excellence.",
    ceoQuote: "We strive to be a leading modern bank with innovation at its core.",
    timeline: [
      { year: 1993, event: "Established to support economic development of Pudong area" },
      { year: 1999, event: "Listed on Shanghai Stock Exchange" },
      { year: 2010, event: "Becomes one of China's most innovative digital banks" },
      { year: 2024, event: "Leading Chinese bank with $800B in assets and 1,800+ branches" }
    ],
    comparisons: null
  },

  'lloyds-bank': {
    id: 'lloyds-bank',
    name: 'Lloyds Bank Group plc',
    shortName: 'Lloyds',
    country: 'United Kingdom',
    flag: '🇬🇧',
    founded: 1767,
    headquarters: 'London, United Kingdom',
    assets: 1100,
    marketCap: 75,
    revenue: 30,
    netIncome: 6.5,
    employees: 65000,
    branches: 2000,
    countries: 8,
    globalRank: 9,
    description: "One of the UK's oldest and largest retail banks, founded in 1767, with a market-leading position in UK retail and commercial banking through brands including Lloyds, MBNA, and other subsidiaries.",
    keyFact: "Lloyds holds over 13 million customer accounts in the UK and represents approximately one-third of the UK retail banking market through its various brands.",
    ceoQuote: "We are focused on delivering value to customers, colleagues, and communities we serve.",
    timeline: [
      { year: 1767, event: "Lloyds Bank founded in Birmingham, England" },
      { year: 1918, event: "Acquires Capital and Counties Bank, expanding UK presence" },
      { year: 2008, event: "Acquires HBOS during financial crisis with government support" },
      { year: 2024, event: "Leading UK bank with $1.1T in assets and dominant market share" }
    ],
    comparisons: null
  },

  'national-australia-bank': {
    id: 'national-australia-bank',
    name: 'National Australia Bank Limited',
    shortName: 'NAB',
    country: 'Australia',
    flag: '🇦🇺',
    founded: 1858,
    headquarters: 'Melbourne, Australia',
    assets: 950,
    marketCap: 95,
    revenue: 32,
    netIncome: 9,
    employees: 35000,
    branches: 1500,
    countries: 15,
    globalRank: 11,
    description: "Australia's second-largest bank and one of the Big Four, providing comprehensive financial services to millions of retail, business, and institutional customers across Australia and internationally.",
    keyFact: "NAB is Australia's largest bank by market capitalization and holds approximately 20% of the Australian banking market with operations across 15 countries.",
    ceoQuote: "We are committed to being the leading financial services company in Australia.",
    timeline: [
      { year: 1858, event: "National Bank of Australasia established in Melbourne" },
      { year: 1982, event: "Merges with Commercial Banking Company to form National Australia Bank" },
      { year: 2000, event: "Expands internationally through acquisition of UK-based mortgage lender" },
      { year: 2024, event: "Australia's leading bank with $950B in assets and global presence" }
    ],
    comparisons: null
  },

  'bank-of-nova-scotia': {
    id: 'bank-of-nova-scotia',
    name: 'Bank of Nova Scotia',
    shortName: 'Scotiabank',
    country: 'Canada',
    flag: '🇨🇦',
    founded: 1832,
    headquarters: 'Toronto, Canada',
    assets: 380,
    marketCap: 42,
    revenue: 15,
    netIncome: 3.8,
    employees: 90000,
    branches: 1200,
    countries: 17,
    globalRank: 22,
    description: "Canada's third-largest bank and one of the Big Five, with significant presence in the Caribbean, Latin America, and Pacific regions through Scotiabank brand.",
    keyFact: "Scotiabank operates in 17 countries with a strong presence in the Caribbean and Latin America, serving over 9 million customers globally.",
    ceoQuote: "We are building a better banking experience for our customers across the Americas.",
    timeline: [
      { year: 1832, event: "Bank of Nova Scotia established in Halifax, Nova Scotia" },
      { year: 1900, event: "Opens first international branch in Jamaica" },
      { year: 1999, event: "Acquires Inverlat, entering Mexico market" },
      { year: 2024, event: "Major Canadian bank with $380B in assets and Caribbean-Latin America focus" }
    ],
    comparisons: null
  },

  'industrial-bank-china': {
    id: 'industrial-bank-china',
    name: 'Industrial Bank Co., Ltd.',
    shortName: 'Industrial Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 1988,
    headquarters: 'Fuzhou, China',
    assets: 1200,
    marketCap: 65,
    revenue: 78,
    netIncome: 20,
    employees: 140000,
    branches: 2200,
    countries: 20,
    globalRank: 10,
    description: "A major Chinese commercial bank headquartered in Fuzhou, serving as an important player in China's banking sector with strong presence in corporate banking, investment banking, and wealth management.",
    keyFact: "Industrial Bank is the first bank in China to implement a modern corporate governance structure and operates 2,200+ branches with significant international expansion.",
    ceoQuote: "We are committed to building an international, innovative, and secure modern bank.",
    timeline: [
      { year: 1988, event: "Industrial Bank established in Fuzhou by the Fujian Provincial Government" },
      { year: 2007, event: "Listed on Shanghai and Hong Kong Stock Exchanges" },
      { year: 2013, event: "Becomes top performer among Chinese banks in digital innovation" },
      { year: 2024, event: "Major Chinese bank with $1.2T in assets and 2,200+ branches" }
    ],
    comparisons: null
  },

  'china-exim-bank': {
    id: 'china-exim-bank',
    name: 'China Export-Import Bank',
    shortName: 'China Exim Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 1994,
    headquarters: 'Beijing, China',
    assets: 800,
    marketCap: 55,
    revenue: 65,
    netIncome: 18,
    employees: 18000,
    branches: 200,
    countries: 100,
    globalRank: 18,
    description: "A policy bank specializing in export-import financing and foreign direct investment, providing financial support for Chinese companies expanding internationally and foreign companies investing in China.",
    keyFact: "China Exim Bank operates in over 100 countries and is a key institution financing Belt and Road Initiative projects, with $800B in assets supporting global trade and infrastructure development.",
    ceoQuote: "We serve as the financial backbone of China's international cooperation and development.",
    timeline: [
      { year: 1994, event: "Founded to support China's export and import financing" },
      { year: 2006, event: "Becomes key financier of China's Belt and Road Initiative" },
      { year: 2015, event: "Expands operations to support Chinese companies' global expansion" },
      { year: 2024, event: "Operating in 100+ countries with $800B in assets supporting international projects" }
    ],
    comparisons: null
  },

  'macquarie-group': {
    id: 'macquarie-group',
    name: 'Macquarie Group Limited',
    shortName: 'Macquarie',
    country: 'Australia',
    flag: '🇦🇺',
    founded: 1969,
    headquarters: 'Sydney, Australia',
    assets: 410,
    marketCap: 85,
    revenue: 25,
    netIncome: 6.2,
    employees: 17500,
    branches: 50,
    countries: 38,
    globalRank: 25,
    description: "A leading investment bank headquartered in Australia, renowned for its investment banking, wealth management, and infrastructure advisory services across multiple asset classes globally.",
    keyFact: "Macquarie operates in 38 countries and has become a major player in infrastructure investment and project finance, managing over $500 billion in assets under management.",
    ceoQuote: "We are focused on delivering superior investment returns and advisory expertise.",
    timeline: [
      { year: 1969, event: "Founded as Macquarie Industries Limited in Sydney" },
      { year: 1985, event: "Becomes major player in Australian investment banking" },
      { year: 2000, event: "Expands globally with significant infrastructure and project finance focus" },
      { year: 2024, event: "Leading investment bank with $410B in assets operating in 38 countries" }
    ],
    comparisons: null
  },

  'state-street': {
    id: 'state-street',
    name: 'State Street Corporation',
    shortName: 'State Street',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1792,
    headquarters: 'Boston, Massachusetts, USA',
    assets: 3900,
    marketCap: 110,
    revenue: 28,
    netIncome: 6,
    employees: 40000,
    branches: 200,
    countries: 102,
    globalRank: 2,
    description: "A leading provider of financial services to institutional investors, founded in 1792, specializing in asset servicing, custody, and administration for the world's largest institutional investors and asset managers.",
    keyFact: "State Street is a custody and administrative powerhouse serving institutional investors worldwide, holding over $45 trillion in assets under administration across 102 countries.",
    ceoQuote: "We are committed to being the leading provider of services to institutional investors globally.",
    timeline: [
      { year: 1792, event: "Massachusetts Bank founded, later becomes State Street Bank" },
      { year: 1956, event: "Pioneers computerized securities processing" },
      { year: 2000, event: "Becomes global leader in institutional asset services" },
      { year: 2024, event: "Major custody bank with $3.9T in assets and $45T under administration globally" }
    ],
    comparisons: null
  },

  'asian-development-bank': {
    id: 'asian-development-bank',
    name: 'Asian Development Bank',
    shortName: 'ADB',
    country: 'Multilateral',
    flag: '🌏',
    founded: 1966,
    headquarters: 'Manila, Philippines',
    assets: 190,
    marketCap: 0,
    revenue: 18,
    netIncome: 4,
    employees: 3500,
    branches: 35,
    countries: 68,
    globalRank: 35,
    description: "A multilateral development bank established to promote social and economic development in Asia, owned by 68 member states and providing loans, technical assistance, and grants to developing countries.",
    keyFact: "ADB serves 68 member countries across Asia, the Pacific, and beyond, having approved over $300 billion in loans and grants since its establishment.",
    ceoQuote: "We are committed to reducing poverty and promoting prosperity in the Asia-Pacific region.",
    timeline: [
      { year: 1966, event: "Established by 31 Asian and Western member countries to promote development" },
      { year: 1990, event: "Membership expands as the Asian economy grows rapidly" },
      { year: 2010, event: "Becomes key player in financing green and infrastructure projects" },
      { year: 2024, event: "Serving 68 member countries with $190B in assets supporting development" }
    ],
    comparisons: null
  },

  'european-investment-bank': {
    id: 'european-investment-bank',
    name: 'European Investment Bank',
    shortName: 'EIB',
    country: 'Multilateral',
    flag: '🇪🇺',
    founded: 1958,
    headquarters: 'Luxembourg',
    assets: 650,
    marketCap: 0,
    revenue: 32,
    netIncome: 8,
    employees: 2400,
    branches: 45,
    countries: 170,
    globalRank: 19,
    description: "The world's largest multilateral lending institution founded by European Union member states, providing financing for projects in EU member states and partner countries globally.",
    keyFact: "EIB has financed thousands of projects across 170 countries in support of sustainable development, renewable energy, and infrastructure, with a focus on climate action.",
    ceoQuote: "We are the bank of the European Union, supporting sustainable development worldwide.",
    timeline: [
      { year: 1958, event: "Established by the Treaty of Rome to support EU development" },
      { year: 1990, event: "Expands operations to Eastern Europe and emerging markets" },
      { year: 2015, event: "Becomes leader in green and sustainable project financing" },
      { year: 2024, event: "Operating globally with $650B in assets supporting sustainable development" }
    ],
    comparisons: null
  },

  'bny-mellon': {
    id: 'bny-mellon',
    name: 'The Bank of New York Mellon Corporation',
    shortName: 'BNY Mellon',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1784,
    headquarters: 'New York City, USA',
    assets: 2400,
    marketCap: 65,
    revenue: 22,
    netIncome: 4.5,
    employees: 52000,
    branches: 300,
    countries: 150,
    globalRank: 6,
    description: "One of the world's oldest banks founded in 1784, specializing in global custody, asset servicing, and investment management for institutional investors and financial institutions worldwide.",
    keyFact: "BNY Mellon administers over $45 trillion in assets and serves as a critical infrastructure provider for global capital markets across 150 countries.",
    ceoQuote: "We are a trusted provider of financial infrastructure and asset services to the world's most important institutions.",
    timeline: [
      { year: 1784, event: "Bank of New York founded by Alexander Hamilton" },
      { year: 1969, event: "Becomes pioneer in computerized securities trading" },
      { year: 2007, event: "Merger with Mellon Financial creates BNY Mellon" },
      { year: 2024, event: "Major custody and asset services provider with $2.4T assets and $45T under administration" }
    ],
    comparisons: null
  },

  'china-postal-savings-bank': {
    id: 'china-postal-savings-bank',
    name: 'China Postal Savings Bank Co., Ltd.',
    shortName: 'Postal Savings Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 2007,
    headquarters: 'Beijing, China',
    assets: 1100,
    marketCap: 58,
    revenue: 68,
    netIncome: 18,
    employees: 400000,
    branches: 40000,
    globalRank: 11,
    description: "China's largest postal bank operating the world's largest retail branch network with over 40,000 postal branches, providing retail banking and savings services to hundreds of millions of customers.",
    keyFact: "China Postal Savings Bank operates through over 40,000 postal branches—the world's largest retail banking network—serving over 600 million customers, primarily in rural and underserved areas.",
    ceoQuote: "We are committed to providing accessible banking services to all Chinese communities.",
    timeline: [
      { year: 1911, event: "Postal savings business established in China" },
      { year: 2007, event: "Restructured as separate banking entity" },
      { year: 2015, event: "Listed on Hong Kong and Shanghai stock exchanges" },
      { year: 2024, event: "Largest postal bank with $1.1T in assets and world's largest branch network" }
    ],
    comparisons: null
  },

  'banco-sabadell': {
    id: 'banco-sabadell',
    name: 'Banco Sabadell, S.A.',
    shortName: 'Banco Sabadell',
    country: 'Spain',
    flag: '🇪🇸',
    founded: 1881,
    headquarters: 'Barcelona, Spain',
    assets: 190,
    marketCap: 18,
    revenue: 8.5,
    netIncome: 2.1,
    employees: 30000,
    branches: 2000,
    countries: 10,
    globalRank: 38,
    description: "Spain's second-largest bank by assets, founded in 1881, providing comprehensive banking services to retail, business, and institutional clients across Spain and internationally.",
    keyFact: "Banco Sabadell operates over 2,000 branches and serves over 4 million customers in Spain and has expanded operations to Portugal, Mexico, and other markets.",
    ceoQuote: "We are building a modern, efficient bank focused on customer satisfaction and innovation.",
    timeline: [
      { year: 1881, event: "Founded as a small bank in Sabadell, Catalonia" },
      { year: 2004, event: "Merges with Banco Urquijo to become major Spanish bank" },
      { year: 2015, event: "Acquires British bank TSB, expanding international presence" },
      { year: 2024, event: "Spain's second-largest bank with $190B in assets and strong digital banking" }
    ],
    comparisons: null
  },

  'banco-pichincha': {
    id: 'banco-pichincha',
    name: 'Banco Pichincha C.A.',
    shortName: 'Banco Pichincha',
    country: 'Ecuador',
    flag: '🇪🇨',
    founded: 1906,
    headquarters: 'Quito, Ecuador',
    assets: 35,
    marketCap: 6.5,
    revenue: 3.2,
    netIncome: 0.85,
    employees: 20000,
    branches: 500,
    countries: 8,
    globalRank: 112,
    description: "Ecuador's largest bank and one of Latin America's most important financial institutions, providing comprehensive banking services across multiple countries in the region.",
    keyFact: "Banco Pichincha operates across 8 Latin American countries and is the largest bank in Ecuador with a strong reputation for stability and service.",
    ceoQuote: "We are committed to driving financial inclusion and economic development in Latin America.",
    timeline: [
      { year: 1906, event: "Banco Pichincha founded in Quito, Ecuador" },
      { year: 1970, event: "Becomes largest bank in Ecuador" },
      { year: 2010, event: "Expands significantly across Latin America with acquisitions" },
      { year: 2024, event: "Leading Latin American bank with $35B in assets and regional presence" }
    ],
    comparisons: null
  },

  'banco-azteca': {
    id: 'banco-azteca',
    name: 'Banco Azteca, S.A.',
    shortName: 'Banco Azteca',
    country: 'Mexico',
    flag: '🇲🇽',
    founded: 2002,
    headquarters: 'Mexico City, Mexico',
    assets: 25,
    marketCap: 3.8,
    revenue: 2.1,
    netIncome: 0.48,
    employees: 35000,
    branches: 900,
    countries: 3,
    globalRank: 125,
    description: "Mexico's fourth-largest retail bank providing consumer banking, deposits, and credit services through a vast network of branches, with significant reach in underserved markets.",
    keyFact: "Banco Azteca operates over 900 branches across Mexico and Central America, serving millions of retail customers with accessible banking and credit products.",
    ceoQuote: "We are focused on providing financial inclusion and opportunity to Mexican families.",
    timeline: [
      { year: 2002, event: "Banco Azteca founded as retail-focused bank" },
      { year: 2008, event: "Expands rapidly with acquisition of Banco Regional de Monterrey" },
      { year: 2015, event: "Becomes fourth-largest retail bank in Mexico" },
      { year: 2024, event: "Mexican retail banking leader with $25B in assets and 900+ branches" }
    ],
    comparisons: null
  },

  'icici-bank': {
    id: 'icici-bank',
    name: 'ICICI Bank Limited',
    shortName: 'ICICI Bank',
    country: 'India',
    flag: '🇮🇳',
    founded: 1994,
    headquarters: 'Mumbai, India',
    assets: 280,
    marketCap: 55,
    revenue: 18,
    netIncome: 4.8,
    employees: 100000,
    branches: 2500,
    countries: 15,
    globalRank: 32,
    description: "India's largest private sector bank providing comprehensive banking and financial services to retail, corporate, and institutional clients across India and internationally.",
    keyFact: "ICICI Bank operates over 2,500 branches and serves over 100 million customers, pioneering digital banking innovation in India with extensive online and mobile services.",
    ceoQuote: "We are committed to being the fastest growing bank in India through customer focus and innovation.",
    timeline: [
      { year: 1994, event: "ICICI Bank incorporated as subsidiary of ICICI Limited" },
      { year: 2002, event: "Becomes India's largest private bank through merger with ICICI" },
      { year: 2010, event: "Pioneers digital banking in India with extensive online services" },
      { year: 2024, event: "Leading Indian private bank with $280B in assets and 2,500+ branches" }
    ],
    comparisons: null
  },

  'pnc-financial': {
    id: 'pnc-financial',
    name: 'PNC Financial Services Group, Inc.',
    shortName: 'PNC',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1852,
    headquarters: 'Pittsburgh, Pennsylvania',
    assets: 650,
    marketCap: 72,
    revenue: 25,
    netIncome: 6.2,
    employees: 83000,
    branches: 2100,
    countries: 3,
    globalRank: 20,
    description: "One of the largest diversified financial services companies in the United States, headquartered in Pittsburgh with regional presence across the eastern US.",
    keyFact: "PNC serves over 8 million customers through its comprehensive retail and commercial banking networks with more than 2,100 branches.",
    ceoQuote: "We are focused on delivering the highest quality financial services to our customers.",
    timeline: [
      { year: 1852, event: "Pittsburgh Trust and Savings Company established" },
      { year: 1983, event: "Merges with CoreStates Financial Corporation to expand presence" },
      { year: 2010, event: "Acquires RBS Citizens Bank, significantly expanding footprint" },
      { year: 2024, event: "Major US regional bank with $650B in assets" }
    ],
    comparisons: null
  },

  'us-bancorp': {
    id: 'us-bancorp',
    name: 'U.S. Bancorp',
    shortName: 'USB',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1863,
    headquarters: 'Minneapolis, Minnesota',
    assets: 600,
    marketCap: 68,
    revenue: 23,
    netIncome: 5.8,
    employees: 75000,
    branches: 3000,
    countries: 2,
    globalRank: 22,
    description: "One of the largest financial services holding companies in the United States, providing banking, investment, and financial services across multiple business segments.",
    keyFact: "U.S. Bancorp operates more than 3,000 branches and serves millions of customers with investments in real estate, capital markets, and wealth management.",
    ceoQuote: "We are committed to building long-term relationships with our customers.",
    timeline: [
      { year: 1863, event: "First National Bank of Minneapolis established" },
      { year: 1929, event: "Becomes U.S. National Bank of Minneapolis" },
      { year: 2000, event: "Creates U.S. Bancorp as holding company for multiple banks" },
      { year: 2024, event: "Leading Midwest bank with $600B in assets and 3,000+ branches" }
    ],
    comparisons: null
  },

  'keycorp': {
    id: 'keycorp',
    name: 'KeyCorp',
    shortName: 'Key',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1849,
    headquarters: 'Cleveland, Ohio',
    assets: 200,
    marketCap: 22,
    revenue: 8.5,
    netIncome: 2.1,
    employees: 20000,
    branches: 1000,
    countries: 1,
    globalRank: 45,
    description: "A major regional bank serving the eastern and midwest United States with strong commercial and retail banking operations.",
    keyFact: "KeyCorp operates over 1,000 branches and ATMs across the eastern United States with significant investment banking and wealth management capabilities.",
    ceoQuote: "Our mission is to provide the highest quality financial services.",
    timeline: [
      { year: 1849, event: "Commercial Bank of the State of Ohio established" },
      { year: 1983, event: "Merges with Society Corporation to form KeyCorp" },
      { year: 2010, event: "Exits investment banking to focus on regional banking" },
      { year: 2024, event: "Major regional bank with $200B in assets across the eastern US" }
    ],
    comparisons: null
  },

  'fifth-third-bancorp': {
    id: 'fifth-third-bancorp',
    name: 'Fifth Third Bancorp',
    shortName: 'Fifth Third',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1858,
    headquarters: 'Cincinnati, Ohio',
    assets: 210,
    marketCap: 24,
    revenue: 8.8,
    netIncome: 2.3,
    employees: 18000,
    branches: 1100,
    countries: 1,
    globalRank: 44,
    description: "One of the largest regional bank holding companies in the United States, providing retail and commercial banking across the Midwest and South.",
    keyFact: "Fifth Third Bank operates more than 1,100 branches and serves millions of customers with comprehensive financial services.",
    ceoQuote: "We are committed to being the customers' first choice for financial services.",
    timeline: [
      { year: 1858, event: "Fifth Third Bank established in Cincinnati" },
      { year: 1969, event: "Merges with other regional banks to expand presence" },
      { year: 2015, event: "Acquires MB Financial to strengthen position" },
      { year: 2024, event: "Midwest regional powerhouse with $210B in assets" }
    ],
    comparisons: null
  },

  'truist-financial': {
    id: 'truist-financial',
    name: 'Truist Financial Corporation',
    shortName: 'Truist',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1872,
    headquarters: 'Charlotte, North Carolina',
    assets: 535,
    marketCap: 62,
    revenue: 22,
    netIncome: 5.5,
    employees: 67000,
    branches: 2700,
    countries: 2,
    globalRank: 24,
    description: "One of the largest bank holding companies in the United States, created through merger of BB&T and SunTrust Banks, serving customers across the southeast and beyond.",
    keyFact: "Truist operates nearly 2,700 branches and serves millions of customers across the Southeast and Mid-Atlantic regions with comprehensive financial services.",
    ceoQuote: "We are committed to inspire and build better lives and communities.",
    timeline: [
      { year: 1872, event: "Branch Banking and Trust Company (BB&T) established" },
      { year: 1891, event: "SunTrust Bank established in Atlanta" },
      { year: 2019, event: "BB&T and SunTrust merge to form Truist Financial Corporation" },
      { year: 2024, event: "Major Southeast bank with $535B in assets and 2,700+ branches" }
    ],
    comparisons: null
  },

  'huntington-bancshares': {
    id: 'huntington-bancshares',
    name: 'Huntington Bancshares Incorporated',
    shortName: 'Huntington',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1866,
    headquarters: 'Columbus, Ohio',
    assets: 180,
    marketCap: 20,
    revenue: 7.8,
    netIncome: 1.9,
    employees: 16000,
    branches: 900,
    countries: 1,
    globalRank: 48,
    description: "A regional bank holding company operating in the Midwest and Southeast United States with strong community banking tradition.",
    keyFact: "Huntington operates approximately 900 branches and serves customers with retail and commercial banking services across 11 states.",
    ceoQuote: "We are focused on delivering customers a superior banking experience.",
    timeline: [
      { year: 1866, event: "Huntington National Bank founded in Columbus, Ohio" },
      { year: 1968, event: "Becomes Huntington Bancshares through formation of holding company" },
      { year: 2006, event: "Acquires TCF Bank to expand presence" },
      { year: 2024, event: "Strong regional bank with $180B in assets across Midwest and Southeast" }
    ],
    comparisons: null
  },

  'td-bank-us': {
    id: 'td-bank-us',
    name: 'TD Bank, N.A.',
    shortName: 'TD Bank',
    country: 'United States',
    flag: '🇺🇸',
    founded: 1855,
    headquarters: 'Wilmington, Delaware',
    assets: 380,
    marketCap: 42,
    revenue: 14,
    netIncome: 3.2,
    employees: 42000,
    branches: 1200,
    countries: 1,
    globalRank: 35,
    description: "A major regional bank and subsidiary of Toronto-Dominion Bank, operating extensively in the Northeast and Mid-Atlantic United States.",
    keyFact: "TD Bank operates over 1,200 branches in the US Northeast and Mid-Atlantic regions, serving retail and commercial customers with convenience banking.",
    ceoQuote: "We aim to be the most customer-convenient bank in America.",
    timeline: [
      { year: 1855, event: "Farmers Bank of Delaware established" },
      { year: 1969, event: "Becomes Delaware Bank & Trust" },
      { year: 2010, event: "Toronto-Dominion Bank acquires control and rebrands as TD Bank" },
      { year: 2024, event: "Major Northeast regional bank with $380B in assets" }
    ],
    comparisons: null
  },

  'nomura-group': {
    id: 'nomura-group',
    name: 'Nomura Holdings, Inc.',
    shortName: 'Nomura',
    country: 'Japan',
    flag: '🇯🇵',
    founded: 1925,
    headquarters: 'Tokyo, Japan',
    assets: 580,
    marketCap: 48,
    revenue: 18,
    netIncome: 2.5,
    employees: 75000,
    branches: 200,
    countries: 45,
    globalRank: 23,
    description: "Japan's largest investment bank and a global financial services firm providing investment banking, trading, wealth management, and research services worldwide.",
    keyFact: "Nomura operates in 45 countries with one of Asia's largest and most comprehensive investment banking franchises, generating substantial revenue from global capital markets.",
    ceoQuote: "We are committed to providing innovative financial solutions globally.",
    timeline: [
      { year: 1925, event: "Nomura Securities established in Osaka" },
      { year: 1965, event: "Establishes first international office in New York" },
      { year: 2008, event: "Acquires Lehman Brothers' operations, expanding global presence" },
      { year: 2024, event: "Leading Japanese investment bank with $580B in assets and global reach" }
    ],
    comparisons: null
  },

  'dbs-bank': {
    id: 'dbs-bank',
    name: 'Development Bank of Singapore Limited',
    shortName: 'DBS',
    country: 'Singapore',
    flag: '🇸🇬',
    founded: 1968,
    headquarters: 'Singapore',
    assets: 650,
    marketCap: 78,
    revenue: 20,
    netIncome: 6.8,
    employees: 38000,
    branches: 320,
    countries: 28,
    globalRank: 19,
    description: "Singapore's largest bank and one of Asia's leading financial institutions, providing banking and financial services across Asia and globally with digital innovation focus.",
    keyFact: "DBS is ranked as one of the world's strongest banks by Moody's and serves millions of customers with extensive digital banking capabilities across 28 countries.",
    ceoQuote: "We are transforming banking and finance for a better, more connected future.",
    timeline: [
      { year: 1968, event: "Development Bank of Singapore established to support economic development" },
      { year: 1998, event: "Acquires prominent regional banks to expand presence" },
      { year: 2009, event: "Completes major transformation to become Asia's leading bank" },
      { year: 2024, event: "Top Asian bank with $650B in assets and digital-first approach" }
    ],
    comparisons: null
  },

  'banco-galicia': {
    id: 'banco-galicia',
    name: 'Banco Galicia S.A.',
    shortName: 'Banco Galicia',
    country: 'Argentina',
    flag: '🇦🇷',
    founded: 1905,
    headquarters: 'Buenos Aires, Argentina',
    assets: 85,
    marketCap: 8.5,
    revenue: 4.2,
    netIncome: 1.1,
    employees: 24000,
    branches: 280,
    countries: 1,
    globalRank: 62,
    description: "Argentina's leading private bank providing comprehensive financial services including retail, commercial, and investment banking across the country.",
    keyFact: "Banco Galicia serves over 2.5 million customers with one of Argentina's largest branch networks and strong digital banking capabilities.",
    ceoQuote: "We are committed to being the bank of choice for Argentinian families and businesses.",
    timeline: [
      { year: 1905, event: "Banco Galicia founded in Buenos Aires" },
      { year: 1990, event: "Begins major expansion and modernization" },
      { year: 2010, event: "Becomes Argentina's leading private bank by market share" },
      { year: 2024, event: "Major Latin American bank with significant regional presence" }
    ],
    comparisons: null
  },

  'natixis': {
    id: 'natixis',
    name: 'Natixis SA',
    shortName: 'Natixis',
    country: 'France',
    flag: '🇫🇷',
    founded: 2006,
    headquarters: 'Paris, France',
    assets: 920,
    marketCap: 35,
    revenue: 16,
    netIncome: 2.8,
    employees: 80000,
    branches: 400,
    countries: 42,
    globalRank: 15,
    description: "A major French bank specializing in investment banking, asset management, and insurance with significant international operations across Europe and globally.",
    keyFact: "Natixis operates as a major player in global capital markets, investment banking, and wealth management with presence in 42 countries worldwide.",
    ceoQuote: "We are focused on building a global financial services leader.",
    timeline: [
      { year: 2006, event: "Natixis created through merger of Banques Populaires and Caisse d'Épargne subsidiaries" },
      { year: 2009, event: "Becomes independent financial services provider" },
      { year: 2015, event: "Acquires major asset management and insurance operations" },
      { year: 2024, event: "Leading French investment bank with $920B in assets globally" }
    ],
    comparisons: null
  },

  'sber-bank': {
    id: 'sber-bank',
    name: 'Sberbank of Russia',
    shortName: 'Sber',
    country: 'Russia',
    flag: '🇷🇺',
    founded: 1841,
    headquarters: 'Moscow, Russia',
    assets: 480,
    marketCap: 65,
    revenue: 18,
    netIncome: 5.2,
    employees: 310000,
    branches: 18000,
    countries: 23,
    globalRank: 26,
    description: "Russia's largest bank providing comprehensive banking and financial services to millions of customers across Russia and internationally.",
    keyFact: "Sberbank operates approximately 18,000 branches and serves over 200 million customers with significant insurance and investment operations.",
    ceoQuote: "We are building an ecosystem of digital financial services.",
    timeline: [
      { year: 1841, event: "First State Savings Bank of Russia established" },
      { year: 1992, event: "Becomes Sberbank and privatization begins" },
      { year: 2012, event: "Completes digital transformation initiatives" },
      { year: 2024, event: "Russian banking leader with $480B in assets and 18,000+ branches" }
    ],
    comparisons: null
  },

  'standard-bank': {
    id: 'standard-bank',
    name: 'Standard Bank Group Limited',
    shortName: 'Standard Bank',
    country: 'South Africa',
    flag: '🇿🇦',
    founded: 1862,
    headquarters: 'Johannesburg, South Africa',
    assets: 195,
    marketCap: 28,
    revenue: 9.5,
    netIncome: 2.4,
    employees: 55000,
    branches: 1100,
    countries: 25,
    globalRank: 46,
    description: "Africa's largest bank operating across 25 African countries and globally with strong corporate, retail, and investment banking franchises.",
    keyFact: "Standard Bank serves over 50 million customers across Africa and has extensive investment banking capabilities with significant regional market leadership.",
    ceoQuote: "We are committed to leading Africa's financial services transformation.",
    timeline: [
      { year: 1862, event: "Standard Bank established in South Africa" },
      { year: 1998, event: "Begins major expansion across Africa" },
      { year: 2010, event: "Becomes Africa's largest bank by assets" },
      { year: 2024, event: "Africa's banking leader with $195B in assets across 25 countries" }
    ],
    comparisons: null
  },

  'cbank-mexico': {
    id: 'cbank-mexico',
    name: 'Citibanamex (Grupo Citibanamex)',
    shortName: 'Citibanamex',
    country: 'Mexico',
    flag: '🇲🇽',
    founded: 1866,
    headquarters: 'Mexico City, Mexico',
    assets: 190,
    marketCap: 18,
    revenue: 8.2,
    netIncome: 1.8,
    employees: 42000,
    branches: 1900,
    countries: 1,
    globalRank: 47,
    description: "Mexico's largest bank and one of Latin America's leading financial institutions, providing comprehensive banking and financial services across Mexico.",
    keyFact: "Citibanamex operates nearly 1,900 branches across Mexico and serves over 18 million customers with extensive retail and corporate banking services.",
    ceoQuote: "We are focused on financial inclusion and innovation in Mexico.",
    timeline: [
      { year: 1866, event: "Banco Nacional de México (Banamex) established" },
      { year: 2002, event: "Becomes subsidiary of Citigroup as Citibanamex" },
      { year: 2015, event: "Continues as Mexico's largest bank" },
      { year: 2024, event: "Mexico's leading bank with $190B in assets and 1,900+ branches" }
    ],
    comparisons: null
  },

  'mizuho-bank': {
    id: 'mizuho-bank',
    name: 'Mizuho Financial Group',
    shortName: 'Mizuho',
    country: 'Japan',
    flag: '🇯🇵',
    founded: 2000,
    headquarters: 'Tokyo, Japan',
    assets: 2100,
    marketCap: 120,
    revenue: 95,
    netIncome: 18,
    employees: 280000,
    branches: 3500,
    countries: 40,
    globalRank: 5,
    description: "Japan's second-largest banking group providing comprehensive financial services including corporate banking, retail banking, and investment banking globally.",
    keyFact: "Mizuho operates over 3,500 branches and serves millions of customers across Japan and 40 countries with significant global capital markets presence.",
    ceoQuote: "We are creating value through financial innovation and customer focus.",
    timeline: [
      { year: 2000, event: "Mizuho Financial Group formed through merger of Japanese banking giants" },
      { year: 2008, event: "Becomes one of the world's largest banks by assets" },
      { year: 2014, event: "Completes major IT system modernization" },
      { year: 2024, event: "Major global bank with $2.1T in assets and 3,500+ branches" }
    ],
    comparisons: null
  },

  'bdo-unibank': {
    id: 'bdo-unibank',
    name: 'BDO Unibank, Inc.',
    shortName: 'BDO',
    country: 'Philippines',
    flag: '🇵🇭',
    founded: 1962,
    headquarters: 'Manila, Philippines',
    assets: 145,
    marketCap: 32,
    revenue: 7.8,
    netIncome: 2.2,
    employees: 28000,
    branches: 1400,
    countries: 8,
    globalRank: 52,
    description: "The Philippines' largest bank by assets, providing comprehensive retail, commercial, and investment banking services across Asia and internationally.",
    keyFact: "BDO Unibank operates over 1,400 branches and serves millions of customers with extensive digital banking and microfinance capabilities.",
    ceoQuote: "We are committed to financial inclusion and economic development in the Philippines.",
    timeline: [
      { year: 1962, event: "Banco de Oro established as premier Filipino bank" },
      { year: 1992, event: "Unibank merged with Banco de Oro to form BDO Unibank" },
      { year: 2010, event: "Becomes the Philippines' largest bank by assets" },
      { year: 2024, event: "Leading Southeast Asian bank with $145B in assets and 1,400+ branches" }
    ],
    comparisons: null
  },

  'bangkok-bank': {
    id: 'bangkok-bank',
    name: 'Bangkok Bank Public Company Limited',
    shortName: 'Bangkok Bank',
    country: 'Thailand',
    flag: '🇹🇭',
    founded: 1944,
    headquarters: 'Bangkok, Thailand',
    assets: 195,
    marketCap: 25,
    revenue: 8.5,
    netIncome: 2.1,
    employees: 36000,
    branches: 1200,
    countries: 22,
    globalRank: 47,
    description: "Thailand's largest bank providing banking and financial services across Southeast Asia and internationally with strong corporate and retail franchises.",
    keyFact: "Bangkok Bank operates over 1,200 branches in Thailand and 22 countries, serving millions of customers with comprehensive financial solutions.",
    ceoQuote: "We are dedicated to advancing banking in Thailand and Southeast Asia.",
    timeline: [
      { year: 1944, event: "Bangkok Bank established during World War II" },
      { year: 1960, event: "Becomes Thailand's largest bank" },
      { year: 1990, event: "Expands significantly across Southeast Asia" },
      { year: 2024, event: "Leading Thai bank with $195B in assets across 22 countries" }
    ],
    comparisons: null
  },

  'kasikornbank': {
    id: 'kasikornbank',
    name: 'Kasikornbank Public Company Limited',
    shortName: 'Kasikornbank',
    country: 'Thailand',
    flag: '🇹🇭',
    founded: 1945,
    headquarters: 'Bangkok, Thailand',
    assets: 165,
    marketCap: 22,
    revenue: 7.2,
    netIncome: 1.8,
    employees: 32000,
    branches: 1050,
    countries: 15,
    globalRank: 50,
    description: "Thailand's second-largest bank with strong presence in Southeast Asia, providing comprehensive retail, commercial, and investment banking services.",
    keyFact: "Kasikornbank operates over 1,050 branches and serves millions of customers with innovative digital banking and financial services.",
    ceoQuote: "We are committed to being the most trusted financial institution in Thailand.",
    timeline: [
      { year: 1945, event: "Kasikornbank (formerly Thai Bank) established" },
      { year: 1993, event: "Becomes one of Thailand's leading banks" },
      { year: 2005, event: "Expands into investment banking and wealth management" },
      { year: 2024, event: "Major Thai bank with $165B in assets and regional presence" }
    ],
    comparisons: null
  },

  'bank-of-philippines': {
    id: 'bank-of-philippines',
    name: 'Bank of the Philippine Islands',
    shortName: 'BPI',
    country: 'Philippines',
    flag: '🇵🇭',
    founded: 1851,
    headquarters: 'Manila, Philippines',
    assets: 120,
    marketCap: 28,
    revenue: 6.8,
    netIncome: 1.9,
    employees: 25000,
    branches: 1100,
    countries: 7,
    globalRank: 55,
    description: "One of the Philippines' oldest and largest banks, providing comprehensive banking and investment services across Asia and internationally.",
    keyFact: "BPI operates over 1,100 branches and serves over 10 million customers with strong retail and corporate banking capabilities.",
    ceoQuote: "We are building a stronger, more inclusive financial system for the Philippines.",
    timeline: [
      { year: 1851, event: "Bank of the Philippine Islands established" },
      { year: 1992, event: "Becomes one of the largest private banks in Philippines" },
      { year: 2010, event: "Continues expansion in investment banking" },
      { year: 2024, event: "Major Philippine bank with $120B in assets" }
    ],
    comparisons: null
  },

  'ocbc-bank': {
    id: 'ocbc-bank',
    name: 'Oversea-Chinese Banking Corporation Limited',
    shortName: 'OCBC',
    country: 'Singapore',
    flag: '🇸🇬',
    founded: 1932,
    headquarters: 'Singapore',
    assets: 385,
    marketCap: 52,
    revenue: 12,
    netIncome: 4.2,
    employees: 28000,
    branches: 380,
    countries: 25,
    globalRank: 33,
    description: "Singapore's second-largest bank and one of Asia's leading financial institutions with strong regional and global banking operations.",
    keyFact: "OCBC operates in 25 countries and serves millions of customers with comprehensive retail, commercial, and investment banking services.",
    ceoQuote: "We are building an integrated financial services platform for Asia.",
    timeline: [
      { year: 1932, event: "Oversea-Chinese Banking Corporation established in Singapore" },
      { year: 2001, event: "Acquires Keppel TatLee Bank to expand presence" },
      { year: 2010, event: "Becomes one of Asia's strongest banks" },
      { year: 2024, event: "Leading Asian bank with $385B in assets across 25 countries" }
    ],
    comparisons: null
  },

  'nationwide-uk': {
    id: 'nationwide-uk',
    name: 'Nationwide Building Society',
    shortName: 'Nationwide',
    country: 'United Kingdom',
    flag: '🇬🇧',
    founded: 1987,
    headquarters: 'Swindon, United Kingdom',
    assets: 250,
    marketCap: 18,
    revenue: 6.5,
    netIncome: 1.6,
    employees: 18000,
    branches: 500,
    countries: 1,
    globalRank: 43,
    description: "The UK's largest building society and one of the largest savings and loans institutions, providing mortgages and banking services to millions of British families.",
    keyFact: "Nationwide serves over 16 million members and customers with strong mortgage origination capabilities and customer-focused banking services.",
    ceoQuote: "We are committed to supporting the financial wellbeing of our members.",
    timeline: [
      { year: 1987, event: "Nationwide Building Society established through merger" },
      { year: 2001, event: "Becomes the UK's largest building society by assets" },
      { year: 2015, event: "Expands digital banking and customer experience" },
      { year: 2024, event: "Major UK bank with $250B in assets and 16 million members" }
    ],
    comparisons: null
  },

  'china-merchants-bank': {
    id: 'china-merchants-bank',
    name: 'China Merchants Bank Co., Ltd.',
    shortName: 'CMB',
    country: 'China',
    flag: '🇨🇳',
    founded: 1987,
    headquarters: 'Shenzhen, China',
    assets: 850,
    marketCap: 95,
    revenue: 68,
    netIncome: 18,
    employees: 200000,
    branches: 2800,
    countries: 35,
    globalRank: 13,
    description: "One of China's leading commercial banks with significant international presence, providing comprehensive banking and financial services globally.",
    keyFact: "China Merchants Bank serves over 150 million customers with 2,800+ branches and operates in 35 countries with strong digital banking capabilities.",
    ceoQuote: "We are committed to innovation and customer-centric banking services.",
    timeline: [
      { year: 1987, event: "China Merchants Bank established in Shenzhen" },
      { year: 2002, event: "Lists on Shanghai Stock Exchange" },
      { year: 2015, event: "Becomes one of China's leading banks by market cap" },
      { year: 2024, event: "Major global bank with $850B in assets and 2,800+ branches" }
    ],
    comparisons: null
  },

  'banco-itau': {
    id: 'banco-itau',
    name: 'Itaú Unibanco Holding S.A.',
    shortName: 'Itaú',
    country: 'Brazil',
    flag: '🇧🇷',
    founded: 1980,
    headquarters: 'São Paulo, Brazil',
    assets: 480,
    marketCap: 65,
    revenue: 24,
    netIncome: 6.5,
    employees: 105000,
    branches: 4800,
    countries: 45,
    globalRank: 25,
    description: "Brazil's largest bank and one of Latin America's major financial institutions with extensive operations across the Americas and globally.",
    keyFact: "Itaú serves over 100 million customers across 45 countries with 4,800+ branches and significant investment banking and wealth management capabilities.",
    ceoQuote: "We are building a more inclusive and sustainable financial future.",
    timeline: [
      { year: 1980, event: "Itaú Bank established through merger in São Paulo" },
      { year: 2008, event: "Merges with Unibanco to become Itaú Unibanco" },
      { year: 2015, event: "Becomes one of the world's largest banks by assets" },
      { year: 2024, event: "Major Latin American bank with $480B in assets and 4,800+ branches" }
    ],
    comparisons: null
  },

  'axis-bank': {
    id: 'axis-bank',
    name: 'Axis Bank Limited',
    shortName: 'Axis Bank',
    country: 'India',
    flag: '🇮🇳',
    founded: 1994,
    headquarters: 'Mumbai, India',
    assets: 220,
    marketCap: 48,
    revenue: 12,
    netIncome: 3.2,
    employees: 65000,
    branches: 1600,
    countries: 8,
    globalRank: 38,
    description: "India's third-largest private sector bank providing retail, commercial, and investment banking services across India and internationally.",
    keyFact: "Axis Bank serves over 40 million customers with 1,600+ branches and strong digital banking capabilities across multiple countries.",
    ceoQuote: "We are committed to creating a better tomorrow through innovative financial solutions.",
    timeline: [
      { year: 1994, event: "Axis Bank established as Axis Bank Limited" },
      { year: 2007, event: "Goes public and becomes major player in Indian banking" },
      { year: 2015, event: "Becomes India's third-largest private bank" },
      { year: 2024, event: "Leading Indian private bank with $220B in assets" }
    ],
    comparisons: null
  },

  'hdfc-bank': {
    id: 'hdfc-bank',
    name: 'HDFC Bank Limited',
    shortName: 'HDFC Bank',
    country: 'India',
    flag: '🇮🇳',
    founded: 1994,
    headquarters: 'Mumbai, India',
    assets: 280,
    marketCap: 65,
    revenue: 14,
    netIncome: 4.2,
    employees: 75000,
    branches: 1500,
    countries: 10,
    globalRank: 31,
    description: "India's second-largest private sector bank, providing comprehensive retail, commercial, and investment banking services across India and internationally.",
    keyFact: "HDFC Bank serves over 60 million customers and operates across 10 countries with strong digital banking and wealth management capabilities.",
    ceoQuote: "We are committed to providing the best customer experience in banking.",
    timeline: [
      { year: 1994, event: "HDFC Bank established with backing from Housing Development Finance Corporation" },
      { year: 2000, event: "Goes public and begins major expansion" },
      { year: 2010, event: "Becomes one of India's largest banks by market cap" },
      { year: 2024, event: "Major Indian bank with $280B in assets across 10 countries" }
    ],
    comparisons: null
  },

  'cimb-bank': {
    id: 'cimb-bank',
    name: 'CIMB Group Holdings Berhad',
    shortName: 'CIMB',
    country: 'Malaysia',
    flag: '🇲🇾',
    founded: 1987,
    headquarters: 'Kuala Lumpur, Malaysia',
    assets: 310,
    marketCap: 35,
    revenue: 11,
    netIncome: 2.8,
    employees: 40000,
    branches: 1200,
    countries: 18,
    globalRank: 30,
    description: "Malaysia's leading bank and one of Southeast Asia's largest financial institutions with significant presence across Asia.",
    keyFact: "CIMB operates in 18 countries with 1,200+ branches and serves millions of customers with comprehensive banking and investment services.",
    ceoQuote: "We are committed to being the leading ASEAN bank.",
    timeline: [
      { year: 1987, event: "CIMB established through merger of banking operations" },
      { year: 2003, event: "Merges with commerce bank to form CIMB Group" },
      { year: 2010, event: "Becomes Malaysia's leading bank by assets" },
      { year: 2024, event: "Major Southeast Asian bank with $310B in assets across 18 countries" }
    ],
    comparisons: null
  },

  'maybank': {
    id: 'maybank',
    name: 'Malayan Banking Berhad',
    shortName: 'Maybank',
    country: 'Malaysia',
    flag: '🇲🇾',
    founded: 1960,
    headquarters: 'Kuala Lumpur, Malaysia',
    assets: 380,
    marketCap: 48,
    revenue: 13,
    netIncome: 3.5,
    employees: 45000,
    branches: 1400,
    countries: 20,
    globalRank: 29,
    description: "Malaysia's largest bank and one of Asia's leading financial institutions with extensive regional and global operations.",
    keyFact: "Maybank serves over 50 million customers across 20 countries with 1,400+ branches and strong investment banking capabilities.",
    ceoQuote: "We are advancing human progress through financial innovation.",
    timeline: [
      { year: 1960, event: "Malayan Banking Berhad established as Malaysia's premier bank" },
      { year: 1992, event: "Goes public and begins major expansion" },
      { year: 2010, event: "Becomes one of Asia's top 10 banks" },
      { year: 2024, event: "Leading Malaysian bank with $380B in assets across 20 countries" }
    ],
    comparisons: null
  },

  'public-bank': {
    id: 'public-bank',
    name: 'Public Bank Berhad',
    shortName: 'Public Bank',
    country: 'Malaysia',
    flag: '🇲🇾',
    founded: 1966,
    headquarters: 'Kuala Lumpur, Malaysia',
    assets: 225,
    marketCap: 35,
    revenue: 8.5,
    netIncome: 2.5,
    employees: 28000,
    branches: 280,
    countries: 11,
    globalRank: 39,
    description: "Malaysia's third-largest bank providing banking and financial services to millions of customers across Southeast Asia.",
    keyFact: "Public Bank serves over 7 million customers with strong focus on retail banking and digital services across 11 countries.",
    ceoQuote: "We are committed to being the most trusted bank in Malaysia.",
    timeline: [
      { year: 1966, event: "Public Bank established in Malaysia" },
      { year: 1989, event: "Goes public and begins expansion" },
      { year: 2000, event: "Becomes one of Malaysia's top 3 banks" },
      { year: 2024, event: "Major Malaysian bank with $225B in assets across 11 countries" }
    ],
    comparisons: null
  },

  'bank-of-tokyo': {
    id: 'bank-of-tokyo',
    name: 'Bank of Tokyo-Mitsubishi UFJ, Ltd.',
    shortName: 'BTMU',
    country: 'Japan',
    flag: '🇯🇵',
    founded: 2005,
    headquarters: 'Tokyo, Japan',
    assets: 2900,
    marketCap: 185,
    revenue: 120,
    netIncome: 22,
    employees: 320000,
    branches: 4500,
    countries: 60,
    globalRank: 2,
    description: "The world's largest bank by assets as part of Mitsubishi UFJ Financial Group, operating globally with extensive financial services.",
    keyFact: "MUFG is the world's largest bank by assets with operations in 60 countries and serving millions of customers with comprehensive banking services.",
    ceoQuote: "We are committed to creating value and supporting the global economy.",
    timeline: [
      { year: 2005, event: "Bank of Tokyo-Mitsubishi and UFJ Bank merge to form BTMU" },
      { year: 2010, event: "Becomes part of Mitsubishi UFJ Financial Group, world's largest bank" },
      { year: 2015, event: "Continues expansion in global capital markets" },
      { year: 2024, event: "World's second-largest bank with $2.9T in assets" }
    ],
    comparisons: null
  },

  'bank-of-kyoto': {
    id: 'bank-of-kyoto',
    name: 'Bank of Kyoto, Ltd.',
    shortName: 'Bank of Kyoto',
    country: 'Japan',
    flag: '🇯🇵',
    founded: 1951,
    headquarters: 'Kyoto, Japan',
    assets: 75,
    marketCap: 6,
    revenue: 3.5,
    netIncome: 0.8,
    employees: 8000,
    branches: 180,
    countries: 1,
    globalRank: 70,
    description: "A major regional bank in Japan serving the Kyoto region and surrounding areas with comprehensive banking services.",
    keyFact: "Bank of Kyoto serves over 500,000 customers in the Kyoto region with 180 branches and strong community banking presence.",
    ceoQuote: "We are dedicated to supporting the prosperity of the Kyoto region.",
    timeline: [
      { year: 1951, event: "Bank of Kyoto established to serve the Kyoto region" },
      { year: 1973, event: "Becomes one of Japan's major regional banks" },
      { year: 2000, event: "Modernizes systems and expands digital services" },
      { year: 2024, event: "Leading regional Japanese bank with $75B in assets" }
    ],
    comparisons: null
  },

  'metabank': {
    id: 'metabank',
    name: 'Banco Metropolitano, S.A.',
    shortName: 'Metabank',
    country: 'Dominican Republic',
    flag: '🇩🇴',
    founded: 1998,
    headquarters: 'Santo Domingo, Dominican Republic',
    assets: 32,
    marketCap: 3.2,
    revenue: 1.8,
    netIncome: 0.45,
    employees: 4000,
    branches: 120,
    countries: 1,
    globalRank: 88,
    description: "A major bank in the Dominican Republic providing banking and financial services to individuals and businesses.",
    keyFact: "Metabank serves millions of Dominican citizens and businesses with modern banking facilities and digital services.",
    ceoQuote: "We are committed to financial inclusion and economic growth in the Dominican Republic.",
    timeline: [
      { year: 1998, event: "Banco Metropolitano established in Santo Domingo" },
      { year: 2008, event: "Becomes one of the Dominican Republic's leading banks" },
      { year: 2015, event: "Expands digital banking services" },
      { year: 2024, event: "Major Caribbean bank with $32B in assets" }
    ],
    comparisons: null
  },

  'absa-bank': {
    id: 'absa-bank',
    name: 'Absa Group Limited',
    shortName: 'Absa',
    country: 'South Africa',
    flag: '🇿🇦',
    founded: 1911,
    headquarters: 'Johannesburg, South Africa',
    assets: 165,
    marketCap: 22,
    revenue: 7.8,
    netIncome: 1.9,
    employees: 42000,
    branches: 850,
    countries: 12,
    globalRank: 51,
    description: "South Africa's second-largest bank, formerly Barclay's subsidiary, providing banking and financial services across sub-Saharan Africa.",
    keyFact: "Absa serves over 10 million customers across 12 African countries with strong retail and business banking capabilities.",
    ceoQuote: "We are committed to empowering economic growth across Africa.",
    timeline: [
      { year: 1911, event: "Amalgamated Banks of South Africa established" },
      { year: 1986, event: "Becomes Absa following consolidation" },
      { year: 2017, event: "Barclays divests stake, becomes independent" },
      { year: 2024, event: "Major African bank with $165B in assets across 12 countries" }
    ],
    comparisons: null
  },

  'ecobank': {
    id: 'ecobank',
    name: 'Ecobank Transnational Incorporated',
    shortName: 'Ecobank',
    country: 'Togo',
    flag: '🇹🇬',
    founded: 1988,
    headquarters: 'Lomé, Togo',
    assets: 55,
    marketCap: 6.5,
    revenue: 2.8,
    netIncome: 0.65,
    employees: 18000,
    branches: 1250,
    countries: 35,
    globalRank: 75,
    description: "Africa's leading pan-African bank operating in 35 African countries with strong presence across West and Central Africa.",
    keyFact: "Ecobank operates 1,250+ branches across 35 African countries and serves millions of customers with extensive mobile and digital banking services.",
    ceoQuote: "We are building Africa's digital financial ecosystem.",
    timeline: [
      { year: 1988, event: "Ecobank established with pan-African vision" },
      { year: 2005, event: "Lists on regional stock exchanges" },
      { year: 2010, event: "Becomes Africa's most pan-African bank" },
      { year: 2024, event: "Leading pan-African bank with $55B in assets across 35 countries" }
    ],
    comparisons: null
  },

  'zenith-bank': {
    id: 'zenith-bank',
    name: 'Zenith Bank Plc',
    shortName: 'Zenith',
    country: 'Nigeria',
    flag: '🇳🇬',
    founded: 1990,
    headquarters: 'Lagos, Nigeria',
    assets: 42,
    marketCap: 8.5,
    revenue: 2.5,
    netIncome: 0.8,
    employees: 14000,
    branches: 350,
    countries: 2,
    globalRank: 82,
    description: "Nigeria's leading bank providing comprehensive banking and financial services across Africa with strong corporate and retail franchises.",
    keyFact: "Zenith Bank serves over 8 million customers with 350+ branches and operates in multiple African countries with strong digital banking capabilities.",
    ceoQuote: "We are committed to driving Nigeria's economic transformation.",
    timeline: [
      { year: 1990, event: "Zenith Bank established in Nigeria" },
      { year: 2004, event: "Becomes one of Nigeria's top banks" },
      { year: 2010, event: "Expands internationally across Africa" },
      { year: 2024, event: "Major Nigerian bank with $42B in assets" }
    ],
    comparisons: null
  },

  'gtbank': {
    id: 'gtbank',
    name: 'Guaranty Trust Holding Company Plc',
    shortName: 'GTBank',
    country: 'Nigeria',
    flag: '🇳🇬',
    founded: 1990,
    headquarters: 'Lagos, Nigeria',
    assets: 38,
    marketCap: 9.2,
    revenue: 2.3,
    netIncome: 0.75,
    employees: 12000,
    branches: 280,
    countries: 6,
    globalRank: 84,
    description: "Nigeria's most innovative bank with significant presence across West Africa, providing banking and financial services with digital-first approach.",
    keyFact: "GTBank serves over 7 million customers across Nigeria and 6 African countries with pioneering digital banking services.",
    ceoQuote: "We are creating a world-class digital bank for Africa.",
    timeline: [
      { year: 1990, event: "Guaranty Trust Bank established in Nigeria" },
      { year: 2005, event: "Becomes Africa's most innovative bank" },
      { year: 2015, event: "Expands as Guaranty Trust Holding Company" },
      { year: 2024, event: "Leading African bank with $38B in assets and digital innovation" }
    ],
    comparisons: null
  },

  'equity-bank-kenya': {
    id: 'equity-bank-kenya',
    name: 'Equity Group Holdings Plc',
    shortName: 'Equity Bank',
    country: 'Kenya',
    flag: '🇰🇪',
    founded: 1984,
    headquarters: 'Nairobi, Kenya',
    assets: 18,
    marketCap: 3.8,
    revenue: 1.2,
    netIncome: 0.35,
    employees: 5000,
    branches: 350,
    countries: 4,
    globalRank: 95,
    description: "Kenya's leading bank with expansion across East Africa, committed to financial inclusion and banking innovation.",
    keyFact: "Equity Bank serves over 5 million customers across Kenya, Uganda, Tanzania, and Rwanda with strong focus on mobile banking and financial inclusion.",
    ceoQuote: "We are democratizing banking in Africa.",
    timeline: [
      { year: 1984, event: "Equity Bank established in Kenya" },
      { year: 2006, event: "Goes public and becomes East Africa's fastest-growing bank" },
      { year: 2015, event: "Expands across East Africa" },
      { year: 2024, event: "Leading East African bank with $18B in assets across 4 countries" }
    ],
    comparisons: null
  },

  'emirates-nbd': {
    id: 'emirates-nbd',
    name: 'Emirates NBD PJSC',
    shortName: 'Emirates NBD',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    founded: 1971,
    headquarters: 'Dubai, United Arab Emirates',
    assets: 295,
    marketCap: 52,
    revenue: 11,
    netIncome: 3.8,
    employees: 21000,
    branches: 250,
    countries: 15,
    globalRank: 36,
    description: "The UAE's largest bank and one of the Middle East's leading financial institutions with significant regional and global operations.",
    keyFact: "Emirates NBD serves over 10 million customers across 15 countries with strong investment banking and wealth management capabilities.",
    ceoQuote: "We are shaping the future of banking in the region.",
    timeline: [
      { year: 1971, event: "National Bank of Dubai established" },
      { year: 2007, event: "Merges with Emirates Bank to form Emirates NBD" },
      { year: 2015, event: "Becomes one of the world's top 50 banks" },
      { year: 2024, event: "Leading Middle Eastern bank with $295B in assets across 15 countries" }
    ],
    comparisons: null
  },

  'arab-bank': {
    id: 'arab-bank',
    name: 'Arab Bank PLC',
    shortName: 'Arab Bank',
    country: 'Jordan',
    flag: '🇯🇴',
    founded: 1930,
    headquarters: 'Amman, Jordan',
    assets: 75,
    marketCap: 11,
    revenue: 3.8,
    netIncome: 1.1,
    employees: 14000,
    branches: 450,
    countries: 35,
    globalRank: 70,
    description: "The Arab region's oldest and largest bank, operating across the Middle East and North Africa with significant international presence.",
    keyFact: "Arab Bank serves over 5 million customers across 35 countries with strong investment banking and wealth management franchises.",
    ceoQuote: "We are the bridge between the Arab world and global markets.",
    timeline: [
      { year: 1930, event: "Arab Bank established in Palestine" },
      { year: 1948, event: "Relocates to Amman following regional events" },
      { year: 1997, event: "Lists on stock exchanges and goes global" },
      { year: 2024, event: "Leading Arab bank with $75B in assets across 35 countries" }
    ],
    comparisons: null
  },

  'unicredit-italy': {
    id: 'unicredit-italy',
    name: 'UniCredit S.p.A.',
    shortName: 'UniCredit',
    country: 'Italy',
    flag: '🇮🇹',
    founded: 1998,
    headquarters: 'Milan, Italy',
    assets: 880,
    marketCap: 75,
    revenue: 28,
    netIncome: 6.5,
    employees: 145000,
    branches: 4800,
    countries: 14,
    globalRank: 14,
    description: "Europe's leading bank with strong presence in Central and Eastern Europe, providing banking and financial services across Europe and beyond.",
    keyFact: "UniCredit serves over 90 million customers across 14 countries with 4,800+ branches and significant investment banking capabilities.",
    ceoQuote: "We are creating value for Europe's future.",
    timeline: [
      { year: 1998, event: "UniCredit created through merger of Italian banking entities" },
      { year: 2005, event: "Expands significantly into Central and Eastern Europe" },
      { year: 2010, event: "Becomes one of Europe's largest banks" },
      { year: 2024, event: "Leading European bank with $880B in assets across 14 countries" }
    ],
    comparisons: null
  },

  'bbva-bank': {
    id: 'bbva-bank',
    name: 'BBVA (Banco Bilbao Vizcaya Argentaria, S.A.)',
    shortName: 'BBVA',
    country: 'Spain',
    flag: '🇪🇸',
    founded: 1857,
    headquarters: 'Bilbao, Spain',
    assets: 750,
    marketCap: 62,
    revenue: 22,
    netIncome: 5.5,
    employees: 155000,
    branches: 4200,
    countries: 28,
    globalRank: 17,
    description: "Spain's second-largest bank with significant presence in Latin America and Europe, operating as one of the world's largest financial institutions.",
    keyFact: "BBVA serves over 100 million customers across 28 countries with 4,200+ branches and strong investment banking and digital capabilities.",
    ceoQuote: "We are creating opportunity for everyone.",
    timeline: [
      { year: 1857, event: "Banco Bilbao Vizcaya established" },
      { year: 1988, event: "Merges with Argentaria to form BBVA" },
      { year: 2000, event: "Expands aggressively into Latin America" },
      { year: 2024, event: "Major global bank with $750B in assets across 28 countries" }
    ],
    comparisons: null
  },

  'bmw-bank': {
    id: 'bmw-bank',
    name: 'ING Groep N.V.',
    shortName: 'ING',
    country: 'Netherlands',
    flag: '🇳🇱',
    founded: 2000,
    headquarters: 'Amsterdam, Netherlands',
    assets: 950,
    marketCap: 68,
    revenue: 26,
    netIncome: 5.8,
    employees: 57000,
    branches: 1300,
    countries: 40,
    globalRank: 11,
    description: "Europe's leading bank by customer base with significant operations globally, providing banking and financial services across 40 countries.",
    keyFact: "ING serves over 42 million customers across 40 countries with 1,300+ branches and strong digital banking capabilities.",
    ceoQuote: "We are empowering people to make a better life for themselves.",
    timeline: [
      { year: 2000, event: "ING Groep formed through merger of Dutch banking entities" },
      { year: 2008, event: "Becomes Europe's largest bank by customer base" },
      { year: 2015, event: "Focuses on digital transformation and innovation" },
      { year: 2024, event: "Leading global bank with $950B in assets across 40 countries" }
    ],
    comparisons: null
  },

  'banco-sabadell': {
    id: 'banco-sabadell',
    name: 'Banco Sabadell, S.A.',
    shortName: 'Sabadell',
    country: 'Spain',
    flag: '🇪🇸',
    founded: 1881,
    headquarters: 'Barcelona, Spain',
    assets: 205,
    marketCap: 18,
    revenue: 7.8,
    netIncome: 1.5,
    employees: 22000,
    branches: 1500,
    countries: 2,
    globalRank: 45,
    description: "Spain's third-largest bank providing comprehensive banking services across Spain with digital innovation focus.",
    keyFact: "Banco Sabadell serves over 4 million customers with 1,500+ branches and strong digital banking and customer experience.",
    ceoQuote: "We are transforming banking through customer-centric innovation.",
    timeline: [
      { year: 1881, event: "Banco Sabadell founded in Sabadell, Spain" },
      { year: 1999, event: "Becomes Spain's third-largest bank" },
      { year: 2015, event: "Acquires TSB Bank UK to expand internationally" },
      { year: 2024, event: "Major Spanish bank with $205B in assets" }
    ],
    comparisons: null
  },

  'skandinaviska-enskilda': {
    id: 'skandinaviska-enskilda',
    name: 'Skandinaviska Enskilda Banken AB',
    shortName: 'SEB',
    country: 'Sweden',
    flag: '🇸🇪',
    founded: 1856,
    headquarters: 'Stockholm, Sweden',
    assets: 380,
    marketCap: 28,
    revenue: 11,
    netIncome: 2.8,
    employees: 22000,
    branches: 300,
    countries: 20,
    globalRank: 34,
    description: "One of Northern Europe's leading banks providing banking and financial services across Scandinavia and globally.",
    keyFact: "SEB serves over 6 million customers across 20 countries with strong investment banking and wealth management capabilities.",
    ceoQuote: "We are building the bank of the future.",
    timeline: [
      { year: 1856, event: "Skandinaviska Enskilda Banken established in Sweden" },
      { year: 1972, event: "Becomes one of Europe's leading banks" },
      { year: 2000, event: "Expands significantly into investment banking" },
      { year: 2024, event: "Leading Northern European bank with $380B in assets across 20 countries" }
    ],
    comparisons: null
  },

  'danske-bank': {
    id: 'danske-bank',
    name: 'Danske Bank A/S',
    shortName: 'Danske',
    country: 'Denmark',
    flag: '🇩🇰',
    founded: 1871,
    headquarters: 'Copenhagen, Denmark',
    assets: 300,
    marketCap: 22,
    revenue: 9,
    netIncome: 2.2,
    employees: 19000,
    branches: 200,
    countries: 15,
    globalRank: 37,
    description: "The Nordic region's largest bank with significant banking operations across Northern Europe and Baltic states.",
    keyFact: "Danske Bank serves over 4 million customers across 15 countries with strong digital banking capabilities.",
    ceoQuote: "We are making a difference with strong financial advice.",
    timeline: [
      { year: 1871, event: "Danske Bank established in Denmark" },
      { year: 1997, event: "Becomes the Nordic region's largest bank" },
      { year: 2010, event: "Expands significantly into Baltic states" },
      { year: 2024, event: "Leading Nordic bank with $300B in assets across 15 countries" }
    ],
    comparisons: null
  },

  'norges-bank': {
    id: 'norges-bank',
    name: 'DNB ASA',
    shortName: 'DNB',
    country: 'Norway',
    flag: '🇳🇴',
    founded: 1822,
    headquarters: 'Oslo, Norway',
    assets: 280,
    marketCap: 38,
    revenue: 10,
    netIncome: 3.2,
    employees: 12500,
    branches: 120,
    countries: 8,
    globalRank: 40,
    description: "Norway's largest bank and one of Northern Europe's leading financial institutions with strong investment banking presence.",
    keyFact: "DNB serves over 3 million customers across Norway and 8 countries with significant investment banking and asset management capabilities.",
    ceoQuote: "We are creating value for our customers through innovation.",
    timeline: [
      { year: 1822, event: "Den Norske Creditbank established in Norway" },
      { year: 2000, event: "Merges with Den Norske Bank to form DNB ASA" },
      { year: 2010, event: "Becomes Scandinavia's leading investment bank" },
      { year: 2024, event: "Major Norwegian bank with $280B in assets across 8 countries" }
    ],
    comparisons: null
  },

  'rabobank-netherlands': {
    id: 'rabobank-netherlands',
    name: 'Rabobank (Rabobank Group)',
    shortName: 'Rabobank',
    country: 'Netherlands',
    flag: '🇳🇱',
    founded: 1898,
    headquarters: 'Utrecht, Netherlands',
    assets: 280,
    marketCap: 15,
    revenue: 8.5,
    netIncome: 1.8,
    employees: 40000,
    branches: 300,
    countries: 14,
    globalRank: 41,
    description: "One of Europe's leading agricultural and rural banks with significant presence in the Netherlands and internationally.",
    keyFact: "Rabobank serves over 9 million customers with 300 branches across 14 countries and strong agricultural lending capabilities.",
    ceoQuote: "We are committed to sustainable banking for agriculture and food.",
    timeline: [
      { year: 1898, event: "Coöperatieve Centrale Raiffeisen-Boerenleenbank established" },
      { year: 2016, event: "Becomes Rabobank Group with new identity" },
      { year: 2010, event: "Expands significantly into investment banking" },
      { year: 2024, event: "Leading Dutch bank with $280B in assets across 14 countries" }
    ],
    comparisons: null
  },

  'banco-bradesco': {
    id: 'banco-bradesco',
    name: 'Banco Bradesco S.A.',
    shortName: 'Bradesco',
    country: 'Brazil',
    flag: '🇧🇷',
    founded: 1943,
    headquarters: 'Osasco, Brazil',
    assets: 400,
    marketCap: 55,
    revenue: 18,
    netIncome: 5.2,
    employees: 120000,
    branches: 5400,
    countries: 22,
    globalRank: 28,
    description: "Brazil's second-largest bank providing comprehensive banking and insurance services across Brazil and Latin America.",
    keyFact: "Bradesco serves over 90 million customers across 22 countries with 5,400+ branches and integrated insurance operations.",
    ceoQuote: "We are building a more inclusive financial ecosystem.",
    timeline: [
      { year: 1943, event: "Banco Bradesco established in São Paulo" },
      { year: 1979, event: "Becomes Brazil's second-largest bank" },
      { year: 2010, event: "Expands significantly across Latin America" },
      { year: 2024, event: "Major Brazilian bank with $400B in assets across 22 countries" }
    ],
    comparisons: null
  },

  'banco-santander-mexico': {
    id: 'banco-santander-mexico',
    name: 'Banco Santander (México), S.A.',
    shortName: 'Santander México',
    country: 'Mexico',
    flag: '🇲🇽',
    founded: 1994,
    headquarters: 'Mexico City, Mexico',
    assets: 145,
    marketCap: 18,
    revenue: 6.5,
    netIncome: 1.6,
    employees: 36000,
    branches: 1600,
    countries: 1,
    globalRank: 52,
    description: "Mexico's second-largest bank providing comprehensive banking services to retail and corporate customers across Mexico.",
    keyFact: "Banco Santander México serves over 10 million customers with 1,600+ branches and strong digital banking capabilities.",
    ceoQuote: "We are committed to responsible and inclusive banking.",
    timeline: [
      { year: 1994, event: "Banco Santander México established" },
      { year: 2010, event: "Becomes Mexico's second-largest bank" },
      { year: 2015, event: "Expands digital banking services significantly" },
      { year: 2024, event: "Major Mexican bank with $145B in assets" }
    ],
    comparisons: null
  },

  'industrial-bank-china': {
    id: 'industrial-bank-china',
    name: 'Industrial Bank Co., Ltd.',
    shortName: 'Industrial Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 1988,
    headquarters: 'Fuzhou, China',
    assets: 720,
    marketCap: 85,
    revenue: 58,
    netIncome: 16,
    employees: 220000,
    branches: 2500,
    countries: 30,
    globalRank: 18,
    description: "One of China's major commercial banks with significant international presence and comprehensive financial services.",
    keyFact: "Industrial Bank serves over 120 million customers with 2,500+ branches across 30 countries and strong digital banking capabilities.",
    ceoQuote: "We are committed to inclusive and sustainable financial innovation.",
    timeline: [
      { year: 1988, event: "Industrial Bank established in Fuzhou, China" },
      { year: 2000, event: "Becomes one of China's major banks" },
      { year: 2010, event: "Lists on Shanghai and Hong Kong exchanges" },
      { year: 2024, event: "Major global bank with $720B in assets across 30 countries" }
    ],
    comparisons: null
  },

  'bank-of-communications': {
    id: 'bank-of-communications',
    name: 'Bank of Communications Co., Ltd.',
    shortName: 'Bank of Comm',
    country: 'China',
    flag: '🇨🇳',
    founded: 1908,
    headquarters: 'Shanghai, China',
    assets: 620,
    marketCap: 72,
    revenue: 48,
    netIncome: 13,
    employees: 210000,
    branches: 2200,
    countries: 28,
    globalRank: 21,
    description: "One of China's oldest banks with significant banking operations across China and internationally.",
    keyFact: "Bank of Communications serves over 100 million customers with 2,200+ branches across 28 countries.",
    ceoQuote: "We are building a modern financial institution for the future.",
    timeline: [
      { year: 1908, event: "Bank of Communications established in Shanghai" },
      { year: 1958, event: "Becomes the Bank of Communications as a state-owned bank" },
      { year: 2005, event: "Goes public and begins major expansion" },
      { year: 2024, event: "Major Chinese bank with $620B in assets across 28 countries" }
    ],
    comparisons: null
  },

  'china-minsheng-bank': {
    id: 'china-minsheng-bank',
    name: 'China Minsheng Bank Corp., Ltd.',
    shortName: 'Minsheng Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 1996,
    headquarters: 'Beijing, China',
    assets: 680,
    marketCap: 78,
    revenue: 52,
    netIncome: 14,
    employees: 200000,
    branches: 2400,
    countries: 32,
    globalRank: 19,
    description: "One of China's major commercial banks with significant international presence and comprehensive financial services.",
    keyFact: "China Minsheng Bank serves over 130 million customers with 2,400+ branches across 32 countries.",
    ceoQuote: "We are committed to serving the people and driving economic growth.",
    timeline: [
      { year: 1996, event: "China Minsheng Bank established as first non-state-owned bank" },
      { year: 2000, event: "Becomes one of China's major banking institutions" },
      { year: 2010, event: "Lists on stock exchanges and expands globally" },
      { year: 2024, event: "Major Chinese bank with $680B in assets across 32 countries" }
    ],
    comparisons: null
  },

  'shanghai-pudong-bank': {
    id: 'shanghai-pudong-bank',
    name: 'Shanghai Pudong Development Bank Co., Ltd.',
    shortName: 'SPDB',
    country: 'China',
    flag: '🇨🇳',
    founded: 1992,
    headquarters: 'Shanghai, China',
    assets: 550,
    marketCap: 65,
    revenue: 42,
    netIncome: 11,
    employees: 180000,
    branches: 1900,
    countries: 25,
    globalRank: 24,
    description: "One of China's leading regional commercial banks with significant presence across Asia and globally.",
    keyFact: "Shanghai Pudong Development Bank serves over 100 million customers with 1,900+ branches across 25 countries.",
    ceoQuote: "We are building a world-class financial services platform.",
    timeline: [
      { year: 1992, event: "Shanghai Pudong Development Bank established" },
      { year: 2000, event: "Becomes one of China's major regional banks" },
      { year: 2010, event: "Lists on stock exchanges and expands internationally" },
      { year: 2024, event: "Major Chinese bank with $550B in assets across 25 countries" }
    ],
    comparisons: null
  },

  'china-everbright-bank': {
    id: 'china-everbright-bank',
    name: 'China Everbright Bank Company Limited',
    shortName: 'Everbright Bank',
    country: 'China',
    flag: '🇨🇳',
    founded: 1992,
    headquarters: 'Beijing, China',
    assets: 420,
    marketCap: 48,
    revenue: 32,
    netIncome: 8.5,
    employees: 150000,
    branches: 1700,
    countries: 20,
    globalRank: 27,
    description: "One of China's major commercial banks with comprehensive banking and financial services across China and internationally.",
    keyFact: "China Everbright Bank serves over 80 million customers with 1,700+ branches across 20 countries.",
    ceoQuote: "We are committed to financial innovation and sustainable development.",
    timeline: [
      { year: 1992, event: "China Everbright Bank established" },
      { year: 2000, event: "Becomes one of China's leading banks" },
      { year: 2010, event: "Lists on stock exchanges and expands regionally" },
      { year: 2024, event: "Major Chinese bank with $420B in assets across 20 countries" }
    ],
    comparisons: null
  },

  'aeon-bank': {
    id: 'aeon-bank',
    name: 'AEON Bank Limited',
    shortName: 'AEON Bank',
    country: 'Malaysia',
    flag: '🇲🇾',
    founded: 1987,
    headquarters: 'Kuala Lumpur, Malaysia',
    assets: 42,
    marketCap: 5.5,
    revenue: 2.2,
    netIncome: 0.65,
    employees: 5000,
    branches: 250,
    countries: 1,
    globalRank: 83,
    description: "Malaysia's digital-focused bank providing innovative banking and financial services to consumers across Malaysia.",
    keyFact: "AEON Bank serves over 4 million customers with 250+ branches and focuses on digital banking innovation.",
    ceoQuote: "We are transforming banking through digital innovation.",
    timeline: [
      { year: 1987, event: "AEON Bank established in Malaysia" },
      { year: 2005, event: "Becomes one of Malaysia's innovative banks" },
      { year: 2015, event: "Pioneering digital banking in Malaysia" },
      { year: 2024, event: "Leading digital bank in Malaysia with $42B in assets" }
    ],
    comparisons: null
  },

  'banco-latino': {
    id: 'banco-latino',
    name: 'Banco Latinoamericano de Exportaciones S.A.',
    shortName: 'Bladex',
    country: 'Panama',
    flag: '🇵🇦',
    founded: 1975,
    headquarters: 'Panama City, Panama',
    assets: 18,
    marketCap: 1.8,
    revenue: 0.95,
    netIncome: 0.28,
    employees: 1200,
    branches: 15,
    countries: 45,
    globalRank: 96,
    description: "The leading bank for trade financing in Latin America with operations across 45 countries supporting regional commerce.",
    keyFact: "Bladex provides trade financing and export credit services to businesses across 45 countries in Latin America and beyond.",
    ceoQuote: "We are driving trade and commerce across Latin America.",
    timeline: [
      { year: 1975, event: "Banco Latinoamericano de Exportaciones established" },
      { year: 1993, event: "Lists on stock exchange and becomes major trade bank" },
      { year: 2010, event: "Expands trade financing services across region" },
      { year: 2024, event: "Leading Latin American trade bank with $18B in assets" }
    ],
    comparisons: null
  },

  'bank-negara-indonesia': {
    id: 'bank-negara-indonesia',
    name: 'Bank Negara Indonesia (Persero) Tbk.',
    shortName: 'BNI',
    country: 'Indonesia',
    flag: '🇮🇩',
    founded: 1946,
    headquarters: 'Jakarta, Indonesia',
    assets: 195,
    marketCap: 38,
    revenue: 10,
    netIncome: 2.8,
    employees: 35000,
    branches: 1100,
    countries: 25,
    globalRank: 46,
    description: "Indonesia's second-largest bank providing comprehensive banking services across Indonesia and Southeast Asia.",
    keyFact: "Bank Negara Indonesia serves over 35 million customers with 1,100+ branches across 25 countries.",
    ceoQuote: "We are empowering Indonesia's economy through banking innovation.",
    timeline: [
      { year: 1946, event: "Bank Negara Indonesia established as Indonesia's central bank successor" },
      { year: 1968, event: "Becomes Indonesia's major commercial bank" },
      { year: 2010, event: "Expands significantly across Southeast Asia" },
      { year: 2024, event: "Major Southeast Asian bank with $195B in assets across 25 countries" }
    ],
    comparisons: null
  },

};

// Auto-generate comparisons for banks that don't have hand-crafted ones
function generateComparisons(bank) {
  const a = bank.assets; // in billions
  const hungerYears = Math.floor(a / 45);
  const nflTimes = Math.floor(a / 7);
  const homes = Math.floor(a / 0.35 * 1000);
  const iphones = (a / 0.0008).toFixed(1);
  const satellites = Math.floor(a * 10);
  const stadiums = Math.floor(a / 2);
  const hospitals = Math.floor(a / 0.1);
  const libraries = Math.floor(a * 1000);
  const trees = Math.floor(a * 50);
  const dataCenters = Math.floor(a);
  const nasaYears = Math.floor(a / 25);
  const nbaOwn = Math.floor(a / 150);
  const f1Times = Math.floor(a / 10);

  return {
    humanitarian: [
      { icon: '🌍', title: 'End World Hunger', value: hungerYears + ' Years', desc: 'Could fund the end of world hunger for ' + hungerYears + ' years based on UN $45B/year estimate' },
      { icon: '🏥', title: 'Build Hospitals', value: hospitals.toLocaleString(), desc: 'Could build ' + hospitals.toLocaleString() + ' fully-equipped hospitals worldwide' },
      { icon: '📚', title: 'Public Libraries', value: libraries.toLocaleString(), desc: 'Could build ' + libraries.toLocaleString() + ' public libraries globally' },
      { icon: '🌳', title: 'Plant Trees', value: trees + 'B', desc: 'Could plant ' + trees + ' billion trees for reforestation' },
      { icon: '☀️', title: 'Solar Power', value: Math.floor(a / 2) + ' GW', desc: 'Could install ' + Math.floor(a / 2) + ' gigawatts of solar capacity' },
      { icon: '💧', title: 'Clean Water', value: Math.floor(a / 10) + ' Countries', desc: 'Could provide clean water infrastructure for ' + Math.floor(a / 10) + ' developing nations' }
    ],
    corporate: [
      { icon: '🚗', title: 'Buy Tesla', value: (a / 1000).toFixed(1) + 'x Over', desc: 'Could purchase Tesla ' + (a / 1000).toFixed(1) + ' times at current valuation' },
      { icon: '✈️', title: 'All Airlines', value: Math.floor(a / 20) + 'x Over', desc: 'Could buy every major airline ' + Math.floor(a / 20) + ' times' },
      { icon: '🏬', title: 'Retail Empire', value: 'Walmart ' + Math.floor(a / 450) + 'x', desc: 'Could buy Walmart ' + Math.floor(a / 450) + ' times over' },
      { icon: '🎬', title: 'Entertainment', value: 'Netflix ' + Math.floor(a / 250) + 'x', desc: 'Could buy Netflix ' + Math.floor(a / 250) + ' times' },
      { icon: '💻', title: 'Tech Companies', value: Math.floor(a / 100) + ' Unicorns', desc: 'Could buy ' + Math.floor(a / 100) + ' billion-dollar startups' },
      { icon: '⛽', title: 'Energy Sector', value: Math.floor(a / 300) + ' Oil Majors', desc: 'Could acquire ' + Math.floor(a / 300) + ' major oil companies' }
    ],
    sports: [
      { icon: '🏈', title: 'NFL Teams', value: nflTimes + 'x Over', desc: 'Could buy all 32 NFL teams ' + nflTimes + ' times' },
      { icon: '⚽', title: 'Soccer Clubs', value: Math.floor(a / 5) + ' Clubs', desc: 'Could purchase ' + Math.floor(a / 5) + ' major soccer clubs' },
      { icon: '🏀', title: 'NBA Empire', value: nbaOwn + 'x Over', desc: 'Could own the entire NBA ' + nbaOwn + ' times' },
      { icon: '🏎️', title: 'Formula 1', value: f1Times + ' Times', desc: 'Could purchase Formula 1 ' + f1Times + ' times' },
      { icon: '🏟️', title: 'Stadiums', value: stadiums.toLocaleString(), desc: 'Could build ' + stadiums.toLocaleString() + ' professional stadiums' },
      { icon: '🏅', title: 'Olympics', value: Math.floor(a / 15) + ' Games', desc: 'Could fund ' + Math.floor(a / 15) + ' Olympic Games' }
    ],
    'real-estate': [
      { icon: '🏘️', title: 'Homes', value: (homes / 1000000).toFixed(1) + 'M', desc: 'Could buy ' + (homes / 1000000).toFixed(1) + ' million average homes' },
      { icon: '🏰', title: 'Castles', value: Math.floor(a / 0.01).toLocaleString(), desc: 'Could buy ' + Math.floor(a / 0.01).toLocaleString() + ' European castles' },
      { icon: '🏝️', title: 'Private Islands', value: Math.floor(a / 0.05).toLocaleString(), desc: 'Could buy ' + Math.floor(a / 0.05).toLocaleString() + ' private islands' },
      { icon: '🌆', title: 'Skyscrapers', value: Math.floor(a).toLocaleString(), desc: 'Could build ' + Math.floor(a).toLocaleString() + ' skyscrapers' },
      { icon: '🏗️', title: 'Office Space', value: (a * 2).toFixed(0) + 'B sq ft', desc: 'Could buy ' + (a * 2).toFixed(0) + ' billion sq ft of office space' },
      { icon: '🌉', title: 'Bridges', value: Math.floor(a / 1.5).toLocaleString(), desc: 'Could build ' + Math.floor(a / 1.5).toLocaleString() + ' Golden Gate Bridges' }
    ],
    technology: [
      { icon: '📱', title: 'iPhones', value: iphones + 'B', desc: 'Could buy ' + iphones + ' billion iPhones at retail' },
      { icon: '💻', title: 'Data Centers', value: dataCenters.toLocaleString(), desc: 'Could build ' + dataCenters.toLocaleString() + ' massive data centers' },
      { icon: '🚀', title: 'Space Programs', value: nasaYears + ' NASA Years', desc: 'Could fund NASA for ' + nasaYears + ' years' },
      { icon: '🛰️', title: 'Satellites', value: satellites.toLocaleString(), desc: 'Could launch ' + satellites.toLocaleString() + ' communication satellites' },
      { icon: '🤖', title: 'AI Research', value: Math.floor(a / 10) + ' Years', desc: 'Could fund global AI research for ' + Math.floor(a / 10) + ' years' },
      { icon: '🔬', title: 'Research Labs', value: (a * 20).toLocaleString(), desc: 'Could build ' + (a * 20).toLocaleString() + ' research facilities' }
    ]
  };
}

// Auto-populate comparisons for all banks that have null comparisons
Object.values(banksData).forEach(function(bank) {
  if (!bank.comparisons) {
    bank.comparisons = generateComparisons(bank);
  }
});

// Utility functions for the website
const bankUtils = {
  getBankById: (id) => banksData[id],
  getAllBanks: () => Object.values(banksData),
  getBanksByAssets: () => {
    return Object.values(banksData).sort((a, b) => b.assets - a.assets);
  },
  getBanksByCountry: (country) => {
    return Object.values(banksData).filter(b => b.country === country);
  },
  getAllCountries: () => {
    return [...new Set(Object.values(banksData).map(b => b.country))].sort();
  },
  getBankCount: () => Object.keys(banksData).length,
  formatCurrency: (billions) => {
    if (billions >= 1000) {
      return '$' + (billions / 1000).toFixed(1) + 'T';
    }
    return '$' + billions + 'B';
  },
  formatNumber: (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  },
  calculateHungerYears: (assets) => {
    const costPerYear = 45;
    return Math.floor(assets / costPerYear);
  },
  getBankUrl: (id) => '/bank.html?id=' + id,
  getComparisonUrl: (bankIds) => {
    const query = bankIds.join(',');
    return '/compare.html?banks=' + query;
  },
  searchBanks: (query) => {
    const q = query.toLowerCase();
    return Object.values(banksData).filter(bank =>
      bank.name.toLowerCase().includes(q) ||
      bank.shortName.toLowerCase().includes(q) ||
      bank.country.toLowerCase().includes(q) ||
      bank.headquarters.toLowerCase().includes(q)
    );
  }
};

// Export for use in browser
if (typeof window !== 'undefined') {
  window.banksData = banksData;
  window.bankUtils = bankUtils;
}
