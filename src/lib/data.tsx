import TransparencyAnimation from "../assets/animations/transparency.mp4";
import AdaptabilityAnimation from "../assets/animations/adaptability.mp4";
import CustomizationAnimation from "../assets/animations/customization.mp4";
import DeploymentAnimation from "../assets/animations/deployment.mp4";
import type { TAccordionContent } from "../components/sections/AccordionSection";

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
      id: "banking-and-financial-services",
      name: "Banking & Financial Services",
      img: "/industries/banking.webp",
      description:
        "Powering credit decisioning, anti-money laundering, and hyper-personalized customer journeys",
    },
    {
      id: "public-sector-and-government",
      name: "Public Sector & Government",
      img: "/industries/government.webp",
      description:
        "Digitizing citizen services, automating compliance, and enabling data-driven policy",
    },
    {
      id: "retail-and-consumer-goods",
      name: "Retail & Consumer Goods",
      img: "/industries/retail.webp",
      description:
        "Predicting inventory demand, personalizing at scale, and optimizing supply chain end-to-end",
    },
    {
      id: "insurance",
      name: "Insurance",
      img: "/industries/insurance.webp",
      description:
        "Automating claims adjudication, detecting fraud in real time, and pricing risk with precision",
    },
    {
      id: "energy-and-utilities",
      name: "Energy & Utilities",
      img: "/industries/energy.webp",
      description:
        "Predicting grid failures, balancing load in real time, and accelerating the energy transition",
    },
    {
      id: "hospitality-and-leisure",
      name: "Hopitality & Leisure",
      img: "/industries/hospitality.webp",
      description:
        "Dynamic pricing, intelligent guest personalization, and operational efficiency across properties",
    },
    {
      id: "healthcare-and-life-sciences",
      name: "Healthcare & Life Sciences",
      img: "/industries/healthcare.webp",
      description: "Advancing patient care and biological research",
    },
    {
      id: "legal-services",
      name: "Legal Services",
      img: "/industries/legal.webp",
      description:
        "Automating contract analysis, accelerating due diligence, and de-risking litigation strategy",
    },
    {
      id: "education",
      name: "Education",
      img: "/industries/education.webp",
      description:
        "Personalizing learning pathways, predicting student outcomes, and automating administrative burden",
    },
    {
      id: "technology-media-and-telecommunications-tmt",
      name: "Technology, Media & Telecommunications (TMT)",
      img: "/industries/tech.webp",
      description:
        "Reducing churn, optimizing network performance, and monetizing content intelligently",
    },
    {
      id: "real-estate-and-construction",
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

export type TIndustry = {
  id: string;
  name: string;
  img: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    text: string;
    img: string;
  };
  features: {
    title: string;
    subtitle: string;
    text?: string;
    imgFront: { src: string; alt: string };
    imgBack: { src: string; alt: string };
    accordionContent: TAccordionContent[];
  };
};

