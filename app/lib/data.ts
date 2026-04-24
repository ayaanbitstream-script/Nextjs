import { SiteData } from "../types";

// ─── HERO ────────────────────────────────────────────────────────────────────
const heroData = {
  badge: "Next-Gen Enterprise",
  headline: ["Next-Gen", "Expertise", "For Your", "Enterprise"],
  subheadline:
    "Cultivate high-performance teams through expert-led immersive learning experiences designed for the modern digital era.",
  features: [
    { text: "Tailored Solutions" },
    { text: "Industry Insights" },
    { text: "Expert Guidance" },
  ],
  cta: "Enquire Now",
  successRate: "98%",
  successLabel: "Success Rate",
};

// ─── STATS ───────────────────────────────────────────────────────────────────
const statsData = {
  sectionTitle: "Our Track Record",
  sectionSubtitle: "The Numbers Behind Our Success",
  stats: [
    { id: 1, value: "10K+", label: "Professionals Trained For Exceptional Career Success" },
    { id: 2, value: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
    { id: 3, value: "5K+",  label: "Active Learners Engaged In Dynamic Courses" },
  ],
};

// ─── PARTNERS ────────────────────────────────────────────────────────────────
const partnersData = {
  sectionTitle: "Our Proven Partnerships",
  sectionSubtitle: "Successful Collaborations With the Industry's Best",
  partners: [
    { name: "Reliance", logo: "rel.png" },
    { name: "HCL",      logo: "hcl.png" },
    { name: "IBM",      logo: "ibm.png" },
    { name: "CRIF",     logo: "crif.png" },
    { name: "ADP",      logo: "adp.png" },
    { name: "Bayer",    logo: "bayer.png" },
  ],
};

// ─── EDGE ────────────────────────────────────────────────────────────────────
const edgeData = {
  sectionTitle: "The Accredian Edge",
  sectionSubtitle: "Key Aspects of Our Strategic Training",
  features: [
    { title: "Tailored Solutions",    desc: "Programs customized to your organization's goals.",        iconName: "lightbulb" },
    { title: "Expert Guidance",       desc: "Learn from industry leaders with real-world success.",      iconName: "users" },
    { title: "Innovative Framework",  desc: "Proprietary methods for impactful results.",               iconName: "refresh" },
    { title: "Advanced Technology",   desc: "State-of-the-art LMS for seamless experiences.",           iconName: "cpu" },
    { title: "Diverse Offerings",     desc: "Courses across industries and skill levels.",              iconName: "expand" },
    { title: "Proven Impact",         desc: "Trusted by leading organizations for ROI.",               iconName: "target" },
    { title: "Flexible Delivery",     desc: "Online and offline options tailored to you.",             iconName: "cube" },
  ],
};

// ─── DOMAIN ──────────────────────────────────────────────────────────────────
const domainData = {
  sectionTitle: "Our Domain Expertise",
  sectionSubtitle: "Specialized Programs Designed to Fuel Innovation",
  domains: [
    { title: "Product & Innovation Hub", iconName: "lightbulb" },
    { title: "Gen-AI Mastery",           iconName: "brain" },
    { title: "Leadership Elevation",     iconName: "brain" },
    { title: "Tech & Data Insights",     iconName: "brain" },
    { title: "Operations Excellence",    iconName: "settings" },
    { title: "Digital Enterprise",       iconName: "globe" },
    { title: "Fintech Innovation Lab",   iconName: "wallet", fullWidth: true },
  ],
};

// ─── COURSE SEGMENTS ─────────────────────────────────────────────────────────
const courseSegmentData = {
  sectionTitle: "Tailored Course Segmentation",
  sectionSubtitle: "Explore Custom-fit Courses Designed to Address Every Professional Focus",
  segments: [
    { title: "Program Specific",  sub: "Certificate, Executive, Post Graduate Certificate", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" },
    { title: "Industry Specific", sub: "IT, Healthcare, Retail, Finance, Manufacturing",    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { title: "Topic Specific",    sub: "Machine Learning, Design, Analytics, Cyber Security",img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    { title: "Level Specific",    sub: "Senior Leadership, Mid-Career Professionals, Freshers", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400" },
  ],
};

// ─── SKILL ENHANCEMENT ───────────────────────────────────────────────────────
const skillEnhancementData = {
  badge: "Who Should Join?",
  sectionTitle: "Strategic Skill Enhancement",
  professionals: [
    { title: "Tech Professionals",    desc: "Enhance expertise, embrace tech, drive innovation.",       iconName: "monitor" },
    { title: "Non-Tech Professionals",desc: "Adopt digitally, collaborate in tech environments.",       iconName: "cpu" },
    { title: "Emerging Professionals",desc: "Develop powerful skills for rapid career growth.",         iconName: "graduation" },
    { title: "Senior Professionals",  desc: "Strengthen leadership, enhance strategic decisions.",      iconName: "briefcase" },
  ],
};

// ─── CAT FRAMEWORK ───────────────────────────────────────────────────────────
const catData = {
  sectionTitle: "The CAT Framework",
  sectionSubtitle: "Our Proven Approach to Learning Excellence",
  steps: [
    { title: "Concept",      desc: "Foundational knowledge for deep subject understanding.",      iconName: "lightbulb" },
    { title: "Application",  desc: "Practical implementation through real-world scenarios.",      iconName: "monitor" },
    { title: "Tools",        desc: "Resources and techniques for effective skill mastery.",        iconName: "settings" },
  ],
};

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────
const hiwData = {
  sectionTitle: "How We Deliver Results That Matter?",
  sectionSubtitle: "A Structured Three-Step Approach to Skill Development",
  steps: [
    { number: 1, title: "Skill Gap Analysis",       desc: "Assess team skill gaps and developmental needs.",                              iconName: "monitor" },
    { number: 2, title: "Customized Training Plan", desc: "Create a tailored roadmap addressing organizational goals.",                   iconName: "monitor" },
    { number: 3, title: "Flexible Program Delivery",desc: "Deliver adaptable programs aligned with industry and organizational needs.",   iconName: "monitor" },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqData = {
  sectionTitle: "Frequently Asked Questions",
  categories: ["About the Course", "About the Delivery", "Miscellaneous"],
  faqs: {
    "About the Course": [
      { q: "What types of corporate training programs does Accredian offer?", a: "Accredian offers specialized corporate programs in Product Management, Gen-AI, Data Science, and Leadership designed to fuel organizational innovation." },
      { q: "What domain specializations are available?",                      a: "Available domains include Fintech Innovation, Digital Enterprise, Operations Excellence, and Tech & Data Insights." },
    ],
    "About the Delivery": [
      { q: "Is the training delivered online or offline?",            a: "We offer flexible delivery options including live virtual sessions, on-site corporate workshops, and hybrid learning models." },
      { q: "How long do the typical training sessions last?",         a: "Session duration varies by program, ranging from intensive 2-day workshops to comprehensive 6-month specialized tracks." },
    ],
    "Miscellaneous": [
      { q: "Do participants receive certification?",       a: "Yes, all participants receive industry-recognized credentials upon successful completion of the assessment and project work." },
      { q: "Are there post-training support systems?",    a: "We provide 6 months of alumni support, including access to our advanced LMS and periodic refreshers." },
    ],
  },
};

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
const testimonialsData = {
  sectionTitle: "Testimonials from Our Partners",
  sectionSubtitle: "What Our Clients Are Saying",
  testimonials: [
    { logo: "adp.png",   quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process." },
    { logo: "bayer.png", quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way." },
    { logo: "ibm.png",    quote: "The strategic framework provided by Accredian has been instrumental in our team's digital transformation. Their industry insights and hands-on approach make them a top-tier training partner." },
  ],
  ctaBanner: {
    title: "Want to Learn More About Our Training Solutions?",
    subtitle: "Get Expert Guidance for Your Team's Success!",
    cta: "Contact Us",
  },
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const footerData = {
  logo: "accredian",
  tagline: "credentials that matter",
  companyLinks: ["About", "Blog", "Why Accredian"],
  contact: {
    email: "enterprise@accredian.com",
    address: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
  },
  socials: ["facebook", "linkedin", "twitter", "instagram", "youtube"],
  enquireCta: "Enquire Now",
  advisorText: "Speak with our Advisor",
};

// ─── EXPORT ──────────────────────────────────────────────────────────────────
export const siteData: SiteData = {
  hero:             heroData,
  stats:            statsData,
  partners:         partnersData,
  edge:             edgeData,
  domain:           domainData,
  courseSegment:    courseSegmentData,
  skillEnhancement: skillEnhancementData,
  cat:              catData,
  hiw:              hiwData,
  faq:              faqData,
  testimonials:     testimonialsData,
  footer:           footerData,
};
