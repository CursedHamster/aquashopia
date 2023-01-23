import { useContext } from "react";
import { Button } from "./Button";
import ModalProduct from "./ModalProduct";
import useToggle from "./utils/useToggle";
import { Context } from "../Context";

function CardItem(props) {
  const {
    title,
    src,
    startingPrice,
    endingPrice,
    discount,
    prediscountStartingPrice,
    prediscountEndingPrice,
    label,
    i,
  } = props.product;
  const [modalOpened, toggleModal] = useToggle(false);
  const { getPrice, addToCart } = useContext(Context);

  const handleButtonClick = (e) => {
    addToCart(props.product);
    e.target.innerText = "added to cart";
    e.target.classList.add("focused");
    setTimeout(() => {
      e.target.innerText = "buy now";
      e.target.classList.remove("focused");
    }, 600);
  };

  return (
    <>
      <li className="cards__item" data-number={i}>
        <div className="cards__item__link">
          <figure
            className={"cards__item__pic-wrap " + (label ? "label" : "")}
            data-category={label}
            onClick={toggleModal}
          >
            <img src={src} alt="Fish" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text" onClick={toggleModal}>
              {title}
            </h5>
            <div className="cards__item__bottom">
              <div className="price-div">
                <p className="price">{getPrice(startingPrice, endingPrice)}</p>
                {discount > 0 && (
                  <p className="price-discount">
                    {getPrice(prediscountStartingPrice, prediscountEndingPrice)}
                  </p>
                )}
              </div>
              <Button buttonStyle="btn--accent" onClick={handleButtonClick}>
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </li>
      <ModalProduct
        product={props.product}
        modalOpened={modalOpened}
        toggleModal={toggleModal}
        getPrice={getPrice}
      />
    </>
  );
}

export default CardItem;
