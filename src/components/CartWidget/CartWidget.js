import cart from "./assets/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img
        className="cart-icon white-cart-icon p-1"
        src={cart}
        alt="cart-widget"
      />
      0
    </div>
  );
};

export default CartWidget;
