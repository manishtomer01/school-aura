import gsap from "gsap";
import { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import BenefitsSection from "../components/Benefits";
import { CampusVisitSection } from "../components/CampusVisitSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MobileAppSection from "../components/MobileAppSection";
import Navbar from "../components/Navbar";
import Services from "../components/Sevices";
import { StatsSection } from "../components/StatsSection";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  const elementsRef = useRef([]);
  useEffect(() => {
    elementsRef.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);
  return (
    <div className="flex justify-center flex-col items-center ">
      <Header />
      <Navbar />
      <HeroSection />
      <Banner elementsRef={elementsRef} />
      <Services elementsRef={elementsRef} />
      <BenefitsSection />
      <MobileAppSection elementsRef={elementsRef} />
      <StatsSection elementsRef={elementsRef} />
      <CampusVisitSection elementsRef={elementsRef} />
      <Testimonials elementsRef={elementsRef} />
      <Footer elementsRef={elementsRef} />
    </div>
  );
}
