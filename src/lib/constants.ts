/* ============================================
   CONSTANTS — Site-wide data
   Services, navigation, stats, testimonials
   ============================================ */

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Modern Websites",
    description: "We build fast, reliable websites that work perfectly on all devices. Our websites are designed to convert visitors into customers and perform well in search engines.",
    icon: "code",
    features: ["Fast Loading", "Mobile Friendly", "Secure", "SEO Ready"],
    stats: { metric: "99.99%", label: "Uptime" },
    color: "#00d4ff",
  },
  {
    id: "seo-services",
    title: "SEO Services",
    subtitle: "Search Rankings",
    description: "We help your website rank higher in Google search results. Our SEO strategies bring more visitors to your site and help you reach customers looking for your services.",
    icon: "search",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "Link Building"],
    stats: { metric: "Higher", label: "Search Rankings" },
    color: "#8b5cf6",
  },
  {
    id: "ai-automation",
    title: "AI Automations",
    subtitle: "Smart Automation",
    description: "We use artificial intelligence to automate repetitive tasks and improve customer service. Chatbots, automated workflows, and intelligent systems that save time and reduce costs.",
    icon: "cpu",
    features: ["Chatbots", "Workflow Automation", "Lead Generation", "Customer Support"],
    stats: { metric: "24/7", label: "Automation" },
    color: "#00ff88",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    subtitle: "Business Insights",
    description: "We analyze your business data to help you make better decisions. Real-time dashboards and reports show exactly how your business is performing and where you can improve.",
    icon: "chart",
    features: ["Live Dashboards", "Performance Tracking", "Reports", "Business Insights"],
    stats: { metric: "Better", label: "Decisions" },
    color: "#ff6b35",
  },
] as const;

export const STATS = [
  { value: "150+", label: "Ecosystems Deployed" },
  { value: "98%", label: "Enterprise Retention" },
  { value: "$50M+", label: "Revenue Optimized" },
  { value: "24/7", label: "Autonomous Operations" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Nexovian didn't just rebuild our platform; they engineered a self-sustaining digital ecosystem that completely automated our multi-channel logistics. Our operational overhead dropped instantly.",
    author: "Sarah Chen",
    role: "VP of Engineering, TechScale Global",
    avatar: "SC",
  },
  {
    quote: "The autonomous AI workforce they deployed handles over 10,000 customer inquiries a week with human-like precision. It fundamentally shifted our profitability model in less than three months.",
    author: "Marcus Rivera",
    role: "CTO, CloudFlow Enterprise",
    avatar: "MR",
  },
  {
    quote: "Their predictive intelligence and Power BI integrations provided us with a level of data clarity we didn't know was possible. We are now forecasting market trends weeks in advance.",
    author: "Aisha Patel",
    role: "Director of Data Strategy, NovaBridge",
    avatar: "AP",
  },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: "techscale",
    title: "TechScale Platform",
    category: "Web Application",
    description: "Enterprise SaaS platform with AI-powered analytics dashboard.",
    tags: ["Next.js", "AI", "Supabase"],
    color: "#00d4ff",
  },
  {
    id: "cloudflow",
    title: "CloudFlow AI Agent",
    category: "AI Automation",
    description: "Autonomous customer support agent handling 10K+ queries daily.",
    tags: ["OpenAI", "LangChain", "Python"],
    color: "#8b5cf6",
  },
  {
    id: "novabridge",
    title: "NovaBridge Analytics",
    category: "Data Intelligence",
    description: "Real-time Power BI ecosystem tracking $50M in revenue streams.",
    tags: ["Power BI", "SQL", "Python"],
    color: "#00ff88",
  },
  {
    id: "meridian",
    title: "Meridian Commerce",
    category: "E-Commerce",
    description: "High-conversion e-commerce platform with AI product recommendations.",
    tags: ["Shopify", "Next.js", "AI"],
    color: "#ff6b35",
  },
] as const;

export const FAQS = [
  {
    question: "How does Nexovian differentiate from traditional digital agencies?",
    answer: "We are an engineering and systems architecture firm at our core. While traditional agencies focus purely on design, we architect resilient, AI-driven infrastructures. Every deployment integrates deep data intelligence, automated workflows, and enterprise-grade scalability.",
  },
  {
    question: "What is your typical deployment velocity and timeline?",
    answer: "We operate on aggressive, high-velocity sprints. Enterprise web platforms are typically deployed within 4-6 weeks. Custom AI neural networks and automation systems are operational within 2-3 weeks. Predictive SEO strategies begin compounding ROI within the first 60 days.",
  },
  {
    question: "Do you offer post-deployment architecture scaling and support?",
    answer: "Absolutely. We offer dedicated infrastructure management retainers that include active server monitoring, continuous AI model tuning, security patching, and technical optimization to ensure your systems scale frictionlessly with your business.",
  },
  {
    question: "Which industries benefit most from your technology stack?",
    answer: "We specialize in accelerating growth for SaaS platforms, enterprise tech startups, scale-ups, and high-volume e-commerce brands. Our ideal partners are forward-thinking organizations looking to transition from manual processes to autonomous operations.",
  },
  {
    question: "Can your AI solutions integrate with our legacy enterprise software?",
    answer: "Yes. Our engineering team specializes in connecting neural models with complex legacy systems, proprietary ERPs, and custom CRMs. We bridge the gap between traditional infrastructure and modern cognitive automation.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Launch",
    price: "$1,000",
    period: "one-time",
    description: "Perfect for startups and small businesses ready to establish a premium digital presence.",
    features: [
      "Custom Next.js Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "3 Pages Included",
      "1 Month Support",
    ],
    highlighted: false,
    cta: "Deploy System",
  },
  {
    name: "Growth",
    price: "$500",
    period: "/month",
    description: "For scaling companies that need ongoing SEO, automation, and technical optimization.",
    features: [
      "Everything in Launch",
      "Advanced SEO Campaign",
      "AI Chatbot Deployment",
      "Monthly Analytics Reports",
      "CRM Automation Setup",
      "Priority Support",
      "Dedicated Account Manager",
    ],
    highlighted: true,
    cta: "Initialize Growth",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "Full-stack AI infrastructure for enterprises requiring custom architecture and dedicated teams.",
    features: [
      "Everything in Growth",
      "Custom AI Agent Development",
      "Power BI Dashboard Suite",
      "Multi-Platform Automation",
      "Dedicated Engineering Team",
      "SLA Guarantee",
      "24/7 Monitoring",
      "Architecture Consulting",
    ],
    highlighted: false,
    cta: "Request Architecture Review",
  },
] as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "SEO Services", href: "/services#seo-services" },
    { label: "AI Automation", href: "/services#ai-automation" },
    { label: "Data Analytics", href: "/services#data-analytics" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
