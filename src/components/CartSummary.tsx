import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const CartSummary: React.FC<{
  products: { price?: number; quantity?: number }[];
  onCheckout?: () => void;
}> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems
    .reduce((sum, item) => {
      if (!item.product || typeof item.product.price !== "number") return sum;
      return sum + item.product.price * (item.quantity || 1);
    }, 0)
    .toFixed(2);

  // const itemCount = products.reduce(
  //   (sum, item) => sum + (item.quantity || 1),
  //   0,
  // );

  return (
    <div className="cart-summary">
      <h4>Cart Summary</h4>
      <p>Total Items: {cartItems.length}</p>
      <p className="fw-bold">Total: ${total}</p>
      <button
        className="btn btn-primary"
        onClick={() => alert("Proceeding to checkout...")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
