export const IMAGES = {
  hero: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/1a6caffa5-9144-480e-8bd6-e3dce89b7e6b.png',
  automation: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/16e422d99-1e6c-4734-93b3-e178b13a5c70.png',
  power: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/1883c197c-4695-4fce-b458-c07278e0646e.png',
  material: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/12b6fae97-7123-44a6-a0f2-83c4404409b7.png',
  distribution: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/15dd8a106-6196-4fba-8821-60b71bd66d75.png',
  process: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/15e0a22d2-5627-4451-84a6-f02bbcb13159.png',
  combustion: 'https://image.qwenlm.ai/public_source/2402bf32-a460-4cba-84f5-cce3cb767ebd/13639e314-a75b-42b2-8128-a53f42c61a40.png',
  // Placeholder artwork pending a licensed industrial electrification photograph.
  electrification: '/markets/electrification.svg',
};

export const MARKETS = [
  {
    id: 'automation',
    title: 'Automation & Motion Control',
    tagline: 'Talent for the technologies that control modern industry.',
    technologies: ['PLCs', 'HMIs', 'Variable Speed Drives', 'Servo Drives', 'Servo Motors', 'Motion Control', 'Robotics', 'Machine Safety', 'Sensors', 'Industrial Networks', 'Control Systems', 'Mechatronics', 'Automation Software'],
    talent: ['OEM manufacturers', 'System integrators', 'Machine builders', 'Specialist distributors', 'End-user engineering'],
    appointments: ['Technical Sales Engineer', 'Business Development Manager', 'Key Account Manager', 'Product Manager', 'Applications Engineer', 'Sales Manager', 'Sales Director', 'Country Manager'],
    industries: ['Packaging', 'Automotive', 'Food & Beverage', 'Logistics', 'Warehousing', 'OEM Machinery', 'Electronics', 'Pharma', 'General Manufacturing'],
    image: IMAGES.automation,
    map: {
      direct: ['Servo Drives', 'Servo Motors', 'PLC / HMI', 'Variable Speed Drives', 'Motion Control'],
      adjacent: ['Robotics', 'Machine Safety', 'Sensors', 'Linear Motion', 'Mechatronics'],
      organisations: ['Automation OEMs', 'Machine Builders', 'System Integrators', 'Specialist Distributors'],
      talent: ['Technical Sales', 'Applications', 'Business Development', 'Product Management', 'Sales Leadership'],
    },
    related: ['electrification', 'power-transmission'],
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
    map: {
      direct: ['Gearboxes', 'Geared Motors', 'Couplings', 'Chain & Sprockets', 'Bearings'],
      adjacent: ['Electric Motors', 'Variable Speed Drives', 'Belting', 'Linear Motion', 'Brakes & Clutches'],
      organisations: ['Drive OEMs', 'Component Manufacturers', 'Drive-System Integrators', 'Specialist Distributors', 'Service & Aftermarket'],
      talent: ['Technical Sales', 'Applications', 'Key Accounts', 'Product Management', 'Sales Leadership'],
    },
    related: ['electrification', 'automation'],
  },
  {
    id: 'electrification',
    title: 'Electrification & Energy Technologies',
    tagline: 'Talent for the technologies electrifying industry.',
    technologies: ['Industrial Electrification', 'Electric Motors', 'High-Efficiency Motors', 'Electric Drivetrains', 'Power Electronics', 'Inverters', 'Power Conversion', 'Energy Storage', 'Battery Systems', 'Charging Infrastructure', 'Electrified Industrial Equipment', 'Energy Efficiency'],
    talent: ['Motor and drive OEMs', 'Power electronics manufacturers', 'Energy storage and battery businesses', 'Electrified equipment OEMs', 'Specialist distributors and integrators'],
    appointments: ['Technical Sales Engineer', 'Business Development Manager', 'Key Account Manager', 'Product Manager', 'Applications Engineer', 'Country Manager', 'Sales Director', 'Commercial Director'],
    industries: ['Manufacturing', 'Automotive', 'Material Handling', 'Off-Highway', 'Marine', 'Mining', 'Utilities', 'Renewables', 'Data Centres', 'Infrastructure'],
    image: IMAGES.electrification,
    map: {
      direct: ['Electric Motors', 'High-Efficiency Motors', 'Inverters', 'Power Electronics', 'Electric Drivetrains'],
      adjacent: ['Variable Speed Drives', 'Energy Storage', 'Battery Systems', 'Charging Infrastructure', 'Energy Efficiency'],
      organisations: ['Motor & Drive OEMs', 'Power Electronics Manufacturers', 'Energy Storage Businesses', 'Electrified Equipment OEMs', 'Specialist Distributors'],
      talent: ['Technical Sales', 'Applications', 'Business Development', 'Product Management', 'Commercial Leadership'],
    },
    related: ['automation', 'power-transmission'],
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
    map: {
      direct: ['Belt Conveyors', 'Chain Conveyors', 'Conveyor Components', 'Bulk Handling Systems', 'Screening & Crushing'],
      adjacent: ['Drives & Gearboxes', 'Belting', 'Chain', 'Automation & Controls', 'Aftermarket Service'],
      organisations: ['System OEMs', 'Component Manufacturers', 'Integrators', 'Distributors', 'Heavy-Industry End Users'],
      talent: ['Project Sales', 'Technical Sales', 'Aftermarket Sales', 'Business Development', 'Commercial Leadership'],
    },
    related: ['power-transmission', 'distribution-mro'],
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
    map: {
      direct: ['Bearings', 'Power Transmission', 'Fluid Power', 'Electrical', 'Engineering Consumables'],
      adjacent: ['Automation', 'Pneumatics', 'Reliability & Maintenance', 'Mechanical Services', 'Technical Distribution'],
      organisations: ['National Distributors', 'Independent Distributors', 'Specialist Stockists', 'Service Businesses', 'Industrial End Users'],
      talent: ['External Sales', 'Area Sales', 'Branch & Regional Management', 'Product Management', 'General Management'],
    },
    related: ['power-transmission', 'automation'],
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
    map: {
      direct: ['Valves', 'Pumps', 'Actuation', 'Flow Control', 'Instrumentation'],
      adjacent: ['Pressure & Temperature', 'Level & Analytical', 'Process Automation', 'Control Systems', 'Measurement'],
      organisations: ['Process OEMs', 'System Integrators', 'Engineering Contractors', 'Specialist Distributors', 'Process End Users'],
      talent: ['Sales Engineering', 'Applications', 'Business Development', 'Product Management', 'Sales Leadership'],
    },
    related: ['combustion-thermal', 'automation'],
  },
  {
    id: 'combustion-thermal',
    title: 'Combustion & Thermal Technologies',
    tagline: 'Specialist talent for high-value thermal and combustion systems.',
    technologies: ['Industrial Burners', 'Fired Heaters', 'Heat Exchangers', 'Combustion Systems', 'Flares', 'Thermal Processing', 'Emissions Technology', 'Furnaces', 'Waste Heat Recovery', 'Process Heating', 'Thermal Efficiency', 'Engineered Packages'],
    talent: ['Equipment OEMs', 'Engineering contractors', 'EPCs', 'Specialist integrators', 'Thermal and process end users'],
    appointments: ['Sales Engineer', 'Business Development Manager', 'Applications Engineer', 'Project Sales Manager', 'Key Account Manager', 'Sales Director', 'Commercial Director', 'General Manager'],
    industries: ['Oil & Gas', 'Petrochemical', 'Power', 'Refining', 'Chemical', 'Steel', 'Cement', 'Glass', 'Process Industry', 'Industrial Heating'],
    image: IMAGES.combustion,
    map: {
      direct: ['Industrial Burners', 'Fired Heaters', 'Combustion Systems', 'Heat Exchangers', 'Flares'],
      adjacent: ['Thermal Processing', 'Furnaces', 'Waste Heat Recovery', 'Emissions Technology', 'Process Heating'],
      organisations: ['Equipment OEMs', 'EPCs', 'Engineering Contractors', 'Specialist Integrators', 'Thermal End Users'],
      talent: ['Project Sales', 'Applications', 'Business Development', 'Key Accounts', 'Commercial Leadership'],
    },
    related: ['process-flow', 'electrification'],
  },
];

