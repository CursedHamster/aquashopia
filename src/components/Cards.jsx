import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  const { products } = props;
  const productCards = products.map((product, i) => {
    return (
      <CardItem
        key={product.id}
        product={product}
        path="/assortment"
        i={i + 1}
      />
    );
  });

  return (
    <div className="cards__container">
      <ul className="cards__items">
        {products.length <= 0 ? (
          <p className="nothing-found">Nothing found :(</p>
        ) : (
          productCards
        )}
      </ul>
    </div>
  );
}

export default Cards;
