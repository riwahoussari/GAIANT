import TransparencyAnimation from "../assets/animations/transparency.mp4";
import AdaptabilityAnimation from "../assets/animations/adaptability.mp4";
import CustomizationAnimation from "../assets/animations/customization.mp4";
import DeploymentAnimation from "../assets/animations/deployment.mp4";

export const GENERAL_DATA = {
  PARTNERS: [
    {
      text: "“Gaiant's team stepped in to review partially completed conversations between different models. We analyzed the search results, reference material, and model responses”.",
      logoSrc: "/partners/partner-1.svg",
    },
    {
      text: "“Gaiant automated processes like invoice reconciliation, W9 processing, claim approval letters, and compliance support, resulting in significant cost and time savings”.",
      logoSrc: "/partners/partner-2.svg",
    },
    {
      text: "“Gaiant’s team worked within the client's platform to review model conversations from the research team and assess the level of accuracy of the model responses”.",
      logoSrc: "/partners/partner-3.svg",
    },
    {
      text: "“Gaiant's team stepped in to review partially completed conversations between different models. We analyzed the search results, reference material, and model responses”.",
      logoSrc: "/partners/partner-4.svg",
    },
  ],

  INDUSTRIES: [
    {
      name: "Banking & Financial Services",
      img: "/industries/banking.webp",
      description:
        "Powering credit decisioning, anti-money laundering, and hyper-personalized customer journeys",
    },
    {
      name: "Public Sector & Government",
      img: "/industries/government.webp",
      description:
        "Digitizing citizen services, automating compliance, and enabling data-driven policy",
    },
    {
      name: "Retail & Consumer Goods",
      img: "/industries/retail.webp",
      description:
        "Predicting inventory demand, personalizing at scale, and optimizing supply chain end-to-end",
    },
    {
      name: "Insurance",
      img: "/industries/insurance.webp",
      description:
        "Automating claims adjudication, detecting fraud in real time, and pricing risk with precision",
    },
    {
      name: "Energy & Utilities",
      img: "/industries/energy.webp",
      description:
        "Predicting grid failures, balancing load in real time, and accelerating the energy transition",
    },
    {
      name: "Hopitality & Leisure",
      img: "/industries/hospitality.webp",
      description:
        "Dynamic pricing, intelligent guest personalization, and operational efficiency across properties",
    },
    {
      name: "Healthcare & Life Sciences",
      img: "/industries/healthcare.webp",
      description: "Advancing patient care and biological research",
    },
    {
      name: "Legal Services",
      img: "/industries/legal.webp",
      description:
        "Automating contract analysis, accelerating due diligence, and de-risking litigation strategy",
    },
    {
      name: "Education",
      img: "/industries/education.webp",
      description:
        "Personalizing learning pathways, predicting student outcomes, and automating administrative burden",
    },
    {
      name: "Technology, Media & Telecommunications (TMT)",
      img: "/industries/tech.webp",
      description:
        "Reducing churn, optimizing network performance, and monetizing content intelligently",
    },
    {
      name: "Real Estate & Construction",
      img: "/industries/real-estate.webp",
      description:
        "Forecasting project timelines, optimizing procurement, and reducing cost overruns before they happen",
    },
  ],

  ARTICLES: [
    {
      title: "How AI is Reshaping Decision-Making Across Industries",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-1.webp",
    },
    {
      title: "From Hype to Help: Making AI Practical for Everyday Work",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-2.webp",
    },
    {
      title: "The Future of Efficiency: Why AI Is Your Next Teammate",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-3.webp",
    },
    {
      title: "How AI is Reshaping Decision-Making Across Industries",
      subtitle: "GAIANT TEAM - SEP 19, 2025",
      imgSrc: "/blogs/blog-4.webp",
    },
  ],
};

