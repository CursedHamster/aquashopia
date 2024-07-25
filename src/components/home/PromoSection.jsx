import "./PromoSection.css";

function PromoSection() {
  return (
    <section className="promos">
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
    </section>
  );
}

export default PromoSection;
