export const IMAGES = {
  hero: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/1a6caffa5-9144-480e-8bd6-e3dce89b7e6b.png',
  automation: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/16e422d99-1e6c-4734-93b3-e178b13a5c70.png',
  power: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/1883c197c-4695-4fce-b458-c07278e0646e.png',
  material: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/12b6fae97-7123-44a6-a0f2-83c4404409b7.png',
  distribution: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/15dd8a106-6196-4fba-8821-60b71bd66d75.png',
  process: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/15e0a22d2-5627-4451-84a6-f02bbcb13159.png',
  combustion: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/13639e314-a75b-42b2-8128-a53f42c61a40.png',
  founder: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/1a32c2835-f069-4090-a255-fc4cecfcd8c2.png',
};

export const MARKETS = [
  {
    id: 'automation',
    title: 'Industrial Automation & Motion Control',
    tagline: 'Talent for the technologies that control modern industry.',
    technologies: ['PLCs', 'HMIs', 'Variable Speed Drives', 'Servo Drives', 'Servo Motors', 'Motion Control', 'Robotics', 'Machine Safety', 'Sensors', 'Industrial Networks', 'Control Systems', 'Mechatronics', 'Automation Software'],
    talent: ['OEM manufacturers', 'System integrators', 'Machine builders', 'Specialist distributors', 'End-user engineering'],
    appointments: ['Technical Sales Engineer', 'Business Development Manager', 'Key Account Manager', 'Product Manager', 'Applications Engineer', 'Sales Manager', 'Sales Director', 'Country Manager'],
    industries: ['Packaging', 'Automotive', 'Food & Beverage', 'Logistics', 'Warehousing', 'OEM Machinery', 'Electronics', 'Pharma', 'General Manufacturing'],
    image: IMAGES.automation,
  },
  {
    id: 'power-transmission',
    title: 'Mechanical Power Transmission',
    tagline: 'The people behind the systems that keep industry moving.',
    technologies: ['Gearboxes', 'Geared Motors', 'Electric Motors', 'Couplings', 'Industrial Brakes', 'Clutches', 'Chain', 'Sprockets', 'Bearings', 'Belting', 'Linear Motion', 'Freewheels', 'Torque Limiters'],
    talent: ['OEM manufacturers', 'Specialist distributors', 'Drive-system integrators', 'Service providers', 'End users'],
    appointments: ['Regional Sales Manager', 'Technical Sales Engineer', 'Key Account Manager', 'Product Manager', 'Applications Engineer', 'Aftermarket Sales Manager', 'Sales Director', 'Managing Director'],
    industries: ['Food & Beverage', 'Material Handling', 'Mining', 'Quarrying', 'Marine', 'Steel', 'Automotive', 'Packaging', 'Agriculture', 'General Industry'],
    image: IMAGES.power,
  },
  {
    id: 'material-handling',
    title: 'Bulk & Material Handling',
    tagline: 'Talent for the systems that move industry.',
    technologies: ['Belt Conveyors', 'Chain Conveyors', 'Conveyor Components', 'Bulk Handling', 'Screening', 'Crushing', 'Material Processing', 'Drives', 'Belting', 'Chain', 'Aftermarket & Service'],
    talent: ['System OEMs', 'Component manufacturers', 'Integrators', 'Distributors', 'End users'],
    appointments: ['Sales Engineer', 'Business Development Manager', 'Regional Sales Manager', 'Project Sales Manager', 'Aftermarket Sales Manager', 'Key Account Manager', 'Sales Director', 'Commercial Director'],
    industries: ['Mining', 'Quarrying', 'Cement', 'Food', 'Logistics', 'Ports', 'Aggregates', 'Recycling', 'Steel', 'Manufacturing'],
    image: IMAGES.material,
  },
  {
    id: 'distribution-mro',
    title: 'Industrial Distribution & MRO',
    tagline: 'Commercial talent for the businesses that keep industry supplied.',
    technologies: ['Bearings', 'Power Transmission', 'Automation', 'Electrical', 'Fluid Power', 'Pneumatics', 'Engineering Consumables', 'MRO Services', 'Reliability', 'Maintenance', 'Mechanical Services', 'Technical Distribution'],
    talent: ['National distributors', 'Independent distributors', 'Specialist stockists', 'Service businesses', 'Industrial end users'],
    appointments: ['Area Sales Manager', 'External Sales Engineer', 'Branch Manager', 'Key Account Manager', 'Product Manager', 'Regional Manager', 'Sales Director', 'General Manager'],
    industries: ['Manufacturing', 'Food & Beverage', 'Utilities', 'Automotive', 'Warehousing', 'Marine', 'Steel', 'Engineering', 'Infrastructure', 'Heavy Industry'],
    image: IMAGES.distribution,
  },
  {
    id: 'process-flow',
    title: 'Process, Flow & Instrumentation',
    tagline: 'Talent for the technologies that measure, control and manage process.',
    technologies: ['Valves', 'Pumps', 'Actuation', 'Flow Control', 'Pressure', 'Temperature', 'Instrumentation', 'Process Automation', 'Measurement', 'Control Systems', 'Level', 'Analytical'],
    talent: ['OEM manufacturers', 'System integrators', 'Specialist distributors', 'Engineering contractors', 'Process end users'],
    appointments: ['Sales Engineer', 'Business Development Manager', 'Applications Engineer', 'Product Manager', 'Key Account Manager', 'Sales Manager', 'Country Manager', 'Sales Director'],
    industries: ['Oil & Gas', 'Water', 'Chemical', 'Pharma', 'Food & Beverage', 'Power', 'Utilities', 'Petrochemical', 'Marine', 'Manufacturing'],
    image: IMAGES.process,
  },
  {
    id: 'combustion-energy',
    title: 'Combustion, Thermal & Energy',
    tagline: 'Specialist talent for high-value thermal and energy systems.',
    technologies: ['Industrial Burners', 'Fired Heaters', 'Heat Exchangers', 'Combustion Systems', 'Flares', 'Thermal Processing', 'Emissions Technology', 'Energy Systems', 'Furnaces', 'Waste Heat', 'Process Heating', 'Engineered Packages'],
    talent: ['Equipment OEMs', 'Engineering contractors', 'EPCs', 'Specialist integrators', 'Energy and process end users'],
    appointments: ['Sales Engineer', 'Business Development Manager', 'Applications Engineer', 'Project Sales Manager', 'Key Account Manager', 'Sales Director', 'Commercial Director', 'General Manager'],
    industries: ['Oil & Gas', 'Petrochemical', 'Power', 'Refining', 'Chemical', 'Energy', 'Steel', 'Process Industry', 'Industrial Heating', 'Utilities'],
    image: IMAGES.combustion,
  },
];