// The three markets the client asked us to present as an interconnected group
// rather than as independent silos.
export const MARKET_ECOSYSTEM = ['automation', 'electrification', 'power-transmission'];

// Insights are positioned as "Industrial Recruitment & Market Intelligence",
// not a blog. Only `status: 'published'` articles appear on the site — the
// scheduled queue exists so the pipeline is planned but the section does not
// look artificially populated at launch. To publish, change status to
// 'published' and set the live date.
export const INSIGHTS = [
  {
    category: 'Hiring Intelligence',
    title: 'Why Competitor Mapping Changes the Quality of a Technical Sales Search',
    excerpt: 'Products → Applications → Customers → Competitors → Adjacent Technologies → People. Why direct competitors are only the first layer and why passive talent is found by mapping companies before candidates.',
    date: '14 Aug 2026',
    status: 'published',
    readTime: '6 min read',
  },
  {
    category: 'Automation & Motion',
    title: 'Where Servo & Drives Talent Is Moving',
    excerpt: 'The crossover between servo, drives, PLC/HMI, robotics, safety, sensors, mechatronics and machine builders — and why application knowledge and customer relevance matter more than ever.',
    date: '08 Aug 2026',
    status: 'published',
    readTime: '5 min read',
  },
  {
    category: 'Power Transmission',
    title: "When Gearbox Experience Isn't the Only Answer",
    excerpt: 'Understanding the complete drive train and transferable experience across motors, gearboxes, couplings, bearings, drives and distribution.',
    date: '02 Aug 2026',
    status: 'published',
    readTime: '4 min read',
  },
  {
    category: 'Material Handling',
    title: 'The Commercial Talent Behind Conveyors & Bulk Handling',
    excerpt: 'Systems versus component sales, aftermarket value, and the talent pools across conveyors, chain, belting, drives, screening, crushing and engineering service.',
    date: '28 Jul 2026',
    status: 'scheduled',
    readTime: '5 min read',
  },
  {
    category: 'Market Entry',
    title: 'Building a Sales Function in a New Country',
    excerpt: 'First-hire profile, route to market, competitor landscape, talent density, compensation, location and how to sell the opportunity to passive candidates.',
    date: '21 Jul 2026',
    status: 'scheduled',
    readTime: '7 min read',
  },
  {
    category: 'Electrification & Energy',
    title: 'Where Electrification Talent Is Coming From',
    excerpt: 'Motors, inverters, power electronics, drivetrains and storage are pulling commercial talent out of automation and mechanical power transmission — and the people who understand the application are already in industry.',
    date: '',
    status: 'scheduled',
    readTime: '6 min read',
  },
  {
    category: 'Consulo Viewpoint',
    title: 'The Best Candidate May Not Be Looking',
    excerpt: 'Passive talent, confidential conversations, long-term relationships and targeted market representation when no advertised vacancy exists.',
    date: '15 Jul 2026',
    status: 'scheduled',
    readTime: '4 min read',
  },
  {
    category: 'Linear Motion & Mechatronics',
    title: 'Why Linear Motion Sales Talent Is Harder to Find Than It Looks',
    excerpt: 'Profile rail, ballscrews, linear guides, actuators and mechatronic subassemblies — the applications knowledge sits closer to automation than to power transmission.',
    date: '',
    status: 'scheduled',
    readTime: '5 min read',
  },
  {
    category: 'Industrial Distribution',
    title: 'The Commercial Skillset Behind Industrial Distribution & MRO',
    excerpt: 'External sales, branch management and key accounts across bearings, power transmission, fluid power and engineering consumables — why distribution talent is its own specialism.',
    date: '',
    status: 'scheduled',
    readTime: '5 min read',
  },
  {
    category: 'Oil & Gas',
    title: 'Mapping Commercial Talent Across Oil & Gas Technologies',
    excerpt: 'OCTG, drilling, well construction, completions, intervention, subsea and production — early groundwork for a market Consulo is expanding into.',
    date: '',
    status: 'scheduled',
    readTime: '5 min read',
  },
];

