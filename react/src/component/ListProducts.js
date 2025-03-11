const products = [
  {
    _id: {
      $oid: "67c62a38f2d8b67179988059",
    },
    name: "iPhone 14 Pro",
    description:
      "Apple's latest smartphone with A16 Bionic chip and ProMotion display.",
    category: "Smartphones",
    price: 1099,
    stock: 50,
    images: [
      "https://www.xtremeskins.co.uk/cdn/shop/products/iphone-14-pro-max-black-gloss-skins_4b66e3ee-63b6-45da-a114-9de0ff639641_2048x.jpg?v=1734264797",
      "https://ispaceservices.com/storage/2022/09/14-pro-family.png",
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111846_sp875-sp876-iphone14-pro-promax.png",
    ],
    brand: "Apple",
    __v: 0,
    id: 0,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988060",
    },
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Flagship Android phone with a 200MP camera and Snapdragon 8 Gen 2 processor.",
    category: "Smartphones",
    price: 1199,
    stock: 40,
    images: [
      "https://www.tunisianet.com.tn/344715-large/smartphone-samsung-galaxy-s23-ultra-5g-12-go-256-go-vert.jpg",
      "https://m.media-amazon.com/images/I/71IGA2fdntL.jpg",
      "https://bestphone.tn/wp-content/uploads/2024/12/Samsung20Galaxy20S2320Ultra205G20Creme.png",
    ],
    brand: "Samsung",
    __v: 0,
    id: 1,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988061",
    },
    name: "Sony WH-1000XM5",
    description:
      "Industry-leading noise-canceling headphones with exceptional sound quality.",
    category: "Headphones",
    price: 399,
    stock: 30,
    images: [
      "https://images-cdn.ubuy.ae/633ac1a8e22c171ed47edec1-sony-wh-1000xm5-wireless-noise-canceling.jpg",
      "https://www.sony.com.au/image/29c4c729f735ed3af6b457bd3da8dbd0?fmt=png-alpha&wid=1000",
      "https://assets.mydeal.com.au/47684/sony-wh-1000xm5-noise-cancelling-wireless-headphones-black-8423668_04.jpg?v=638657355287558884&imgclass=dealpageimage",
    ],
    brand: "Sony",
    __v: 0,
    id: 2,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988062",
    },
    name: "MacBook Air M2",
    description:
      "Ultra-thin and lightweight laptop powered by Apple's M2 chip.",
    category: "Laptops",
    price: 1299,
    stock: 25,
    images: [
      "https://www.xtremeskins.co.uk/cdn/shop/files/macbook-air-13.6-2022-m2-brushed-gold-skins_ff6396e9-beb3-4b35-a595-be5ad759d147_2048x.jpg?v=1734614518",
      "https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-10.jpg?auto=webp&quality=75&width=1024",
      "https://150826569.v2.pressablecdn.com/wp-content/uploads/2022/08/m2-macbook-air-hero.jpg",
    ],
    brand: "Apple",
    __v: 0,
    id: 3,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988063",
    },
    name: "Logitech MX Master 3S",
    description:
      "Ergonomic wireless mouse with ultra-fast scrolling and customizable buttons.",
    category: "Accessories",
    price: 99,
    stock: 100,
    images: [
      "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s/migration-assets-for-delorean-2025/gallery/mx-master-3s-top-view-graphite.png",
      "https://globaliraq.net/cdn/shop/files/1_f88f49ff-cff0-4aec-bdd3-b0294448437a_2048x.png?v=1702725313",
      "https://m.media-amazon.com/images/I/41QF3gHGdwL.jpg",
    ],
    brand: "Logitech",
    __v: 0,
    id: 4,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988064",
    },
    name: "Samsung 32-inch 4K Monitor",
    description:
      "UHD 4K display with HDR support for an immersive viewing experience.",
    category: "Monitors",
    price: 349,
    stock: 20,
    images: [
      "https://i5.walmartimages.com/seo/SAMSUNG-32-Class-Curved-4K-UHD-3840-x-2160-60Hz-4ms-Monitor-LU32R590CWNXZA_faae156a-1e1b-440d-9ef7-7fe76cb35660_1.05dcd4091c5b4f6310e9c441ca63991d.jpeg",
      "https://tv-it.com/storage/shada/folder-1/ls32am700umxzn-14.webp",
      "https://www.whitcroftit.com.au/cdn/shop/products/ls32a800nmexxy-1.jpg?v=1682340707",
    ],
    brand: "Samsung",
    __v: 0,
    id: 5,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988065",
    },
    name: "Dell XPS 15",
    description: "Powerful laptop with Intel Core i7 and NVIDIA RTX 3050 Ti.",
    category: "Laptops",
    price: 1799,
    stock: 15,
    images: [
      "https://www.01net.com/app/uploads/2012/06/dell-xps-15-1.jpg",
      "https://m.media-amazon.com/images/I/71-IIlqdB2L._AC_UF894,1000_QL80_.jpg",
      "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2020/07/07f541527ba65b0932073a06b51eae51.jpg",
    ],
    brand: "Dell",
    __v: 0,
    id: 6,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988066",
    },
    name: "Bose QuietComfort 45",
    description:
      "Noise-canceling wireless headphones with high-fidelity audio.",
    category: "Headphones",
    price: 329,
    stock: 35,
    images: [
      "https://m.media-amazon.com/images/I/51qfLURUtpL._AC_UF894,1000_QL80_.jpg",
      "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45_PDP_Ecom-Gallery-B02.jpg/jcr:content/renditions/cq5dam.web.1920.1920.jpeg",
      "https://www.mobilestation.co.nz/media/catalog/product/cache/5f3f5c8d65b4e943e98e2bb2bea43d27/1/1/1183_3.jpg",
    ],
    brand: "Bose",
    __v: 0,
    id: 7,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988067",
    },
    name: "Apple Watch Series 8",
    description:
      "Advanced smartwatch with health tracking and crash detection.",
    category: "Wearables",
    price: 499,
    stock: 60,
    images: [
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111848_apple-watch-series8.png",
      "https://www.xtremeskins.co.uk/cdn/shop/products/apple-watch-series-7-template_c535bc38-cc17-4420-bcc7-b21adf770f1b_1500x.jpg?v=1662724791",
      "https://www.catalystlifestyle.com/cdn/shop/files/20220802AW7i-45mm-NewFrontleft-BlackStrap_8cec469d-cf37-414c-bfb1-005016ff4429.jpg?v=1700046318&width=2048",
    ],
    brand: "Apple",
    __v: 0,
    id: 8,
    quantity: 1,
  },
  {
    _id: {
      $oid: "67c62a38f2d8b67179988068",
    },
    name: "Google Pixel 7 Pro",
    description:
      "Google's flagship phone with Tensor G2 chip and AI-powered camera.",
    category: "Smartphones",
    price: 899,
    stock: 45,
    images: [
      "https://m.media-amazon.com/images/I/51f4A6Tr8zL._AC_SR1000,1000_.jpg",
      "https://qskinz.com/cdn/shop/products/24pinkgold_086422cb-8381-4416-abd3-1198242a78ac.png?v=1668096043",
      "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/Google-Pixel-7-5-1-1024x768.jpg",
    ],
    brand: "Google",
    __v: 0,
    id: 9,
    quantity: 1,
  },
  
];

export default products;
