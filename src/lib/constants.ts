type TIndustryRecord = { name: string; description?: string; img: string };
export const INDUSTRIES: TIndustryRecord[] = [
  {
    name: "Banking & Financial Services",
    img: "/industries/Industries-banking.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Insurance",
    img: "/industries/Industries-insurance.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Healthcare & Life Sciences",
    img: "/industries/Industries-healthcare.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Technology, Media & Telecommunications (TMT)",
    img: "/industries/Industries-tech.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Public Sector & Government",
    img: "/industries/Industries-government.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Energy & Utilities",
    img: "/industries/Industries-energy.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Legal Services",
    img: "/industries/Industries-legal.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Real Estate & Construction",
    img: "/industries/Industries-real-estate.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Retail & Consumer Goods",
    img: "/industries/Industries-retail.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Hopitality & Leisure",
    img: "/industries/Industries-hospitality.jpg",
    description: "Advancing patient care and biological research",
  },
  {
    name: "Education",
    img: "/industries/Industries-education.jpg",
    description: "Advancing patient care and biological research",
  },
];

type ITrutedByRecord = { text: string; logoSrc: string };
export const TRUSTED_BY: ITrutedByRecord[] = [
  {
    text: "“Gaiant's team stepped in to review partially completed conversations between different models. We analyzed the search results, reference material, and model responses”.",
    logoSrc: "/industries/logo-1.svg",
  },
  {
    text: "“Gaiant automated processes like invoice reconciliation, W9 processing, claim approval letters, and compliance support, resulting in significant cost and time savings”.",
    logoSrc: "/industries/logo-2.svg",
  },
  {
    text: "“Gaiant’s team worked within the client's platform to review model conversations from the research team and assess the level of accuracy of the model responses”.",
    logoSrc: "/industries/logo-3.svg",
  },
  {
    text: "“Gaiant's team stepped in to review partially completed conversations between different models. We analyzed the search results, reference material, and model responses”.",
    logoSrc: "/industries/logo-4.svg",
  },
];

type IArticleRecord = { title: string; subtitle: string; imgSrc: string };
export const ARTICLES: IArticleRecord[] = [
  {
    title: "How AI is Reshaping Decision-Making Across Industries",
    subtitle: "GAIANT TEAM - SEP 19, 2025",
    imgSrc: "/blogs/blog-1.jpg",
  },
  {
    title: "From Hype to Help: Making AI Practical for Everyday Work",
    subtitle: "GAIANT TEAM - SEP 19, 2025",
    imgSrc: "/blogs/blog-2.jpg",
  },
  {
    title: "The Future of Efficiency: Why AI Is Your Next Teammate",
    subtitle: "GAIANT TEAM - SEP 19, 2025",
    imgSrc: "/blogs/blog-3.jpg",
  },
  {
    title: "How AI is Reshaping Decision-Making Across Industries",
    subtitle: "GAIANT TEAM - SEP 19, 2025",
    imgSrc: "/blogs/blog-4.jpg",
  },
];

type IRoleRecord = {
  title: string;
  text: string;
};
export const OPEN_ROLES: IRoleRecord[] = [
  {
    title: "Enterprise Solutions Associate",
    text: "(Beirut - Remote)",
  },
  {
    title: "Quality Manager",
    text: "(Beirut - Remote)",
  },
  {
    title: "SVP of Sales, Enterprise, Technology - Banking",
    text: "(Beirut - Remote)",
  },
  {
    title: "Director of Quality",
    text: "(Beirut - Remote)",
  },
  {
    title: "SVP of Sales, Enterprise, Technology - Healthcare",
    text: "(Beirut - Remote)",
  },
  {
    title: "Senior Front-End Engineer",
    text: "(Beirut - Remote)",
  },
  {
    title: "Procurement Analyst",
    text: "(Beirut - Remote)",
  },
  {
    title: "AI Data Trainer, Arabic",
    text: "(Beirut - Remote)",
  },
  {
    title: "Research Internship",
    text: "(Beirut - Remote)",
  },
];

export type TLinkRecord = {
  name: string;
  link: string;
  sublinks?: TLinkRecord[];
};
export const LINKS: TLinkRecord[] = [
  {
    name: "Products",
    link: "/arche",
    sublinks: [{ name: "Archē", link: "/arche" }],
  },
  {
    name: "Solutions",
    link: "/industries",
    sublinks: INDUSTRIES.map((industry, i) => {
      return { link: `/industries/${industry.name}`, name: industry.name };
    }),
  },
  {
    name: "Company",
    link: "/about",
    sublinks: [
      { name: "About", link: "/about" },
      { name: "News", link: "/news" },
      { name: "Careers", link: "/careers" },
    ],
  },
];
