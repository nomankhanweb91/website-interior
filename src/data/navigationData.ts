export interface SubMenuItem {
  title: string;
  path: string;
  description: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  path: string;
  description: string;
  items: SubMenuItem[];
}

export const NAV_CATEGORIES: NavCategory[] = [
  {
    title: 'ABOUT',
    path: '/about',
    description: 'Bespoke luxury interior architecture and turnkey execution since 2007.',
    items: [
      { title: 'About Us', path: '/about', description: 'Our legacy and architectural philosophy' },
      { title: 'Our Experience', path: '/about/our-experience', description: 'Over 18 years shaping Mumbai luxury spaces' },
      { title: 'Our Process', path: '/about/our-process', description: 'From 3D concept to precision turnkey handover' },
      { title: 'Why Choose Us', path: '/about/why-choose-us', description: 'Purity of materials, transparency & craftsmanship' }
    ]
  },
  {
    title: 'RESIDENTIAL',
    path: '/residential',
    description: 'Full-spectrum residential interior design from city penthouses to luxury estates.',
    items: [
      { title: 'Full Home Interior', path: '/residential/full-home-interior', description: 'Complete end-to-end bespoke home transformations' },
      { title: '1 BHK Interior', path: '/residential/1-bhk-interior', description: 'Smart ergonomic luxury for urban apartments' },
      { title: '2 BHK Interior', path: '/residential/2-bhk-interior', description: 'Balanced spatial planning for modern families' },
      { title: '3 BHK Interior', path: '/residential/3-bhk-interior', description: 'Spacious architectural elegance & custom woodwork' },
      { title: '4 BHK & Luxury Home', path: '/residential/4-bhk-luxury-home', description: 'Grand residential sanctuaries with Italian marble' },
      { title: 'Apartment Interior', path: '/residential/apartment-interior', description: 'High-rise residential concepts with skyline vistas' },
      { title: 'Villa Interior', path: '/residential/villa-interior', description: 'Expansive private residences & duplex sanctuaries' },
      { title: 'Penthouse Interior', path: '/residential/penthouse-interior', description: 'Double-height luxury living with private terraces' },
      { title: 'Studio Apartment', path: '/residential/studio-apartment', description: 'Modular multi-functional urban living' },
      { title: 'New Home Interior', path: '/residential/new-home-interior', description: 'Bare-shell to bespoke luxury move-in handover' },
      { title: 'Home Renovation', path: '/residential/home-renovation', description: 'Structural revival and modern acoustic redesign' }
    ]
  },
  {
    title: 'COMMERCIAL',
    path: '/commercial',
    description: 'Corporate workspaces, executive boardrooms, and prestigious enterprise headquarters.',
    items: [
      { title: 'Office Interior', path: '/commercial/office-interior', description: 'Inspiring ergonomic workspaces that foster focus' },
      { title: 'Corporate Office', path: '/commercial/corporate-office', description: 'Flagship corporate headquarters with branded presence' },
      { title: 'Startup Office', path: '/commercial/startup-office', description: 'Agile collaboration hubs and flexible open layouts' },
      { title: 'Reception Area', path: '/commercial/reception-area', description: 'Statement first impressions with monolithic desks' },
      { title: 'Conference Room', path: '/commercial/conference-room', description: 'Acoustically engineered smart boardroom suites' },
      { title: 'Cabin Design', path: '/commercial/cabin-design', description: 'Executive suites tailored for senior leadership' },
      { title: 'Workstation Design', path: '/commercial/workstation-design', description: 'Optimized density with wire management and privacy' },
      { title: 'Meeting Room', path: '/commercial/meeting-room', description: 'Hybrid AV integration for seamless collaboration' },
      { title: 'Cafeteria', path: '/commercial/cafeteria', description: 'Social breakout zones and hospitality lounges' },
      { title: 'Waiting Area', path: '/commercial/waiting-area', description: 'Comfortable architectural executive waiting lounges' }
    ]
  },
  {
    title: 'LIVING ROOM',
    path: '/living-room',
    description: 'The social centerpiece of the home. Volumetric balance, lighting and bespoke accents.',
    items: [
      { title: 'Modern Living Room', path: '/living-room/modern-living-room', description: 'Clean geometric lines, low-profile seating & natural light' },
      { title: 'Luxury Living Room', path: '/living-room/luxury-living-room', description: 'Bookmatched Italian marble and champagne gold accents' },
      { title: 'TV Unit Design', path: '/living-room/tv-unit-design', description: 'Floating media consoles with concealed acoustic storage' },
      { title: 'TV Wall Panel', path: '/living-room/tv-wall-panel', description: 'Backlit fluted louvers, stone veneer & acoustic slats' },
      { title: 'False Ceiling', path: '/living-room/false-ceiling', description: 'Architectural perimeter coves and magnetic track integration' },
      { title: 'Sofa Furniture Planning', path: '/living-room/sofa-furniture-planning', description: 'Sectional zoning and custom upholstered proportions' },
      { title: 'Wall Decor', path: '/living-room/wall-decor', description: 'Art niche reveals, metallic inlay work and mirrors' },
      { title: 'Lighting Design', path: '/living-room/lighting-design', description: 'Layered ambient, task and dramatic accent lighting' },
      { title: 'Partition Design', path: '/living-room/partition-design', description: 'Smoked fluted glass and brushed metal spatial dividers' }
    ]
  },
  {
    title: 'BEDROOM',
    path: '/bedroom',
    description: 'Private sanctuaries designed for tranquility, acoustic comfort and restorative rest.',
    items: [
      { title: 'Master Bedroom', path: '/bedroom/master-bedroom', description: 'Bespoke upholstered beds, reading alcoves and luxury en-suite' },
      { title: 'Kids Bedroom', path: '/bedroom/kids-bedroom', description: 'Inspiring spaces with built-in study and organized toy storage' },
      { title: 'Guest Bedroom', path: '/bedroom/guest-bedroom', description: 'Warm hotel-grade comfort with compact luggage wardrobes' },
      { title: 'Wardrobe Design', path: '/bedroom/wardrobe-design', description: 'Floor-to-ceiling wardrobes with integrated sensor LEDs' },
      { title: 'Walk-In Wardrobe', path: '/bedroom/walk-in-wardrobe', description: 'Glass display islands, velvet jewelry trays & full mirrors' },
      { title: 'Bed Back Wall', path: '/bedroom/bed-back-wall', description: 'Cushioned leatherette headboards and acoustic wood slats' },
      { title: 'Dressing Unit', path: '/bedroom/dressing-unit', description: 'Shadowless warm vanity mirrors and hidden beauty pullouts' },
      { title: 'Study Table', path: '/bedroom/study-table', description: 'Seamless floating cantilevered desks with cable management' },
      { title: 'Bedroom Lighting', path: '/bedroom/bedroom-lighting', description: 'Dimmable warm 2700K ambient coves and reading pinspots' },
      { title: 'False Ceiling', path: '/bedroom/false-ceiling', description: 'Indirect perimeter glow that avoids direct glare over bed' }
    ]
  },
  {
    title: 'MODULAR KITCHEN',
    path: '/modular-kitchen',
    description: 'Precision German/Austrian hardware, heat-resistant surfaces and ergonomic workflows.',
    items: [
      { title: 'Modular Kitchen Design', path: '/modular-kitchen/modular-kitchen-design', description: 'Ergonomic work triangle tailored to Indian culinary needs' },
      { title: 'L-Shaped Kitchen', path: '/modular-kitchen/l-shaped-kitchen', description: 'Optimized corner zoning for open-plan living' },
      { title: 'U-Shaped Kitchen', path: '/modular-kitchen/u-shaped-kitchen', description: 'Maximum countertop area with continuous workflow' },
      { title: 'Parallel Kitchen', path: '/modular-kitchen/parallel-kitchen', description: 'High-efficiency twin galleys for serious culinary craft' },
      { title: 'Island Kitchen', path: '/modular-kitchen/island-kitchen', description: 'Monolithic breakfast bars with integrated induction' },
      { title: 'Straight Kitchen', path: '/modular-kitchen/straight-kitchen', description: 'Sleek single-wall linear efficiency for compact residences' },
      { title: 'Kitchen Cabinets', path: '/modular-kitchen/kitchen-cabinets', description: 'Anti-fingerprint matte acrylic and soft-close lift systems' },
      { title: 'Kitchen Storage', path: '/modular-kitchen/kitchen-storage', description: 'Pantry larders, spice pullouts and corner carousels' },
      { title: 'Kitchen Countertop', path: '/modular-kitchen/kitchen-countertop', description: 'Quartz, Dekton and granite heat-and-stain proof slabs' },
      { title: 'Kitchen Backsplash', path: '/modular-kitchen/kitchen-backsplash', description: 'Seamless sintered stone and geometric glazed ceramic' },
      { title: 'Kitchen Lighting', path: '/modular-kitchen/kitchen-lighting', description: 'Under-cabinet task bars and architectural pendant accents' }
    ]
  },
  {
    title: 'BATHROOM',
    path: '/bathroom',
    description: 'Spa-inspired sanctuaries featuring concealed plumbing and moisture-resistant finishes.',
    items: [
      { title: 'Modern Bathroom', path: '/bathroom/modern-bathroom', description: 'Concealed cisterns, frameless glass and minimalist geometry' },
      { title: 'Luxury Bathroom', path: '/bathroom/luxury-bathroom', description: 'Full-slab bookmatched marble and brushed champagne gold fittings' },
      { title: 'Bathroom Renovation', path: '/bathroom/bathroom-renovation', description: 'Complete re-waterproofing, core-cutting and tile replacement' },
      { title: 'Vanity Design', path: '/bathroom/vanity-design', description: 'Floating water-resistant marine ply vanities with undermount basins' },
      { title: 'Storage Cabinets', path: '/bathroom/storage-cabinets', description: 'Concealed mirrored medicine cabinets and tall linen towers' },
      { title: 'False Ceiling', path: '/bathroom/false-ceiling', description: 'Green moisture-resistant gypsum with IP65 moisture-rated spots' },
      { title: 'Lighting', path: '/bathroom/lighting', description: 'High-CRI 90+ mirror illumination and night-time low-lux step lights' },
      { title: 'Tiles & Wall Design', path: '/bathroom/tiles-wall-design', description: 'Large format porcelain tiles and textured travertine accents' }
    ]
  },
  {
    title: 'RETAIL & BUSINESS',
    path: '/retail-business',
    description: 'High-conversion commercial architecture for luxury boutiques, dining and medical suites.',
    items: [
      { title: 'Shop Interior', path: '/retail-business/shop-interior', description: 'Optimized customer journeys and dynamic perimeter merchandise' },
      { title: 'Showroom Interior', path: '/retail-business/showroom-interior', description: 'Dramatic focal displays, high ceilings and spotlight tracking' },
      { title: 'Boutique Interior', path: '/retail-business/boutique-interior', description: 'Intimate bespoke shopping atmospheres with VIP dressing lounges' },
      { title: 'Salon Interior', path: '/retail-business/salon-interior', description: 'Ergonomic styling stations, hair wash bays & flattering vanity light' },
      { title: 'Beauty Parlour Interior', path: '/retail-business/beauty-parlour-interior', description: 'Private aesthetic therapy suites with soothing acoustic privacy' },
      { title: 'Restaurant Interior', path: '/retail-business/restaurant-interior', description: 'Thematic dining ambiance, acoustic damping and service pathways' },
      { title: 'Café Interior', path: '/retail-business/cafe-interior', description: 'Inviting coffee bars, cozy banquette seating and warm wood' },
      { title: 'Clinic Interior', path: '/retail-business/clinic-interior', description: 'Hygienic, calming and antibacterial architectural healthcare suites' },
      { title: 'Spa Interior', path: '/retail-business/spa-interior', description: 'Sensory relaxation with warm stone, water elements and soft indirect glow' },
      { title: 'Jewellery Shop Interior', path: '/retail-business/jewellery-shop-interior', description: 'High-security reinforced glass counters and anti-glare gemstone lighting' }
    ]
  },
  {
    title: 'CUSTOM FURNITURE',
    path: '/custom-furniture',
    description: 'Factory-calibrated bespoke joinery, teak woodwork and designer millwork.',
    items: [
      { title: 'Custom Wardrobes', path: '/custom-furniture/custom-wardrobes', description: 'Floor-to-ceiling sliding, hinged and profile glass wardrobe systems' },
      { title: 'Modular Furniture', path: '/custom-furniture/modular-furniture', description: 'Precision engineered KD modular systems with zero-gap edge banding' },
      { title: 'TV Units', path: '/custom-furniture/tv-units', description: 'Custom sized media consoles with concealed cord ducts and subwoofer niches' },
      { title: 'Beds', path: '/custom-furniture/beds', description: 'Hydraulic lift storage beds with bespoke upholstered headboards' },
      { title: 'Sofa', path: '/custom-furniture/sofa', description: 'High-density 40D foam, solid treated hardwood frames and velvet fabrics' },
      { title: 'Study Tables', path: '/custom-furniture/study-tables', description: 'Ergonomic writing desks with book storage and integrated wire trays' },
      { title: 'Storage Units', path: '/custom-furniture/storage-units', description: 'Custom credenzas, sideboards and architectural display units' },
      { title: 'Crockery Units', path: '/custom-furniture/crockery-units', description: 'Tinted glass cabinets with interior vertical LED profiles' },
      { title: 'Shoe Racks', path: '/custom-furniture/shoe-racks', description: 'Ventilated louvers, boot shelves and cushioned seating benches' },
      { title: 'Bookshelves', path: '/custom-furniture/bookshelves', description: 'Floor-to-ceiling library shelving with rolling brass ladders' },
      { title: 'Customized Furniture', path: '/custom-furniture/customized-furniture', description: 'Unique one-off sculptural accent pieces made to architectural drawings' }
    ]
  },
  {
    title: 'CEILING & LIGHTING',
    path: '/ceiling-lighting',
    description: 'Architectural ceiling volumes, magnetic tracks and layered circadian lighting systems.',
    items: [
      { title: 'False Ceiling', path: '/ceiling-lighting/false-ceiling', description: 'Seamless gypsum ceiling drops, floating islands and AC duct reveals' },
      { title: 'POP Ceiling', path: '/ceiling-lighting/pop-ceiling', description: 'Handcrafted plaster of Paris moldings and classic architectural cornices' },
      { title: 'Gypsum Ceiling', path: '/ceiling-lighting/gypsum-ceiling', description: 'Saint-Gobain certified fire-resistant acoustic gypsum systems' },
      { title: 'Wooden Ceiling', path: '/ceiling-lighting/wooden-ceiling', description: 'Warm natural veneer beams, acoustic wooden rafters and slatted panels' },
      { title: 'Cove Lighting', path: '/ceiling-lighting/cove-lighting', description: 'Continuous dotless indirect LED profiles for glare-free illumination' },
      { title: 'LED Lighting', path: '/ceiling-lighting/led-lighting', description: 'Architectural recessed downlights with high 95+ CRI ratings' },
      { title: 'Decorative Lighting', path: '/ceiling-lighting/decorative-lighting', description: 'Sculptural chandeliers, blown glass pendants and metallic wall sconces' },
      { title: 'Smart Lighting', path: '/ceiling-lighting/smart-lighting', description: 'DALI, Zigbee and app-controlled circadian dim-to-warm scene control' },
      { title: 'Complete Lighting Planning', path: '/ceiling-lighting/complete-lighting-planning', description: 'Photometric lux level calculations, beam-angle selection and circuiting' }
    ]
  },
  {
    title: 'WALL & FLOORING',
    path: '/wall-flooring',
    description: 'Textured architectural skins, Italian marble laying and engineered wood surfaces.',
    items: [
      { title: 'Wall Paneling', path: '/wall-flooring/wall-paneling', description: 'Veneer, fabric and stone acoustic wall paneling systems' },
      { title: 'Wooden Wall Panel', path: '/wall-flooring/wooden-wall-panel', description: 'Natural teak, smoked oak and walnut architectural paneling' },
      { title: 'Fluted Panel', path: '/wall-flooring/fluted-panel', description: 'Modern 3D ribbed louvers in charcoal, timber and metallic finishes' },
      { title: 'Wallpaper', path: '/wall-flooring/wallpaper', description: 'Imported silk, metallic textured, and bespoke mural wall coverings' },
      { title: 'Texture Paint', path: '/wall-flooring/texture-paint', description: 'Italian lime stucco, concrete finish, and metallic antique plaster' },
      { title: 'Decorative Wall', path: '/wall-flooring/decorative-wall', description: 'Backlit translucent onyx, metal inlays and architectural niches' },
      { title: 'Marble Work', path: '/wall-flooring/marble-work', description: 'Imported Italian marble diamond polishing, bookmatching and epoxying' },
      { title: 'Tile Work', path: '/wall-flooring/tile-work', description: 'Large slab 8x4 vitrified tiles with laser level precision laying' },
      { title: 'Wooden Flooring', path: '/wall-flooring/wooden-flooring', description: 'Engineered oak, herringbone hardwood and luxury laminate flooring' },
      { title: 'Vinyl Flooring', path: '/wall-flooring/vinyl-flooring', description: 'Heavy-duty SPC waterproof acoustic click-lock vinyl planks' }
    ]
  },
  {
    title: 'SPACE PLANNING',
    path: '/space-planning',
    description: 'Ergonomic flow engineering, 3D hyper-realistic walkthroughs and material boards.',
    items: [
      { title: '2D Floor Plan', path: '/space-planning/2d-floor-plan', description: 'Dimensioned architectural furniture layouts and clearance pathways' },
      { title: '3D Interior Design', path: '/space-planning/3d-interior-design', description: 'Photorealistic 4K render views before breaking ground on site' },
      { title: 'Space Planning', path: '/space-planning/space-planning', description: 'Micro and macro zoning to maximize spatial volume and natural light' },
      { title: 'Furniture Layout', path: '/space-planning/furniture-layout', description: 'Anthropometric clearance, sightlines and movement ergonomics' },
      { title: 'Color Consultation', path: '/space-planning/color-consultation', description: 'Harmonious palettes calibrated to room orientation and light temperatures' },
      { title: 'Material Selection', path: '/space-planning/material-selection', description: 'Curated physical sample boards with veneers, stones, metals and fabrics' },
      { title: 'Lighting Planning', path: '/space-planning/lighting-planning', description: 'Lux calculation, fixture placement and mood zoning schematics' },
      { title: 'Interior Design Consultation', path: '/space-planning/interior-design-consultation', description: 'Comprehensive one-on-one architectural consultation with senior leads' }
    ]
  },
  {
    title: 'RENOVATION',
    path: '/renovation',
    description: 'Transforming aging properties into contemporary luxury residences with civil precision.',
    items: [
      { title: 'Home Renovation', path: '/renovation/home-renovation', description: 'Full architectural redesign, wall removals, and luxury revamps' },
      { title: 'Kitchen Renovation', path: '/renovation/kitchen-renovation', description: 'Demolition, pipe rerouting, modular cabinetry and exhaust overhauls' },
      { title: 'Bathroom Renovation', path: '/renovation/bathroom-renovation', description: 'Strip down to slab, waterproofing, new plumbing lines & luxury tiles' },
      { title: 'Office Renovation', path: '/renovation/office-renovation', description: 'Rapid turnaround workspace modernization with minimal downtime' },
      { title: 'Shop Renovation', path: '/renovation/shop-renovation', description: 'High-impact storefront revamps and display floor optimizations' },
      { title: 'Flooring Replacement', path: '/renovation/flooring-replacement', description: 'Hassle-free tile dismantling or overlay systems with self-leveling base' },
      { title: 'Painting', path: '/renovation/painting', description: 'Multi-coat putty leveling, primer base, and premium low-VOC paints' },
      { title: 'Electrical Work', path: '/renovation/electrical-work', description: 'Full rewiring, distribution boards, MCB upgrades and concealed conduits' },
      { title: 'Plumbing Work', path: '/renovation/plumbing-work', description: 'CPVC/UPVC pressure testing, manifold systems and luxury fittings' },
      { title: 'Carpentry Work', path: '/renovation/carpentry-work', description: 'On-site master carpentry for custom jambs, paneling and architraves' }
    ]
  },
  {
    title: 'TURNKEY INTERIOR',
    path: '/turnkey-interior',
    description: 'Single-window project delivery. From conceptual sketches to key handover with zero stress.',
    items: [
      { title: 'Design & Planning', path: '/turnkey-interior/design-planning', description: 'Concept drawings, MEP layouts, material schedules and 3D approvals' },
      { title: 'Material Procurement', path: '/turnkey-interior/material-procurement', description: 'Direct factory sourcing of premium grade timber, marble and hardware' },
      { title: 'Civil Work', path: '/turnkey-interior/civil-work', description: 'Structural masonry, plastering, screeding and core-cutting' },
      { title: 'Electrical Work', path: '/turnkey-interior/electrical-work', description: 'Concealed electrification, automation cabling and panel setup' },
      { title: 'Plumbing', path: '/turnkey-interior/plumbing', description: 'Pressure-tested concealed sanitary and water supply infrastructure' },
      { title: 'Carpentry', path: '/turnkey-interior/carpentry', description: 'Precision factory-pressed ply and on-site architectural joinery' },
      { title: 'Painting', path: '/turnkey-interior/painting', description: 'Flawless machine sanding, anti-fungal coats and airless spray finishes' },
      { title: 'Furniture', path: '/turnkey-interior/furniture', description: 'Factory-finished wardrobes, beds, sofas and dining tables delivered on site' },
      { title: 'Lighting', path: '/turnkey-interior/lighting', description: 'Fixture mounting, track testing, chandelier installation and scene balancing' },
      { title: 'Final Installation', path: '/turnkey-interior/final-installation', description: 'Hardware tuning, soft-close calibration and glass glazing' },
      { title: 'Complete Project Management', path: '/turnkey-interior/complete-project-management', description: 'Dedicated site engineer, daily photo updates and on-time delivery guarantee' }
    ]
  },
  {
    title: 'SPECIALIZED SERVICES',
    path: '/specialized-services',
    description: 'Niche design philosophies, Vastu alignments and intelligent automated home systems.',
    items: [
      { title: 'Luxury Interior Design', path: '/specialized-services/luxury-interior-design', description: 'Ultra-exclusive residences with rare stones and bespoke Italian artistry' },
      { title: 'Budget Interior Design', path: '/specialized-services/budget-interior-design', description: 'Value-engineered modular solutions delivering luxury looks at controlled cost' },
      { title: 'Minimalist Interior Design', path: '/specialized-services/minimalist-interior-design', description: 'Wabi-sabi calmness, hidden storage, clean reveals and monochromatic harmony' },
      { title: 'Modern Interior Design', path: '/specialized-services/modern-interior-design', description: 'Sleek industrial touches, black metal accents and crisp linear geometry' },
      { title: 'Contemporary Interior Design', path: '/specialized-services/contemporary-interior-design', description: 'Curved organic silhouettes, textural bouclé fabrics and artful light' },
      { title: 'Traditional Interior Design', path: '/specialized-services/traditional-interior-design', description: 'Rich carved teak wood, brass details and heritage Indian architectural motifs' },
      { title: 'Vastu-Based Interior Planning', path: '/specialized-services/vastu-based-interior-planning', description: 'Scientific spatial alignment for positive energy, wealth and peaceful living' },
      { title: 'Smart Home Interior', path: '/specialized-services/smart-home-interior', description: 'Motorized drapes, biometric access, climate zones and voice integration' },
      { title: 'Rental Home Interior', path: '/specialized-services/rental-home-interior', description: 'Durable, stylish tenant-ready fitouts designed to maximize rental yields' }
    ]
  }
];