export const LANDING_PAGE_DATA = {
  HERO: {
    title: "Accelerating <br> Enterprise Intelligence ",
    // <bold> tag should not have any spaces between it and the text it encloses, and should not have a <br> inside it.
    text: "Gaiant is where AI becomes infrastructure, built around how <bold>your<bold> enterprise actually operates.",
    img1: {
      src: "/demos/patient-history-dashboard.svg",
      alt: "Image of Pateint History Dashboard",
    },
    img2: {
      src: "/images/team-smiling.webp",
      alt: "A team smiling and working together",
    },
  },

  WHAT_MAKES_US_DIFFERENT: {
    title: "AI that’s less A and more I",
    subtitle: "WHAT MAKES US DIFFERENT",
    text: [
      "We get right what others overcomplicate.",
      "Most AI fails not because of the technology but because it's built around the system, not the human. ",
      "Enterprises deploy tools that demand adaptation, force workarounds, and collapse under real-world pressure.",
      "Gaiant works differently. We engineer AI that maps to how your business actually operates not how a vendor imagines it should.",
      "Bespoke systems. Intelligent infrastructure. Built with you, not bolted on.",
    ],
    cards: [
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage.",
        animation: TransparencyAnimation,
      },
      {
        title: "Adaptability",
        subtitle: "WE BUILD AI THAT EVOLVES WITH YOU.",
        text: "Systems designed to learn, shift, and scale as your business does.",
        animation: AdaptabilityAnimation,
      },
      {
        title: "Cutomization",
        subtitle: "WE BUILD AI AROUND YOUR REALITY.",
        text: "Tailored solutions shaped by how your enterprise actually works.",
        animation: CustomizationAnimation,
      },
      {
        title: "Deployment",
        subtitle: "WE BUILD AI THAT LIVES WHERE YOU NEED IT.",
        text: "On-premises. Cloud. Hybrid. <br>Wherever your data lives, we deploy.",
        animation: DeploymentAnimation,
      },
    ],
  },

  INDUSTRIES_WE_EMPOWER: {
    subtitle: "TAILORED TO EVERY SECTOR",
    title: "Industries We Empower",
  },

  TOOLS: {
    title: "Works seamlessly with the tools you already use",
    subtitle: "PART OF YOUR WORKFLOW",
  },

  ARCHE_SECTION: {
    title: "Your enterprise brain. One place to ask, act, and build.",
    text: "From scattered systems to unified intelligence, <br>Archē unifies it all so progress feels effortless.",
    img: { src: "/demos/ai-chat-demo.svg", alt: "AI chatbot dashboard" },
  },

  WHAT_THIS_MEANS: {
    title: "What this means for you",
    subtitle: "REDEFINING YOUR WORK DAY",
    img: { src: "/demos/ai-chat-demo-2.svg", alt: "Ai workflow Demo" },
    accordionContent: [
      {
        title: "For your work",
        subtitle: "WHERE WE MAKE A DIFFERENCE",
        list: [
          "Turns complex data into clear, actionable insights",
          "Adapts to the tools and systems you already use",
          "Supports collaboration across teams and departments",
          "One unified workspace for everyone",
        ],
      },
      {
        title: "For your time",
        subtitle: "WHERE WE MAKE A DIFFERENCE",
        list: [
          "Eliminates the hunt, answers surface in seconds, not hours",
          "Automates repetitive workflows so you focus on what matters",
          "Hours saved daily by eliminating tool fragmentation",
          "Keeps everything searchable, organized, and at your fingertips",
        ],
      },
      {
        title: "For your results",
        subtitle: "WHERE WE MAKE A DIFFERENCE",
        list: [
          "Decisions backed by real-time, company-wide intelligence",
          "Fewer errors, faster approvals, tighter execution",
          "One source of truth across every department",
          "Momentum that compounds. The more you use it, the smarter it gets",
        ],
      },
    ],
  },
};

export const ARCHE_PAGE_DATA = {
  HERO: {
    title: "AI for business that turns complexity into clarity",
    subtitle: "ARCHĒ",
    text: "Archē sets the standard for business performance by helping teams automate work and accelerate decisions that drive results — all in one scalable, secure workspace.",
  },

  THE_ARCHE_MODEL: {
    title: "More mindspace, <br> less mayhem",
    subtitle: "THE ARCHĒ MODEL",
    text: "No matter the industry, Archē handles the repetitive work so your people can focus on the big picture.",
    img1: {
      src: "/images/woman-on-laptop.webp",
      alt: "A woman working on her laptop",
    },
    img2: {
      src: "/images/watered-leaf.webp",
      alt: "A green true leaf with drops of water",
    },
  },

  ACCELERATE_IMPACT: {
    title: "Accelerate impact <br> and outcomes",
    subtitle: "",
    text: "Enable seamless human-agent collaboration, automate routine tasks, and transform fragmented data into actionable insights.",
    cards: [
      {
        subtitle: "ADVANCED SEARCH & RETRIEVAL",
        title: "Discover",
        text: "From basic Q&A to complex decision making, Archē surfaces verifiable insights grounded in your data.",
        img: {
          src: "/demos/patient-history-dashboard-beige.svg",
          alt: "Image of the Patient History Dashboard",
        },
      },
      {
        subtitle: "GENERATIVE AI",
        title: "Create",
        text: "Co-create documents, generate summaries, and produce tables and charts instantly.",
        img: {
          src: "/demos/ai-chat-demo-3.svg",
          alt: "Image of the Patient History Dashboard",
        },
      },
      {
        subtitle: "WORKFLOW AUTOMATION",
        title: "Discover",
        text: "Deploy AI agents across teams to eliminate tedious tasks and accelerate complex workflows.",
        img: {
          src: "/demos/ai-chat-demo-2.svg",
          alt: "Image of the Patient History Dashboard",
        },
      },
    ],
  },

  ARCHE_INDUSTRIES: {
    title: "Make AI work for you",
    text: "No matter the role or industry, Archē handles the repetitive work so your people can focus on the big picture",
    tabs: ["Vault", "Legal", "Sales", "Finance", "Operations", "HR"],
  },
};

