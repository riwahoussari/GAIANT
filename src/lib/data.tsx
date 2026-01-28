import TransparencyAnimation from "../assets/animations/landing-page/transparency.mp4";
import AdaptabilityAnimation from "../assets/animations/landing-page/adaptability.mp4";
import CustomizationAnimation from "../assets/animations/landing-page/customization.mp4";
import DeploymentAnimation from "../assets/animations/landing-page/deployment.mp4";
import type { TAccordionContent } from "../components/sections/AccordionSection";
import useCaseAnimation1 from "../assets/animations/use-cases/1.mp4";
import useCaseAnimation2 from "../assets/animations/use-cases/2.mp4";
import useCaseAnimation3 from "../assets/animations/use-cases/3.mp4";
import useCaseAnimation4 from "../assets/animations/use-cases/4.mp4";
import useCaseAnimation5 from "../assets/animations/use-cases/5.mp4";
import useCaseAnimation6 from "../assets/animations/use-cases/6.mp4";
import careersAnimation1 from "../assets/animations/careers/1.mp4";
import careersAnimation2 from "../assets/animations/careers/2.mp4";
import careersAnimation3 from "../assets/animations/careers/3.mp4";
import ourMissionAnimation1 from "../assets/animations/about-page/1.mp4";
import ourMissionAnimation2 from "../assets/animations/about-page/2.mp4";
import ourMissionAnimation3 from "../assets/animations/about-page/3.mp4";
import discoverAnimation from "../assets/animations/arche/Discover.json"
import createAnimation from "../assets/animations/arche/Create.json"
import executeAnimation from "../assets/animations/arche/Execute.json"

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
      img: "/industries/banking/banking.webp",
      description:
        "Powering credit decisioning, anti-money laundering, and hyper-personalized customer journeys",
    },
    {
      id: "public-sector-and-government",
      name: "Public Sector & Government",
      img: "/industries/government/government.webp",
      description:
        "Digitizing citizen services, automating compliance, and enabling data-driven policy",
    },
    {
      id: "retail-and-consumer-goods",
      name: "Retail & Consumer Goods",
      img: "/industries/retail/retail.webp",
      description:
        "Predicting inventory demand, personalizing at scale, and optimizing supply chain end-to-end",
    },
    {
      id: "insurance",
      name: "Insurance",
      img: "/industries/insurance/insurance.webp",
      description:
        "Automating claims adjudication, detecting fraud in real time, and pricing risk with precision",
    },
    {
      id: "energy-and-utilities",
      name: "Energy & Utilities",
      img: "/industries/energy/energy.webp",
      description:
        "Predicting grid failures, balancing load in real time, and accelerating the energy transition",
    },
    {
      id: "hospitality-and-leisure",
      name: "Hopitality & Leisure",
      img: "/industries/hospitality/hospitality.webp",
      description:
        "Dynamic pricing, intelligent guest personalization, and operational efficiency across properties",
    },
    {
      id: "healthcare-and-life-sciences",
      name: "Healthcare & Life Sciences",
      img: "/industries/healthcare/healthcare.webp",
      description: "Advancing patient care and biological research",
    },
    {
      id: "legal-services",
      name: "Legal Services",
      img: "/industries/legal/legal.webp",
      description:
        "Automating contract analysis, accelerating due diligence, and de-risking litigation strategy",
    },
    {
      id: "education",
      name: "Education",
      img: "/industries/education/education.webp",
      description:
        "Personalizing learning pathways, predicting student outcomes, and automating administrative burden",
    },
    {
      id: "technology-media-and-telecommunications-tmt",
      name: "Technology, Media & Telecommunications (TMT)",
      img: "/industries/tech/tech.webp",
      description:
        "Reducing churn, optimizing network performance, and monetizing content intelligently",
    },
    {
      id: "real-estate-and-construction",
      name: "Real Estate & Construction",
      img: "/industries/real-estate/real-estate.webp",
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
    img: {
      src: string;
      position?: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    text?: string;
    imgFront: { src: string; alt: string };
    imgBack: { src: string; alt: string };
    accordionContent: TAccordionContent[];
  };
  useCases: {
    title: "Use Cases";
    subtitle: string;
    text: string;
    useCaseCards: {
      title: string;
      subtitle: string;
      text: string;
      animation: string;
    }[];
  };
  ourApproach: {
    title: "Our Approach";
    subtitle: string;
    text: string;
    video: string;
  };
};

