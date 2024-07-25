import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import Flip from "gsap/Flip";
import Cards from "../Cards";
import DropdownFilter from "../filter/DropdownFilter";
import useToggle from "../utils/useToggle";
import { Context } from "../../Context";
import productFilters from "../../assets/data/productFilters";
import "./Assortment.css";

function Assortment(props) {
  const { reversedProducts, getPrice, getDiscountedPrice, productCategories } =
    useContext(Context);

  const navigate = useNavigate();
  const { category } = useParams();

  const [searchOpened, toggleSearch] = useToggle(null);

  const [sortByPriceInc, toggleSortByPriceInc] = useToggle(true);
  const [sortByNameInc, toggleSortByNameInc] = useToggle(true);
  const [sortByNew, toggleSortByNew] = useToggle(true);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = productCategories.map((productCategory) => (
    <div
      key={productCategory}
      className={
        "category-brick " + (category === productCategory ? "chosen" : "")
      }
      onClick={() => navigate("/assortment/" + productCategory)}
    >
      {productCategory.split("-").join(" ")}
    </div>
  ));

  const [filterObjects, setFilterObjects] = useState([]);
  const filters = productFilters.map((prodFilter) => (
    <DropdownFilter
      key={prodFilter.id}
      filter={prodFilter}
      setFilterObjects={setFilterObjects}
    />
  ));

  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    gsap?.registerPlugin(Flip);
    if (category === undefined || !productCategories.includes(category)) {
      navigate("/assortment/all");
    }
  }, []);

  // useEffect(() => {
  //   console.log(filterOpened, savedState)
  //   if (filterOpened !== null) {
  //     if (savedState) {
  //       console.log(savedState)
  //       Flip.from(savedState, {
  //         duration: 0.5,
  //         onComplete: () => console.log("meow"),
  //       });
  //     }
  //   }
  // }, [filterOpened]);

  useEffect(() => {
    setSortedProducts(reversedProducts);
    setFilteredProducts(reversedProducts);
  }, [reversedProducts]);

  useEffect(() => {
    filter(sortedProducts);
  }, [sortedProducts]);

  useEffect(() => {
    if (category === undefined || !productCategories.includes(category)) {
      navigate("/assortment/all");
    } else {
      filter(sortedProducts);
    }
  }, [category]);

  useEffect(() => {
    filter(sortedProducts);
  }, [filterObjects]);

  useEffect(() => {
    filter(sortedProducts);
  }, [searchValue]);

  function filter(productsArr) {
    const filteredArr = productsArr
      .filter(
        (product) =>
          product.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      )
      .filter((product) => {
        let checkCategory = true;

        if (category !== "all") {
          checkCategory = product.category === category;
        }

        return checkCategory;
      })
      .filter((product) => {
        let checkColors = true;

        if (filterObjects.colors && filterObjects.colors.length > 0) {
          checkColors = filterObjects?.colors?.every((color) =>
            product.colors.includes(color)
          );
        }

        return checkColors;
      })
      .filter((product) => {
        const { startingPrice, endingPrice } = filterObjects.priceRange;

        return (
          product.startingPrice >= startingPrice &&
          product.startingPrice <= endingPrice &&
          (product.endingPrice && product.endingPrice !== undefined
            ? product.endingPrice >= startingPrice &&
              product.endingPrice <= endingPrice
            : true)
        );
      });
    setFilteredProducts(filteredArr);
  }

  function sortByPrice() {
    toggleSortByPriceInc();
    setSortedProducts((prev) =>
      []
        .concat(prev)
        .sort((p1, p2) =>
          sortByPriceInc
            ? p1.startingPrice - p2.startingPrice
            : p2.startingPrice - p1.startingPrice
        )
    );
  }

  function sortByName() {
    toggleSortByNameInc();
    setSortedProducts((prev) =>
      []
        .concat(prev)
        .sort((p1, p2) =>
          sortByNameInc
            ? p1.title.toLowerCase().localeCompare(p2.title.toLowerCase())
            : p2.title.toLowerCase().localeCompare(p1.title.toLowerCase())
        )
    );
  }

  function sortByNewOrOld() {
    toggleSortByNew();
    setSortedProducts((prev) =>
      []
        .concat(prev)
        .sort((p1, p2) => (sortByNew ? p2.new - p1.new : p1.new - p2.new))
    );
  }

  function animateStateChange() {
    const target = ".filter-block";
    const savedState = Flip?.getState(target, {
      props: "opacity,padding",
      simple: true,
    });
    document
      ?.querySelector(target)
      ?.classList?.toggle("filter-opened");
    document
      ?.querySelector(".filter-group")
      ?.classList?.toggle("filter-group-opened");
    Flip?.from(savedState, { ease: "none", prune: true, duration: 0.5 });
  }

  return (
    <div className="assortment section-padding">
      <h1>Assortment</h1>
      <div className="category-div">{categories}</div>
      <div className="filter-div">
        <div className="filter-group" onClick={animateStateChange}>
          <i className="fas fa-filter"></i>
          <h2>Filter</h2>
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-right"></i>
          {/* <i
            className={
              "fas " + (filterOpened ? "fa-chevron-left" : "fa-chevron-right")
            }
          ></i> */}
        </div>
        <form
          className={
            "search-group " +
            (searchOpened
              ? "search-opened"
              : searchOpened !== null
              ? "search-closed"
              : "")
          }
          onSubmit={handleSearchSubmit}
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            className="search-input"
            value={searchValue}
            onChange={search}
          />
          <i className="fas fa-search" onClick={toggleSearch}></i>
        </form>
      </div>
      <div className="assortment-cards">
        <div
          className={
            "filter-block"
            // +
            // (filterOpened
            //   ? "filter-opened"
            //   : filterOpened !== null
            //   ? "filter-closed"
            //   : "")
          }
        >
          <div className="filter-sort-group" onClick={sortByPrice}>
            <i
              className={
                "fas " +
                (sortByPriceInc
                  ? "fa-sort-numeric-up-alt"
                  : "fa-sort-numeric-down-alt")
              }
            ></i>
            <h3>Sort by Price</h3>
          </div>
          <div className="filter-sort-group" onClick={sortByName}>
            <i
              className={
                "fas " +
                (sortByNameInc
                  ? "fa-sort-alpha-up-alt"
                  : "fa-sort-alpha-down-alt")
              }
            ></i>
            <h3>Sort by Name</h3>
          </div>
          <div className="filter-sort-group" onClick={sortByNewOrOld}>
            <i
              className={
                "fas " +
                (sortByNew ? "fa-sort-amount-up" : "fa-sort-amount-down")
              }
            ></i>
            <h3>Sort by {sortByNew ? "New" : "Old"}</h3>
          </div>
          {filters}
        </div>
        <Cards
          products={filteredProducts}
          getPrice={getPrice}
          getDiscountedPrice={getDiscountedPrice}
        />
      </div>
    </div>
  );
}

export default Assortment;
