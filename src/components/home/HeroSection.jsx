import { Button } from "../Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container section-padding">
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <h1>ONLINE TROPICAL FISH STORE</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/assortment"
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
