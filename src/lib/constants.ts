type TIndustryRecord = { name: string; description?: string; img: string };
export const INDUSTRIES: TIndustryRecord[] = [
  {
    name: "Banking & Financial Services",
    img: "/industries/Industries-banking.jpg",
  },
  {
    name: "Insurance",
    img: "/industries/Industries-insurance.jpg",
  },
  {
    name: "Healthcare & Life Sciences",
    img: "/industries/Industries-healthcare.jpg",
  },
  {
    name: "Technology, Media & Telecommunications (TMT)",
    img: "/industries/Industries-tech.jpg",
  },
  {
    name: "Public Sector & Government",
    img: "/industries/Industries-government.jpg",
  },
  {
    name: "Energy & Utilities",
    img: "/industries/Industries-energy.jpg",
  },
  {
    name: "Legal Services",
    img: "/industries/Industries-legal.jpg",
  },
  {
    name: "Real Estate & Construction",
    img: "/industries/Industries-real-estate.jpg",
  },
  {
    name: "Retail & Consumer Goods",
    img: "/industries/Industries-retail.jpg",
  },
  {
    name: "Hopitality & Leisure",
    img: "/industries/Industries-hospitality.jpg",
  },
  {
    name: "Education",
    img: "/industries/Industries-education.jpg",
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