export const INDUSTRIES_PAGE_DATA = {
  HERO: {
    subtitle: "INDUSTRIES",
    title: "Solutions designed <sm:br> for any industry need",
    text: "Every organization faces unique challenges. <br> Our AI adapts, scales, and delivers value across fields — streamlining operations and enabling smarter decisions, all while fitting the way you work.",
  },

  TESTIMONIALS_SECTION: {
    title: "Hear from our customers",
    text: "Industry leaders trust Gaiant to deliver better customer experiences",
    testimonials: [
      {
        text: "“Gaiant transformed how we work — reports that used to take days now take minutes. Accuracy is solid, integrations were painless, and our team actually trusts the insights. ROI within two months.”",
        name: "Maya Hage",
        title: "Head of Operations, NovaHealth",
        image: "/images/woman-profile.webp",
      },
      {
        text: "“Since implementing Gaiant, our support response time dropped by 50%. The automation and AI suggestions are game-changers. Our customers notice the difference.”",
        name: "Jordan Lee",
        title: "Customer Experience Manager, BrightCom",
        image: "/images/woman-profile.webp",
      },
      {
        text: "“We tried multiple tools before, but none were as seamless and insightful as Gaiant. It adapts to our workflow and delivers exactly what we need — effortlessly.”",
        name: "Ava Patel",
        title: "Operations Director, FinSight",
        image: "/images/woman-profile.webp",
      },
    ],
  },
};

export const INDUSTRY_PAGE_DATA = {
  HERO: {
    title: "AI for faster decisions <sm:br> and lower risk",
    subtitle: "BANKING & FINANCIAL SERVICES",
    text: "Speed decision-making, detect fraud, and automate reporting with secure, scalable AI — cutting costs while surfacing high-value insights.",
  },

  FEATURES_SECTION: {
    title: "Smarter moves with fewer resources",
    subtitle: "TRUSTED BY FINANCIAL LEADERS",
    text: "AI often adds people and process. Done right, it finds fraud, streamlines ops, and makes services human — real impact without the extra overhead.",
    img1: {
      src: "/images/man-on-laptop.webp",
      alt: "A man in a suit working on his laptop",
    },
    img2: { src: "/demos/ai-prompt.svg", alt: "" },
    accordionContent: [
      {
        title: "Improve knowledge management",
        subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
        list: [
          "Detect fraud and protect sensitive data",
          "Automate reporting with precision and speed",
          "Ensure compliance across every transaction",
          "Deliver clear insights for smarter decisions",
        ],
      },
      {
        title: "Reduce busywork",
        subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
        list: [
          "Detect fraud and protect sensitive data",
          "Automate reporting with precision and speed",
          "Ensure compliance across every transaction",
          "Deliver clear insights for smarter decisions",
        ],
      },
      {
        title: "Automate common support tickets",
        subtitle: "STRENGTHEM TRUST AND EFFICIENCY",
        list: [
          "Detect fraud and protect sensitive data",
          "Automate reporting with precision and speed",
          "Ensure compliance across every transaction",
          "Deliver clear insights for smarter decisions",
        ],
      },
    ],
  },

  USE_CASES: {
    title: "Use Cases",
    subtitle: "BANKING & FINANCIAL SERVICES",
    text: "See how leading firms are streamlining operations and scaling insight.",
    cards: [
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
      {
        title: "Transparency",
        subtitle: "WE BUILD AI YOU CAN TRUST.",
        text: "Clear processes, explainable outcomes, and full visibility at every stage",
      },
    ],
  },

  OUR_APPROACH: {
    title: "Our Approach",
    subtitle: "SYSTEMS THAT FIT, NOT FORCE",
    text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
    img: {
      src: "/images/video-screenshot.webp",
      alt: "screenshot of a videoplayer",
    },
  },
};

