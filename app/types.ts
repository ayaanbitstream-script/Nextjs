export interface HeroData {
  badge: string;
  headline: string[];
  subheadline: string;
  features: { text: string }[];
  cta: string;
  successRate: string;
  successLabel: string;
}

export interface StatsData {
  sectionTitle: string;
  sectionSubtitle: string;
  stats: { id: number; value: string; label: string }[];
}

export interface PartnersData {
  sectionTitle: string;
  sectionSubtitle: string;
  partners: { name: string; logo: string }[];
}

export interface EdgeFeature {
  title: string;
  desc: string;
  iconName: string;
}

export interface EdgeData {
  sectionTitle: string;
  sectionSubtitle: string;
  features: EdgeFeature[];
}

export interface DomainItem {
  title: string;
  iconName: string;
  fullWidth?: boolean;
}

export interface DomainData {
  sectionTitle: string;
  sectionSubtitle: string;
  domains: DomainItem[];
}

export interface CourseSegment {
  title: string;
  sub: string;
  img: string;
}

export interface CourseSegmentData {
  sectionTitle: string;
  sectionSubtitle: string;
  segments: CourseSegment[];
}

export interface ProfessionalItem {
  title: string;
  desc: string;
  iconName: string;
}

export interface SkillEnhancementData {
  badge: string;
  sectionTitle: string;
  professionals: ProfessionalItem[];
}

export interface CatStep {
  title: string;
  desc: string;
  iconName: string;
}

export interface CatData {
  sectionTitle: string;
  sectionSubtitle: string;
  steps: CatStep[];
}

export interface HiwStep {
  number: number;
  title: string;
  desc: string;
  iconName: string;
}

export interface HiwData {
  sectionTitle: string;
  sectionSubtitle: string;
  steps: HiwStep[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqData {
  sectionTitle: string;
  categories: string[];
  faqs: Record<string, FaqItem[]>;
}

export interface Testimonial {
  logo: string;
  quote: string;
}

export interface TestimonialsData {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: Testimonial[];
  ctaBanner: { title: string; subtitle: string; cta: string };
}

export interface FooterData {
  logo: string;
  tagline: string;
  companyLinks: string[];
  contact: { email: string; address: string };
  socials: string[];
  enquireCta: string;
  advisorText: string;
}

export interface SiteData {
  hero: HeroData;
  stats: StatsData;
  partners: PartnersData;
  edge: EdgeData;
  domain: DomainData;
  courseSegment: CourseSegmentData;
  skillEnhancement: SkillEnhancementData;
  cat: CatData;
  hiw: HiwData;
  faq: FaqData;
  testimonials: TestimonialsData;
  footer: FooterData;
}