// Selected client experience.
//
// `logo` stays null until we hold written permission to display a company's
// mark. Once cleared, drop the artwork into /public/logos and set the path —
// ClientLogo swaps the wordmark for the real logo with no other change.
// See public/logos/README.md.
export const CLIENTS = [
  { name: 'WEG', slug: 'weg', logo: null, featured: true },
  { name: 'Rossi', slug: 'rossi', logo: null, featured: true },
  { name: 'Brown GearTech', slug: 'brown-geartech', logo: null, featured: false },
  { name: 'Tsubakimoto', slug: 'tsubakimoto', logo: null, featured: true },
  { name: 'Regina', slug: 'regina', logo: null, featured: false },
  { name: 'John King Chain', slug: 'john-king-chain', logo: null, featured: false },
  { name: 'THK', slug: 'thk', logo: null, featured: true },
  { name: 'IKO Nippon', slug: 'iko-nippon', logo: null, featured: false },
  { name: 'Habasit', slug: 'habasit', logo: null, featured: true },
  { name: 'Forbo Movement Systems', slug: 'forbo-movement-systems', logo: null, featured: false },
  { name: 'Pilz', slug: 'pilz', logo: null, featured: true },
  { name: 'Zimmer Group', slug: 'zimmer-group', logo: null, featured: false },
];

