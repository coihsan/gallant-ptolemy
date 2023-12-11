export const NAVIGATION = [
  { href: "/", key: 0, title: "Home" },
  { href: "/pages/about", key: 1, title: "About Me" },
  { href: "/pages/projects", key: 2, title: "Projects" },
  { href: "/pages/blog", key: 2, title: "Blog" },
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

export const gallery = [
  {
    key: 0,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image1.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 1,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image2.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 2,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image3.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 3,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image4.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 4,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image5.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 5,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image6.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 6,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image7.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 7,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image8.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
  {
    key: 8,
    date: "09 Desember 2023",
    tag: "tag",
    src: "/image9.jpeg",
    alt: "image",
    title: "Lorem ipsum",
  },
];

export const projectslist = [
  {
    key: 0,
    projectName: "E-Commerce Website",
    projectType: "Web Development",
    url: "#",
    companyName: "Acme Corporation",
  },
  {
    key: 1,
    projectName: "Corporate Website",
    projectType: "Web Development",
    url: "#",
    companyName: "Khan INC",
  },
  {
    key: 2,
    projectName: "SaaS Platform",
    projectType: "Web Development",
    url: "#",
    companyName: "XYZ Software",
  },
  {
    key: 3,
    projectName: "SEO/SEM Campaign",
    projectType: "SEO/SEM",
    url: "#",
    companyName: "You Too Company",
  },
  {
    key: 4,
    projectName: "Intranet",
    projectType: "Web Development",
    url: "#",
    companyName: "Intranet Company",
  },
  {
    key: 5,
    projectName: "MyTravelBlog",
    projectType: "Personal Website",
    url: "#",
    companyName: "Personal Client",
  },
];
