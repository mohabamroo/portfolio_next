import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import ServicesSection from "./components/services";
import StatsSection from "./components/stats";
import SkillSection from "./components/skills";
import Footer from "./components/footer";
import HobbiesSection from "./components/hobbies";
import ContactSection from "./components/contact";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-neutral text-neutral-content">
        <Navbar />
        <div className="pt-10 flex flex-col items-center justify-between">
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <SkillSection />
          <HobbiesSection />

          <ContactSection />

          <Footer />
        </div>
      </main>
    </>
  );
}
