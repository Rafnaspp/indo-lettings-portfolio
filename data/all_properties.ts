export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number | string; // 'N/A' for some commercial
  baths: number | string;
  sqft: number;
  image: string;
  status: 'New' | 'Reduced' | 'Hot' | 'Under Offer';
  type: 'Residential' | 'Commercial';
  mode: 'rent' | 'buy';
  description: string;
}

export const featuredProperties: Property[] = [
  // --- RESIDENTIAL ---
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    location: '123 Harbor View, London',
    price: '1250000',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: '/properties/prop1.png',
    status: 'New',
    type: 'Residential',
    mode: 'buy',
    description: 'A stunning contemporary villa featuring floor-to-ceiling windows and a private jetty overlooking the Thames.'
  },
  {
    id: '2',
    title: 'Skyline Loft Apartment',
    location: 'Penthouse 5, Canary Wharf',
    price: '4500',
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: '/properties/prop2.png',
    status: 'Hot',
    type: 'Residential',
    mode: 'rent',
    description: 'Ultra-modern living in the heart of the financial district with panoramic views of the London skyline.'
  },
  {
    id: '3',
    title: 'Victorian Family Home',
    location: '45 Greenwich Gardens, London',
    price: '875000',
    beds: 5,
    baths: 3,
    sqft: 3100,
    image: '/properties/prop3.png',
    status: 'Reduced',
    type: 'Residential',
    mode: 'buy',
    description: 'A beautifully restored period home combining original Victorian features with a high-spec modern kitchen.'
  },
  {
    id: '4',
    title: 'Contemporary Mews House',
    location: '8 Belgravia Lane, London',
    price: '2100000',
    beds: 3,
    baths: 2,
    sqft: 1850,
    image: '/properties/prop1.png',
    status: 'New',
    type: 'Residential',
    mode: 'buy',
    description: 'A secluded and tranquil mews property offering luxury finishes and a private rooftop terrace.'
  },
  {
    id: '5',
    title: 'Luxury Studio Suite',
    location: 'The Shard Residences, SE1',
    price: '3200',
    beds: 1,
    baths: 1,
    sqft: 750,
    image: '/properties/prop2.png',
    status: 'Hot',
    type: 'Residential',
    mode: 'rent',
    description: 'High-concept studio living with access to 5-star concierge services and world-class spa facilities.'
  },
  {
    id: '6',
    title: 'Edwardian Terrace',
    location: '12 Richmond Crescent, London',
    price: '1150000',
    beds: 4,
    baths: 2,
    sqft: 2100,
    image: '/properties/prop3.png',
    status: 'New',
    type: 'Residential',
    mode: 'buy',
    description: 'Spacious family residence located within the catchment area of London’s top-rated primary schools.'
  },
  {
    id: '7',
    title: 'The Glass House',
    location: '22 Hampstead Heath, London',
    price: '6750000',
    beds: 6,
    baths: 5,
    sqft: 5200,
    image: '/properties/prop1.png',
    status: 'Hot',
    type: 'Residential',
    mode: 'buy',
    description: 'An architectural masterpiece nestled in Hampstead, featuring an indoor pool and subterranean cinema.'
  },
  {
    id: '8',
    title: 'Riverside Pied-à-Terre',
    location: 'Southbank Lofts, London',
    price: '725000',
    beds: 1,
    baths: 1,
    sqft: 850,
    image: '/properties/prop2.png',
    status: 'Reduced',
    type: 'Residential',
    mode: 'buy',
    description: 'The perfect urban retreat located just steps away from the Tate Modern and Globe Theatre.'
  },

  // --- COMMERCIAL ---
  {
    id: '9',
    title: 'Prime Tech Hub Office',
    location: 'Old Street Roundabout, Shoreditch',
    price: '12000',
    beds: 'N/A',
    baths: 4,
    sqft: 4500,
    image: '/properties/prop3.png',
    status: 'New',
    type: 'Commercial',
    mode: 'rent',
    description: 'Industrial-style open-plan office space perfectly suited for a growing scale-up or creative agency.'
  },
  {
    id: '10',
    title: 'Boutique Retail Unit',
    location: '74 Marylebone High St, London',
    price: '85000',
    beds: 'N/A',
    baths: 1,
    sqft: 1200,
    image: '/properties/prop1.png',
    status: 'Hot',
    type: 'Commercial',
    mode: 'rent',
    description: 'Premium retail frontage in one of London’s most sought-after shopping destinations with high footfall.'
  },
  {
    id: '11',
    title: 'Modern Coworking Space',
    location: '15 Soho Square, London',
    price: '25000',
    beds: 'N/A',
    baths: 6,
    sqft: 8000,
    image: '/properties/prop2.png',
    status: 'New',
    type: 'Commercial',
    mode: 'rent',
    description: 'Fully serviced flagship office building featuring breakout zones, meeting rooms, and high-speed fiber.'
  },
  {
    id: '12',
    title: 'Logistics Distribution Center',
    location: 'Park Royal Industrial Estate',
    price: '4200000',
    beds: 'N/A',
    baths: 2,
    sqft: 15000,
    image: '/properties/prop3.png',
    status: 'New',
    type: 'Commercial',
    mode: 'buy',
    description: 'High-eaves warehouse with excellent transport links to the M25 and Central London.'
  },
  {
    id: '13',
    title: 'Grade A Office Suite',
    location: 'Level 12, The Gherkin',
    price: '18500',
    beds: 'N/A',
    baths: 2,
    sqft: 3200,
    image: '/properties/prop1.png',
    status: 'Hot',
    type: 'Commercial',
    mode: 'rent',
    description: 'Prestige office accommodation within an iconic landmark, featuring 360-degree views and full climate control.'
  },
  {
    id: '14',
    title: 'Artisan Workshop & Studio',
    location: 'Hackney Wick Studios, E9',
    price: '2800',
    beds: 'N/A',
    baths: 1,
    sqft: 1400,
    image: '/properties/prop2.png',
    status: 'Reduced',
    type: 'Commercial',
    mode: 'rent',
    description: 'Creative studio space with high ceilings and natural northern light, ideal for photographers or artists.'
  },
  {
    id: '15',
    title: 'Fitness & Wellness Center',
    location: '22 Kensington Church St, London',
    price: '95000',
    beds: 'N/A',
    baths: 4,
    sqft: 4200,
    image: '/properties/prop3.png',
    status: 'New',
    type: 'Commercial',
    mode: 'rent',
    description: 'Turnkey boutique gym space with luxury changing rooms and dedicated PT consultation areas.'
  }
];