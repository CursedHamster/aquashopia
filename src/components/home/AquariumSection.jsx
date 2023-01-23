import { useContext, useState, useEffect } from "react";
import "./AquariumSection.css";
import { Button } from "../Button";
import ModalProduct from "../ModalProduct";
import useToggle from "../utils/useToggle";
import { Context } from "../../Context";

function AquariumSection() {
  const { products, getSpecialProduct, getPrice, addToCart } = useContext(
    Context
  );
  const [product, setProduct] = useState({});
  const [modalOpened, toggleModal] = useToggle(false);

  useEffect(() => {
    setProduct(getSpecialProduct("9"));
  }, [products]);

  const handleButtonClick = (e) => {
    addToCart(product);
    e.target.innerText = "added to cart";
    e.target.classList.add("focused");
    setTimeout(() => {
      e.target.innerText = "buy now";
      e.target.classList.remove("focused");
    }, 600);
  };

  return (
    <>
      <div className="aquarium-container section-padding">
        <h2 className="aquarium-title">YOU MAY NEED THIS</h2>
        <div className="aquarium-item">
          <div className="aquarium-image-container" onClick={toggleModal}>
            <img
              src={product.src}
              alt={product.title}
              className="aquarium-item-img"
            />
            <img
              className="bubble bubble-1"
              src="https://www.freepnglogos.com/uploads/bubbles/transparent-bubble-clip-art-creation-creatures-4.png"
              alt="Bubble 1"
            />
            <img
              className="bubble bubble-2"
              src="https://www.freepnglogos.com/uploads/bubbles/transparent-bubble-clip-art-creation-creatures-4.png"
              alt="Bubble 1"
            />
            <img
              className="bubble bubble-3"
              src="https://www.freepnglogos.com/uploads/bubbles/transparent-bubble-clip-art-creation-creatures-4.png"
              alt="Bubble 1"
            />
            <img
              className="bubble bubble-4"
              src="https://www.freepnglogos.com/uploads/bubbles/transparent-bubble-clip-art-creation-creatures-4.png"
              alt="Bubble 1"
            />
            <img
              className="bubble bubble-5"
              src="https://www.freepnglogos.com/uploads/bubbles/transparent-bubble-clip-art-creation-creatures-4.png"
              alt="Bubble 1"
            />
            <img
              className="bubble bubble-6"
              src="https://www.freepnglogos.com/uploads/bubbles/transparent-bubble-clip-art-creation-creatures-4.png"
              alt="Bubble 1"
            />
          </div>
          <div className="aquarium-info-container">
            <div className="aquarium-item-info">
              <h5 className="aquarium-item-text" onClick={toggleModal}>
                {product.title}
              </h5>
              {product.description && (
                <p className="aquarium-item-description">
                  {product.description}
                </p>
              )}
              <div className="aquarium-item-bottom">
                <div className="aquarium-price-div">
                  <p className="aquarium-item-price">
                    {getPrice(product.startingPrice, product.endingPrice)}
                  </p>
                  {product.discount > 0 && (
                    <p className="aquarium-item-discount">
                      {getPrice(
                        product.prediscountStartingPrice,
                        product.prediscountEndingPrice
                      )}
                    </p>
                  )}
                </div>
                <Button buttonStyle="btn--accent" onClick={handleButtonClick}>
                  BUY NOW
                </Button>
              </div>
            </div>
          </div>
          <ModalProduct
            product={product}
            modalOpened={modalOpened}
            toggleModal={toggleModal}
            getPrice={getPrice}
          />
        </div>
        <span
          className="circle"
          style={{
            top: "-5rem",
            left: "-5rem",
          }}
        ></span>
        <span
          className="circle"
          style={{
            top: "-13rem",
            left: "8rem",
          }}
        ></span>
        <span
          className="circle"
          style={{
            bottom: "-8rem",
            right: "2rem",
          }}
        ></span>
        <span
          className="circle"
          style={{
            bottom: "2rem",
            right: "30rem",
          }}
        ></span>
      </div>
    </>
  );
}

export default AquariumSection;
