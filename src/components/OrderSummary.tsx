import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { CartItem } from "../types/CartItem";

const OrderSummary: React.FC<{
  products: { price?: number; quantity?: number }[];
  onCheckout?: () => void;
}> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems
    .reduce((sum: number, item: CartItem) => {
      if (!item.product || typeof item.product.price !== "number") return sum;
      return sum + item.product.price * (item.quantity || 1);
    }, 0)
    .toFixed(2);

  return (
    <div className="order-summary mb-4">
      <p>
        <span className="fw-bold">Total Items:</span> {cartItems.length}
        <br />
        <span className="fw-bold">Total:</span> ${total}
      </p>
    </div>
  );
};

export default OrderSummary;
