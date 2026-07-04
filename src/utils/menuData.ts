import type { Dish } from '../components/DishCard';

export const SIGNATURE_DISHES: Dish[] = [
  // =================== SOUPS & STARTERS (6 items) ===================
  {
    id: 'start-1',
    name: 'Tomato Soup',
    teluguName: 'టమాటో సూప్',
    description: 'A comforting classic soup made from roasted tomatoes, fresh cream, black pepper, and golden bread croutons.',
    price: '₹120',
    category: 'Soups & Starters',
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    isVegetarian: true
  },
  {
    id: 'start-2',
    name: 'Paneer 65',
    teluguName: 'పనీర్ 65',
    description: 'Crispy deep-fried cottage cheese cubes tossed with fresh curry leaves, spices, yogurt, and green chillies.',
    price: '₹240',
    category: 'Soups & Starters',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'start-3',
    name: 'Onion Rings',
    teluguName: 'ఆనియన్ రింగ్స్',
    description: 'Crispy golden battered onion rings seasoned with spice blends, served hot with sweet-sour dip.',
    price: '₹150',
    category: 'Soups & Starters',
    image: 'https://images.unsplash.com/photo-1639024471283-2bc7b3c6a267?auto=format&fit=crop&w=600&q=80',
    rating: 4.3,
    isVegetarian: true
  },
  {
    id: 'start-4',
    name: 'Gobi Manchurian',
    teluguName: 'గోబీ మంచూరియన్',
    description: 'Crispy cauliflower florets tossed in a rich, savory Chinese style garlic and spring onion sauce.',
    price: '₹190',
    category: 'Soups & Starters',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },
  {
    id: 'start-5',
    name: 'Veg Seekh Kebab',
    teluguName: 'వెజ్ సీఖ్ కబాబ్',
    description: 'Minced fresh vegetables mixed with tandoori spices, skewered and charcoal grilled for a smoky flavor.',
    price: '₹220',
    category: 'Soups & Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'start-6',
    name: 'Veg Harabhara Kebab',
    teluguName: 'హరభరా కబాబ్',
    description: 'Pan-fried green patties made of fresh spinach, peas, potatoes, and cottage cheese, blended with herbs.',
    price: '₹200',
    category: 'Soups & Starters',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    isVegetarian: true
  },

  // =================== MAIN COURSE (6 items) ===================
  {
    id: 'main-1',
    name: 'Paneer Butter Masala',
    teluguName: 'పనీర్ బటర్ మసాలా',
    description: 'Cottage cheese cubes simmered in a rich tomato, butter, and cashew gravy, flavored with fenugreek.',
    price: '₹260',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'main-2',
    name: 'Dum Aloo',
    teluguName: 'దమ్ ఆలూ',
    description: 'Slow-cooked baby potatoes simmered in a spiced tomato gravy with rich Indian spices.',
    price: '₹210',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },
  {
    id: 'main-3',
    name: 'Daal Tadka',
    teluguName: 'దాల్ తడ్కా',
    description: 'Yellow lentils tempered with ghee, roasted cumin seeds, minced garlic, onions, and red dry chillies.',
    price: '₹180',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'main-4',
    name: 'Kaju Curry',
    teluguName: 'కాజు కర్రీ',
    description: 'Whole roasted cashew nuts cooked in a rich, sweet, and slightly spicy onion-tomato butter gravy.',
    price: '₹280',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'main-5',
    name: 'Mix Veg Curry',
    teluguName: 'మిక్స్ వెజ్ కర్రీ',
    description: 'A traditional dhaba preparation of seasonal fresh vegetables simmered in a spicy onion gravy.',
    price: '₹200',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    isVegetarian: true
  },
  {
    id: 'main-6',
    name: 'Kadhai Paneer',
    teluguName: 'కడాయ్ పనీర్',
    description: 'Fresh paneer cubes tossed with bell peppers and ground kadhai spices in a thick tomato-based sauce.',
    price: '₹270',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  },

  // =================== BIRYANIS & RICE (5 items) ===================
  {
    id: 'rice-1',
    name: 'Veg Hyderabadi Biryani',
    teluguName: 'వెజ్ హైదరాబాద్ బిర్యానీ',
    description: 'Fragrant basmati rice slow-cooked with fresh garden vegetables, mint leaves, and rich local spices.',
    price: '₹240',
    category: 'Biryanis & Rice',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'rice-2',
    name: 'Veg Dum Biryani',
    teluguName: 'వెజ్ దమ్ బిర్యానీ',
    description: 'Slow steam-cooked layers of basmati rice, seasoned mix veg, ghee, saffron, and crispy onions.',
    price: '₹250',
    category: 'Biryanis & Rice',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isVegetarian: true
  },
  {
    id: 'rice-3',
    name: 'Kaju Biryani',
    teluguName: 'కాజు బిర్యానీ',
    description: 'A royal rice dish cooked with whole golden cashews, aromatic saffron milk, mint, and whole spices.',
    price: '₹290',
    category: 'Biryanis & Rice',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'rice-4',
    name: 'Paneer Biryani',
    teluguName: 'పనీర్ బిర్యానీ',
    description: 'Soft cottage cheese chunks marinated in spices, layered with fluffy basmati rice and cooked on dum.',
    price: '₹270',
    category: 'Biryanis & Rice',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  },
  {
    id: 'rice-5',
    name: 'Jeera Rice',
    teluguName: 'జీరా రైస్',
    description: 'Perfectly cooked basmati rice tempered with aromatic cumin seeds and warm cow ghee.',
    price: '₹160',
    category: 'Biryanis & Rice',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    isVegetarian: true
  },

  // =================== ROTIS & BREADS (5 items) ===================
  {
    id: 'bread-1',
    name: 'Butter Naan',
    teluguName: 'బటర్ నాన్',
    description: 'Leavened clay-oven flatbread brushed generously with pure melted butter.',
    price: '₹60',
    category: 'Rotis & Breads',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'bread-2',
    name: 'Plain Naan',
    teluguName: 'ప్లెయిన్ నాన్',
    description: 'Traditional leavened flatbread freshly baked in tandoor, served dry and piping hot.',
    price: '₹50',
    category: 'Rotis & Breads',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    isVegetarian: true
  },
  {
    id: 'bread-3',
    name: 'Rumali Roti',
    teluguName: 'రుమాలి రోటి',
    description: 'Paper-thin, soft hand-stretched traditional flatbread cooked on an inverted tandoor grid.',
    price: '₹50',
    category: 'Rotis & Breads',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'bread-4',
    name: 'Tandoori Roti',
    teluguName: 'తందూరి రోటి',
    description: 'Healthy wheat flatbread baked directly against the hot clay walls of the tandoor.',
    price: '₹40',
    category: 'Rotis & Breads',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },
  {
    id: 'bread-5',
    name: 'Butter Roti',
    teluguName: 'బటర్ రోటి',
    description: 'Tandoor-baked whole wheat flatbread topped with fresh butter.',
    price: '₹45',
    category: 'Rotis & Breads',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  }
];