export const ABOUT_PAGE_DATA = {
  HERO: {
    title: "Working for you, <sm:br> not instead of you.",
    subtitle: "WHO WE ARE",
    text: "Gaiant is the MENA region's AI powerhouse engineering bespoke systems and proprietary products that become the foundation for how businesses think, operate, and scale.",
  },

  OUR_STORY: {
    subtitle: "OUR STORY",
    title:
      "We exist because powerful technology should feel simple to the people who use it.",
    text: "We believe AI should eliminate friction, not create it. Most AI fails not because of the technology, but because it's built without the human at the center. Enterprises are handed tools that demand adaptation, force compromise, and fracture under real-world pressure <br> <br> We took a different path. <br> <br> Gaiant engineers bespoke AI systems, designed from the inside out, built around how organizations actually operate, and deployed to create lasting advantage. Not experiments and trends. Infrastructure. <br> <br> We believe AI should disappear into the way work works. Quietly. Precisely. At scale. The enterprises that win won't be the ones talking about AI. They'll be the ones that no longer need to.",
  },

  OUR_MISSION: {
    title: "We’re on a mission",
    subtitle: "OUR ETHOS",
    cards: [
      {
        title: "We’re driven by cutting edge research",
        subtitle: "SHAPING THE FUTURE",
        text: "Unifying research and product to pioneer human-level intelligent technology.",
      },
      {
        title: "We’re a collaborative team of experts",
        subtitle: "DRIVEN BY HUMAN INGENUITY",
        text: "Engineers, researchers, and builders united by one goal, engineering intelligence that matters.",
      },
      {
        title: "We're engineering intelligence for MENA",
        subtitle: "BY THE REGION, FOR THE REGION",
        text: "AI built with local context, local expertise, and a deep understanding of how business moves here.",
      },
    ],
  },
};

export const CAREERS_PAGE_DATA = {
  HERO: {
    title: "Work with us, change business forever",
    subtitle: "WORKING AT GAIANT",
    text: "Join a team of thinkers and doers pushing the boundaries to reshape what's possible.",
  },

  LIFE_AT_GAIANT: {
    title: "Life At Gaiant",
    subtitle: "WHAT SHOULD YOU EXPECT?",
    cards: [
      {
        title: "A mission with meaning",
        subtitle: "SHAPE THE FUTURE OF LANGUAGE INTELLIGENCE",
        text: "Every project contributes to redefining how businesses understand people.",
      },
      {
        title: "A team that listens",
        subtitle: "COLLABORATION ROOTED IN TRUST AND RESPECT",
        text: "Your ideas guide decisions in a culture of open dialogue.",
      },
      {
        title: "A place to grow",
        subtitle: "CONTINUOUS LEARNING, MENTORSHIP & CAREER EVOLUTION",
        text: "We invest in your growth with guidance, opportunities, and freedom.",
      },
    ],
  },

  DO_YOU_FIT: {
    subtitle: "DO YOU FIT?",
    title:
      "We want Gaiant to be the place where everyone does the best work of their career.",
    text: " So we make thoughtful decisions about how we work, the perks we provide, and how we create a diverse and inclusive work environment. We also foster technical creativity and innovation through internal hackathons, demos, tech talks, and achievement recognition programs that form a cornerstone of our culture at Gaiant. <br> <br> Join us and work alongside some of the world’s best talent from the likes of Apple, Meta AI, Amazon and Google Brain, as well as full-time staff adjunct professors from Stanford, Oxford, University of Toronto, and UCL London.",
  },

  WHATS_IN_IT_FOR_YOU: {
    title: "What's in it for you?",
    subtitle: "PERKS AND BENEFITS",
    img: {
      src: "/images/man-in-online-meeting.webp",
      alt: "A man in an online meeting",
    },
    accordionContent: [
      {
        title: "Work Flexibility",
        subtitle: "ON YOUR OWN TERMS",
        list: [
          "We proudly support a remote work culture worldwide",
          "We offer centralized hubs to give teams a place to meet and innovate",
          "We respect that life gets busy – no penalties or apologies ",
          "Quality work matters most, whether it’s from a desk or the Bahamas",
        ],
      },
      {
        title: "Bonuses and Equity",
        subtitle: "ON YOUR OWN TERMS",
        list: [
          "We proudly support a remote work culture worldwide",
          "We offer centralized hubs to give teams a place to meet and innovate",
          "We respect that life gets busy – no penalties or apologies ",
          "Quality work matters most, whether it’s from a desk or the Bahamas",
        ],
      },
      {
        title: "Health Coverage",
        subtitle: "ON YOUR OWN TERMS",
        list: [
          "We proudly support a remote work culture worldwide",
          "We offer centralized hubs to give teams a place to meet and innovate",
          "We respect that life gets busy – no penalties or apologies ",
          "Quality work matters most, whether it’s from a desk or the Bahamas",
        ],
      },
    ],
  },

  OPEN_ROLES: {
    title: "Open roles at Gaiant",
    cards: [
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
    ],
  },
};

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
    sublinks: GENERAL_DATA.INDUSTRIES.map((industry) => {
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
