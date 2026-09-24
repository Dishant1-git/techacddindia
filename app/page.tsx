import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AiBanner from "@/components/AiBanner";
import DemoStrip from "@/components/DemoStrip";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyTechcadd from "@/components/WhyTechcadd";
import Testimonials from "@/components/Testimonials";
import Modules from "@/components/Modules";
import Technologies from "@/components/Technologies";
import Faq from "@/components/Faq";
import Blogs from "@/components/Blogs";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />

      <main id="top">
        <Hero />
        <AiBanner />
        <DemoStrip />
        <About />
        <HowItWorks />
        <Categories />
        <FeaturedCourses />
        <WhyTechcadd />
        <Testimonials />
        <Modules />
        <Technologies />
        <Faq />
        <Blogs />
        <FinalCta />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
