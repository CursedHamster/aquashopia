import { Button } from "../Button";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <div ref={props.heroRef} className="hero-container section-padding">
      <div className="hero-background">
        <video src="/videos/video-3.mp4" autoPlay loop muted />
      </div>
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
