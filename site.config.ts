import type { SiteConfig } from "@/lib/types";

const N = "Green Roots Tiffin & Catering Services";

export const site: SiteConfig = {
  name: N,
  tagline: "Affordable, home style Punjabi tiffin in Brampton, made with a mother's love.",
  category: "Punjabi tiffin and catering",
  schemaType: "FoodEstablishment",
  area: "Brampton, ON",
  siteUrl: "https://green-roots-tiffin.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#2f6b2f" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Punjabi tiffin in Brampton",
    headline: "Ghar wala khana, delivered",
    subhead: "Comforting Punjabi meals with a fresh menu every week, six days, six different flavours. DM or call 647-450-5921 to start your tiffin.",
    images: [
      { src: "/images/post-3.jpg", alt: "Homestyle Punjabi tiffin containers ready to go" },
      { src: "/images/post-1.jpg", alt: "This week's Punjabi tiffin menu" },
      { src: "/images/post-5.jpg", alt: "Fresh ingredients being prepared" },
    ],
    secondaryCta: { label: "Call 647-450-5921", href: "tel:+16474505921" },
  },

  highlights: ["Home style Punjabi meals", "New menu every week", "Free delivery options", "Order by DM or phone"],

  about: {
    title: "Made with care, served with love",
    body: [
      "We cook comforting, home style Punjabi food in Brampton, the kind of ghar varga khana that tastes like it came from your own kitchen. Every week brings a new six day menu, from creamy Matar Mushroom Malai and Palak Paneer to Kadhi Pakora, Rajma and stuffed Aloo Paratha.",
      "Students, truckers and busy families around Brampton count on us for an affordable daily tiffin. We also add a little sweetness each week, like Punjabi style meethe chawal made with grandma's recipe or Suji Wala Halwa, and we take catering orders too.",
    ],
    image: { src: "/images/post-7.jpg", alt: "Tiffins packed for delivery" },
  },

  menu: {
    title: "What we make",
    intro: "The menu changes every week. Here are some of the dishes our customers love.",
    variant: "list",
    showPrices: false,
    priceNote: "Call or DM us for tiffin plans and pricing.",
    groups: [
      {
        title: "Weekly tiffin favourites",
        items: [
          { name: "Matar Mushroom Malai", veg: true },
          { name: "Palak Paneer", veg: true },
          { name: "Kadhi Pakora", veg: true },
          { name: "Rajma", veg: true },
          { name: "Nutri granules sabzi", veg: true },
          { name: "Aloo Paratha", veg: true },
        ],
      },
      {
        title: "Sweet treats and more",
        items: [
          { name: "Meethe chawal", description: "Punjabi style sweet rice from grandma's recipe.", veg: true },
          { name: "Suji Wala Halwa", veg: true },
          { name: "Catering", description: "Home style Punjabi food for your gathering. Call or DM to plan." },
        ],
      },
    ],
  },

  gallery: {
    title: "From our kitchen",
    items: [
      { src: "/images/post-1.jpg", width: 1024, height: 1360, alt: "Weekly tiffin menu", caption: "This week's menu", href: "https://www.instagram.com/p/De9pVz2oaK4/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "Tiffin containers", caption: "Homemade tiffins", href: "https://www.instagram.com/p/DeXi_GWIM2v/" },
      { src: "/images/post-8.jpg", width: 1080, height: 720, alt: "Last week's menu", caption: "Six days, six flavours", href: "https://www.instagram.com/p/DeEzQNcopLV/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "Packed tiffins", caption: "Book for tomorrow", href: "https://www.instagram.com/p/DeE2q6uoWdd/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1349, alt: "Fresh vegetables and spices", caption: "Fresh every day", href: "https://www.instagram.com/p/DeXgQjRoUdQ/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1440, alt: "Weekly menu", caption: "Weekly menu", href: "https://www.instagram.com/p/Dd6-ipmI-Jz/" },
      { src: "/images/post-4.jpg", width: 640, height: 1136, alt: "Mushrooms being prepared", caption: "Made from scratch", href: "https://www.instagram.com/p/DeXiK94Ih77/" },
      { src: "/images/post-12.jpg", width: 900, height: 1600, alt: "Home cooked curry", caption: "Delivered to your door", href: "https://www.instagram.com/p/DDq4-WiO8aS/" },
    ],
  },

  instagram: {
    handle: "greenrootstiffinservices",
    embeds: ["https://www.instagram.com/p/De9pVz2oaK4/"],
    embedsTitle: "This week on our menu",
  },

  order: {
    title: "Start your tiffin",
    intro: "Send us a DM or give us a call at 647-450-5921. Call ahead to book your meal for tomorrow.",
    dmMessage: "Hi Green Roots! I would like to order a tiffin.\nStart date:\nNumber of meals or servings:\nFavourite dishes or spice level:\nDelivery area:\nCatering idea (if any):",
    links: [{ label: "Call 647-450-5921", href: "tel:+16474505921" }],
    note: "Free delivery options available.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send us a DM or call 647-450-5921. Call ahead to book your tiffin for tomorrow." },
    { q: "Does the menu change?", a: "Yes. We post a new six day menu every week, with a different dish each day and a weekly sweet treat." },
    { q: "Do you deliver?", a: "Yes, we offer free delivery options in Brampton. Message us with your area." },
    { q: "Do you do catering?", a: "Yes. Call or DM us to plan home style Punjabi food for your event." },
  ],

  contact: {
    area: "Brampton, Ontario",
    phone: "647-450-5921",
    socials: [],
  },

  seo: {
    title: "Green Roots Tiffin & Catering Services | Punjabi tiffin in Brampton",
    description: "Affordable home style Punjabi tiffin in Brampton with a new menu every week and free delivery options. Order by Instagram DM or call 647-450-5921.",
    keywords: ["Punjabi tiffin Brampton", "tiffin service Brampton", "home style meals Brampton", "student tiffin Brampton"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
