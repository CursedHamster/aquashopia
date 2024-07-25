import { useContext } from "react";
import ModalImage from "./ModalImage";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import useToggle from "./utils/useToggle";
import productFilters from "../assets/data/productFilters";
import "./ModalProduct.css";

function ModalProduct(props) {
  const { product, getPrice, modalOpened, toggleModal } = props;
  const {
    title,
    src,
    startingPrice,
    endingPrice,
    discount,
    prediscountStartingPrice,
    prediscountEndingPrice,
    label,
    colors,
    description,
    category,
  } = props.product;
  const colorsData = productFilters[1].values;
  const colorObjects = colors
    ? colors.map((color) => {
        const colorCode = colorsData.find(
          (obj) => obj.value === color
        ).colorCode;
        return (
          <div key={color} className="modal-product-color">
            <div
              className="modal-product-color-icon"
              style={{ "--color-icon-background": colorCode }}
            ></div>
            <div className="modal-product-color-name">{color}</div>
          </div>
        );
      })
    : null;

  const { addToCart } = useContext(Context);

  const [imageOpened, toggleImageOpened] = useToggle(false);

  const handleButtonClick = (e) => {
    addToCart(product);
    e.target.innerText = "added to cart";
    e.target.classList.add("focused");
    setTimeout(() => {
      e.target.innerText = "add to cart";
      e.target.classList.remove("focused");
    }, 600);
  };

  return (
    <>
      {modalOpened && (
        <div className="modal-product">
          <div className="modal-product-body">
            <i className="fas fa-xmark" onClick={toggleModal}></i>
            <div className="image-and-button">
              <figure
                className={"modal-product-image-wrap " + (label ? label : "")}
                data-category={label}
                onClick={toggleImageOpened}
              >
                <img
                  src={src}
                  alt={title}
                  className="modal-product-image-background"
                />
                <img src={src} alt={title} className="modal-product-image" />
              </figure>
              <Button buttonStyle="btn--accent" onClick={handleButtonClick}>
                Add to cart
              </Button>
            </div>
            <div className="modal-product-info">
              <h2 className="modal-product-main-title">{title}</h2>
              <div className="price-and-category">
                <div className="price-div">
                  <h4 className="price">
                    {getPrice(startingPrice, endingPrice)}
                  </h4>
                  {discount > 0 && (
                    <p className="price-discount">
                      {getPrice(
                        prediscountStartingPrice,
                        prediscountEndingPrice
                      )}
                    </p>
                  )}
                </div>
                <Link
                  className="modal-product-category-title"
                  to={"/assortment/" + category}
                  onClick={toggleModal}
                >
                  {category && category.split("-").join(" ")}
                </Link>
              </div>
              {colors && colors.length > 0 && (
                <div className="modal-product-info-div">
                  <h4 className="modal-product-info-title">Colors</h4>
                  <div className="modal-product-colors">{colorObjects}</div>
                </div>
              )}
              {description && (
                <div className="modal-product-info-div description">
                  <h4 className="modal-product-info-title">Description</h4>
                  <div className="modal-product-description">{description}</div>
                </div>
              )}
            </div>
          </div>
          <ModalImage
            src={src}
            alt={title}
            imageOpened={imageOpened}
            toggleImageOpened={toggleImageOpened}
          />
        </div>
      )}
    </>
  );
}

export default ModalProduct;