export const INSIGHTS = [
  {
    category: 'Hiring Intelligence',
    title: 'Why Competitor Mapping Changes the Quality of a Technical Sales Search',
    excerpt: 'Products → Applications → Customers → Competitors → Adjacent Technologies → People. Why direct competitors are only the first layer and why passive talent is found by mapping companies before candidates.',
    date: '14 Aug 2026',
    readTime: '6 min read',
  },
  {
    category: 'Automation & Motion',
    title: 'Where Servo & Drives Talent Is Moving',
    excerpt: 'The crossover between servo, drives, PLC/HMI, robotics, safety, sensors, mechatronics and machine builders — and why application knowledge and customer relevance matter more than ever.',
    date: '08 Aug 2026',
    readTime: '5 min read',
  },
  {
    category: 'Power Transmission',
    title: "When Gearbox Experience Isn't the Only Answer",
    excerpt: 'Understanding the complete drive train and transferable experience across motors, gearboxes, couplings, bearings, drives and distribution.',
    date: '02 Aug 2026',
    readTime: '4 min read',
  },
  {
    category: 'Material Handling',
    title: 'The Commercial Talent Behind Conveyors & Bulk Handling',
    excerpt: 'Systems versus component sales, aftermarket value, and the talent pools across conveyors, chain, belting, drives, screening, crushing and engineering service.',
    date: '28 Jul 2026',
    readTime: '5 min read',
  },
  {
    category: 'Market Entry',
    title: 'Building a Sales Function in a New Country',
    excerpt: 'First-hire profile, route to market, competitor landscape, talent density, compensation, location and how to sell the opportunity to passive candidates.',
    date: '21 Jul 2026',
    readTime: '7 min read',
  },
  {
    category: 'Consulo Viewpoint',
    title: 'The Best Candidate May Not Be Looking',
    excerpt: 'Passive talent, confidential conversations, long-term relationships and targeted market representation when no advertised vacancy exists.',
    date: '15 Jul 2026',
    readTime: '4 min read',
  },
];

export const CLIENT_LOGOS = ['WEG', 'Rossi', 'Brown GearTech', 'Tsubakimoto', 'Regina', 'John King Chain', 'THK', 'IKO Nippon', 'Habasit', 'Forbo Movement Systems'];

export const REGIONS = ['United States', 'United Kingdom', 'Continental Europe', 'Middle East'];
