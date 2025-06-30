export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'toast',
    name: 'Tost Menü',
    description: 'Taptaze ekmeklerimiz ve dolu içeriğimizle tostlarımız.',
    image: 'https://images.pexels.com/photos/4828333/pexels-photo-4828333.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Sandwich'
  },
  {
    id: 'gozleme',
    name: 'Gözleme Menü',
    description: 'Çeşit çeşit gözlemelerimiz gününüze zevk katacak',
    image: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Sunrise'
  },
  {
    id: 'sandwiches',
    name: 'Sandviçler',
    description: 'Bol içeriğiyle sandviçlerimize bayılacaksınız.',
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Sandwich'
  },
  {
    id: 'drinks',
    name: 'İçecekler',
    description: 'Çeşitli içeceklerimiz yemeğinizin yanında süper gider.',
    image: '/images/drinks-2.jpg',
    icon: 'Coffee'
  },
  {
    id: 'desserts',
    name: 'Tatlılar',
    description: 'Tatlılarımız damak tadınıza çok iyi gelecek.',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: 'Cookie'
  }
];

export const menuItems: MenuItem[] = [
  // Toast items
  // 🥪 TOST MENÜ
  {
    id: '1',
    name: 'Karışık Tost',
    description: 'Sucuk ve kaşarlı karışık tost.',
    price: 90.00,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Sucuk', 'Kaşar peyniri', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '2',
    name: 'Sade Kaşar Tost',
    description: 'Bol kaşarlı, klasik tost lezzeti.',
    price: 90.00,
    image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Kaşar peyniri', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '3',
    name: 'Sade Sucuk Tost',
    description: 'Sucuk severler için sade sucuklu tost.',
    price: 90.00,
    image: 'https://images.pexels.com/photos/4109110/pexels-photo-4109110.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Sucuk', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '4',
    name: 'Atom Tost Holly',
    description: 'Sucuk, kaşar ve yumurtalı özel Holly atom tost.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/4965980/pexels-photo-4965980.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Sucuk', 'Kaşar', 'Yumurta', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '5',
    name: 'Çift Kaşarlı Tost',
    description: 'İki kat kaşar peyniriyle hazırlanan tost.',
    price: 110.00,
    image: 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Çift kaşar', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '6',
    name: 'Yeşil Biberli Special',
    description: 'Özel baharatlı ve yeşil biberli special tost.',
    price: 120.00,
    image: 'https://images.pexels.com/photos/844833/pexels-photo-844833.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Yeşil biber', 'Kaşar', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '7',
    name: 'Kasap Sucuklu Tost',
    description: 'Kasap sucukla hazırlanan özel tost.',
    price: 120.00,
    image: 'https://images.pexels.com/photos/4283554/pexels-photo-4283554.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Kasap sucuk', 'Kaşar', 'Tost ekmeği'],
    category: 'toast'
  },
  {
    id: '8',
    name: 'Antep Peynirli Tost',
    description: 'Antep peyniriyle hazırlanan yöresel tost.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/7045697/pexels-photo-7045697.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Antep peyniri', 'Tost ekmeği'],
    category: 'toast'
  },

  // 🫓 GÖZLEME MENÜ
  {
    id: '9',
    name: 'Kaşarlı Gözleme',
    description: 'Bol kaşarlı geleneksel gözleme.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/5331896/pexels-photo-5331896.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Kaşar', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '10',
    name: 'Antep Peynirli Gözleme',
    description: 'Antep peyniriyle yapılan yöresel gözleme.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/7045697/pexels-photo-7045697.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Antep peyniri', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '11',
    name: 'Beyaz Peynirli Gözleme',
    description: 'Klasik beyaz peynirli gözleme.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/6937465/pexels-photo-6937465.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Beyaz peynir', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '12',
    name: 'Patatesli Gözleme',
    description: 'Ev yapımı patatesle hazırlanan gözleme.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/1458697/pexels-photo-1458697.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Patates', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '13',
    name: 'Patates Kaşarlı Gözleme',
    description: 'Patates ve kaşarın buluştuğu gözleme.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/1470544/pexels-photo-1470544.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Patates', 'Kaşar', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '14',
    name: 'Sucuk Kaşarlı Gözleme',
    description: 'Sucuk ve kaşar dolgulu gözleme.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/6061847/pexels-photo-6061847.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Sucuk', 'Kaşar', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '15',
    name: 'Cızbızlı Gözleme',
    description: 'Cızbız köfte ile hazırlanan özel gözleme.',
    price: 175.00,
    image: 'https://images.pexels.com/photos/9585455/pexels-photo-9585455.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Cızbız köfte', 'Kaşar', 'Gözleme hamuru'],
    category: 'gozleme'
  },
  {
    id: '16',
    name: 'Tavuk Kaşar Mantar Gözleme',
    description: 'Tavuk, kaşar ve mantarlı lezzetli gözleme.',
    price: 165.00,
    image: 'https://images.pexels.com/photos/1616153/pexels-photo-1616153.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Tavuk', 'Kaşar', 'Mantar', 'Gözleme hamuru'],
    category: 'gozleme'
  },

  // 🥖 SANDVİÇ
  {
    id: '17',
    name: 'İzmir Usulü Bol Döküm Kumru',
    description: 'İzmir’e özel bol malzemeli döküm kumru.',
    price: 160.00,
    image: 'https://images.pexels.com/photos/1132174/pexels-photo-1132174.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Sucuk', 'Sosis', 'Kaşar', 'Kumru ekmeği'],
    category: 'sandwiches'
  },
  {
    id: '18',
    name: 'Soğuk Sandviç',
    description: 'Taptaze malzemelerle hazırlanmış soğuk sandviç.',
    price: 100.00,
    image: 'https://images.pexels.com/photos/1600710/pexels-photo-1600710.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Marul', 'Domates', 'Peynir', 'Sandviç ekmeği'],
    category: 'sandwiches'
  },
  {
    id: '19',
    name: 'Et Cızbız',
    description: 'Izgara et köftesiyle hazırlanan sandviç.',
    price: 140.00,
    image: 'https://images.pexels.com/photos/1616155/pexels-photo-1616155.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Et köfte', 'Domates', 'Ekmek'],
    category: 'sandwiches'
  },
  {
    id: '20',
    name: 'Kaşarlı Domatesli Et Cızbız',
    description: 'Kaşar, domates ve et cızbız lezzet üçlüsü.',
    price: 150.00,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: ['Et köfte', 'Domates', 'Kaşar', 'Sandviç ekmeği'],
    category: 'sandwiches'
  },

  // 🥤 İÇECEKLER
  {
    id: '21',
    name: 'Coca Cola 330 ml',
    description: 'Kutu Coca Cola içeceği.',
    price: 50.00,
    image: '/images/coca-cola-330-2.png',
    ingredients: ['Kola'],
    category: 'drinks'
  },
  {
    id: '22',
    name: 'Coca Cola 1 Litre',
    description: '1 litrelik Coca Cola.',
    price: 65.00,
    image: '/images/coca-cola-1-l.png',
    ingredients: ['Kola'],
    category: 'drinks'
  },
  {
    id: '23',
    name: 'Coca Cola 200 ml Şişe',
    description: 'Cam şişe Coca Cola (200 ml).',
    price: 35.00,
    image: '/images/coca-cola-200-2.png',
    ingredients: ['Kola'],
    category: 'drinks'
  },
  {
    id: '24',
    name: 'Fanta 330 ml',
    description: 'Kutu Fanta içeceği.',
    price: 50.00,
    image: '/images/fanta-330.png',
    ingredients: ['Gazlı içecek'],
    category: 'drinks'
  },
  {
    id: '25',
    name: 'Cappy 330 ml',
    description: 'Kutu meyve suyu çeşitleri.',
    price: 50.00,
    image: '/images/cappy.jpg',
    ingredients: ['Meyve suyu'],
    category: 'drinks'
  },
  {
    id: '26',
    name: 'Fuse Tea 330 ml',
    description: 'Kutu buzlu çay çeşitleri.',
    price: 50.00,
    image: '/images/fuse-tea-1.png',
    ingredients: ['Buzlu çay'],
    category: 'drinks'
  },
  {
    id: '27',
    name: 'Eker Ayran 270 ml',
    description: 'Eker marka kutu ayran.',
    price: 30.00,
    image: '/images/eker-ayran-300.png',
    ingredients: ['Ayran'],
    category: 'drinks'
  },
  {
    id: '28',
    name: 'Turnib Şalgam 330 ml',
    description: 'Turnib marka 330 ml şalgam suyu.',
    price: 30.00,
    image: '/images/turnib-salgam.jpg',
    ingredients: ['Şalgam'],
    category: 'drinks'
  },
  {
    id: '29',
    name: 'Sade Soda',
    description: 'Doğal mineralli sade soda.',
    price: 20.00,
    image: '/images/beypazari-soda.jpg',
    ingredients: ['Soda'],
    category: 'drinks'
  },
  {
    id: '30',
    name: 'Meyveli Soda',
    description: 'Meyveli aromalı soda çeşitleri.',
    price: 25.00,
    image: '/images/meyveli.png',
    ingredients: ['Aromalı soda'],
    category: 'drinks'
  },
  {
    id: '31',
    name: 'Nescafe Xpress Soğuk Kahve',
    description: 'Hazır kutu soğuk kahve.',
    price: 65.00,
    image: '/images/nescafe.jpg',
    ingredients: ['Soğuk kahve'],
    category: 'drinks'
  },
  {
    id: '32',
    name: 'Su',
    description: 'Doğal kaynak suyu.',
    price: 10.00,
    image: '/images/erikli.png',
    ingredients: ['Su'],
    category: 'drinks'
  },
  {
    id: '33',
    name: 'Çay',
    description: 'Taze demlenmiş siyah çay.',
    price: 15.00,
    image: '/images/cay.png',
    ingredients: ['Çay'],
    category: 'drinks'
  },
  {
    id: '34',
    name: 'Nescafe Sıcak',
    description: 'Hazır granül nescafe sıcak kahve.',
    price: 25.00,
    image: '/images/nescafe-bardak.jpg',
    ingredients: ['Granül kahve', 'Sıcak su'],
    category: 'drinks'
  },
  {
    id: '35',
    name: 'Profiterol',
    description: 'Çikolatalı soslu profiterol tatlısı.',
    price: 40.00,
    image: '/images/profi.jpg',
    ingredients: ['Hamur topu', 'Çikolata sos', 'Krema'],
    category: 'desserts'
  },
  {
    id: '36',
    name: 'Sütlaç',
    description: 'Fırında pişmiş geleneksel sütlaç.',
    price: 40.00,
    image: '/images/sutlac.jpg',
    ingredients: ['Süt', 'Pirinç', 'Şeker', 'Tarçın'],
    category: 'desserts'
  }
];