// Grouped by technology ecosystem rather than listed at random. Companies
// deliberately appear in more than one group where the crossover is real.
export const CLIENT_ECOSYSTEMS = [
  {
    id: 'power-drive',
    title: 'Power Transmission & Drive Technology',
    companies: ['WEG', 'Rossi', 'Brown GearTech', 'Tsubakimoto', 'Regina', 'John King Chain'],
  },
  {
    id: 'linear-mechatronics',
    title: 'Linear Motion, Bearings & Mechatronics',
    companies: ['THK', 'IKO Nippon', 'Zimmer Group'],
  },
  {
    id: 'automation-safety',
    title: 'Automation, Safety & Motion Control',
    companies: ['Pilz', 'Zimmer Group', 'WEG'],
  },
  {
    id: 'belting-conveyor',
    title: 'Belting & Conveyor Technology',
    companies: ['Habasit', 'Forbo Movement Systems', 'Regina', 'Tsubakimoto', 'John King Chain'],
  },
];

export const getClient = (name) => CLIENTS.find((c) => c.name === name);

export const FEATURED_CLIENTS = CLIENTS.filter((c) => c.featured);

export const PUBLISHED_INSIGHTS = INSIGHTS.filter((i) => i.status === 'published');

export const REGIONS = ['United States', 'United Kingdom', 'Continental Europe', 'Middle East'];