export const INDUSTRIES: TIndustry[] = [
  {
    id: "banking-and-financial-services",
    name: "Banking & Financial Services",
    img: "/industries/banking.webp",
    description:
      "Powering credit decisioning, anti-money laundering, and hyper-personalized customer journeys",
    hero: {
      title: "AI for faster decisions <sm:br> and lower risk",
      subtitle: "BANKING & FINANCIAL SERVICES",
      text: "Speed decision-making, detect fraud, and automate reporting with secure, scalable AI — cutting costs while surfacing high-value insights.",
      img: "/industries/banking.webp",
    },
    features: {
      title: "Smarter moves with fewer resources",
      subtitle: "TRUSTED BY FINANCIAL LEADERS",
      text: "AI often adds people and process. Done right, it finds fraud, streamlines ops, and makes services human — real impact without the extra overhead.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
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
          subtitle: "FREE YOUR TEAMS FOR HIGH-VALUE WORK",
          list: [
            "Automate document processing and data entry",
            "Eliminate repetitive reconciliation tasks",
            "Accelerate loan and credit processing",
            "Let people focus on clients, not paperwork",
          ],
        },
        {
          title: "Automate common support tickets",
          subtitle: "FASTER RESOLUTION, HAPPIER CUSTOMERS",
          list: [
            "Instantly resolve routine account inquiries",
            "Route complex issues to the right teams",
            "Reduce wait times across every channel",
            "Maintain service quality at scale",
          ],
        },
      ],
    },
  },
  {
    id: "public-sector-and-government",
    name: "Public Sector & Government",
    img: "/industries/government.webp",
    description:
      "Digitizing citizen services, automating compliance, and enabling data-driven policy",
    hero: {
      title: "Modernize public services with AI",
      subtitle: "PUBLIC SECTOR & GOVERNMENT",
      text: "Harness institutional data to improve citizen outcomes, streamline operations, and deliver services that meet the urgency of public need.",
      img: "/industries/government.webp",
    },
    features: {
      title: "Bringing clarity for smarter public policy",
      subtitle: "TRUSTED BY PUBLIC INSTITUTIONS",
      text: "Public mandates can’t wait. AI helps governments move at the speed citizens expect without compromising accuracy, security, or accountability.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Speed up policy analysis and drafting",
          subtitle: "POLICY INTELLIGENCE",
          list: [
            "Extract relevant insights from large volumes of legislation and regulation",
            "Summarize public records to inform policy decisions",
            "Draft policy language with contextual accuracy",
            "Track regulatory changes across jurisdictions automatically",
          ],
        },
        {
          title: "Deploy virtual assistants",
          subtitle: "CITIZEN ACCESS",
          list: [
            "Automate FAQs around taxes, benefits, healthcare, and licensing",
            "Provide 24/7 multilingual support across channels",
            "Reduce call center volume while improving response times",
            "Route complex inquiries to the appropriate department",
          ],
        },
        {
          title: "Enhance fraud detection capabilities",
          subtitle: "FISCAL INTEGRITY",
          list: [
            "Identify unusual patterns in procurement and expense claims",
            "Flag benefits distributions that may indicate fraud or abuse",
            "Monitor transactions across agencies in real time",
            "Reduce waste while protecting public resources",
          ],
        },
      ],
    },
  },
  {
    id: "retail-and-consumer-goods",
    name: "Retail & Consumer Goods",
    img: "/industries/retail.webp",
    description:
      "Predicting inventory demand, personalizing at scale, and optimizing supply chain end-to-end",
    hero: {
      title: "AI that moves at the speed of commerce",
      subtitle: "RETAIL & CONSUMER GOODS",
      text: "Forecast demand, optimize inventory, and personalize at scale with intelligence that turns data into decisions before the moment passes.",
      img: "/industries/retail-darker.webp",
    },
    features: {
      title: "From gut instinct to ground truth",
      subtitle: "TRUSTED BY RETAIL LEADERS",
      text: "Consumer businesses sit on gold and act broke. Data everywhere, insight nowhere. Most decisions are still made by instinct and spreadsheets. AI sees what sells, where, and why, turning noise into signal and signal into action.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Sharpen demand forecasting",
          subtitle: "INVENTORY INTELLIGENCE",
          list: [
            "Forecast demand by SKU, location, and channel with precision",
            "Adjust predictions dynamically based on trends, weather, and events",
            "Reduce overstock and stockouts simultaneously",
            "Inform product planning and assortment decisions with data",
          ],
        },
        {
          title: "Streamline supply chain operations",
          subtitle: "OPERATIONAL EFFICIENCY",
          list: [
            "Automate purchase orders and vendor communication",
            "Run what-if scenarios across sourcing and logistics",
            "Gain real-time visibility into fulfillment and distribution",
            "Identify bottlenecks before they impact availability",
          ],
        },
        {
          title: "Elevate customer engagement",
          subtitle: "PERSONALIZATION AT SCALE",
          list: [
            "Deliver personalized promotions based on behavior and segment",
            "Automate post-purchase follow-up and loyalty engagement",
            "Improve customer service with AI-powered chat and resolution",
            "Track satisfaction and sentiment to refine experience continuously",
          ],
        },
      ],
    },
  },
  {
    id: "insurance",
    name: "Insurance",
    img: "/industries/insurance.webp",
    description:
      "Automating claims adjudication, detecting fraud in real time, and pricing risk with precision",
    hero: {
      title: "Smarter underwriting and faster claims",
      subtitle: "INSURANCE",
      text: "Accelerate claims processing, refine risk assessment, and automate compliance with AI built for the complexity of modern insurance.",
      img: "/industries/insurance.webp",
    },
    features: {
      title: "Precision at the point of risk",
      subtitle: "TRUSTED BY INSURANCE LEADERS",
      text: "The insurance industry has always been about managing the unknown. AI makes the unknown smaller, surfacing risk earlier, resolving claims faster, and turning data into decisions that hold.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Improve risk assessment",
          subtitle: "UNDERWRITING INTELLIGENCE",
          list: [
            "Analyze structured and unstructured data for deeper risk profiles",
            "Flag anomalies and inconsistencies in real time",
            "Automate application review with decision-ready recommendations",
            "Continuously refine models with new claims data",
          ],
        },
        {
          title: "Accelerate claims processing",
          subtitle: "SPEED WITHOUT COMPROMISE",
          list: [
            "Triage claims instantly using multimodal AI",
            "Predict payouts with severity estimation models",
            "Reduce manual review for straightforward claims",
            "Surface fraud signals before settlement",
          ],
        },
        {
          title: "Strengthen policyholder retention",
          subtitle: "RETENTION THROUGH RELEVANCE",
          list: [
            "Identify at-risk policyholders before they lapse",
            "Personalize outreach based on behavior and lifecycle",
            "Automate renewal workflows with precision timing",
            "Turn service interactions into loyalty drivers",
          ],
        },
      ],
    },
  },
  {
    id: "energy-and-utilities",
    name: "Energy & Utilities",
    img: "/industries/energy.webp",
    description:
      "Predicting grid failures, balancing load in real time, and accelerating the energy transition",
    hero: {
      title: "Powering smarter energy operations",
      subtitle: "ENERGY & UTILITIES",
      text: "Securely integrate disconnected data sources to deliver real-time intelligence for smarter decision-making, from grid to meter.",
      img: "/industries/energy.webp",
    },
    features: {
      title: "Powering what powers everything else",
      subtitle: "TRUSTED BY ENERGY LEADERS",
      text: "Energy companies have data. What they lack is timely access. Ai turns scattered signals into operational clarity – from field, to plant & across the grid.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Surface insights from unstructured data",
          subtitle: "KNOWLEDGE CONSOLIDATION",
          list: [
            "Consolidate dispersed data into a single, searchable knowledge base",
            "Connect OEM manuals, maintenance logs, and sensor records",
            "Enable field teams to query institutional knowledge instantly",
            "Reduce time spent searching for critical information",
          ],
        },
        {
          title: "Enhance predictive modeling",
          subtitle: "FORECASTING INTELLIGENCE",
          list: [
            "Predict equipment failures before they cause downtime",
            "Forecast demand with greater accuracy across the grid",
            "Optimize load balancing in real time",
            "Reduce maintenance costs with condition-based monitoring",
          ],
        },
        {
          title: "Protect your personnel and infrastructure",
          subtitle: "SAFETY AND RESILIENCE",
          list: [
            "Monitor assets continuously for early warning signs",
            "Detect anomalies in performance data across distributed systems",
            "Automate safety alerts and incident response protocols",
            "Extend asset lifespan with proactive maintenance",
          ],
        },
      ],
    },
  },
  {
    id: "hospitality-and-leisure",
    name: "Hopitality & Leisure",
    img: "/industries/hospitality.webp",
    description:
      "Dynamic pricing, intelligent guest personalization, and operational efficiency across properties",
    hero: {
      title: "Exceptional experiences & operational excellence",
      subtitle: "HOSPITALITY & LEISURE",
      text: "Personalize guest journeys, optimize revenue, and streamline operations with intelligence that works behind the scenes so hospitality stays human.",
      img: "/industries/hospitality.webp",
    },
    features: {
      title: "Service meets system",
      subtitle: "TRUSTED BY HOSPITALITY LEADERS",
      text: "Guests remember how you made them feel, not how you made it happen. AI powers the invisible infrastructure, pricing, timing, coordination – so every interaction feels seamless.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Deliver personalized guest journeys",
          subtitle: "EXPERIENCE INTELLIGENCE",
          list: [
            "Tailor offers and recommendations based on guest history and preferences",
            "Automate pre-arrival communication and upsell opportunities",
            "Personalize on-property experiences from dining to amenities",
            "Build loyalty through recognition that scales across properties",
          ],
        },
        {
          title: "Maximize revenue performance",
          subtitle: "YIELD OPTIMIZATION",
          list: [
            "Implement dynamic pricing based on demand, events, and competitor rates",
            "Forecast occupancy and revenue with precision across seasons",
            "Identify optimal rate strategies by segment and channel",
            "Reduce reliance on OTAs with direct booking intelligence",
          ],
        },
        {
          title: "Streamline operations across properties",
          subtitle: "OPERATIONAL EFFICIENCY",
          list: [
            "Automate housekeeping schedules based on check-ins and turnovers",
            "Predict maintenance needs before they impact guest experience",
            "Optimize staffing levels based on occupancy and demand forecasts",
            "Centralize visibility across multiple locations in real time",
          ],
        },
      ],
    },
  },
  {
    id: "healthcare-and-life-sciences",
    name: "Healthcare & Life Sciences",
    img: "/industries/healthcare.webp",
    description: "Advancing patient care and biological research",
    hero: {
      title: "Advancing patient care and biological research",
      subtitle: "HEALTHCARE & LIFE SCIENCES",
      text: "Turn fragmented records into unified insight, powering faster diagnoses, smarter research, and better care.",
      img: "/industries/healthcare-darker.webp",
    },
    features: {
      title: "The infrastructure behind modern care",
      subtitle: "TRUSTED BY HEALTHCARE LEADERS",
      text: "The bottleneck in healthcare is rarely clinical, it's operational. AI removes the friction between what clinicians know and what systems allow them to do.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Improve patient outcomes",
          subtitle: "CLINICAL INTELLIGENCE",
          list: [
            "Extract real-time, contextually relevant insights from EHR systems",
            "Surface early warning signals across patient populations",
            "Enable personalized treatment recommendations at scale",
            "Reduce diagnostic delays with intelligent triage",
          ],
        },
        {
          title: "Streamline workflows",
          subtitle: "OPERATIONAL EFFICIENCY",
          list: [
            "Automate clinical documentation and note summarization",
            "Reduce administrative burden on care teams",
            "Accelerate prior authorization and claims processing",
            "Integrate seamlessly with existing EHR and scheduling systems",
          ],
        },
        {
          title: "Accelerate research and discovery",
          subtitle: "SCIENTIFIC ADVANCEMENT",
          list: [
            "Analyze large-scale datasets for pattern recognition",
            "Generate and summarize clinical study findings",
            "Identify promising compounds and treatment pathways faster",
            "Bridge research insights with real-world clinical application",
          ],
        },
      ],
    },
  },
  {
    id: "legal-services",
    name: "Legal Services",
    img: "/industries/legal.webp",
    description:
      "Automating contract analysis, accelerating due diligence, and de-risking litigation strategy",
    hero: {
      title: "AI that practices at your standard",
      subtitle: "LEGAL SERVICES",
      text: "Accelerate research, streamline due diligence, and draft with precision with AI built for the complexity and rigor of legal work.",
      img: "/industries/legal-darker.webp",
    },
    features: {
      title: "Built for the demands of legal practice",
      subtitle: "TRUSTED BY LEGAL LEADERS",
      text: "Associates spend countless hours on complex but routine tasks. AI doesn't replace their judgment, it multiplies their capacity. The firms that win will be the ones that redeploy talent from process to strategy.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Elevate legal research",
          subtitle: "RESEARCH INTELLIGENCE",
          list: [
            "Search across case law, statutes, and regulations in natural language",
            "Surface relevant precedents and jurisdictional variations instantly",
            "Generate research memos with verified citations",
            "Reduce hours of manual research to minutes",
          ],
        },
        {
          title: "Accelerate contract review and analysis",
          subtitle: "TRANSACTIONAL EFFICIENCY",
          list: [
            "Analyze hundreds of contracts simultaneously for key terms and risks",
            "Flag deviations from standard language and negotiated positions",
            "Extract structured data from unstructured documents at scale",
            "Reduce due diligence timelines without sacrificing thoroughness",
          ],
        },
        {
          title: "Strengthen litigation support",
          subtitle: "LITIGATION INTELLIGENCE",
          list: [
            "Review discovery materials with AI-assisted document classification",
            "Identify patterns, inconsistencies, and key exhibits faster",
            "Draft motions, briefs, and filings grounded in case strategy",
            "Prepare for depositions and oral arguments with synthesized insights",
          ],
        },
      ],
    },
  },
  {
    id: "education",
    name: "Education",
    img: "/industries/education.webp",
    description:
      "Personalizing learning pathways, predicting student outcomes, and automating administrative burden",
    hero: {
      title: "AI for institutions shaping the future",
      subtitle: "EDUCATION",
      text: "Personalize learning, streamline administration, and support student success with intelligence designed for the complexity of modern education.",
      img: "/industries/education.webp",
    },
    features: {
      title: "Serving students, faculty & institutions",
      subtitle: "TRUSTED BY EDUCATION LEADERS",
      text: "Education carries a mandate like no other, to prepare people for a future that doesn't yet exist. AI doesn't replace educators. It removes the friction between what they know and what institutions allow them to do.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Enable personalized learning pathways",
          subtitle: "ADAPTIVE LEARNING",
          list: [
            "Tailor curriculum and content to individual student progress and needs",
            "Recommend resources based on learning style and performance",
            "Automate formative assessments and feedback loops",
            "Support diverse learners with accessible, adaptive experiences",
          ],
        },
        {
          title: "Predict outcomes and drive intervention",
          subtitle: "STUDENT SUCCESS INTELLIGENCE",
          list: [
            "Identify students at risk of falling behind or dropping out early",
            "Surface engagement patterns and academic warning signs",
            "Trigger timely interventions from advisors and support services",
            "Track effectiveness of support programs with data",
          ],
        },
        {
          title: "Automate institutional administration",
          subtitle: "OPERATIONAL EFFICIENCY",
          list: [
            "Streamline admissions processing and application review",
            "Automate scheduling, enrollment, and records management",
            "Simplify compliance reporting and accreditation documentation",
            "Reduce manual workload across registrar and administrative functions",
          ],
        },
      ],
    },
  },
  {
    id: "technology-media-and-telecommunications-tmt",
    name: "Technology, Media & Telecommunications (TMT)",
    img: "/industries/tech.webp",
    description:
      "Reducing churn, optimizing network performance, and monetizing content intelligently",
    hero: {
      subtitle: "TECHNOLOGY, MEDIA & TELECOMMUNICATIONS (TMT)",
      title: "Put your data to work across your business",
      text: "Build smarter products, streamline operations, and deliver personalized experiences with AI grounded in your enterprise data.",
      img: "/industries/tech.webp",
    },
    features: {
      title: "Put your data to work ",
      subtitle: "TRUSTED BY TMT LEADERS",
      text: "The companies defining the next decade of technology won't just use AI,  they'll embed it into everything they build, ship, and operate.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Enhance product intelligence",
          subtitle: "BUILD SMARTER",
          list: [
            "Embed AI capabilities directly into your product experience",
            "Personalize features based on user behavior and context",
            "Automate content recommendations and discovery",
            "Continuously improve with real-time feedback loops",
          ],
        },
        {
          title: "Optimize network and infrastructure",
          subtitle: "OPERATE LEANER",
          list: [
            "Predict and prevent network failures before they impact users",
            "Automate capacity planning and resource allocation",
            "Monitor performance across distributed systems in real time",
            "Reduce operational costs while improving reliability",
          ],
        },
        {
          title: "Transform customer experience",
          subtitle: "ENGAGE DEEPER",
          list: [
            "Reduce churn with predictive retention models",
            "Personalize support interactions at scale",
            "Automate common inquiries while routing complexity to the right teams",
            "Turn customer data into actionable engagement strategies",
          ],
        },
      ],
    },
  },
  {
    id: "real-estate-and-construction",
    name: "Real Estate & Construction",
    img: "/industries/real-estate.webp",
    description:
      "Forecasting project timelines, optimizing procurement, and reducing cost overruns before they happen",
    hero: {
      title: "AI for smarter projects and faster decisions",
      subtitle: "REAL ESTATE & CONSTRUCTION",
      text: "Streamline planning, reduce cost overruns, and gain real-time visibility across every phase, from acquisition to handover.",
      img: "/industries/real-estate.webp",
    },
    features: {
      title: "Build smarter. Deliver faster. Risk less.",
      subtitle: "TRUSTED BY INDUSTRY LEADERS",
      text: "Real estate and construction run on timelines, budgets, and coordination across dozens of stakeholders. AI doesn't replace the expertise, it surfaces the right information at the right moment, so decisions happen before delays do.",
      imgFront: {
        src: "/images/man-on-laptop.webp",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/demos/ai-prompt.svg", alt: "Gen AI prompt demo" },
      accordionContent: [
        {
          title: "Accelerate pre-construction intelligence",
          subtitle: "FEASIBILITY AND PLANNING",
          list: [
            "Analyze comparable sales, market trends, and demographic data instantly",
            "Automate zoning and permit requirement research",
            "Generate financial models and scenario analyses at speed",
            "Reduce due diligence timelines on acquisitions",
          ],
        },
        {
          title: "Enhance project visibility and coordination",
          subtitle: "EXECUTION INTELLIGENCE",
          list: [
            "Monitor progress across sites with unified dashboards",
            "Surface schedule conflicts and resource bottlenecks early",
            "Automate RFI responses and submittal tracking",
            "Keep contractors, owners, and architects aligned in real time",
          ],
        },
        {
          title: "Predict and mitigate risk",
          subtitle: "RISK MANAGEMENT",
          list: [
            "Forecast cost overruns based on historical project data",
            "Identify weather, supply chain, and labor risks proactively",
            "Flag contract deviations and change order patterns",
            "Reduce claims exposure with documented decision trails",
          ],
        },
      ],
    },
  },
];

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
    text: "Every organization faces unique challenges. <br> Our AI adapts, scales, and delivers value across fields, streamlining operations and enabling smarter decisions, all while fitting the way you work.",
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
    text: "So we make thoughtful decisions about how we work, the perks we provide, and how we create a diverse and inclusive work environment. We also foster technical creativity and innovation through internal hackathons, demos, tech talks, and achievement recognition programs that form a cornerstone of our culture at Gaiant. <br> <br> Join us and become part of a team that's defining what enterprise intelligence looks like in the MENA region and beyond. Here, you'll work alongside researchers, engineers, and strategists who believe the best way to predict the future is to build it.",
  },

  OPEN_ROLES: {
    title: "Open roles at Gaiant",
    cards: [
      {
        title: "AI Data Trainer, Arabic",
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
        title: "Enterprise Solutions Associate",
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
    sublinks: INDUSTRIES.map((industry) => {
      return { link: `/industries/${industry.id}`, name: industry.name };
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
