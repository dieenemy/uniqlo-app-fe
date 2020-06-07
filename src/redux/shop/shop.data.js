const SHOP_DATA = {
  shoes: {
    id: 1,
    title: 'Shoes',
    routeName: 'shoes',
    items: [
      {
        id: 1,
        name: 'Basic contrast sneakers',
        imageUrl: 'https://i.ibb.co/0C9Brrv/shoes12.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 10,
        color: 'black',
        itemUrl: 'shop/shoes/basic-contrast-sneakers',
        detailImages: [
          'https://i.ibb.co/0C9Brrv/shoes12.jpg',
          'https://i.ibb.co/wYYjqhy/shoes12-1.jpg',
          'https://i.ibb.co/rGMMMCy/shoes-15.jpg',
        ],
      },
      {
        id: 2,
        name: 'Cen’s dress shoes',
        imageUrl: 'https://i.ibb.co/tQ1dV0Y/shoes-9.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 299,
        color: 'blue',
        itemUrl: 'shop/shoes/cens-dress-shoes',
        detailImages: [
          'https://i.ibb.co/tQ1dV0Y/shoes-9.jpg',
          'https://i.ibb.co/pZmkxjR/shoes-18.jpg',
          'https://i.ibb.co/GCH1cKz/shoes-11.jpg',
        ],
      },
      {
        id: 3,
        name: 'Ehearling-lined boot men',
        imageUrl: 'https://i.ibb.co/NVBwN0D/shoes13.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 159,
        color: 'grey',
        itemUrl: 'shop/ehearling-lined-boot-men',
        detailImages: [
          'https://i.ibb.co/NVBwN0D/shoes13.jpg',
          'https://i.ibb.co/vxWrbg9/shoes13-1.jpg',
        ],
      },
      {
        id: 4,
        name: 'Guilted ankle boots',
        imageUrl: 'https://i.ibb.co/LSYp1db/shoes-10.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 480,
        color: 'red',
        itemUrl: 'shop/shoes/guilted-ankle-boots',
        detailImages: [
          'https://i.ibb.co/LSYp1db/shoes-10.jpg',
          'https://i.ibb.co/3ym3ZgR/shoes-19.jpg',
          'https://i.ibb.co/tQ1dV0Y/shoes-9.jpg',
        ],
      },
      {
        id: 5,
        name: 'Hrim sports shoes',
        imageUrl: 'https://i.ibb.co/1zR3GGq/shoes-2.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 59,
        color: 'orange',
        itemUrl: 'shop/shoes/hrim-sports-shoes',
        detailImages: [
          'https://i.ibb.co/1zR3GGq/shoes-2.jpg',
          'https://i.ibb.co/GCH1cKz/shoes-11.jpg',
          'https://i.ibb.co/yn5g1wN/shoes-12.jpg',
        ],
      },
      {
        id: 6,
        name: 'Jontrast sports sneakers',
        imageUrl: 'https://i.ibb.co/GRbMmR2/shoes-7.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 333,
        color: 'black',
        itemUrl: 'shop/shoes/jontrast-sports-sneakers',
        detailImages: [
          'https://i.ibb.co/GRbMmR2/shoes-7.jpg',
          'https://i.ibb.co/WppG8zB/shoes-16.jpg',
        ],
      },
      {
        id: 7,
        name: 'Lntrast sports sneakers',
        imageUrl: 'https://i.ibb.co/5BzSgGQ/shoes-4.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 399,
        color: 'blue',
        itemUrl: 'shop/shoes/lntrast-sports-sneakers',
        detailImages: [
          'https://i.ibb.co/5BzSgGQ/shoes-4.jpg',
          'https://i.ibb.co/6tSDDfv/shoes-13.jpg',
        ],
      },
      {
        id: 8,
        name: 'Nuede minimal sneakers',
        imageUrl: 'https://i.ibb.co/C61pjPH/shoes-6.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 450,
        color: 'grey',
        itemUrl: 'shop/shoes/nuede-minimal-sneakers',
        detailImages: [
          'https://i.ibb.co/C61pjPH/shoes-6.jpg',
          'https://i.ibb.co/rGMMMCy/shoes-15.jpg',
        ],
      },
      {
        id: 9,
        name: 'Vuilted high tops',
        imageUrl: 'https://i.ibb.co/1GqFM6V/shoes-1.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 499,
        color: 'red',
        itemUrl: 'shop/shoes/vuilted-high-tops',
        detailImage: [
          'https://i.ibb.co/1GqFM6V/shoes-1.jpg',
          'https://i.ibb.co/CwgwgFb/shoes-20.jpg',
          'https://i.ibb.co/pZmkxjR/shoes-18.jpg',
        ],
      },
      {
        id: 10,
        name: 'You must have',
        imageUrl: 'https://i.ibb.co/CPxD5PB/shoes-3.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 199,
        color: 'orange',
        itemUrl: 'shop/shoes/you-must-have',
        detailImages: [
          'https://i.ibb.co/CPxD5PB/shoes-3.jpg',
          'https://i.ibb.co/yn5g1wN/shoes-12.jpg',
        ],
      },
    ],
  },
  bags: {
    id: 2,
    title: 'Bags',
    routeName: 'bags',
    items: [
      {
        id: 11,
        name: 'Backpack double strap',
        imageUrl: 'https://i.ibb.co/zsqDMrW/bag-25.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 15,
        color: 'black',
        itemUrl: 'shop/bags/nombined-strapped-backpack',
        detailImages: [
          'https://i.ibb.co/zsqDMrW/bag-25.jpg',
          'https://i.ibb.co/0f74JwZ/bag-21.jpg',
          'https://i.ibb.co/xJhgNCg/bag-26.jpg',
        ],
      },
      {
        id: 12,
        name: 'Clutch printed bag',
        imageUrl: 'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 67,
        color: 'blue',
        itemUrl: 'shop/bags/clutch-printed-bag',
        detailImages: [
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
          'https://i.ibb.co/HpqNFtS/bag-12.jpg',
          'https://i.ibb.co/dMhrJrx/bag-1.jpg',
        ],
      },
      {
        id: 13,
        name: 'Ethnic jacquard backpack',
        imageUrl: 'https://i.ibb.co/FqKnD8B/bag-8.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 310,
        color: 'grey',
        itemUrl: 'shop/bags/ethnic-jacquard-backpack',
        detailImages: [
          'https://i.ibb.co/FqKnD8B/bag-8.jpg',
          'https://i.ibb.co/yQrxDDv/bag-9.jpg',
          'https://i.ibb.co/r5p1zZk/bag-4.jpg',
        ],
      },
      {
        id: 14,
        name: 'Gamouflage print backpack',
        imageUrl: 'https://i.ibb.co/Bg3NtPb/bag-6.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 290,
        color: 'red',
        itemUrl: 'shop/bags/gamouflage-print-backpack',
        detailImages: [
          'https://i.ibb.co/Bg3NtPb/bag-6.jpg',
          'https://i.ibb.co/LRS9xnp/bag-15.jpg',
          'https://i.ibb.co/dMhrJrx/bag-1.jpg',
        ],
      },
      {
        id: 15,
        name: 'Houble strap backpack',
        imageUrl: 'https://i.ibb.co/JncgSmF/bag-19.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 563,
        color: 'orange',
        itemUrl: 'shop/bags/houble-strap-backpack',
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
        color: 'black',
        itemUrl: 'shop/bags/hylon-technical-backpack',
        detailImages: [
          'https://i.ibb.co/NprSQHs/bag-2.jpg',
          'https://i.ibb.co/3hKGntf/bag-11.jpg',
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        ],
      },
      {
        id: 17,
        name: 'Jacquard ethnic backpack',
        imageUrl: 'https://i.ibb.co/r5p1zZk/bag-4.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 260,
        color: 'blue',
        itemUrl: 'shop/bags//jacquard-ethnic-backpack',
        detailImages: [
          'https://i.ibb.co/r5p1zZk/bag-4.jpg',
          'https://i.ibb.co/gDF2zrZ/bag-13.jpg',
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        ],
      },
      {
        id: 18,
        name: 'Nombined strapped backpack',
        imageUrl: 'https://i.ibb.co/xJhgNCg/bag-26.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 54,
        color: 'grey',
        itemUrl: 'shop/bags/nombined-strapped-backpack',
        detailImages: [
          'https://i.ibb.co/dMhrJrx/bag-1.jpg',
          'https://i.ibb.co/RHcgVKD/bag-17.jpg',
          'https://i.ibb.co/YkzBBm9/bag-3.jpg',
        ],
      },
      {
        id: 19,
        name: 'Vintage cinch backpack',
        imageUrl: 'https://i.ibb.co/0sqv2wk/bag-24.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 560,
        color: 'red',
        itemUrl: 'shop/bags/vintage-cinch-backpack',
        detailImage: [
          'https://i.ibb.co/0sqv2wk/bag-24.jpg',
          'https://i.ibb.co/948qYR2/bag-20.jpg',
          'https://i.ibb.co/JncgSmF/bag-19.jpg',
        ],
      },
      {
        id: 20,
        name: 'Lintage cinch backpack',
        imageUrl: 'https://i.ibb.co/xJhgNCg/bag-26.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 447,
        color: 'orange',
        itemUrl: 'shop/bags/lintage-cinch-backpack',
        detailImages: [
          'https://i.ibb.co/xJhgNCg/bag-26.jpg',
          'https://i.ibb.co/M8qhDsy/bag-22.jpg',
          'https://i.ibb.co/r5p1zZk/bag-4.jpg',
        ],
      },
    ],
  },
  watches: {
    id: 3,
    title: 'Watches',
    routeName: 'watches',
    items: [
      {
        id: 21,
        name: 'Bold metallic watch',
        imageUrl: 'https://i.ibb.co/yfxr1sC/watches-2.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 100,
        color: 'black',
        itemUrl: 'shop/watchs/bold-metallic-watch',
        detailImages: [
          'https://i.ibb.co/yfxr1sC/watches-2.jpg',
          'https://i.ibb.co/gjWLfxB/watches-13.jpg',
        ],
      },
      {
        id: 22,
        name: 'Ctrap face sphere watch',
        imageUrl: 'https://i.ibb.co/QH4G5m2/watches-11.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 55,
        color: 'blue',
        itemUrl: 'shop/watchs/ctrap-face-sphere-watch',
        detailImages: [
          'https://i.ibb.co/QH4G5m2/watches-11.jpg',
          'https://i.ibb.co/b1y0xhL/watches-22.jpg',
        ],
      },
      {
        id: 23,
        name: 'Eart metallic watch',
        imageUrl: 'https://i.ibb.co/0FrMbN0/watches-5.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 179,
        color: 'grey',
        itemUrl: 'shop/watchs/eart-metallic-watch',
        detailImages: [
          'https://i.ibb.co/0FrMbN0/watches-5.jpg',
          'https://i.ibb.co/JQPDhjj/watches-16.jpg',
        ],
      },
      {
        id: 24,
        name: 'Gabric band watch',
        imageUrl: 'https://i.ibb.co/PwTTh7Y/watches-8.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 229,
        color: 'red',
        itemUrl: 'shop/watchs/gabric-band-watch',
        detailImages: [
          'https://i.ibb.co/PwTTh7Y/watches-8.jpg',
          'https://i.ibb.co/rGPN9Zj/watches-19.jpg',
        ],
      },
      {
        id: 25,
        name: 'Hubber watch',
        imageUrl: 'https://i.ibb.co/d4ctp4n/watches-10.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 299,
        color: 'orange',
        itemUrl: 'shop/watchs/hubber-watch',
        detailImages: [
          'https://i.ibb.co/d4ctp4n/watches-10.jpg',
          'https://i.ibb.co/6vfWkpm/watches-21.jpg',
        ],
      },
      {
        id: 26,
        name: 'Jasic rubber watch',
        imageUrl: 'https://i.ibb.co/rm0cJk8/watches-3.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 333,
        color: 'black',
        itemUrl: 'shop/watchs/jasic-rubber-watch',
        detailImages: [
          'https://i.ibb.co/rm0cJk8/watches-3.jpg',
          'https://i.ibb.co/4780rff/watches-14.jpg',
        ],
      },
      {
        id: 27,
        name: 'Lasic rubber watch',
        imageUrl: 'https://i.ibb.co/khQkRMY/watches-4.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 389,
        color: 'blue',
        itemUrl: 'shop/watchs/lasic-rubber-watch',
        detailImages: [
          'https://i.ibb.co/khQkRMY/watches-4.jpg',
          'https://i.ibb.co/dccrx2S/watches-15.jpg',
        ],
      },
      {
        id: 28,
        name: 'Lens great watches',
        imageUrl: 'https://i.ibb.co/5GNk36R/watches-7.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 579,
        color: 'grey',
        itemUrl: 'shop/watchs/lens-great-watches',
        detailImages: [
          'https://i.ibb.co/5GNk36R/watches-7.jpg',
          'https://i.ibb.co/0ZLyZzK/watches-18.jpg',
        ],
      },
      {
        id: 29,
        name: 'Nimited edition watches',
        imageUrl: 'https://i.ibb.co/C2V4XKg/watches-1.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 439,
        color: 'red',
        itemUrl: 'shop/watchs/nimited-edition-watches',
        detailImage: [
          'https://i.ibb.co/C2V4XKg/watches-1.jpg',
          'https://i.ibb.co/TWFNLYz/watches-12.jpg',
        ],
      },
      {
        id: 30,
        name: 'Vetallic body watches',
        imageUrl: 'https://i.ibb.co/wKM0b3m/watches-6.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 499,
        color: 'orange',
        itemUrl: 'shop/watchs/vetallic-body-watches',
        detailImages: [
          'https://i.ibb.co/wKM0b3m/watches-6.jpg',
          'https://i.ibb.co/q5bRw8V/watches-17.jpg',
        ],
      },
    ],
  },
  accessories: {
    id: 4,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 31,
        name: 'Before decaf phone case',
        imageUrl: 'https://i.ibb.co/4WKV4jS/accessories-22.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 49,
        color: 'black',
        itemUrl: 'shop/accessories/before-decaf-phone-case',
        detailImages: [
          'https://i.ibb.co/4WKV4jS/accessories-22.jpg',
          'https://i.ibb.co/JqtX1B3/extra-product-12-1.jpg',
          'https://i.ibb.co/VWCjK6D/accessories-21.jpg',
        ],
      },
      {
        id: 32,
        name: 'Black umbrella in handle',
        imageUrl: 'https://i.ibb.co/1XprJg3/accessories-18.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 99,
        color: 'blue',
        itemUrl: 'shop/accessories/black-umbrella-in-handle',
        detailImages: [
          'https://i.ibb.co/1XprJg3/accessories-18.jpg',
          'https://i.ibb.co/hBVYL2y/accessories-14.jpg',
        ],
      },
      {
        id: 33,
        name: 'Classic Square Buckle Belt',
        imageUrl: 'https://i.ibb.co/mv41bR0/accessories-16.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 115,
        color: 'grey',
        itemUrl: 'shop/accessories/classic-square-buckle-belt',
        detailImages: [
          'https://i.ibb.co/mv41bR0/accessories-16.jpg',
          'https://i.ibb.co/QpsfttP/accessories-5.jpg',
          'https://i.ibb.co/pL1z8LS/accessories-7.jpg',
        ],
      },
      {
        id: 34,
        name: 'Eingerless gloves in camel',
        imageUrl: 'https://i.ibb.co/5KgM1pv/accessories-23.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 390,
        color: 'red',
        itemUrl: 'shop/accessories/london-ampersand-cushion',
        detailImages: [
          'https://i.ibb.co/5KgM1pv/accessories-23.jpg',
          'https://i.ibb.co/kGHGF4m/accessories-241.jpg',
        ],
      },
      {
        id: 35,
        name: 'Esprit leather belt',
        imageUrl: 'https://i.ibb.co/pL1z8LS/accessories-7.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 115,
        color: 'orange',
        itemUrl: 'shop/accessories/esprit-leather-belt',
        detailImages: [
          'https://i.ibb.co/pL1z8LS/accessories-7.jpg',
          'https://i.ibb.co/178P02x/accessories-1.jpg',
          ' https://i.ibb.co/QpsfttP/accessories-5.jpg',
        ],
      },
      {
        id: 36,
        name: 'Gloves selected ribbed',
        imageUrl: 'https://i.ibb.co/QYRNXx6/accessories-8.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 280,
        color: 'black',
        itemUrl: 'shop/accessories/gloves-selected-ribbed',
        detailImages: [
          'https://i.ibb.co/QYRNXx6/accessories-8.jpg',
          'https://i.ibb.co/qWscf4q/accessories-20.jpg',
          'https://i.ibb.co/Qpdkp1X/accessories-17.jpg',
        ],
      },
      {
        id: 37,
        name: 'Hlen lossie cashmere',
        imageUrl: 'https://i.ibb.co/02YtyVM/accessories-10.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 260,
        color: 'blue',
        itemUrl: 'shop/accessories/hlen-lossie-cashmere',
        detailImages: [
          'https://i.ibb.co/02YtyVM/accessories-10.jpg',
          'https://i.ibb.co/yB7K9qR/accessories-6.jpg',
          'https://i.ibb.co/SfvrCzR/accessories-11.jpg',
        ],
      },
      {
        id: 38,
        name: 'London ampersand cushion',
        imageUrl: 'https://i.ibb.co/F3L70rC/accessories-9.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 210,
        color: 'grey',
        itemUrl: 'shop/accessories/eingerless-gloves-in-camel',
        detailImages: [
          'https://i.ibb.co/F3L70rC/accessories-9.jpg',
          'https://i.ibb.co/Qpdkp1X/accessories-17.jpg',
          'https://i.ibb.co/QYRNXx6/accessories-8.jpg',
        ],
      },
      {
        id: 39,
        name: 'Vable scarf in burgundy',
        imageUrl: 'https://i.ibb.co/SfvrCzR/accessories-11.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 258,
        color: 'red',
        itemUrl: 'shop/accessories/vable-scarf-in-burgundy',
        detailImage: [
          'https://i.ibb.co/SfvrCzR/accessories-11.jpg',
          'https://i.ibb.co/dB1Kx4s/accessories-2.jpg',
        ],
      },
      {
        id: 40,
        name: 'Wash Bag In Leather',
        imageUrl: 'https://i.ibb.co/4172TtP/accessories-15.jpg',
        description:
          'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet…',
        price: 569,
        color: 'orange',
        itemUrl: 'shop/accessories/wash-bag-in-leather',
        detailImages: [
          'https://i.ibb.co/4172TtP/accessories-15.jpg',
          'https://i.ibb.co/dGf1ZWC/accessories-19.jpg',
        ],
      },
    ],
  },
};

export default SHOP_DATA;
