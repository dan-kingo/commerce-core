interface PricingPlan {
  name: string;
  price: string;
  subtitle?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "0/mo",
    subtitle: "(Free Forever)",
    features: [
      "1 Basic Storefront",
      "Drag & Drop Customization",
      "Integrated Quick Stats",
      "2% Transaction Fee",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$49/mo",
    subtitle: "(Billed annually)",
    features: [
      "5 High-Performance Storefronts",
      "Global Edge Delivery",
      "Full Analytics & Revenue Charts",
      "100+ Payment Gateways",
      "Priority Support",
      "0.5% Transaction Fee",
    ],
    cta: "Select Pro Plan",
    highlighted: true,
    badge: "MOST POPULAR",
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Unlimited Storefronts",
      "Dedicated Account Manager",
      "Custom API Access",
      "SLA Guarantee",
      "0% Transaction Fee",
      "SSO (Single Sign-On)",
    ],
    cta: "Contact Sales",
  },
];
const navLinks = [
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Marketplace",
    path: "marketplace",
  },
  {
    name: "Resources",
    path: "resources",
  },
];

const featureCards = [
  {
    iconName: "lucide:store",
    title: "Beautiful, customizable storefronts that convert.",
    heading: "Powerful Storefront",
    description:
      "Get a holistic view of your operations with our intuitive dashboard, providing real-time insights and analytics to help you make informed decisions.",
  },
  {
    iconName: "lucide:blocks",
    title: "Seamless integration with your existing tools and workflows.",
    heading: "Seamless Integrations",
    description:
      "Get a holistic view of your operations with our intuitive dashboard, providing real-time insights and analytics to help you make informed decisions.",
  },
  {
    iconName: "lucide:bar-chart",
    title: "Comprehensive analytics and reporting to your business.",
    heading: "Comprehensive Analytics",
    description:
      "Get a holistic view of your operations with our intuitive dashboard, providing real-time insights and analytics to help you make informed decisions.",
  },
];

export { navLinks, featureCards,plans };
