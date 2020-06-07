const SHOP_DATA = [
  {
    id: 1,
    title: 'Shoes',
    routeName: 'shoes',
    items: [
      {
        id: 16,
        name: 'Basic contrast sneakers',
        imageUrl: 'https://i.ibb.co/0C9Brrv/shoes12.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 10,
        detailImages: [
          'https://i.ibb.co/0C9Brrv/shoes12.jpg',
          'https://i.ibb.co/wYYjqhy/shoes12-1.jpg',
          'https://i.ibb.co/rGMMMCy/shoes-15.jpg',
        ],
      },
      {
        id: 16,
        name: 'Cen’s dress shoes',
        imageUrl: 'https://i.ibb.co/tQ1dV0Y/shoes-9.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 299,
        detailImages: [
          'https://i.ibb.co/tQ1dV0Y/shoes-9.jpg',
          'https://i.ibb.co/pZmkxjR/shoes-18.jpg',
          'https://i.ibb.co/GCH1cKz/shoes-11.jpg',
        ],
      },
      {
        id: 16,
        name: 'Ehearling-lined boot men',
        imageUrl: 'https://i.ibb.co/NVBwN0D/shoes13.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 159,
        detailImages: [
          'https://i.ibb.co/NVBwN0D/shoes13.jpg',
          'https://i.ibb.co/vxWrbg9/shoes13-1.jpg',
        ],
      },
      {
        id: 16,
        name: 'Guilted ankle boots',
        imageUrl: 'https://i.ibb.co/LSYp1db/shoes-10.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 480,
        detailImages: [
          'https://i.ibb.co/LSYp1db/shoes-10.jpg',
          'https://i.ibb.co/3ym3ZgR/shoes-19.jpg',
          'https://i.ibb.co/tQ1dV0Y/shoes-9.jpg',
        ],
      },
      {
        id: 16,
        name: 'Hrim sports shoes',
        imageUrl: 'https://i.ibb.co/1zR3GGq/shoes-2.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 59,
        detailImages: [
          'https://i.ibb.co/1zR3GGq/shoes-2.jpg',
          'https://i.ibb.co/GCH1cKz/shoes-11.jpg',
          'https://i.ibb.co/yn5g1wN/shoes-12.jpg',
        ],
      },
      {
        id: 16,
        name: 'Jontrast sports sneakers',
        imageUrl: 'https://i.ibb.co/GRbMmR2/shoes-7.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 333,
        detailImages: [
          'https://i.ibb.co/GRbMmR2/shoes-7.jpg',
          'https://i.ibb.co/WppG8zB/shoes-16.jpg',
        ],
      },
      {
        id: 16,
        name: 'Lntrast sports sneakers',
        imageUrl: 'https://i.ibb.co/5BzSgGQ/shoes-4.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 399,
        detailImages: [
          'https://i.ibb.co/5BzSgGQ/shoes-4.jpg',
          'https://i.ibb.co/6tSDDfv/shoes-13.jpg',
        ],
      },
      {
        id: 16,
        name: 'Nuede minimal sneakers',
        imageUrl: 'https://i.ibb.co/C61pjPH/shoes-6.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 450,
        detailImages: [
          'https://i.ibb.co/C61pjPH/shoes-6.jpg',
          'https://i.ibb.co/rGMMMCy/shoes-15.jpg',
        ],
      },
      {
        id: 16,
        name: 'Vuilted high tops',
        imageUrl: 'https://i.ibb.co/1GqFM6V/shoes-1.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 499,
        detailImage: [
          'https://i.ibb.co/1GqFM6V/shoes-1.jpg',
          'https://i.ibb.co/CwgwgFb/shoes-20.jpg',
          'https://i.ibb.co/pZmkxjR/shoes-18.jpg',
        ],
      },
      {
        id: 16,
        name: 'You must have',
        imageUrl: 'https://i.ibb.co/CPxD5PB/shoes-3.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 199,
        detailImages: [
          'https://i.ibb.co/CPxD5PB/shoes-3.jpg',
          'https://i.ibb.co/yn5g1wN/shoes-12.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Bags',
    routeName: 'bags',
    items: [
      {
        id: 16,
        name: 'Backpack double strap',
        imageUrl: 'https://i.ibb.co/zsqDMrW/bag-25.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 15,
        detailImages: [
          'https://i.ibb.co/zsqDMrW/bag-25.jpg',
          'https://i.ibb.co/0f74JwZ/bag-21.jpg',
          'https://i.ibb.co/xJhgNCg/bag-26.jpg',
        ],
      },
      {
        id: 16,
        name: 'Clutch printed bag',
        imageUrl: 'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 67,
        detailImages: [
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
          'https://i.ibb.co/HpqNFtS/bag-12.jpg',
          'https://i.ibb.co/dMhrJrx/bag-1.jpg',
        ],
      },
      {
        id: 16,
        name: 'Ethnic jacquard backpack',
        imageUrl: 'https://i.ibb.co/FqKnD8B/bag-8.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 310,
        detailImages: [
          'https://i.ibb.co/FqKnD8B/bag-8.jpg',
          'https://i.ibb.co/yQrxDDv/bag-9.jpg',
          'https://i.ibb.co/r5p1zZk/bag-4.jpg',
        ],
      },
      {
        id: 16,
        name: 'Gamouflage print backpack',
        imageUrl: 'https://i.ibb.co/Bg3NtPb/bag-6.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 290,
        detailImages: [
          'https://i.ibb.co/Bg3NtPb/bag-6.jpg',
          'https://i.ibb.co/LRS9xnp/bag-15.jpg',
          'https://i.ibb.co/dMhrJrx/bag-1.jpg',
        ],
      },
      {
        id: 16,
        name: 'Houble strap backpack',
        imageUrl: 'https://i.ibb.co/JncgSmF/bag-19.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 563,
        detailImages: [
          'https://i.ibb.co/JncgSmF/bag-19.jpg',
          'https://i.ibb.co/FnyFwqJ/bag-23.jpg',
          'https://i.ibb.co/Bg3NtPb/bag-6.jpg',
        ],
      },
      {
        id: 16,
        name: 'Hylon technical backpack',
        imageUrl: 'https://i.ibb.co/NprSQHs/bag-2.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 222,
        detailImages: [
          'https://i.ibb.co/NprSQHs/bag-2.jpg',
          'https://i.ibb.co/3hKGntf/bag-11.jpg',
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        ],
      },
      {
        id: 16,
        name: 'Jacquard ethnic backpack',
        imageUrl: 'https://i.ibb.co/r5p1zZk/bag-4.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 260,
        detailImages: [
          'https://i.ibb.co/r5p1zZk/bag-4.jpg',
          'https://i.ibb.co/gDF2zrZ/bag-13.jpg',
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        ],
      },
      {
        id: 16,
        name: 'Nombined strapped backpack',
        imageUrl: 'https://i.ibb.co/xJhgNCg/bag-26.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 54,
        detailImages: [
          'https://i.ibb.co/dMhrJrx/bag-1.jpg',
          'https://i.ibb.co/RHcgVKD/bag-17.jpg',
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        ],
      },
      {
        id: 16,
        name: 'Vintage cinch backpack',
        imageUrl: 'https://i.ibb.co/0sqv2wk/bag-24.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 560,
        detailImage: [
          'https://i.ibb.co/0sqv2wk/bag-24.jpg',
          'https://i.ibb.co/948qYR2/bag-20.jpg',
          'https://i.ibb.co/JncgSmF/bag-19.jpg',
        ],
      },
      {
        id: 16,
        name: 'Lintage cinch backpack',
        imageUrl: 'https://i.ibb.co/xJhgNCg/bag-26.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 447,
        detailImages: [
          'https://i.ibb.co/xJhgNCg/bag-26.jpg',
          'https://i.ibb.co/M8qhDsy/bag-22.jpg',
          'https://i.ibb.co/r5p1zZk/bag-4.jpg',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Watches',
    routeName: 'watches',
    items: [
      {
        id: 16,
        name: 'Bold metallic watch',
        imageUrl: 'https://i.ibb.co/yfxr1sC/watches-2.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 100,
        detailImages: [
          'https://i.ibb.co/yfxr1sC/watches-2.jpg',
          'https://i.ibb.co/gjWLfxB/watches-13.jpg',
        ],
      },
      {
        id: 16,
        name: 'Ctrap face sphere watch',
        imageUrl: 'https://i.ibb.co/QH4G5m2/watches-11.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 55,
        detailImages: [
          'https://i.ibb.co/QH4G5m2/watches-11.jpg',
          'https://i.ibb.co/b1y0xhL/watches-22.jpg',
        ],
      },
      {
        id: 16,
        name: 'Eart metallic watch',
        imageUrl: 'https://i.ibb.co/0FrMbN0/watches-5.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 179,
        detailImages: [
          'https://i.ibb.co/0FrMbN0/watches-5.jpg',
          'https://i.ibb.co/JQPDhjj/watches-16.jpg',
        ],
      },
      {
        id: 16,
        name: 'Gabric band watch',
        imageUrl: 'https://i.ibb.co/PwTTh7Y/watches-8.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 229,
        detailImages: [
          'https://i.ibb.co/PwTTh7Y/watches-8.jpg',
          'https://i.ibb.co/rGPN9Zj/watches-19.jpg',
        ],
      },
      {
        id: 16,
        name: 'Hubber watch',
        imageUrl: 'https://i.ibb.co/d4ctp4n/watches-10.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 299,
        detailImages: [
          'https://i.ibb.co/d4ctp4n/watches-10.jpg',
          'https://i.ibb.co/6vfWkpm/watches-21.jpg',
        ],
      },
      {
        id: 16,
        name: 'Jasic rubber watch',
        imageUrl: 'https://i.ibb.co/rm0cJk8/watches-3.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 333,
        detailImages: [
          'https://i.ibb.co/rm0cJk8/watches-3.jpg',
          'https://i.ibb.co/4780rff/watches-14.jpg',
        ],
      },
      {
        id: 16,
        name: 'Lasic rubber watch',
        imageUrl: 'https://i.ibb.co/khQkRMY/watches-4.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 389,
        detailImages: [
          'https://i.ibb.co/khQkRMY/watches-4.jpg',
          'https://i.ibb.co/dccrx2S/watches-15.jpg',
        ],
      },
      {
        id: 16,
        name: 'Lens great watches',
        imageUrl: 'https://i.ibb.co/5GNk36R/watches-7.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 579,
        detailImages: [
          'https://i.ibb.co/5GNk36R/watches-7.jpg',
          'https://i.ibb.co/0ZLyZzK/watches-18.jpg',
        ],
      },
      {
        id: 16,
        name: 'Nimited edition watches',
        imageUrl: 'https://i.ibb.co/C2V4XKg/watches-1.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 439,
        detailImage: [
          'https://i.ibb.co/C2V4XKg/watches-1.jpg',
          'https://i.ibb.co/TWFNLYz/watches-12.jpg',
        ],
      },
      {
        id: 16,
        name: 'Vetallic body watches',
        imageUrl: 'https://i.ibb.co/wKM0b3m/watches-6.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 499,
        detailImages: [
          'https://i.ibb.co/wKM0b3m/watches-6.jpg',
          'https://i.ibb.co/q5bRw8V/watches-17.jpg',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 16,
        name: 'Before decaf phone case',
        imageUrl: 'https://i.ibb.co/4WKV4jS/accessories-22.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 49,
        detailImages: [
          'https://i.ibb.co/4WKV4jS/accessories-22.jpg',
          'https://i.ibb.co/JqtX1B3/extra-product-12-1.jpg',
          'https://i.ibb.co/VWCjK6D/accessories-21.jpg',
        ],
      },
      {
        id: 16,
        name: 'Black umbrella in handle',
        imageUrl: 'https://i.ibb.co/1XprJg3/accessories-18.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 99,
        detailImages: [
          'https://i.ibb.co/1XprJg3/accessories-18.jpg',
          'https://i.ibb.co/hBVYL2y/accessories-14.jpg',
        ],
      },
      {
        id: 16,
        name: 'Classic Square Buckle Belt',
        imageUrl: 'https://i.ibb.co/mv41bR0/accessories-16.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 115,
        detailImages: [
          'https://i.ibb.co/mv41bR0/accessories-16.jpg',
          'https://i.ibb.co/QpsfttP/accessories-5.jpg',
          'https://i.ibb.co/pL1z8LS/accessories-7.jpg',
        ],
      },
      {
        id: 16,
        name: 'Eingerless gloves in camel',
        imageUrl: 'https://i.ibb.co/5KgM1pv/accessories-23.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 390,
        detailImages: [
          'https://i.ibb.co/5KgM1pv/accessories-23.jpg',
          'https://i.ibb.co/kGHGF4m/accessories-241.jpg',
        ],
      },
      {
        id: 16,
        name: 'Esprit leather belt',
        imageUrl: 'https://i.ibb.co/pL1z8LS/accessories-7.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 115,
        detailImages: [
          'https://i.ibb.co/pL1z8LS/accessories-7.jpg',
          'https://i.ibb.co/178P02x/accessories-1.jpg',
          ' https://i.ibb.co/QpsfttP/accessories-5.jpg',
        ],
      },
      {
        id: 16,
        name: 'Gloves selected ribbed',
        imageUrl: 'https://i.ibb.co/QYRNXx6/accessories-8.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 280,
        detailImages: [
          'https://i.ibb.co/QYRNXx6/accessories-8.jpg',
          'https://i.ibb.co/qWscf4q/accessories-20.jpg',
          'https://i.ibb.co/Qpdkp1X/accessories-17.jpg',
        ],
      },
      {
        id: 16,
        name: 'Hlen lossie cashmere',
        imageUrl: 'https://i.ibb.co/02YtyVM/accessories-10.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 260,
        detailImages: [
          'https://i.ibb.co/02YtyVM/accessories-10.jpg',
          'https://i.ibb.co/yB7K9qR/accessories-6.jpg',
          'https://i.ibb.co/SfvrCzR/accessories-11.jpg',
        ],
      },
      {
        id: 16,
        name: 'London ampersand cushion',
        imageUrl: 'https://i.ibb.co/F3L70rC/accessories-9.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 210,
        detailImages: [
          'https://i.ibb.co/F3L70rC/accessories-9.jpg',
          'https://i.ibb.co/Qpdkp1X/accessories-17.jpg',
          'https://i.ibb.co/QYRNXx6/accessories-8.jpg',
        ],
      },
      {
        id: 16,
        name: 'Vable scarf in burgundy',
        imageUrl: 'https://i.ibb.co/SfvrCzR/accessories-11.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 258,
        detailImage: [
          'https://i.ibb.co/SfvrCzR/accessories-11.jpg',
          'https://i.ibb.co/dB1Kx4s/accessories-2.jpg',
        ],
      },
      {
        id: 16,
        name: 'Wash Bag In Leather',
        imageUrl: 'https://i.ibb.co/4172TtP/accessories-15.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 569,
        detailImages: [
          'https://i.ibb.co/4172TtP/accessories-15.jpg',
          'https://i.ibb.co/dGf1ZWC/accessories-19.jpg',
        ],
      },
    ],
  },
];

export default SHOP_DATA;
