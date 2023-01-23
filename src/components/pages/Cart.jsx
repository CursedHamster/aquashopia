import { useContext, useState } from "react";
import CartItem from "../CartItem";
import { Button } from "../Button";
import { Context } from "../../Context";
import "../Cart.css";

function Cart() {
  const {
    cartProducts,
    getPrice,
    calculateTotalCartProductsPrice,
    emptyCart,
  } = useContext(Context);
  const cartObjects = cartProducts.map((cartProduct) => (
    <CartItem key={cartProduct.id} product={cartProduct} />
  ));

  const [ordering, setOrdering] = useState(false);

  function handleCheckout() {
    setOrdering(true);
    setTimeout(() => {
      emptyCart();
      setOrdering(false);
    }, 3000);
  }

  return (
    <div className="cart section-padding">
      <h1>Shopping Cart</h1>
      {cartProducts.length > 0 ? (
        <>
          <div className="cart-items">
            <div className="cart-items-block title">
              <p className="product">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p className="total">Total</p>
            </div>
            {cartObjects}
          </div>
          <h2 className="subtotal">
            Subtotal: {getPrice(calculateTotalCartProductsPrice())}
          </h2>
        </>
      ) : (
        <h2 className="empty-cart-text">Your cart is currently empty</h2>
      )}
      {cartProducts.length > 0 ? (
        <Button
          buttonStyle="btn--accent"
          buttonSize="btn--large"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      ) : (
        <Button
          buttonStyle="btn--accent"
          buttonSize="btn--large"
          to={"/assortment"}
        >
          Go back to shopping
        </Button>
      )}

      {ordering && (
        <div className="ordering">
          <div className="ring">
            <div className="outer-ring"></div>
            <div className="inner-ring">
              <i className="fish fas fa-fish"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
