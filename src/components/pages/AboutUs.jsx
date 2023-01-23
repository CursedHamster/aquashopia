import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="left" id="where-are-we-located">
        <img
          src="https://i.ytimg.com/vi/CnnJksrQPV4/maxresdefault.jpg"
          alt="About Us 1"
        />
        <div className="text">
          <h2>
            Where are we <span className="accent-text">located</span>
          </h2>
          <p>
            Et quis consectetur officia reprehenderit commodo incididunt id
            aute.
          </p>
          <p>
            Eiusmod eiusmod id ullamco eiusmod aute mollit proident sunt aliqua
            sint. Magna id ad nisi sit sit. Mollit sit veniam et dolor magna
            Lorem aliqua mollit est. In ex dolore aliqua eiusmod fugiat proident
            esse ullamco quis dolor quis. Sunt occaecat dolore enim consequat ad
            consequat.
          </p>
        </div>
        <svg
          className="svg bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#251d3c"
            fillOpacity="1"
            d="M0,64L80,80C160,96,320,128,480,165.3C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="right" id="how-we-were-opened">
        <img
          src="https://www.gannett-cdn.com/presto/2021/02/18/NPPP/97d4073d-a02b-439b-8c78-018b08a2a75c-WPB_FISH_BUSINESS_1.JPG"
          alt="About Us 2"
        />
        <div className="text">
          <img
            className="watermark"
            src="https://static.vecteezy.com/system/resources/thumbnails/001/196/124/small/splash.png"
            alt="Watermark"
          />
          <h2>
            How we <span className="accent-text">were opened</span>
          </h2>
          <p>
            Consequat officia labore commodo cillum reprehenderit labore
            exercitation veniam culpa esse occaecat et. Voluptate ad est qui
            fugiat esse ullamco nostrud fugiat est officia.
          </p>
          <p>
            Nulla aute laboris non officia incididunt adipisicing veniam esse
            incididunt esse.
          </p>
        </div>
        <svg
          className="svg bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,256L80,266.7C160,277,320,299,480,266.7C640,235,800,149,960,144C1120,139,1280,213,1360,250.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="left" id="who-works-here">
        <img
          src="https://cdn.shopify.com/s/files/1/0563/5286/6500/files/206132696_1503350580019813_5657424592146894781_n.jpg?v=1629296793"
          alt="About Us 3"
        />
        <div className="text">
          <h2>
            <span className="accent-text">Who</span> works here
          </h2>
          <p>
            Do nulla deserunt sint laboris. Qui qui in velit nostrud Lorem in
            laboris ex ex tempor mollit sint aute cillum. Ipsum deserunt cillum
            aliqua deserunt tempor minim sunt minim non minim tempor.
          </p>
        </div>
      </section>
      <div className="promos">
        <div className="promo">
          <i className="fas fa-fish"></i>
          <p>Always healthy fish</p>
        </div>
        <div className="promo">
          <i className="fas fa-box"></i>
          <p>Free shipping on orders $300+</p>
        </div>
        <div className="promo">
          <i className="fas fa-shipping-fast"></i>
          <p>Delivery up to 7 days</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
