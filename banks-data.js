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
  }
};

// Utility functions for the website
const bankUtils = {
  // Get bank by ID
  getBankById: (id) => banksData[id],
  
  // Get all banks as array
  getAllBanks: () => Object.values(banksData),
  
  // Get banks sorted by assets
  getBanksByAssets: () => {
    return Object.values(banksData).sort((a, b) => b.assets - a.assets);
  },
  
  // Format currency
  formatCurrency: (billions) => {
    if (billions >= 1000) {
      return `${(billions / 1000).toFixed(1)}T`;
    }
    return `${billions}B`;
  },
  
  // Format large numbers
  formatNumber: (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  },
  
  // Calculate years to end world hunger
  calculateHungerYears: (assets) => {
    const costPerYear = 45; // $45 billion per year (UN estimate)
    return Math.floor(assets / costPerYear);
  },
  
  // Get bank URL
  getBankUrl: (id) => `/bank.html?id=${id}`,
  
  // Get comparison URL
  getComparisonUrl: (bankIds) => {
    const query = bankIds.join(',');
    return `/compare.html?banks=${query}`;
  }
};

// Export for use in browser
if (typeof window !== 'undefined') {
  window.banksData = banksData;
  window.bankUtils = bankUtils;
}