export const SPECIAL_OFFERS = [
  {
    id: 'offer-1',
    title: 'Balaji Special Veg Thali',
    description: 'A complete meal with Paneer Butter Masala, Daal Tadka, Mix Veg, Jeera Rice, 2 Butter Naans, Sweet, Raita, and Salad.',
    price: '₹350',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    cta: 'Order Combo'
  },
  {
    id: 'offer-2',
    title: 'Paneer Butter Masala & Naan Combo',
    description: 'Creamy Paneer Butter Masala served with 2 hot buttered naan and onion salad. A quick, satisfying meal.',
    price: '₹220',
    badge: 'Value Platter',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    cta: 'Explore Combo'
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    title: 'Hot Paneer Butter Masala Cream',
    aspect: 'aspect-square'
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    title: 'Aromatic Veg Hyderabadi Biryani',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    title: 'Rich Cashew Cream Curry',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80',
    title: 'Hot Tandoori Butter Naan & Roti',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    title: 'Charcoal Grilled Veg Kebabs',
    aspect: 'aspect-square'
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    title: 'Comforting Daal Tadka Ghee Tempered',
    aspect: 'aspect-[4/3]'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  source: string;
  avatar: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Pavan Bhadramraju',
    role: 'Local Guide · 175 reviews',
    content: 'We ordered Paneer Butter Masala with Butter Naan, the taste was awesome, the hotel appearance was too good, plenty of vegetarian dishes available here.',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    date: 'a year ago'
  },
  {
    id: 't2',
    name: 'Nilabh Verma',
    role: 'Local Guide · 135 reviews',
    content: "A good family restaurant in Aziz Nagar, Himayat Nagar and Chilkur locality. It's an all vegetarian restaurant and the food quality is good. The price is on the higher side but still ok. There is plenty of parking space. The staff is good.",
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    date: 'a year ago'
  },
  {
    id: 't3',
    name: 'Rakesh Sharma',
    role: 'Local Guide · 115 reviews',
    content: 'Good restaurant, friendly staff. Owner is very good and down to earth. Visited with my wife. Loved the food. I also have a farmhouse nearby and we ordered food multiple times from here.',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
    date: 'a year ago'
  },
  {
    id: 't4',
    name: 'Srinivas Rao',
    role: 'Local Guide · 48 reviews',
    content: 'Excellent food quality. Tomato Soup was the perfect start. Paneer 65 was crispy and highly flavorful. Proximity to ORR makes it a very convenient stop for families.',
    rating: 4,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    date: '6 months ago'
  },
  {
    id: 't5',
    name: 'Latha Reddy',
    role: '3 reviews',
    content: 'The best place for pure veg lovers around Moinabad. We tried their Veg Hyderabadi Biryani and Dum Aloo. Spices were perfectly balanced, and the staff made us feel very welcome.',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    date: '3 months ago'
  }
];
