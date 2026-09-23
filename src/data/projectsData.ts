export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  city: string;
  category: 'Residential' | 'Commercial' | 'Turnkey' | 'Modular Kitchen';
  year: string;
  area: string;
  overview: string;
  designConcept: string;
  scope: string[];
  highlights: string[];
  colorPalette: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sunfarma-gurgaon',
    slug: 'sunfarma-gurgaon',
    title: 'Sunfarma Corporate Facility',
    client: 'Sunfarma',
    location: 'Gurgaon, Haryana',
    city: 'Gurgaon',
    category: 'Commercial',
    year: 'Commercial Landmark',
    area: '18,500 sq.ft.',
    overview: 'High-performance commercial interior architecture engineered for pharmaceutical research and executive leadership. The layout balances acoustic isolation with open team circulation.',
    designConcept: 'Clean pharmaceutical precision married with warm architectural oak and fluted glass partitions, minimizing visual noise while maximizing daylight ingress.',
    scope: [
      'Executive Boardroom & AV Integration',
      'Ergonomic Workstation Cluster Zoning',
      'Monolithic Reception & Brand Gallery',
      'Acoustic Ceiling & Linear Lighting Schematics',
      'HVAC & Concealed Electrification Fitout'
    ],
    highlights: [
      'High-performance sound dampening wall panels',
      'Energy-optimized circadian LED lighting grids',
      'Custom marble and smoked glass executive cabins'
    ],
    colorPalette: ['#0A0A0A', '#1E232A', '#D4AF37', '#E5E5E5']
  },
  {
    id: 'ireo-gurgaon',
    slug: 'ireo-gurgaon',
    title: 'IREO Luxury Residence',
    client: 'IREO',
    location: 'Gurgaon, Haryana',
    city: 'Gurgaon',
    category: 'Residential',
    year: 'Luxury Residential',
    area: '4,800 sq.ft.',
    overview: 'Expansive private luxury residence with double-height living areas, custom Italian marble flooring, and bespoke millwork designed for contemporary urban living.',
    designConcept: 'Understated carbon black luxury accented with brushed champagne gold trims, bookmatched Statuario marble, and hidden flush-door architectural paneling.',
    scope: [
      'Full Home Architectural Spatial Planning',
      'Custom German Modular Kitchen & Breakfast Island',
      'Master Bedroom Suite & Walk-In Wardrobe',
      'False Ceiling & Architectural Magnetic Track Lighting',
      'Complete Turnkey Civil & Interior Execution'
    ],
    highlights: [
      'Seamless concealed pocket doors and flush baseboards',
      'Zero-glare indirect warm coves throughout living zones',
      'Custom hydraulic storage beds and fluted veneer paneling'
    ],
    colorPalette: ['#0C0C0C', '#242220', '#C5A059', '#F7F5F0']
  },
  {
    id: 'supertech-noida-sector-94',
    slug: 'supertech-noida-sector-94',
    title: 'Supertech Supernova Suite',
    client: 'Supertech',
    location: 'Noida Sector 94, Uttar Pradesh',
    city: 'Noida',
    category: 'Residential',
    year: 'High-Rise Luxury',
    area: '3,600 sq.ft.',
    overview: 'Ultra-contemporary high-rise apartment interior commanding sweeping skyline views. The interior incorporates smart circadian lighting and custom modular furniture.',
    designConcept: 'Metropolitan minimalism with textural depth—slotted acoustic wood ceilings, bronze mirror accents, and bespoke low-slung Italian leather seating.',
    scope: [
      'Turnkey Interior Fitout from Bare Shell',
      'Designer TV Unit Wall with Backlit Louvers',
      'Spa-Grade Master Bathroom with Concealed Plumbing',
      'Smart Automation for Drapes, Scenes & Climate',
      'Custom Solid Wood Joinery & Modular Wardrobes'
    ],
    highlights: [
      'Panoramic terrace lounge with weather-resistant finishes',
      'Integrated hidden bar unit in smoked mirror & walnut',
      'Acoustic master suite with bespoke padded headboard'
    ],
    colorPalette: ['#121212', '#2D2B28', '#D4AF37', '#ECE8E1']
  },
  {
    id: 'lt-project-aiims-gorakhpur',
    slug: 'lt-project-aiims-gorakhpur',
    title: 'L&T Project — AIIMS Administrative Complex',
    client: 'L&T',
    location: 'AIIMS Gorakhpur, Uttar Pradesh',
    city: 'Gorakhpur',
    category: 'Turnkey',
    year: 'Institutional Turnkey',
    area: '24,000 sq.ft.',
    overview: 'Heavy-traffic administrative and conference facilities executed with institutional durability, acoustic clarity, and high-efficiency spatial planning.',
    designConcept: 'Robust, low-maintenance institutional elegance utilizing impact-resistant materials, antimicrobial surfaces, and daylight-balanced illumination.',
    scope: [
      'Large Conference & Lecture Auditoriums',
      'Faculty Cabins & Administrative Workstations',
      'Heavy-Duty Vitrified Flooring & Wall Cladding',
      'Complete Fire-Retardant Gypsum Ceilings',
      'Turnkey Electrical, Data & HVAC Coordination'
    ],
    highlights: [
      'Strict adherence to institutional engineering codes',
      'Rapid-turnaround execution within scheduled commissioning timeline',
      'Acoustically isolated committee rooms with motorized screens'
    ],
    colorPalette: ['#16181B', '#374151', '#C5A059', '#F3F4F6']
  },
  {
    id: 'prestige-group-bangalore',
    slug: 'prestige-group-bangalore',
    title: 'Prestige Group Luxury Penthouse',
    client: 'Prestige Group',
    location: 'Bangalore, Karnataka',
    city: 'Bangalore',
    category: 'Residential',
    year: 'Signature Penthouse',
    area: '5,500 sq.ft.',
    overview: 'A signature duplex penthouse blending tropical architectural warmth with crisp European minimalism. Features private rooftop entertainment deck and wine gallery.',
    designConcept: 'Warm natural teakwood louvers, double-height stone walls, and recessed gold light troughs creating an elevated residential sanctuary.',
    scope: [
      'Duplex Architectural Space Planning & Steel Staircase',
      'Grand Island Kitchen with Quartz Waterfall Countertops',
      'Four En-Suite Luxury Bedrooms with Dressing Alcoves',
      'Rooftop Deck Pergola & Integrated Landscape Lighting',
      'Custom Bespoke Millwork & Art Display Niches'
    ],
    highlights: [
      'Custom floating steel and timber cantilevered staircase',
      'Climate-controlled glass wine display showcase',
      'Full home automation with scene-based mood presets'
    ],
    colorPalette: ['#0E0E0E', '#2B231D', '#D4AF37', '#F5EFEB']
  }
];

export const CLIENT_BRANDS = [
  { name: 'Sunfarma', sector: 'Pharmaceuticals & Health', location: 'Gurgaon' },
  { name: 'IREO', sector: 'Luxury Real Estate Developers', location: 'Gurgaon' },
  { name: 'Supertech', sector: 'Urban High-Rise Landmarks', location: 'Noida' },
  { name: 'L&T', sector: 'Engineering & Infrastructure', location: 'Pan-India' },
  { name: 'Prestige Group', sector: 'Premium Hospitality & Residences', location: 'Bangalore' }
];

export const MUMBAI_LOCATIONS = [
  'Bandra (West & East)',
  'Andheri (West & East)',
  'Juhu & Vile Parle',
  'Powai & Hiranandani',
  'Worli & Lower Parel',
  'South Mumbai (Malabar Hill, Cuffe Parade)',
  'Goregaon & Malad',
  'Borivali & Kandivali',
  'Thane (Majiwada, Ghodbunder)',
  'Navi Mumbai (Vashi, Palm Beach, Kharghar)',
  'Chembur & Ghatkopar',
  'Dadar & Prabhadevi'
];
