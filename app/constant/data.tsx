export const NAVIGATION = [
  { href: "/", key: 0, title: "Home" },
  { href: "/pages/about", key: 1, title: "About Me" },
  { href: "/pages/projects", key: 2, title: "Projects" },
  { href: "/pages/gallery", key: 3, title: "Photos" },
];

export const personaldata: {
  key: number;
  fullName: string;
  nickName: string;
  age: number;
  skills: string[];
  hobby: string[];
  location: string;
  experties: string[];
  contact: number;
}[] = [
  {
    key: 0,
    fullName: "Bobby Brown",
    nickName: "Bobby",
    age: 35,
    hobby: ["Travelling", "Reading", "Coding", "Design", "Writing"],
    skills: ["Web Development", "UI/UX", "SEM", "SEO"],
    location: "Kota Tangerang",
    experties: [
      "I build sales growth through digital marketing activities.",
      "I increase website traffic 🚀 in Google Search with SEO optimization.",
      "I build high-converting landing pages for promotions and product launches.",
      "I'm passionate about traveling ✈️ and photography 📸.",
      "I'm based in Tangerang City, Indonesia 🇮🇩.",
    ],
    contact: 812345678910,
  },
];
