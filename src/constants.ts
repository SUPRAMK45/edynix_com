import {Code, Bot, BrainCircuit, Zap, ArrowRight, Lightbulb, Workflow, BarChart} from 'lucide-react';

export const services = [
  {
    id: "web-dev",
    icon: Code,
    title: 'Website Development',
    description: 'Custom, high-performance web applications built for scale and speed.',
    tags: ['Next.js', 'React', 'TypeScript', 'Scalable'],
    pricing: [
        { name: "Starter", price: "2,000 INR", features: ["Basic Implementation", "Standard Support", "Fast Delivery"] },
        { name: "Professional", price: "4,000 INR", features: ["Advanced Features", "Priority Support", "Free .com Domain", "Custom Analytics"] },
        { name: "Enterprise", price: "5,000 INR", features: ["Full Suite", "Dedicated Manager", "24/7 Priority Support", "Unlimited Customization"] }
    ]
  },
  {
    id: "ai-receptionist",
    icon: Bot,
    title: 'AI Receptionists',
    description: 'Automated 24/7 intelligent voice and chat receptionists for your business.',
    tags: ['24/7 Support', 'Voice-Enabled', 'Natural Language', 'Seamless'],
    pricing: [
        { name: "Starter", price: "3,000 INR", features: ["Voice/Chat bot", "Standard Setup", "Basic Analytics"] },
        { name: "Professional", price: "5,000 INR", features: ["Multi-Channel", "Custom Integration", "Priority Support"] },
        { name: "Enterprise", price: "7,000 INR", features: ["Unlimited Throughput", "Custom Model", "Dedicated Manager"] }
    ]
  },
  {
    id: "ai-automation",
    icon: BrainCircuit,
    title: 'AI Automation',
    description: 'Seamlessly integrate cutting-edge AI models into your existing workflows.',
    tags: ['Workflow Automation', 'AI Agents', 'Integrations', 'Optimization'],
    pricing: [
        { name: "Starter", price: "3,500 INR", features: ["1 Workflow", "Basic Integration", "Standard Support"] },
        { name: "Professional", price: "6,000 INR", features: ["3 Workflows", "Custom API", "Priority Support"] },
        { name: "Enterprise", price: "8,000 INR", features: ["Unlimited Workflows", "Dedicated Developer", "24/7 Support"] }
    ]
  },
  {
    id: "ui-ux",
    icon: Lightbulb,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive, and conversion-focused interfaces.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    pricing: [
        { name: "Starter", price: "1,500 INR", features: ["Basic Wireframe", "Mobile Responsive", "Style Guide"] },
        { name: "Professional", price: "3,000 INR", features: ["High-Fidelity Prototype", "Component Library", "User Testing"] },
        { name: "Enterprise", price: "4,500 INR", features: ["Full Design System", "Research Deep-Dive", "Unlimited Revisions"] }
    ]
  },
  {
    id: "cloud-strategy",
    icon: Workflow,
    title: 'Cloud Strategy',
    description: 'Robust and scalable cloud infrastructure for modern applications.',
    tags: ['AWS', 'Google Cloud', 'Terraform', 'DevOps'],
    pricing: [
        { name: "Starter", price: "2,500 INR", features: ["Cloud Audit", "Basic Setup", "Standard Security"] },
        { name: "Professional", price: "4,500 INR", features: ["Infrastructure as Code", "Backup & Scaling", "Monitoring"] },
        { name: "Enterprise", price: "6,500 INR", features: ["Multi-Cloud Setup", "SLA Guarantee", "24/7 Managed"] }
    ]
  },
  {
    id: "data-analytics",
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Unlock insights from your data with AI-driven analytics.',
    tags: ['Big Data', 'ML Models', 'Visualization', 'Strategy'],
    pricing: [
        { name: "Starter", price: "2,000 INR", features: ["Basic Reporting", "Data Cleaning", "Simple Viz"] },
        { name: "Professional", price: "4,000 INR", features: ["Dashboards", "ML Predictions", "Automated Insights"] },
        { name: "Enterprise", price: "6,000 INR", features: ["Custom Data Lake", "Strategy Workshop", "Ongoing Support"] }
    ]
  },
];
