import { NAV_CATEGORIES } from './navigationData';

export interface ServiceDetail {
  slug: string;
  path: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  heroTagline: string;
  shortIntro: string;
  whyThisService: string[];
  designApproach: string;
  processSteps: { step: string; title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedPaths: string[];
}

export const SPECIALIZED_SERVICES_MAP: Record<string, ServiceDetail> = {
  // 1. Living Room False Ceiling
  '/living-room/false-ceiling': {
    slug: 'false-ceiling',
    path: '/living-room/false-ceiling',
    categorySlug: 'living-room',
    categoryTitle: 'Living Room',
    title: 'Living Room False Ceiling Design',
    heroTagline: 'Architectural Dimension, Concealed Acoustic Coves & Statement Impact',
    shortIntro: 'In the main living lounge, the ceiling sets the volumetric tone for the entire residence. We engineer multi-tiered floating ceiling profiles that gracefully integrate magnetic track spotlights, perimeter indirect cove lighting, and concealed cassette AC ducts without lowering perceived room height.',
    whyThisService: [
      'Transforms flat overhead slabs into dynamic sculptural volumes',
      'Provides glare-free ambient indirect lighting calibrated for entertaining and television viewing',
      'Seamlessly conceals electrical wiring, speaker conduits, and ducted air conditioning vents',
      'Enhances room acoustics, reducing echo in marble-floored luxury living spaces'
    ],
    designApproach: 'We coordinate ceiling levels with your TV wall panel and primary seating axis. Using Saint-Gobain certified gypsum boards and GI steel framing, we maintain minimum 9-foot clear heights while introducing recessed linear magnetic tracks for flexible art highlighting.',
    processSteps: [
      { step: '01', title: 'Laser Level Survey', desc: 'Precision digital leveling to identify slab undulations and map beam drops.' },
      { step: '02', title: 'Electrical & AC Layout', desc: 'Pre-routing heavy-duty conduits, AC drain lines, and automation controls.' },
      { step: '03', title: 'Anti-Rust GI Framing', desc: 'Erecting heavy-gauge galvanized steel framework at calibrated centers.' },
      { step: '04', title: 'Boarding & Seamless Taping', desc: 'Board fixing with fiber mesh tape and joint compound to eliminate cracks.' },
      { step: '05', title: 'Lighting & Paint Handover', desc: 'Installing 2700K warm LED strips, magnetic tracks, and velvety matte paint.' }
    ],
    specifications: [
      { label: 'Primary Board', value: 'Saint-Gobain Gyptech 12.5mm' },
      { label: 'Framing Gauge', value: '0.50mm Hot-Dip Galvanized Iron (GI)' },
      { label: 'Cove Illumination', value: 'High CRI 95+, 240 LED/m 24V strip' },
      { label: 'Standard Drop Depth', value: '4 to 6 inches perimeter reveal' }
    ],
    benefits: [
      { title: 'Volumetric Drama', desc: 'Creates the signature expansive feel found in luxury five-star suites.' },
      { title: 'Integrated Smart Controls', desc: 'Easily dim or tune perimeter coves via home automation presets.' },
      { title: 'Zero Glare on Screens', desc: 'Prevents annoying overhead light reflections on large OLED media walls.' },
      { title: 'Acoustic Comfort', desc: 'Absorbs mid-frequency sound reverberations for crisper conversation.' }
    ],
    faqs: [
      { q: 'Will a false ceiling make my living room look smaller?', a: 'No. When designed with peripheral coves and a central raised slab painted in high-LRV warm white, it actually enhances the vertical illusion of height.' },
      { q: 'Can we install heavy chandeliers in the gypsum ceiling?', a: 'Yes. We install heavy-gauge MS steel anchor supports directly into the RCC ceiling slab before boarding, safely supporting fixtures up to 80kg.' },
      { q: 'How long does a living room ceiling installation take?', a: 'Typically 6 to 9 days for framing, boarding, electrical cabling, putty finish, and final architectural painting.' }
    ],
    relatedPaths: ['/living-room/tv-wall-panel', '/living-room/lighting-design', '/ceiling-lighting/cove-lighting']
  },

  // 2. Bedroom False Ceiling
  '/bedroom/false-ceiling': {
    slug: 'false-ceiling',
    path: '/bedroom/false-ceiling',
    categorySlug: 'bedroom',
    categoryTitle: 'Bedroom',
    title: 'Bedroom False Ceiling Design',
    heroTagline: 'Restorative Low-Lux Ambience, Zero Overhead Glare & Acoustic Quiet',
    shortIntro: 'A bedroom ceiling requires a completely different design psychology than public rooms. Direct spotlights over the bed disrupt sleep patterns. We engineer indirect peripheral troughs, reading pinspot cutouts, and acoustic damping to create a soothing retreat tailored for restorative rest.',
    whyThisService: [
      'Eliminates harsh direct downlights directly above pillows or sleeping zones',
      'Integrates motorized curtain track pelmets for complete room-darkening blackout',
      'Provides gentle 2200K–2700K dim-to-warm perimeter lighting for relaxing evenings',
      'Dampens overhead footstep noise from upper apartment floors'
    ],
    designApproach: 'The bed back wall seamlessly transitions into the overhead ceiling through gentle reveals. We position task reading spotlights at 30-degree angles outside eye sightlines and conceal AC indoor units inside discrete soffits above entry foyers or wardrobe vestibules.',
    processSteps: [
      { step: '01', title: 'Bed Axis Alignment', desc: 'Aligning ceiling coves and curtain pelmets precisely to the headboard center.' },
      { step: '02', title: 'Acoustic Insulation Insertion', desc: 'Adding dense glass-wool acoustic blankets above framing for soundproofing.' },
      { step: '03', title: 'Concealed Curtain Pelmet', desc: 'Forming double-track recessed pelmets with wiring for motorized drapery.' },
      { step: '04', title: 'Indirect Light Integration', desc: 'Fitting continuous extruded aluminum channels with frosted diffusers.' },
      { step: '05', title: 'Ultra-Matte Finish', desc: 'Applying non-reflective architectural finish to ensure zero light bounce.' }
    ],
    specifications: [
      { label: 'Recommended Temperature', value: '2700K Warm White or 2200K Dim-to-Warm' },
      { label: 'Acoustic Layer', value: 'Optional 50mm 48kg/m³ Rockwool sound barrier' },
      { label: 'Prow Curtain Pelmet', value: '7-inch recessed double track box' },
      { label: 'Glare Rating', value: 'UGR < 16 for zero eye strain' }
    ],
    benefits: [
      { title: 'Circadian Restfulness', desc: 'Helps signal melatonin release with gentle, indirect golden hour lighting.' },
      { title: 'Blackout Perfection', desc: 'Concealed curtain pelmets eliminate morning light leakage above drapes.' },
      { title: 'Acoustic Sanctuary', desc: 'Significantly reduces overhead structural and HVAC noise.' },
      { title: 'Clean Sightlines', desc: 'No unsightly cables, AC trunking, or exposed fan hooks.' }
    ],
    faqs: [
      { q: 'Can I still install a ceiling fan with a bedroom false ceiling?', a: 'Absolutely. We reinforce the fan down-rod with an independent RCC slab clamp and calibrate the drop to maintain optimal airflow circulation.' },
      { q: 'Is indirect cove lighting bright enough to read in bed?', a: 'We pair ambient perimeter coves with dedicated flexible directional reading pinspots mounted on the headboard or side dropped reveals.' },
      { q: 'Are the materials non-toxic?', a: 'Yes, we use low-VOC water-based sealers and Saint-Gobain eco-friendly gypsum boards that maintain healthy indoor air quality.' }
    ],
    relatedPaths: ['/bedroom/master-bedroom', '/bedroom/bedroom-lighting', '/bedroom/wardrobe-design']
  },

  // 3. Bathroom False Ceiling
  '/bathroom/false-ceiling': {
    slug: 'false-ceiling',
    path: '/bathroom/false-ceiling',
    categorySlug: 'bathroom',
    categoryTitle: 'Bathroom',
    title: 'Bathroom False Ceiling & Moisture Management',
    heroTagline: 'Anti-Fungal Water-Resistant Gypsum, IP65 Optics & Concealed Geysers',
    shortIntro: 'Bathrooms represent the harshest microclimate in any home, subject to high humidity and condensation. We engineer specialized green-board moisture-resistant ceilings with anti-fungal primers, discrete access trap doors for concealed geysers, and IP65 wet-rated lighting.',
    whyThisService: [
      'Prevents mold, peeling paint, and water vapor damage on concrete ceilings',
      'Conceals bulky water heaters (geysers), booster pumps, and exhaust ducting out of sight',
      'Allows flush-mounted IP65 waterproof recessed downlights over showers and tubs',
      'Provides a clean architectural look with seamless magnetic trapdoor access'
    ],
    designApproach: 'Using Saint-Gobain Gyproc MR (Moisture Resistant) boards with specialized silicone-treated cores and water-repellent liners. Framing uses extra-coated corrosion-resistant GI channels. We specify high-capacity silent inline exhaust fans routed through acoustic ducts.',
    processSteps: [
      { step: '01', title: 'Plumbing & Exhaust Inspection', desc: 'Pressure testing all overhead supply lines and routing rigid exhaust pipe.' },
      { step: '02', title: 'Corrosion-Proof Framing', desc: 'Installing heavy galvanized zinc-coated framework resistant to moisture.' },
      { step: '03', title: 'Moisture-Resistant Boarding', desc: 'Fixing Green Gyproc MR boards with stainless steel rust-free drywall screws.' },
      { step: '04', title: 'Concealed Trap Door Fabrication', desc: 'Installing magnetic push-release flush access panel for geyser maintenance.' },
      { step: '05', title: 'Anti-Fungal Epoxy Finish', desc: 'Applying waterproof primer coats and washable scrubbable anti-mold paint.' }
    ],
    specifications: [
      { label: 'Board Type', value: 'Saint-Gobain Gyproc MR (Green Board)' },
      { label: 'Water Absorption', value: '< 5% total water immersion rate' },
      { label: 'Lighting Rating', value: 'IP65 Water & Vapor Jet Protected' },
      { label: 'Access Trap Door', value: '600x600mm Concealed Magnetic Panel' }
    ],
    benefits: [
      { title: 'Five-Star Resort Finish', desc: 'Eliminates ugly exposed water heaters and plumbing lines from your view.' },
      { title: 'Complete Mold Protection', desc: 'Specialized chemical additives prevent mildew and paint flaking for years.' },
      { title: 'Whisper-Quiet Ventilation', desc: 'Concealed inline centrifugal fans extract steam at a whisper-quiet 28dB.' },
      { title: 'Safe Wet-Zone Lighting', desc: 'Low-voltage IP65 fixtures guarantee total electrical safety in high-moisture zones.' }
    ],
    faqs: [
      { q: 'How do I service my water heater if it is hidden in the ceiling?', a: 'We install an invisible magnetic trap door with zero visible hinges. It pushes open in seconds for instant access to the geyser valves and electrical switches.' },
      { q: 'Will the ceiling swell or sag with daily hot steam showers?', a: 'No. Gyproc MR boards are engineered specifically for continuous high-humidity environments, backed by our multi-layer moisture seal.' },
      { q: 'What lighting is recommended for makeup and shaving?', a: 'We pair high-CRI 95+ vertical mirror lights with soft overhead ambient fill so there are zero unflattering facial shadows.' }
    ],
    relatedPaths: ['/bathroom/modern-bathroom', '/bathroom/vanity-design', '/bathroom/tiles-wall-design']
  },

  // 4. Ceiling & Lighting False Ceiling (Overall Comprehensive)
  '/ceiling-lighting/false-ceiling': {
    slug: 'false-ceiling',
    path: '/ceiling-lighting/false-ceiling',
    categorySlug: 'ceiling-lighting',
    categoryTitle: 'Ceiling & Lighting',
    title: 'Architectural False Ceiling Engineering',
    heroTagline: 'Comprehensive Ceiling Solutions: Gypsum, Wooden Rafters, POP & Metal Louvers',
    shortIntro: 'Our overarching false ceiling service encompasses full-property architectural ceiling engineering. From complex multi-room multi-level transitions to acoustic wooden baffle systems and integrated HVAC plenums, we deliver millimeter-level precision across Mumbai residences and corporate offices.',
    whyThisService: [
      'Holistic integration of lighting, audio, air conditioning, and fire safety systems',
      'Structural laser-aligned execution ensuring true 90-degree corners and plane perfection',
      'Access to specialized materials: acoustic perforated boards, timber beams, and stretch ceilings',
      'Turnkey warranty on framework rigidity and finish durability'
    ],
    designApproach: 'Every ceiling begins with full coordinated BIM / CAD shop drawings detailing luminaire cutouts, speaker locations, AC return/supply grilles, and curtain pockets. This prevents on-site clashes and eliminates uncoordinated cutting.',
    processSteps: [
      { step: '01', title: 'MEP Coordination Drawing', desc: 'Overlaying electrical, HVAC, fire fighting and acoustic ceiling plans.' },
      { step: '02', title: 'Heavy-Duty Suspension Grid', desc: 'Anchoring rawl plugs and adjustable perimeter angles on RCC slab.' },
      { step: '03', title: 'Multi-Material Cladding', desc: 'Precision fixing of gypsum, natural veneer panels or acoustic baffles.' },
      { step: '04', title: 'Seamless Surface Leveling', desc: 'Skim coating with specialized polymer compounds to Level 5 finish.' },
      { step: '05', title: 'Integrated Testing', desc: 'Thermal load testing, lux level verification, and final quality signoff.' }
    ],
    specifications: [
      { label: 'Structural Warranty', value: '10-Year Anti-Sag & Framing Guarantee' },
      { label: 'Surface Finish Level', value: 'Level 5 Architectural Glass-Smooth' },
      { label: 'Fire Rating', value: 'Class 0 / Class 1 Flame Retardant' },
      { label: 'Deflection Limit', value: 'L/360 under total design load' }
    ],
    benefits: [
      { title: 'Zero Sagging Guarantee', desc: 'Engineered hanger spacing prevents the unsightly center sagging seen in cheap fitouts.' },
      { title: 'Acoustic Isolation', desc: 'Significant reduction in airborne and impact noise transmission.' },
      { title: 'Thermal Insulation', desc: 'Creates a dead air buffer that cuts summer air-conditioning power bills by up to 18%.' },
      { title: 'Clean Architecture', desc: 'Transforms chaotic overhead cabling into an uncluttered, museum-grade plane.' }
    ],
    faqs: [
      { q: 'What is the difference between POP and Gypsum board?', a: 'Gypsum boards are factory-manufactured panels ensuring uniform density, thickness, and rapid dust-free installation. POP is mixed on site, taking longer to cure and prone to manual inconsistency.' },
      { q: 'Can you match custom veneer textures on the ceiling?', a: 'Yes, we fabricate custom timber ceiling rafts with matched smoked oak, American walnut, or teak veneers with integrated micro-lighting.' },
      { q: 'What is your service coverage area?', a: 'We handle turnkey false ceiling installations across South Mumbai, Bandra, Juhu, Andheri, Powai, Thane, and Navi Mumbai.' }
    ],
    relatedPaths: ['/ceiling-lighting/cove-lighting', '/ceiling-lighting/smart-lighting', '/space-planning/3d-interior-design']
  }
};

// Generic Fallback builder for any subservice so EVERY URL has rich, dedicated, tailored content
export function getServiceDetail(pathname: string): ServiceDetail {
  if (SPECIALIZED_SERVICES_MAP[pathname]) {
    return SPECIALIZED_SERVICES_MAP[pathname];
  }

  // Parse path like "/residential/3-bhk-interior"
  const parts = pathname.split('/').filter(Boolean);
  const catSlug = parts[0] || 'residential';
  const subSlug = parts[1] || '';

  const matchedCat = NAV_CATEGORIES.find((c) => c.path === `/${catSlug}`) || NAV_CATEGORIES[1];
  const matchedItem = matchedCat.items.find((i) => i.path === pathname) || {
    title: formatTitle(subSlug || catSlug),
    path: pathname,
    description: `Bespoke luxury ${formatTitle(subSlug || catSlug)} designed and crafted by Elite Interior and Decore.`
  };

  const cleanTitle = matchedItem.title;
  const otherItems = matchedCat.items.filter((i) => i.path !== pathname).slice(0, 3);

  return {
    slug: subSlug,
    path: pathname,
    categorySlug: catSlug,
    categoryTitle: matchedCat.title,
    title: `${cleanTitle} Services`,
    heroTagline: `Luxury Architectural Planning & Precision Turnkey Craftsmanship`,
    shortIntro: `Elite Interior and Decore brings over 18 years of specialized architectural mastery to ${cleanTitle.toLowerCase()}. We balance form, proportion, and materiality to deliver spaces of timeless distinction in Mumbai.`,
    whyThisService: [
      `Tailored bespoke solutions calibrated to your spatial dimensions and lifestyle habits`,
      `Factory-precision millwork and premium materials sourced directly from verified manufacturers`,
      `Transparent project scheduling, fixed budgets, and zero hidden escalations`,
      `Dedicated site engineer ensuring millimeter accuracy from 3D design to final handover`
    ],
    designApproach: `Our approach to ${cleanTitle.toLowerCase()} starts with deep spatial understanding, anthropometric ergonomics, and lighting temperature calculations. Every joint, reveal, and finish is drawn and approved in photorealistic 3D before execution on site.`,
    processSteps: [
      { step: '01', title: 'Consultation & Site Measure', desc: 'In-depth requirement gathering and 3D laser-accurate site dimension capture.' },
      { step: '02', title: 'Concept & Spatial Layout', desc: 'Developing 2D circulation flow options and ergonomic clearances.' },
      { step: '03', title: '3D Photorealistic Render', desc: 'Full material visualization with exact veneers, marbles, and lighting angles.' },
      { step: '04', title: 'Turnkey Site Execution', desc: 'Supervised factory joinery, MEP installation, and master craftsmanship.' },
      { step: '05', title: 'Final Handover & Warranty', desc: 'Deep cleaning, hardware calibration, and issuance of warranty certificates.' }
    ],
    specifications: [
      { label: 'Core Material Grade', value: 'BWP Marine Grade Plywood (IS 710)' },
      { label: 'Hardware Standards', value: 'Blum / Hafele Soft-Close Hardware' },
      { label: 'Finishing Options', value: 'PU Polish, Natural Veneer, Matte Acrylic' },
      { label: 'Execution Timeline', value: 'Scheduled Milestone-Based Delivery' }
    ],
    benefits: [
      { title: 'Bespoke Customization', desc: 'Built precisely to your room contours, eliminating dead corners and wasted space.' },
      { title: 'Lasting Durability', desc: 'Termite-treated, moisture-resistant substrates built to withstand Mumbai conditions.' },
      { title: 'Elevated Property Value', desc: 'Architecturally designed interiors command prime valuation and aesthetic envy.' },
      { title: 'Single-Window Handover', desc: 'Zero hassle coordinating multiple separate vendors or daily site headaches.' }
    ],
    faqs: [
      { q: `What is the typical timeline for ${cleanTitle.toLowerCase()}?`, a: `Timelines depend on scope and square footage, generally ranging between 4 to 8 weeks with dedicated weekly progress reports.` },
      { q: `Can I customize colors, hardware, and material finishes?`, a: `Yes. We provide curated sample boards with real stone, veneer, laminates, and metal swatches during the design development phase.` },
      { q: `Do you provide warranty on execution and materials?`, a: `Yes, Elite Interior and Decore provides comprehensive craftsmanship warranties and passes on full manufacturer warranties for all branded hardware.` }
    ],
    relatedPaths: otherItems.map((item) => item.path)
  };
}

function formatTitle(str: string): string {
  return str
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
