import gsap from "gsap";

function animateFishIntoTank(fish, tank) {
  gsap.to(".transparent-div", { display: "block" });
  gsap.fromTo(
    fish,
    { display: "none", transform: "translateX(0)", rotation: 0 },
    {
      display: "inline-block",
      rotation: 360,
      transform: "translateX(20vw)",
      duration: 1,
    }
  );
  gsap.to(fish, {
    rotation: 360,
    transform: "translate(20vw,30vh)",
    duration: 1,
    delay: 1,
  });
  gsap.fromTo(
    tank,
    { display: "none", transform: "translateY(10vh)" },
    {
      display: "inline-block",
      transform: "translateY(-10vh)",
      duration: 1,
      delay: 1,
    }
  );
  gsap.to(fish, { display: "none", delay: 2 });
  gsap.to(tank, { display: "none", delay: 2 });
  gsap.to(".transparent-div", { display: "none", delay: 2 });
}

export { animateFishIntoTank };
