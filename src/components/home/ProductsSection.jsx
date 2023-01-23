import { useContext } from "react";
import Cards from "../Cards";
import "./ProductsSection.css";
import { Context } from "../../Context";

function ProductsSection() {
  const { reversedProducts, getPrice } = useContext(Context);

  return (
    <div className="products-section section-padding">
      <h2>WHAT'S HOT</h2>
      <h5 className="products-section-see-more">
        <a href="/assortment">
          See more <i className="fa-solid fa-caret-right"></i>
        </a>
      </h5>
      <Cards
        products={reversedProducts
          .filter((prod) => prod.category === "fish")
          .slice(0, 10)}
        getPrice={getPrice}
      />
      <h5 className="products-section-see-more">
        <a href="/assortment">
          See more <i className="fa-solid fa-caret-right"></i>
        </a>
      </h5>
    </div>
  );
}

export default ProductsSection;
