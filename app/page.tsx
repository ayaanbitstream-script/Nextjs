import { siteData } from "./lib/data";
import HomeSection from "./sections/Home";
import StatsSection from "./sections/Stats";
import ClientsSection from "./sections/Clients";
import EdgeSection from "./sections/Edge";
import DomainSection from "./sections/Domain";
import CourseSegmentSection from "./sections/CourseSegment";
import SkillEnhancementSection from "./sections/SkillEnhancement";
import CatSection from "./sections/Cat";
import HiwSection from "./sections/HiW";
import FaqSection from "./sections/Faqs";
import TestimonialSection from "./sections/Testimonial";

// No async fetch needed — data is imported directly at build time.
// The /api/data route still exists for any client-side or external consumers.
export default function Page() {
  return (
    <>
      <HomeSection         data={siteData.hero} />
      <StatsSection        data={siteData.stats} />
      <ClientsSection      data={siteData.partners} />
      <EdgeSection         data={siteData.edge} />
      <DomainSection       data={siteData.domain} />
      <CourseSegmentSection data={siteData.courseSegment} />
      <SkillEnhancementSection data={siteData.skillEnhancement} />
      <CatSection          data={siteData.cat} />
      <HiwSection          data={siteData.hiw} />
      <FaqSection          data={siteData.faq} />
      <TestimonialSection  data={siteData.testimonials} />
    </>
  );
}
