import type { Dish } from '../components/DishCard';

export const SIGNATURE_DISHES: Dish[] = [
  // =================== DUM BIRYANI (8 items) ===================
  {
    id: 'dum-1',
    name: 'Special Ustaads Dum Biryani',
    teluguName: 'ఉస్తాద్స్ దమ్ బిర్యానీ',
    description: 'Our award-winning slow-cooked long grain basmati rice, layered with heritage spices, infused with pure saffron and cooked on a charcoal embers dum.',
    price: '₹380',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: false
  },
  {
    id: 'dum-2',
    name: 'Heritage Chicken Dum Biryani',
    teluguName: 'హెరిటేజ్ చికెన్ దమ్ బిర్యానీ',
    description: 'Heritage spring chicken marinated in yogurt and fresh coriander, slow cooked in hand-crafted copper pots.',
    price: '₹350',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'dum-3',
    name: 'Nawabi Mutton Dum Biryani',
    teluguName: 'నవాబీ మటన్ దమ్ బిర్యానీ',
    description: 'A royal favourite. Spiced baby goat, caramelized onions, and aged long-grain rice layered with saffron milk.',
    price: '₹460',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: false
  },
  {
    id: 'dum-4',
    name: 'Kacchi Yakhni Dum Biryani',
    teluguName: 'కచ్చి యాఖ్ని దమ్ బిర్యానీ',
    description: 'Raw marinated lamb cooked directly with parboiled basmati rice under low steam pressure for maximum tenderness.',
    price: '₹480',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isVegetarian: false
  },
  {
    id: 'dum-5',
    name: 'Royal Zafrani Dum Biryani',
    teluguName: 'రాయల్ జాఫ్రానీ దమ్ బిర్యానీ',
    description: 'Rich basmati infused with double-strength organic Kashmiri saffron, fresh ghee, and aromatic rose-water.',
    price: '₹410',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'dum-6',
    name: 'Nizam’s Spice Dum Biryani',
    teluguName: 'నిజామ్స్ స్పైస్ దమ్ బిర్యానీ',
    description: 'An extra flavorful variation with added green chillies, mint sprigs, and ground mace.',
    price: '₹390',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'dum-7',
    name: 'Shahjahani Dum Biryani',
    teluguName: 'షాజహానీ దమ్ బిర్యానీ',
    description: 'Layered with rich almond paste, cashews, raisins, and aromatic spices cooked under tight dough sealing.',
    price: '₹430',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: false
  },
  {
    id: 'dum-8',
    name: 'Sufiyana White Dum Biryani',
    teluguName: 'సుఫియానా వైట్ దమ్ బిర్యానీ',
    description: 'Cooked with pure white spices, cashew paste, and cream, yielding a mild and aromatic white basmati.',
    price: '₹370',
    category: 'Dum Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },

  // =================== MUTTON BIRYANI (8 items) ===================
  {
    id: 'mut-1',
    name: 'Royal Hyderabadi Mutton Biryani',
    teluguName: 'రాయల్ మటన్ బిర్యానీ',
    description: 'Tender baby lamb marinated in native curd and freshly ground spices, slow-steamed with aged long-grain basmati rice.',
    price: '₹460',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: false
  },
  {
    id: 'mut-2',
    name: 'Mughlai Lamb Biryani',
    teluguName: 'మొఘలాయ్ లాంబ్ బిర్యానీ',
    description: 'Slow-cooked lamb shank infused with cardamoms, star anise, nutmeg, and ghee-fried almonds.',
    price: '₹480',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'mut-3',
    name: 'Keema Biryani Royal',
    teluguName: 'కీమా బిర్యానీ రాయల్',
    description: 'Finely minced mutton cooked with fresh peas and layered with basmati, mint, and lemon juice.',
    price: '₹420',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'mut-4',
    name: 'Mutton Yakhni Biryani',
    teluguName: 'మటన్ యాఖ్ని బిర్యానీ',
    description: 'An elegant Kashmiri style biryani where rice is cooked in rich mutton bone broth before baking.',
    price: '₹490',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isVegetarian: false
  },
  {
    id: 'mut-5',
    name: 'Raan-e-Biryani (Lamb Shank)',
    teluguName: 'రాన్ ఎ బిర్యానీ',
    description: 'An ultimate feast. Whole roasted lamb leg shank, slow-dum prepared over 6 hours and served over basmati.',
    price: '₹650',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: false
  },
  {
    id: 'mut-6',
    name: 'Zafrani Gosht Biryani',
    teluguName: 'జాఫ్రానీ గోష్ట్ బిర్యానీ',
    description: 'Prime mutton cuts marinated in saffron cream, mace, and rose oil, layered with premium long grain basmati.',
    price: '₹510',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'mut-7',
    name: 'Spicy Guntur Mutton Biryani',
    teluguName: 'గుంటూరు మటన్ బిర్యానీ',
    description: 'Fiery Andhra-style mutton biryani packed with red chilli powder, curry leaves, and local spices.',
    price: '₹470',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'mut-8',
    name: 'Nizam Mutton Kofta Biryani',
    teluguName: 'మటన్ కోఫ్తా బిర్యానీ',
    description: 'Hand-shaped spiced mutton meatballs fried in ghee, layered with premium basmati rice.',
    price: '₹490',
    category: 'Mutton Biryani',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },

  // =================== CHICKEN BIRYANI (8 items) ===================
  {
    id: 'chk-1',
    name: 'Nawabi Chicken Biryani',
    teluguName: 'చికెన్ బిర్యానీ',
    description: 'Perfectly spiced spring chicken layered with fragrant basmati, mint leaves, caramelized onions, and fresh ghee.',
    price: '₹340',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'chk-2',
    name: 'Spicy Guntur Chicken Biryani',
    teluguName: 'గుంటూరు చికెన్ బిర్యానీ',
    description: 'Andhra-style spicy chicken biryani using local Guntur red chillies and fresh coconut milk.',
    price: '₹350',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'chk-3',
    name: 'Tandoori Chicken Tikka Biryani',
    teluguName: 'తందూరి చికెన్ టిక్కా బిర్యానీ',
    description: 'Smoky, clay-oven grilled chicken tikka cubes layered with spiced masala and basmati rice.',
    price: '₹370',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'chk-4',
    name: 'Malai Kabab Chicken Biryani',
    teluguName: 'మలై కబాబ్ చికెన్ బిర్యానీ',
    description: 'Creamy cardamom-flavored chicken malai kebabs layered with mild white basmati and saffron.',
    price: '₹380',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isVegetarian: false
  },
  {
    id: 'chk-5',
    name: 'Special Boneless Chicken Biryani',
    teluguName: 'బోన్‌లెస్ చికెన్ బిర్యానీ',
    description: 'Crispy fried boneless chicken pieces layered in special rich gravy and flavored rice.',
    price: '₹390',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isPopular: true,
    isVegetarian: false
  },
  {
    id: 'chk-6',
    name: 'Shahjahani Chicken Biryani',
    teluguName: 'షాజహానీ చికెన్ బిర్యానీ',
    description: 'Cooked with almond sauce, cashew nut sprinkles, fried onions, and a touch of rosewater.',
    price: '₹360',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: false
  },
  {
    id: 'chk-7',
    name: 'Awadhi Chicken Biryani',
    teluguName: 'అవధి చికెన్ బిర్యానీ',
    description: 'Lucknowi-style chicken biryani cooked in clear chicken broth, yielding a very light and delicate aroma.',
    price: '₹345',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'chk-8',
    name: 'Bhatkali Chicken Biryani',
    teluguName: 'భత్కలి చికెన్ బిర్యానీ',
    description: 'A coastal specialty. Chicken cooked with high amounts of onions and chillies without heavy ghee.',
    price: '₹350',
    category: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: false
  },

  // =================== BUTTER CHICKEN (8 items) ===================
  {
    id: 'but-1',
    name: 'Delhi Style Butter Chicken',
    teluguName: 'బటర్ చికెన్',
    description: 'Charcoal-grilled tandoori chicken cooked in a rich, velvety tomato gravy, finished with premium unsalted butter and fresh cream.',
    price: '₹320',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'but-2',
    name: 'Boneless Tandoori Butter Chicken',
    teluguName: 'బోన్‌లెస్ బటర్ చికెన్',
    description: 'Clay-oven roasted boneless chicken tikka simmered in sweet-spicy tomato gravy with dry fenugreek.',
    price: '₹340',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'but-3',
    name: 'Butter Chicken Masala',
    teluguName: 'బటర్ చికెన్ మసాలా',
    description: 'A slightly spicier rendition with diced capsicum, onions, and dry roasted spices.',
    price: '₹330',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: false
  },
  {
    id: 'but-4',
    name: 'Royal Murgh Makhani',
    teluguName: 'రాయల్ ముర్గ్ మఖ్ని',
    description: 'The premium classic. Prepared with organic honey, fresh tomato puree, cashew butter, and white cream.',
    price: '₹350',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: false
  },
  {
    id: 'but-5',
    name: 'Butter Chicken Kofta',
    teluguName: 'బటర్ చికెన్ కోఫ్తా',
    description: 'Lightly fried chicken meatballs simmered in our signature smooth tomato butter gravy.',
    price: '₹360',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: false
  },
  {
    id: 'but-6',
    name: 'Creamy Malai Butter Chicken',
    teluguName: 'మలై బటర్ చికెన్',
    description: 'A white gravy butter chicken cooked with cashew paste, cardamom, cheese, and no tomatoes.',
    price: '₹340',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'but-7',
    name: 'Smoked Butter Chicken',
    teluguName: 'స్మోక్డ్ బటర్ చికెన్',
    description: 'Infused with natural hickory wood smoke prior to serving for a deep, authentic charcoal house flavor.',
    price: '₹350',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: false
  },
  {
    id: 'but-8',
    name: 'Kadai Chicken Tikka',
    teluguName: 'కడాయ్ చికెన్ టిక్కా',
    description: 'Spicy wok-tossed chicken cooked with coriander seeds, bell peppers, tomatoes, and butter flakes.',
    price: '₹310',
    category: 'Butter Chicken',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: false
  },

  // =================== VEG BIRYANI (8 items) ===================
  {
    id: 'veg-1',
    name: 'Sufiyana Veg Biryani',
    teluguName: 'వెజ్ బిర్యానీ',
    description: 'A colorful medley of garden fresh vegetables cooked with fragrant basmati, rose water, and custom cardamoms.',
    price: '₹220',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },
  {
    id: 'veg-2',
    name: 'Nizami Paneer Tikka Biryani',
    teluguName: 'పనీర్ టిక్కా బిర్యానీ',
    description: 'Smoked paneer cottage cheese cubes cooked in spicy tandoori marinade, layered with aged basmati.',
    price: '₹260',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'veg-3',
    name: 'Wild Mushroom Dum Biryani',
    teluguName: 'మష్రూమ్ దమ్ బిర్యానీ',
    description: 'Earthay wild button mushrooms cooked in special curd gravy and layered with long-grain rice.',
    price: '₹240',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  },
  {
    id: 'veg-4',
    name: 'Soya Chaap Dum Biryani',
    teluguName: 'సోయా చాప్ దమ్ బిర్యానీ',
    description: 'Protein-rich soya chaap cutlets marinated in tandoori spices and baked under dum with rice.',
    price: '₹230',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },
  {
    id: 'veg-5',
    name: 'Jackfruit (Kathal) Dum Biryani',
    teluguName: 'కథాల్ దమ్ బిర్యానీ',
    description: 'Meaty tender jackfruit pieces marinated in special mint curry and cooked slow-steamed.',
    price: '₹250',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'veg-6',
    name: 'Double Zafrani Veg Biryani',
    teluguName: 'డబుల్ జాఫ్రానీ వెజ్ బిర్యానీ',
    description: 'Basmati layered with baby carrots, beans, peas, cottage cheese, loaded with heavy saffron sprinkles.',
    price: '₹270',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isVegetarian: true
  },
  {
    id: 'veg-7',
    name: 'Awadhi Subz Biryani',
    teluguName: 'అవధి సబ్జ్ బిర్యానీ',
    description: 'Lucknowi style mixed vegetable biryani cooked in light herb broth for a delicate taste profile.',
    price: '₹230',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  },
  {
    id: 'veg-8',
    name: 'Hyderabadi Bagara Rice & Veg',
    teluguName: 'బగారా అన్నం',
    description: 'Traditional spiced bagara rice served with special mixed vegetable salan on the side.',
    price: '₹210',
    category: 'Veg Biryani',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },

  // =================== RUMALI ROTI (8 items) ===================
  {
    id: 'rot-1',
    name: 'Hand-Stretched Rumali Roti',
    teluguName: 'రుమాలి రోటి',
    description: 'Paper-thin, soft hand-stretched flatbread cooked on an inverted dome tandoor grid.',
    price: '₹40',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'rot-2',
    name: 'Butter Rumali Roti',
    teluguName: 'బటర్ రుమాలి రోటి',
    description: 'Our classic paper-thin rumali roti brushed with warm melted butter.',
    price: '₹50',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'rot-3',
    name: 'Garlic Rumali Roti',
    teluguName: 'గార్లిక్ రుమాలి రోటి',
    description: 'Infused with roasted minced garlic granules and parsley bits before tossing.',
    price: '₹60',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  },
  {
    id: 'rot-4',
    name: 'Whole Wheat Rumali Roti',
    teluguName: 'గోధుమ రుమాలి రోటి',
    description: 'A healthy variant made entirely using premium organic stone-ground whole wheat flour.',
    price: '₹45',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  },
  {
    id: 'rot-5',
    name: 'Zafrani Sweet Rumali Roti',
    teluguName: 'జాఫ్రానీ స్వీట్ రుమాలి రోటి',
    description: 'Brushed with saffron syrup and sprinkled with fine cardamom sugar. Excellent with spicy curries.',
    price: '₹70',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    isVegetarian: true
  },
  {
    id: 'rot-6',
    name: 'Coriander Mint Rumali Roti',
    teluguName: 'కొత్తిమీర పుదీనా రుమాలి',
    description: 'Tossed with fresh crushed garden mint leaves and chopped coriander springs.',
    price: '₹55',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    isVegetarian: true
  },
  {
    id: 'rot-7',
    name: 'Chilgoza Stuffed Roti',
    teluguName: 'చిల్గోజా రుమాలి రోటి',
    description: 'Stuffed with finely ground roasted pine nuts (chilgoza) and mild cheese.',
    price: '₹90',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    isPopular: true,
    isVegetarian: true
  },
  {
    id: 'rot-8',
    name: 'Multi-Grain Rumali Roti',
    teluguName: 'మల్టీ గ్రెయిన్ రుమాలి రోటి',
    description: 'Prepared with a premium healthy flour mix of oats, ragi, barley, chickpeas, and wheat.',
    price: '₹65',
    category: 'Rumali Roti',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    isVegetarian: true
  }
];

export const SPECIAL_OFFERS = [
  {
    id: 'offer-1',
    title: 'Heritage Afternoon Veg Special',
    description: 'Authentic Sufiyana Veg Biryani, slow-dum prepared. Available for limited hours daily.',
    price: '₹99',
    badge: 'Special Price',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    cta: 'Order Now'
  },
  {
    id: 'offer-2',
    title: 'Ustaads Signature Veg Combo',
    description: 'Veg Biryani, Paneer Tikka, Mirchi Ka Salan, Raita, and choice of soft drink.',
    price: '₹400',
    badge: 'Value Platter',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    cta: 'Explore Combo'
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    title: 'Authentic Charcoal Dum Preparation',
    aspect: 'aspect-square'
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    title: 'Slow Steamed Royal Mutton Biryani',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    title: 'Velvety Butter Chicken Gravy',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80',
    title: 'Artisanal Hand-Tossed Rumali Roti',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    title: 'Signature Seekh Kebab Platter',
    aspect: 'aspect-square'
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    title: 'Nawabi Korma Curry & Butter Naan',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
    title: 'Charcoal Grilled Tandoori Tikka',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    title: 'Mirchi Ka Salan Simmering Pot',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Saffron Infused Basmati',
    aspect: 'aspect-square'
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    title: 'Ustaads Royal Banquet Spread',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    title: 'Handpicked Indian Spices Medley',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    title: 'Shahi Kheer & Pistachio Desserts',
    aspect: 'aspect-square'
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
    name: 'Mahima Nahata',
    role: 'Local Guide • 91 reviews',
    content: 'Perfect place for biryani lovers. And the best part? Vegetable biryani is only for ₹99/- and veg combo for ₹400/- (includes veg starter, rumali roti, and veg biryani). Truly outstanding!',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    date: '5 days ago'
  },
  {
    id: 't2',
    name: 'Vivek Singh',
    role: 'Local Guide • 104 reviews',
    content: 'Good biryani, all the staff are too humble, too kind, best service. The quantity and quality of food is outstanding. Highly recommended!',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    date: '1 week ago'
  },
  {
    id: 't3',
    name: 'Vikas Eion',
    role: '3 reviews • 1 photo',
    content: 'The taste of the food was just amazing, literally the piece in the biryani was so tender and tasty. Coming to the starters, kebabs are really full of flavours... Staff behaviour is really good.',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    date: '2 weeks ago'
  },
  {
    id: 't4',
    name: 'Anjali Sharma',
    role: 'Local Guide • 42 reviews',
    content: 'The Mutton Dum Biryani here is absolutely divine. Saffron aroma is authentic, meat is super tender and splits right off the bone. A luxury dine-in experience!',
    rating: 5,
    source: 'Zomato Customer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    date: '3 days ago'
  },
  {
    id: 't5',
    name: 'Rohan Mehta',
    role: 'Food Critic • 12 reviews',
    content: 'Excellent Delhi Style Butter Chicken. Gravy is perfectly balanced, velvety, and not overly sweet. Paired with hot hand-stretched Rumali Roti, it is unmatched.',
    rating: 5,
    source: 'Swiggy User',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80',
    date: '10 days ago'
  },
  {
    id: 't6',
    name: 'Priya Patel',
    role: 'Local Guide • 18 reviews',
    content: 'We ordered the Sufiyana White Biryani and it was so light, aromatic, and cooked perfectly. Service is extremely fast and the hospitality makes you feel royal.',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=150&h=150&q=80',
    date: '4 days ago'
  },
  {
    id: 't7',
    name: 'Aditya Rao',
    role: '5 reviews • 3 photos',
    content: 'If you want genuine Hyderabadi Dum Biryani near Moinabad, Ustaads is the only answer. Portions are generous, spices are freshly ground, and the ghee quality is premium.',
    rating: 5,
    source: 'Zomato Customer',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    date: '2 weeks ago'
  },
  {
    id: 't8',
    name: 'Shreya Ghoshal',
    role: 'Local Guide • 77 reviews',
    content: 'Amazing tandoori platters and hospitality. The double zafrani veg biryani is highly recommended for vegetarians. Beautiful ambience for families!',
    rating: 5,
    source: 'Google Reviews',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&h=150&q=80',
    date: '1 week ago'
  }
];