export const INDUSTRIES: TIndustry[] = [
  {
    id: "banking-and-financial-services",
    name: "Banking & Financial Services",
    img: "/industries/banking/banking.webp",
    description:
      "Powering credit decisioning, anti-money laundering, and hyper-personalized customer journeys",
    hero: {
      title: "AI for faster decisions <sm:br> and lower risk",
      subtitle: "BANKING & FINANCIAL SERVICES",
      text: "Speed decision-making, detect fraud, and automate reporting with secure, scalable AI — cutting costs while surfacing high-value insights.",
      img: { src: "/industries/banking/banking.webp", position: "object-[50%_25%]" },
    },
    features: {
      title: "Smarter moves with fewer resources",
      subtitle: "TRUSTED BY FINANCIAL LEADERS",
      text: "AI often adds people and process. Done right, it finds fraud, streamlines ops, and makes services human — real impact without the extra overhead.",
      imgFront: {
        src: "/industries/banking/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/banking/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "BANKING & FINANCIAL SERVICES",
      text: "See how leading firms are streamlining operations and scaling insight.",
      useCaseCards: [
        {
          title: "Customer service bots",
          subtitle: "OPERATIONAL EFFICIENCY",
          text: "Perform KYC checks with minimal human involvement.",
          animation: useCaseAnimation1,
        },
        {
          title: "Regulatory monitoring",
          subtitle: "CONTINUOUS COMPLIANCE",
          text: "Summarize new regulatory changes and assesses their operational impacts automatically.",
          animation: useCaseAnimation2,
        },
        {
          title: "Anomaly detection",
          subtitle: "FRAUD INTELLIGENCE",
          text: "ML models detect patterns of fraudulent transactions faster than traditional rules engines.",
          animation: useCaseAnimation3,
        },
        {
          title: "Predictive asset value forecasting",
          subtitle: "MARKET FORESIGHT",
          text: "AI uses real-time data and alternative datasets to anticipate valuation swings.",
          animation: useCaseAnimation4,
        },
        {
          title: "Dynamic pricing models",
          subtitle: "REAL-TIME PRECISION",
          text: "AI models adjust loan or insurance product pricing based on real-time risk and customer profile data.",
          animation: useCaseAnimation5,
        },
        {
          title: "Explainability reporting",
          subtitle: "AUDITABLE DECISIONS",
          text: "Provides transparent, auditable logic paths for AI-driven decisions to satisfy regulatory scrutiny.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "insurance",
    name: "Insurance",
    img: "/industries/insurance/insurance.webp",
    description:
      "Automating claims adjudication, detecting fraud in real time, and pricing risk with precision",
    hero: {
      title: "Smarter underwriting and faster claims",
      subtitle: "INSURANCE",
      text: "Accelerate claims processing, refine risk assessment, and automate compliance with AI built for the complexity of modern insurance.",
      img: { src: "/industries/insurance/insurance.webp", position: "object-[50%_30%]" },
    },
    features: {
      title: "Precision at the point of risk",
      subtitle: "TRUSTED BY INSURANCE LEADERS",
      text: "The insurance industry has always been about managing the unknown. AI makes the unknown smaller, surfacing risk earlier, resolving claims faster, and turning data into decisions that hold.",
      imgFront: {
        src: "/industries/insurance/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/insurance/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "INSURANCE",
      text: "See how leading carriers are transforming underwriting, claims, and customer experience.",
      useCaseCards: [
        {
          title: "Multimodal severity estimation",
          subtitle: "CLAIMS INTELLIGENCE",
          text: "GenAI uses images and text to triage claims and predict payouts.",
          animation: useCaseAnimation1,
        },
        {
          title: "Climate risk analytics",
          subtitle: "EXPOSURE MAPPING",
          text: "Map environmental exposure to pricing and reinsurance strategy.",
          animation: useCaseAnimation2,
        },
        {
          title: "Underwriting copilots",
          subtitle: "DECISION SUPPORT",
          text: "Summarize applications, flag anomalies, and suggest decisions in real time.",
          animation: useCaseAnimation3,
        },
        {
          title: "Dynamic pricing models",
          subtitle: "ADAPTIVE PRICING",
          text: "Adjust premiums based on customer behavior and risk exposure.",
          animation: useCaseAnimation4,
        },
        {
          title: "Churn modeling",
          subtitle: "RETENTION FORESIGHT",
          text: "Predict and intervene with at-risk policyholders.",
          animation: useCaseAnimation5,
        },
        {
          title: "Regulatory summarization",
          subtitle: "COMPLIANCE CLARITY",
          text: "Automate monitoring of regulatory changes and summarize implications for legal and product teams.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "healthcare-and-life-sciences",
    name: "Healthcare & Life Sciences",
    img: "/industries/healthcare/healthcare.webp",
    description: "Advancing patient care and biological research",
    hero: {
      title: "Advancing patient care and biological research",
      subtitle: "HEALTHCARE & LIFE SCIENCES",
      text: "Turn fragmented records into unified insight, powering faster diagnoses, smarter research, and better care.",
      img: {
        src: "/industries/healthcare/healthcare-darker.webp",
        position: "object-[50%_18%]",
      },
    },
    features: {
      title: "The infrastructure behind modern care",
      subtitle: "TRUSTED BY HEALTHCARE LEADERS",
      text: "The bottleneck in healthcare is rarely clinical, it's operational. AI removes the friction between what clinicians know and what systems allow them to do.",
      imgFront: {
        src: "/industries/healthcare/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/healthcare/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "HEALTHCARE & LIFE SCIENCES",
      text: "See how leading institutions are transforming care delivery and accelerating discovery.",
      useCaseCards: [
        {
          title: "Clinical documentation AI",
          subtitle: "ADMINISTRATIVE RELIEF",
          text: "Automate note-taking, summarization, and coding to free clinicians for patient care.",
          animation: useCaseAnimation1,
        },
        {
          title: "Diagnostic support systems",
          subtitle: "CLINICAL PRECISION",
          text: "Surface differential diagnoses and flag anomalies from imaging and lab data.",
          animation: useCaseAnimation2,
        },
        {
          title: "Patient risk stratification",
          subtitle: "PROACTIVE CARE",
          text: "Identify high-risk patients early and prioritize interventions accordingly.",
          animation: useCaseAnimation3,
        },
        {
          title: "Appointment and referral optimization",
          subtitle: "OPERATIONAL FLOW",
          text: "Automate scheduling, reduce no-shows, and route referrals to the right specialists faster.",
          animation: useCaseAnimation4,
        },
        {
          title: "Medical knowledge retrieval",
          subtitle: "INSTANT EXPERTISE",
          text: "Surface relevant clinical guidelines, drug interactions, and treatment protocols in seconds.",
          animation: useCaseAnimation5,
        },
        {
          title: "Clinical trial matching",
          subtitle: "RESEARCH ACCELERATION",
          text: "Identify eligible patient populations and streamline enrollment for ongoing studies.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "technology-media-and-telecommunications-tmt",
    name: "Technology, Media & Telecommunications (TMT)",
    img: "/industries/tech/tech.webp",
    description:
      "Reducing churn, optimizing network performance, and monetizing content intelligently",
    hero: {
      subtitle: "TECHNOLOGY, MEDIA & TELECOMMUNICATIONS (TMT)",
      title: "Put your data to work across your business",
      text: "Build smarter products, streamline operations, and deliver personalized experiences with AI grounded in your enterprise data.",
      img: {
        src: "/industries/tech/tech.webp",
        position: "object-[50%_55%]  rotate-y-180",
      },
    },
    features: {
      title: "Put your data to work ",
      subtitle: "TRUSTED BY TMT LEADERS",
      text: "The companies defining the next decade of technology won't just use AI,  they'll embed it into everything they build, ship, and operate.",
      imgFront: {
        src: "/industries/tech/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/tech/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "TECHNOLOGY, MEDIA & TELECOMMUNICATIONS",
      text: "See how leading TMT companies are embedding intelligence across products, networks, and customer experience.",
      useCaseCards: [
        {
          title: "Intelligent content recommendations",
          subtitle: "MEDIA PERSONALIZATION",
          text: "Surface relevant content based on user behavior, preferences, and real-time context.",
          animation: useCaseAnimation1,
        },
        {
          title: "Churn prediction and prevention",
          subtitle: "RETENTION INTELLIGENCE",
          text: "Identify at-risk customers early and trigger targeted interventions.",
          animation: useCaseAnimation2,
        },
        {
          title: "Network anomaly detection",
          subtitle: "INFRASTRUCTURE RESILIENCE",
          text: "Detect and resolve network issues before they impact service quality.",
          animation: useCaseAnimation3,
        },
        {
          title: "AI-powered code review",
          subtitle: "DEVELOPER VELOCITY",
          text: "Automate code analysis for bugs, improvements, and best practices.",
          animation: useCaseAnimation4,
        },
        {
          title: "Customer support automation",
          subtitle: "SERVICE EFFICIENCY",
          text: "Resolve common inquiries instantly while escalating complexity intelligently.",
          animation: useCaseAnimation5,
        },
        {
          title: "Dynamic ad targeting",
          subtitle: "REVENUE OPTIMIZATION",
          text: "Deliver personalized advertising based on real-time audience signals and behavior.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "public-sector-and-government",
    name: "Public Sector & Government",
    img: "/industries/government/government.webp",
    description:
      "Digitizing citizen services, automating compliance, and enabling data-driven policy",
    hero: {
      title: "Modernize public services with AI",
      subtitle: "PUBLIC SECTOR & GOVERNMENT",
      text: "Harness institutional data to improve citizen outcomes, streamline operations, and deliver services that meet the urgency of public need.",
      img: { src: "/industries/government/government.webp", position: "object-[50%_80%]" },
    },
    features: {
      title: "Bringing clarity for smarter public policy",
      subtitle: "TRUSTED BY PUBLIC INSTITUTIONS",
      text: "Public mandates can’t wait. AI helps governments move at the speed citizens expect without compromising accuracy, security, or accountability.",
      imgFront: {
        src: "/industries/government/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/government/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "PUBLIC SECTOR & GOVERNMENT",
      text: "See how leading institutions are modernizing citizen services and accelerating public outcomes.",
      useCaseCards: [
        {
          title: "Chatbots for citizen services",
          subtitle: "ACCESSIBLE GOVERNMENT",
          text: "Automate FAQs around taxes, benefits, healthcare, and licensing.",
          animation: useCaseAnimation1,
        },
        {
          title: "Computer vision for infrastructure management",
          subtitle: "ASSET INTELLIGENCE",
          text: "Analyze drone imagery to detect cracks, corrosion, and infrastructure risks without manual surveys.",
          animation: useCaseAnimation2,
        },
        {
          title: "Fraud and waste prevention",
          subtitle: "FISCAL PROTECTION",
          text: "Detect unusual patterns in procurement, expenses, and benefits to flag potential fraud or abuse.",
          animation: useCaseAnimation3,
        },
        {
          title: "Predictive policing models",
          subtitle: "PUBLIC SAFETY",
          text: "Analyze patterns in historical data to optimize patrol routes and resource allocation.",
          animation: useCaseAnimation4,
        },
        {
          title: "Automated impact assessments",
          subtitle: "POLICY FORESIGHT",
          text: "Analyze citizen feedback, research, and regulatory data to simulate the impact of proposed laws.",
          animation: useCaseAnimation5,
        },
        {
          title: "Document processing",
          subtitle: "ADMINISTRATIVE EFFICIENCY",
          text: "Extract and summarize information from complex applications, speeding up approvals.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "energy-and-utilities",
    name: "Energy & Utilities",
    img: "/industries/energy/energy.webp",
    description:
      "Predicting grid failures, balancing load in real time, and accelerating the energy transition",
    hero: {
      title: "Powering smarter energy operations",
      subtitle: "ENERGY & UTILITIES",
      text: "Securely integrate disconnected data sources to deliver real-time intelligence for smarter decision-making, from grid to meter.",
      img: { src: "/industries/energy/energy.webp", position: "object-[50%_55%]" },
    },
    features: {
      title: "Powering what powers everything else",
      subtitle: "TRUSTED BY ENERGY LEADERS",
      text: "Energy companies have data. What they lack is timely access. Ai turns scattered signals into operational clarity – from field, to plant & across the grid.",
      imgFront: {
        src: "/industries/energy/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/energy/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "ENERGY & UTILITIES",
      text: "See how leading energy companies are optimizing operations and powering the transition forward.",
      useCaseCards: [
        {
          title: "Predictive asset maintenance",
          subtitle: "OPERATIONAL CONTINUITY",
          text: "Forecast equipment failures and schedule maintenance before unplanned downtime occurs.",
          animation: useCaseAnimation1,
        },
        {
          title: "Grid load optimization",
          subtitle: "DEMAND INTELLIGENCE",
          text: "Balance supply and demand in real time to reduce waste and improve reliability.",
          animation: useCaseAnimation2,
        },
        {
          title: "Field technician copilots",
          subtitle: "WORKFORCE ENABLEMENT",
          text: "Equip technicians with instant access to manuals, diagnostics, and guided troubleshooting.",
          animation: useCaseAnimation3,
        },
        {
          title: "Environmental compliance monitoring",
          subtitle: "REGULATORY ASSURANCE",
          text: "Track emissions and environmental metrics continuously to ensure compliance.",
          animation: useCaseAnimation4,
        },
        {
          title: "Energy trading optimization",
          subtitle: "MARKET PERFORMANCE",
          text: "Analyze market conditions and historical data to inform procurement and trading decisions.",
          animation: useCaseAnimation5,
        },
        {
          title: "Outage prediction and response",
          subtitle: "GRID RESILIENCE",
          text: "Detect early warning signals and automate response protocols to minimize service disruption.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "legal-services",
    name: "Legal Services",
    img: "/industries/legal/legal.webp",
    description:
      "Automating contract analysis, accelerating due diligence, and de-risking litigation strategy",
    hero: {
      title: "AI that practices <sm:br> at your standard",
      subtitle: "LEGAL SERVICES",
      text: "Accelerate research, streamline due diligence, and draft with precision with AI built for the complexity and rigor of legal work.",
      img: {
        src: "/industries/legal/legal-darker.webp",
        position: "object-[50%_50%]",
      },
    },
    features: {
      title: "Built for the demands of legal practice",
      subtitle: "TRUSTED BY LEGAL LEADERS",
      text: "Associates spend countless hours on complex but routine tasks. AI doesn't replace their judgment, it multiplies their capacity. The firms that win will be the ones that redeploy talent from process to strategy.",
      imgFront: {
        src: "/industries/legal/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/legal/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "LEGAL SERVICES",
      text: "See how leading firms are transforming research, transactions, and litigation with AI.",
      useCaseCards: [
        {
          title: "Case law research",
          subtitle: "RESEARCH PRECISION",
          text: "Answer complex legal questions with comprehensive, cited analysis across jurisdictions.",
          animation: useCaseAnimation1,
        },
        {
          title: "Contract analysis and extraction",
          subtitle: "TRANSACTIONAL SCALE",
          text: "Convert thousands of documents into structured data for review and comparison.",
          animation: useCaseAnimation2,
        },
        {
          title: "Due diligence acceleration",
          subtitle: "DEAL VELOCITY",
          text: "Surface risks, flag anomalies, and complete reviews in a fraction of the time.",
          animation: useCaseAnimation3,
        },
        {
          title: "Brief and memo drafting",
          subtitle: "DRAFTING EFFICIENCY",
          text: "Generate first drafts grounded in precedent and tailored to your firm's voice.",
          animation: useCaseAnimation4,
        },
        {
          title: "Discovery document review",
          subtitle: "LITIGATION SUPPORT",
          text: "Classify, prioritize, and analyze discovery materials with AI-assisted review.",
          animation: useCaseAnimation5,
        },
        {
          title: "Regulatory and compliance monitoring",
          subtitle: "REGULATORY INTELLIGENCE",
          text: "Track legislative and regulatory changes and assess their impact on client matters.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "real-estate-and-construction",
    name: "Real Estate & Construction",
    img: "/industries/real-estate/real-estate.webp",
    description:
      "Forecasting project timelines, optimizing procurement, and reducing cost overruns before they happen",
    hero: {
      title: "AI for smarter projects and faster decisions",
      subtitle: "REAL ESTATE & CONSTRUCTION",
      text: "Streamline planning, reduce cost overruns, and gain real-time visibility across every phase, from acquisition to handover.",
      img: {
        src: "/industries/real-estate/real-estate.webp",
        position: "object-[50%_45%]",
      },
    },
    features: {
      title: "Build smarter. Deliver faster. Risk less.",
      subtitle: "TRUSTED BY INDUSTRY LEADERS",
      text: "Real estate and construction run on timelines, budgets, and coordination across dozens of stakeholders. AI doesn't replace the expertise, it surfaces the right information at the right moment, so decisions happen before delays do.",
      imgFront: {
        src: "/industries/real-estate/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/real-estate/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "REAL ESTATE & CONSTRUCTION",
      text: "See how leading developers and contractors are building with intelligence.",
      useCaseCards: [
        {
          title: "Market and site analysis",
          subtitle: "INVESTMENT INTELLIGENCE",
          text: "Analyze demographics, comparables, and zoning to evaluate opportunities faster.",
          animation: useCaseAnimation1,
        },
        {
          title: "Document and contract analysis",
          subtitle: "TRANSACTIONAL EFFICIENCY",
          text: "Extract key terms from leases, contracts, and procurement documents at scale.",
          animation: useCaseAnimation2,
        },
        {
          title: "Project schedule optimization",
          subtitle: "TIMELINE PRECISION",
          text: "Predict delays and optimize sequencing based on historical and real-time data.",
          animation: useCaseAnimation3,
        },
        {
          title: "Cost forecasting and control",
          subtitle: "BUDGET INTELLIGENCE",
          text: "Forecast overruns and track expenditures against estimates across every phase.",
          animation: useCaseAnimation4,
        },
        {
          title: "RFI and submittal automation",
          subtitle: "COORDINATION EFFICIENCY",
          text: "Automate responses and route submittals to the right teams without bottlenecks.",
          animation: useCaseAnimation5,
        },
        {
          title: "Safety and compliance monitoring",
          subtitle: "SITE OVERSIGHT",
          text: "Analyze site reports and imagery to flag safety issues and compliance gaps.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "retail-and-consumer-goods",
    name: "Retail & Consumer Goods",
    img: "/industries/retail/retail.webp",
    description:
      "Predicting inventory demand, personalizing at scale, and optimizing supply chain end-to-end",
    hero: {
      title: "AI that moves at the speed of commerce",
      subtitle: "RETAIL & CONSUMER GOODS",
      text: "Forecast demand, optimize inventory, and personalize at scale with intelligence that turns data into decisions before the moment passes.",
      img: {
        src: "/industries/retail/retail-darker.webp",
        position: "object-[50%_45%]",
      },
    },
    features: {
      title: "From gut instinct to ground truth",
      subtitle: "TRUSTED BY RETAIL LEADERS",
      text: "Consumer businesses sit on gold and act broke. Data everywhere, insight nowhere. Most decisions are still made by instinct and spreadsheets. AI sees what sells, where, and why, turning noise into signal and signal into action.",
      imgFront: {
        src: "/industries/retail/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/retail/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "RETAIL & CONSUMER GOODS",
      text: "See how leading retailers are streamlining operations and scaling insight.",
      useCaseCards: [
        {
          title: "ML demand forecasting",
          subtitle: "PREDICTIVE PLANNING",
          text: "Forecast inventory, labor, and pricing demand using trend analysis to optimize planning and store design.",
          animation: useCaseAnimation1,
        },
        {
          title: "Supply chain optimization",
          subtitle: "NETWORK INTELLIGENCE",
          text: "Streamline vendor management with real-time communication, automation, & rapid what-if analysis.",
          animation: useCaseAnimation2,
        },
        {
          title: "Personalized promotions",
          subtitle: "CONVERSION OPTIMIZATION",
          text: "AI identifies the optimal offer for each customer segment, increasing conversion and retention.",
          animation: useCaseAnimation3,
        },
        {
          title: "Operations efficiency",
          subtitle: "DECISION INTELLIGENCE",
          text: "Optimize operations with AI-driven site selection, fraud detection, inventory tracking, and vision.",
          animation: useCaseAnimation4,
        },
        {
          title: "Customer engagement optimization",
          subtitle: "EXPERIENCE ENHANCEMENT",
          text: "Improve customer experience with AI-powered chat, CSAT tracking, and post-purchase personalization.",
          animation: useCaseAnimation5,
        },
        {
          title: "Financial analytics and automation",
          subtitle: "MARGIN PROTECTION",
          text: "Automate AP/AR, analyze budget variances, and accelerate month-end close to improve accuracy.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "hospitality-and-leisure",
    name: "Hopitality & Leisure",
    img: "/industries/hospitality/hospitality.webp",
    description:
      "Dynamic pricing, intelligent guest personalization, and operational efficiency across properties",
    hero: {
      title: "Exceptional experiences & operational excellence",
      subtitle: "HOSPITALITY & LEISURE",
      text: "Personalize guest journeys, optimize revenue, and streamline operations with intelligence that works behind the scenes so hospitality stays human.",
      img: {
        src: "/industries/hospitality/hospitality.webp",
        position: "object-[50%_60%]",
      },
    },
    features: {
      title: "Service meets system",
      subtitle: "TRUSTED BY HOSPITALITY LEADERS",
      text: "Guests remember how you made them feel, not how you made it happen. AI powers the invisible infrastructure, pricing, timing, coordination – so every interaction feels seamless.",
      imgFront: {
        src: "/industries/hospitality/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/hospitality/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "HOSPITALITY & LEISURE",
      text: "See how leading hospitality brands are elevating service and scaling efficiency.",
      useCaseCards: [
        {
          title: "Dynamic pricing and revenue management",
          subtitle: "YIELD INTELLIGENCE",
          text: "Adjust rates in real time based on demand signals, competitive positioning, and booking patterns.",
          animation: useCaseAnimation1,
        },
        {
          title: "Guest personalization engine",
          subtitle: "EXPERIENCE OPTIMIZATION",
          text: "Deliver tailored recommendations, offers, and service touches based on guest profiles & behavior.",
          animation: useCaseAnimation2,
        },
        {
          title: "Predictive maintenance",
          subtitle: "ASSET RELIABILITY",
          text: "Anticipate equipment failures and schedule maintenance before guest experience is impacted.",
          animation: useCaseAnimation3,
        },
        {
          title: "Intelligent staffing optimization",
          subtitle: "WORKFORCE EFFICIENCY",
          text: "Align staffing levels with occupancy forecasts and demand patterns across shifts and properties.",
          animation: useCaseAnimation4,
        },
        {
          title: "AI-powered guest communication",
          subtitle: "SERVICE AUTOMATION",
          text: "Automate responses to common inquiries, booking changes, and concierge requests across channels.",
          animation: useCaseAnimation5,
        },
        {
          title: "Sentiment and review analysis",
          subtitle: "REPUTATION INTELLIGENCE",
          text: "Analyze guest feedback across platforms to identify trends, flag issues, and protect brand perception.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
  {
    id: "education",
    name: "Education",
    img: "/industries/education/education.webp",
    description:
      "Personalizing learning pathways, predicting student outcomes, and automating administrative burden",
    hero: {
      title: "AI for institutions shaping the future",
      subtitle: "EDUCATION",
      text: "Personalize learning, streamline administration, and support student success with intelligence designed for the complexity of modern education.",
      img: { src: "/industries/education/education.webp", position: "object-[50%_25%]" },
    },
    features: {
      title: "Serving students, faculty & institutions",
      subtitle: "TRUSTED BY EDUCATION LEADERS",
      text: "Education carries a mandate like no other, to prepare people for a future that doesn't yet exist. AI doesn't replace educators. It removes the friction between what they know and what institutions allow them to do.",
      imgFront: {
        src: "/industries/education/features.svg",
        alt: "A man in a suit working on his laptop",
      },
      imgBack: { src: "/industries/education/features.webp", alt: "Gen AI prompt demo" },
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
    useCases: {
      title: "Use Cases",
      subtitle: "EDUCATION",
      text: "See how leading institutions are transforming learning and administration.",
      useCaseCards: [
        {
          title: "Adaptive learning platforms",
          subtitle: "PERSONALIZED INSTRUCTION",
          text: "Deliver content and assessments tailored to each student's pace, level, and learning style.",
          animation: useCaseAnimation1,
        },
        {
          title: "Early warning and retention systems",
          subtitle: "STUDENT SUCCESS",
          text: "Predict at-risk students and trigger interventions before outcomes are determined.",
          animation: useCaseAnimation2,
        },
        {
          title: "Admissions processing automation",
          subtitle: "ENROLLMENT EFFICIENCY",
          text: "Automate application review, document verification, and candidate scoring at scale.",
          animation: useCaseAnimation3,
        },
        {
          title: "Intelligent tutoring and support",
          subtitle: "LEARNING ASSISTANCE",
          text: "Provide 24/7 AI-powered tutoring, writing support, and research assistance for students.",
          animation: useCaseAnimation4,
        },
        {
          title: "Faculty workload optimization",
          subtitle: "ADMINISTRATIVE RELIEF",
          text: "Automate grading, feedback, & course administration to free faculty for teaching and research.",
          animation: useCaseAnimation5,
        },
        {
          title: "Institutional research and reporting",
          subtitle: "DATA INTELLIGENCE",
          text: "Generate insights on enrollment trends, program effectiveness, and compliance metrics automatically.",
          animation: useCaseAnimation6,
        },
      ],
    },
    ourApproach: {
      title: "Our Approach",
      subtitle: "SYSTEMS THAT FIT, NOT FORCE",
      text: "We embed with your team, observe how work flows, and build systems that align with what’s already in motion.",
      video: "/images/video-screenshot.webp",
    },
  },
];
export const INDUSTRIES_FLYOUTLINK_ORDER = [0, 4, 8, 1, 5, 9, 2, 6, 10, 3, 7];
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
      src: "/images/landing-hero.webp",
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
        textMaxWidth: "max-w-[290px]",
        animation: TransparencyAnimation,
      },
      {
        title: "Adaptability",
        subtitle: "WE BUILD AI THAT EVOLVES WITH YOU.",
        text: "Systems designed to learn, shift, and scale as your business does.",
        textMaxWidth: "max-w-[250px]",
        animation: AdaptabilityAnimation,
      },
      {
        title: "Cutomization",
        subtitle: "WE BUILD AI AROUND YOUR REALITY.",
        text: "Tailored solutions shaped by how your enterprise actually works.",
        textMaxWidth: "max-w-[250px]",
        animation: CustomizationAnimation,
      },
      {
        title: "Deployment",
        subtitle: "WE BUILD AI THAT LIVES WHERE YOU NEED IT.",
        text: "On-premises. Cloud. Hybrid. <br>Wherever your data lives, we deploy.",
        textMaxWidth: "max-w-[290px]",
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
    img: { src: "/demos/what-this-means-for-you.svg", alt: "Ai workflow Demo" },
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
    title: "The Intelligent Operating System for Enterprise",
    subtitle: "ARCHĒ",
    text: "Archē unifies every tool, workflow, and data source into one conversational interface, turning fragmented operations into seamless action.",
  },

  THE_ARCHE_MODEL: {
    title: "Focus is a competitive advantage",
    subtitle: "THE ARCHĒ MODEL",
    text: "No matter the industry, Archē handles the operational weight so your people can focus on the work that actually moves the business.",
    img1: {
      src: "/images/arche-1.webp",
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
        animation: discoverAnimation,
      },
      {
        subtitle: "GENERATIVE AI",
        title: "Create",
        text: "Co-create documents, contracts, and emails. Generate summaries, tables, and charts. All instantly.",
        animation: createAnimation
      },
      {
        subtitle: "AGENTIC AUTOMATION",
        title: "Execute",
        text: "Put your workflows on autopilot, deploy intelligent agents that handle the routine so your teams can focus on what matters.",
        animation: executeAnimation
      },
    ],
  },

  ARCHE_INDUSTRIES: {
    title: "Make AI work for you",
    text: "No matter the role or industry, Archē handles the repetitive work so your people can focus on the big picture",
    tabs: [
      {
        title: "Vault",
        text: "Your company's institutional brain. Your vault is where documents, data, and knowledge live, the foundation Archē learns from and builds on.",
        svg: {
          desktop: "/demos/arche/vault.svg",
          mobile: "/demos/arche/vault-mobile.svg",
        }
      },
      {
        title: "Legal",
        text: "Draft contracts, review agreements, and surface regulatory insights, all grounded in your company's legal precedents and templates.",
        svg: {
          desktop: "/demos/arche/legal.svg",
          mobile: "/demos/arche/legal-mobile.svg",
        }
      },
      {
        title: "Sales",
        text: "Track pipelines, generate proposals, and access deal insights, with an AI that understands your customers, products, and history.",
        svg: {
          desktop: "/demos/arche/sales.svg",
          mobile: "/demos/arche/sales-mobile.svg",
        }
      },
      {
        title: "Finance",
        text: "Analyze cash flow, generate reports, and track compliance, with instant access to your financial data, formatted to regional standards.",
        svg: {
          desktop: "/demos/arche/finance.svg",
          mobile: "/demos/arche/finance-mobile.svg",
        }
      },
      {
        title: "Operations",
        text: "Coordinate projects, track resources, and automate workflows, with an operating layer that sees across every team and timeline.",
        svg: {
          desktop: "/demos/arche/operations.svg",
          mobile: "/demos/arche/operations-mobile.svg",
        }
      },
      {
        title: "HR",
        text: "Streamline onboarding, answer policy questions, and manage requests, with an AI trained on your employee handbook and HR systems.",
        svg: {
          desktop: "/demos/arche/hr.svg",
          mobile: "/demos/arche/hr-mobile.svg",
        }
      },
    ],
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
      src: "features.svg",
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
        animation: ourMissionAnimation1,
      },
      {
        title: "We’re a collaborative team of experts",
        subtitle: "DRIVEN BY HUMAN INGENUITY",
        text: "Engineers, researchers, and builders united by one goal, engineering intelligence that matters.",
        animation: ourMissionAnimation2,
      },
      {
        title: "We're engineering intelligence for MENA",
        subtitle: "BY THE REGION, FOR THE REGION",
        text: "AI built with local context, local expertise, and a deep understanding of how business moves here.",
        animation: ourMissionAnimation3,
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
        animation: careersAnimation1,
      },
      {
        title: "A team that listens",
        subtitle: "COLLABORATION ROOTED IN TRUST AND RESPECT",
        text: "Your ideas guide decisions in a culture of open dialogue.",
        animation: careersAnimation2,
      },
      {
        title: "A place to grow",
        subtitle: "CONTINUOUS LEARNING, MENTORSHIP & CAREER EVOLUTION",
        text: "We invest in your growth with guidance, opportunities, and freedom.",
        animation: careersAnimation3,
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
