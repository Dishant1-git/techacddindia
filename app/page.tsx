import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import LeadHero from "@/components/LeadHero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Branches from "@/components/Branches";
import Reviews from "@/components/Reviews";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />

      <main id="top">
        <LeadHero />
        <About />
        <Courses />
        <Branches />
        <Reviews />
        <FinalCta />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
