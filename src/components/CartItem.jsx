import { useContext } from "react";
import { Context } from "../Context";

function CartItem(props) {
  const { title, src, startingPrice, quantity, total } = props.product;
  const { removeFromCart, getPrice, changeQuantity } = useContext(Context);

  const handleQuantityChange = (e) => {
    changeQuantity(props.product, parseInt(e.target.value));
  };

  return (
    <div className="cart-items-block item">
      <div className="image-and-title">
        <div className="image-and-remove">
          <img className="image" src={src} alt={title} />
          <div
            className="remove-from-cart"
            onClick={() => removeFromCart(props.product)}
            title="Remove product from cart"
          >
            <i className="fas fa-times"></i>
            <p>Remove</p>
          </div>
        </div>
        <h3 className="title" title={title}>
          {title}
        </h3>
      </div>
      <p className="price">{getPrice(startingPrice)}</p>
      <input
        className="quantity"
        type="number"
        min="1"
        max="99"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <p className="total">{getPrice(total)}</p>
    </div>
  );
}

export default CartItem;