// Anonymised search stories. These sit underneath Clients rather than in the
// main navigation. No client or candidate is identifiable: businesses are
// described by technology and market only. The point is to show how Consulo
// approaches a specialist search, not who the search was for.
export const SEARCH_STORIES = [
  {
    id: 'regional-technical-sales-team',
    title: 'Building a regional technical sales team for a global linear motion manufacturer',
    market: 'Linear Motion & Mechatronics',
    region: 'Continental Europe',
    summary: 'Three territory appointments in eleven months — two from adjacent technologies rather than direct competitors.',
    stages: [
      {
        label: 'The Business',
        body: 'A global manufacturer of linear guidance, profile rail and mechatronic actuation systems, moving from a predominantly distribution-led model towards direct commercial coverage of its OEM accounts.',
      },
      {
        label: 'The Challenge',
        body: 'Three technical sales appointments across separate European territories within a single year, each owning machine-builder and OEM relationships directly rather than through a distributor.',
      },
      {
        label: 'What Made the Search Difficult',
        body: 'The obvious talent pool — competing linear motion manufacturers — is small, well known and largely static. Every credible name in each territory had already been approached, in several cases by the client itself.',
      },
      {
        label: 'How We Mapped the Market',
        body: 'We mapped backwards from the application rather than the product. Which machine builders specify profile rail, who sells the automation content around it — servo motors, drives, mechatronic subassemblies, bearings — and which distributors carry the product locally. That took each territory from a handful of direct competitors to roughly sixty relevant businesses.',
      },
      {
        label: 'Search Strategy',
        body: 'Confidential direct approach across component manufacturers, mechatronic subassembly suppliers and specialist distribution. Candidates were weighted on application relevance and OEM customer access rather than job-title match, with each shortlist explaining where experience transferred and where onboarding support would be needed.',
      },
      {
        label: 'Outcome',
        body: 'Three appointments completed over eleven months. Two came from adjacent technologies rather than direct competitors, and all three remain with the business.',
      },
    ],
  },
  {
    id: 'beyond-the-gearbox-pool',
    title: 'Identifying commercial talent beyond the obvious gearbox candidate pool',
    market: 'Mechanical Power Transmission',
    region: 'United Kingdom',
    summary: 'The right candidate sat one component across — not one job title down.',
    stages: [
      {
        label: 'The Business',
        body: 'A European geared-motor and industrial gearbox manufacturer building direct market share in the UK across food, beverage and material handling OEMs.',
      },
      {
        label: 'The Challenge',
        body: 'A senior technical sales appointment carrying responsibility for OEM specification and key account growth in a territory the business had historically served through distribution.',
      },
      {
        label: 'What Made the Search Difficult',
        body: 'The brief specified gearbox experience. In practice, every credible gearbox salesperson in the territory had either already been approached by the client or worked for a customer or distribution partner that could not be approached at all.',
      },
      {
        label: 'How We Mapped the Market',
        body: 'We mapped the complete drive train instead of the single component — motors, variable speed drives, couplings, bearings, chain and belting — and identified which of those talent pools sold into the same OEM accounts and were specified alongside the gearbox on the same machine.',
      },
      {
        label: 'Search Strategy',
        body: 'We agreed a revised profile with the client built on customer access and drive-system understanding rather than product history, and evidenced the transferability case candidate by candidate rather than asking them to take it on trust.',
      },
      {
        label: 'Outcome',
        body: 'Appointment made from a coupling and drive-component background, with existing relationships across the majority of the client’s target OEMs. Fully productive inside two quarters.',
      },
    ],
  },
  {
    id: 'chain-material-handling-leader',
    title: 'Finding a commercial leader within a specialist chain and material handling ecosystem',
    market: 'Bulk & Material Handling',
    region: 'United Kingdom & Continental Europe',
    summary: 'A confidential leadership search inside an ecosystem where everybody knows everybody.',
    stages: [
      {
        label: 'The Business',
        body: 'A specialist manufacturer of engineering-class chain and conveyor components supplying bulk handling, quarrying, recycling and heavy process industries.',
      },
      {
        label: 'The Challenge',
        body: 'A commercial leadership appointment taking ownership of sales strategy across direct accounts, distribution and a substantial aftermarket business.',
      },
      {
        label: 'What Made the Search Difficult',
        body: 'A genuinely small ecosystem in which competitors, customers and distributors overlap heavily. The incumbent was still in position, so the search had to run without the market learning the role existed.',
      },
      {
        label: 'How We Mapped the Market',
        body: 'We mapped the chain and conveyor component ecosystem in full, then extended into adjacent heavy-industry drive and component manufacturers selling to the same end users. Every business that could not be approached for commercial-sensitivity reasons was identified and excluded before any contact was made.',
      },
      {
        label: 'Search Strategy',
        body: 'A fully confidential search in which Consulo represented the opportunity on the client’s behalf, with the business named only at second stage and only to candidates who had cleared a technical and commercial assessment.',
      },
      {
        label: 'Outcome',
        body: 'Confidential appointment from an adjacent heavy-industry component manufacturer, bringing direct, distribution and aftermarket channels under a single commercial strategy for the first time.',
      },
    ],
  },
  {
    id: 'new-international-territory',
    title: 'Building commercial capability within a new international territory',
    market: 'Automation & Electrification',
    region: 'Middle East',
    summary: 'Market intelligence first, search second — the map is now the basis for hires two and three.',
    stages: [
      {
        label: 'The Business',
        body: 'An industrial automation and electrification manufacturer establishing a direct regional presence, having previously served the Middle East from Europe through agents.',
      },
      {
        label: 'The Challenge',
        body: 'A first commercial hire responsible for building the territory outright: route to market, agent and distributor relationships, and direct end-user business.',
      },
      {
        label: 'What Made the Search Difficult',
        body: 'No local brand recognition, no existing team to join, and a profile that needed technical credibility alongside the appetite to operate alone. The client had no reliable view of talent density or compensation benchmarks in the region.',
      },
      {
        label: 'How We Mapped the Market',
        body: 'We delivered a talent map before starting the search: which competing and adjacent manufacturers hold local commercial teams, where those people were recruited from, how the region is genuinely served across direct, agent and distributor models, and what the market pays at each level.',
      },
      {
        label: 'Search Strategy',
        body: 'The search followed the mapping rather than running alongside it. We targeted people already operating regionally for European and Japanese industrial manufacturers, prioritising candidates who had built a territory from nothing over those who had inherited an established one.',
      },
      {
        label: 'Outcome',
        body: 'A country-level commercial appointment, plus a distributor strategy the client had not previously considered. The talent map remains the basis for the second and third appointments in the region.',
      },
    ],
  },
];
