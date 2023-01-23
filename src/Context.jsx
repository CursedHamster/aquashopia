import { useState, useEffect, createContext } from "react";
import productsData from "./assets/data/products";

const Context = createContext();

function ContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [reversedProducts, setReversedProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const productCategories = [
    "all",
    "fish",
    "aquarium-plants",
    "fish-food",
    "fish-tanks",
    "aquarium-essentials",
  ];
  const saveLocalCartProducts = (cProducts) => {
    localStorage.setItem("cartProducts", JSON.stringify(cProducts));
  };

  useEffect(() => {
    setProducts(
      productsData.map((product) =>
        product.discount > 0 ? getProductWithDiscountedPrices(product) : product
      )
    );

    const localCartProducts = localStorage.getItem("cartProducts");

    if (localCartProducts) {
      setCartProducts(
        JSON.parse(localCartProducts) === "[]"
          ? []
          : JSON.parse(localCartProducts)
      );
    }
  }, []);

  useEffect(() => {
    if (cartProducts.length > 0) {
      saveLocalCartProducts(cartProducts);
    }
  }, [cartProducts]);

  useEffect(() => {
    setReversedProducts(getReversedProducts());
  }, [products]);

  function getProductWithDiscountedPrices(product) {
    return {
      ...product,
      startingPrice: Number(
        (product.startingPrice * (1 - product.discount)).toFixed(2)
      ),
      endingPrice: product.endingPrice
        ? Number((product.endingPrice * (1 - product.discount)).toFixed(2))
        : product.endingPrice,
      prediscountStartingPrice: product.startingPrice,
      prediscountEndingPrice: product.endingPrice,
    };
  }

  function getPrice(sPrice, ePrice) {
    let price = sPrice ? sPrice : 0;
    if (!ePrice) {
      return toCurrency(price);
    } else {
      return toCurrency(price) + " - " + ePrice;
    }
  }

  function toCurrency(num) {
    return Number(num).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function getSpecialProduct(id) {
    if (products.length > 0) {
      const specialProduct = products.find((product) => product.id === id);
      return specialProduct ? specialProduct : products[0];
    }

    return {};
  }

  function getReversedProducts() {
    const productsCopy = products;
    return productsCopy.reverse();
  }

  function changeQuantity(product, newQuantity) {
    setCartProducts((prev) =>
      prev.map((obj) => {
        if (obj.id === product.id) {
          return {
            ...obj,
            quantity: newQuantity,
            total: obj.startingPrice * newQuantity,
          };
        }

        return obj;
      })
    );
  }

  function addToCart(product) {
    setCartProducts((prev) => {
      var newCartProducts = prev;

      if (prev.find((obj) => obj.id === product.id)) {
        newCartProducts = prev.map((obj) => {
          if (obj.id === product.id) {
            return {
              ...obj,
              quantity: obj.quantity + 1,
              total: obj.startingPrice * (obj.quantity + 1),
            };
          }

          return obj;
        });
      } else {
        newCartProducts = [
          ...prev,
          {
            ...product,
            quantity: 1,
            total: product.startingPrice,
          },
        ];
      }

      return newCartProducts;
    });
  }

  function removeFromCart(product) {
    setCartProducts((prev) => prev.filter((obj) => obj.id !== product.id));
  }

  function emptyCart() {
    saveLocalCartProducts(JSON.stringify([]));
    setCartProducts([]);
  }

  function calculateTotalCartProductsPrice() {
    return cartProducts.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.total,
      0
    );
  }

  function getCartNumber() {
    return cartProducts.length;
  }

  return (
    <Context.Provider
      value={{
        products,
        reversedProducts,
        getPrice,
        getSpecialProduct,
        productCategories,
        cartProducts,
        addToCart,
        removeFromCart,
        emptyCart,
        changeQuantity,
        calculateTotalCartProductsPrice,
        getCartNumber,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
