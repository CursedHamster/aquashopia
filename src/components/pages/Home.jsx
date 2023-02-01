import { useState, useEffect, useRef, createRef } from "react";
import HeroSection from "../home/HeroSection";
import ProductsSection from "../home/ProductsSection";
import SubscriptionSection from "../home/SubscriptionSection";
import AquariumSection from "../home/AquariumSection";

function Home(props) {
  const { toggleTransparent } = props;
  const heroRef = createRef();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  useEffect(() => {
    console.log(heroRef);
    const observer = new IntersectionObserver(toggleTransparent, options);
    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [heroRef, options]);

  return (
    <>
      <HeroSection heroRef={heroRef} />
      <SubscriptionSection />
      <ProductsSection />
      <AquariumSection />
    </>
  );
}

export default Home;
