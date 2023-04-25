const items = [
  {
    sys: { id: 0 },
    fields: {
      title: "Women ",
      price: 10,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,
      image: { fields: { file: { url: "img/product-0.png" } } },
      freeShipping: true,
    },
  },
  {
    sys: { id: 1 },

    fields: {
      title: "Women ",
      price: 20,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-1.png" } } },
      freeShipping: false,
    },
  },
  {
    sys: { id: 2 },

    fields: {
      title: "Watch",
      price: 30,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-2.png" } } },
      freeShipping: true,
    },
  },
  {
    sys: { id: 3 },

    fields: {
      title: "Suit",
      price: 15,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-3.png" } } },
      freeShipping: false,
    },
  },
  {
    sys: { id: 4 },

    fields: {
      title: "Women",
      price: 45,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-4.png" } } },
      freeShipping: true,
    },
  },
  {
    sys: { id: 5 },

    fields: {
      title: "Women",
      price: 55,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-5.png" } } },
      freeShipping: false,
    },
  },

  {
    sys: { id: 6 },

    fields: {
      title: "Dress",
      price: 90,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,

      image: { fields: { file: { url: "img/product-6.png" } } },
      freeShipping: true,
    },
  },
  {
    sys: { id: 7 },

    fields: {
      title: "Men",
      price: 120,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-7.png" } } },
      freeShipping: false,
    },
  },
  {
    sys: { id: 8 },

    fields: {
      title: "Men",
      price: 55,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-8.png" } } },
      freeShipping: true,
    },
  },
  {
    sys: { id: 9 },

    fields: {
      title: "Men",
      price: 35,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: true,

      image: { fields: { file: { url: "img/product-9.png" } } },
      freeShipping: false,
    },
  },
  {
    sys: { id: 10 },

    fields: {
      title: "Men",
      price: 75,
      company: "Lorem Ipsuttiry. ",
      description:
        "Shaman hexagon fam activated charcoal literally cardigan. Pitchfork YOLO man bun hella. Trust fund vexillologist squid put a bird on it man braid, selvage pug. Schlitz kombucha chillwave pug shabby chic cornhole. Try-hard four loko listicle yuccie kitsch small batch narwhal celiac selfies distillery cloud bread farm-to-table art party leggings glossier.",
      featured: false,

      image: { fields: { file: { url: "img/product-10.png" } } },
      freeShipping: true,
    },
  },
  {
    sys: { id: 11 },

    fields: {
      title: "Men",
      price: 110,
      company: "Lorem Ipsuttiry. ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      featured: false,
      image: { fields: { file: { url: "img/product-11.png" } } },
      freeShipping: false,
    },
  },
  {
    sys: { id: 12 },

    fields: {
      title: "Men",
      price: 28,
      company: "Lorem Ipsuttiry. ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      featured: false,
      image: { fields: { file: { url: "img/product-12.png" } } },
      freeShipping: true,
    },
  },
];

export default items;
