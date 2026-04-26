export interface Property {
  id: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status: 'New' | 'Reduced' | 'Hot';
}

export const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Waterfront Villa',
    address: '123 Harbor View, London',
    price: '£1,250,000',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: '/properties/prop1.png',
    status: 'New',
  },
  {
    id: '2',
    title: 'Skyline Loft Apartment',
    address: 'Penthouse 5, Canary Wharf',
    price: '£4,500 / mo',
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: '/properties/prop2.png',
    status: 'Hot',
  },
  {
    id: '3',
    title: 'Victorian Family Home',
    address: '45 Greenwich Gardens, London',
    price: '£875,000',
    beds: 5,
    baths: 3,
    sqft: 3100,
    image: '/properties/prop3.png',
    status: 'Reduced',
  },
];