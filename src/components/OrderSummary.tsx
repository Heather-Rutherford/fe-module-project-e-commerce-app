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
    <div className="order-summary justify-content-left">
      <p>{cartItems.length} items in your cart</p>
      <p className="product-title">
        {cartItems.map((item: CartItem) => (
          <div key={item.product?.id} className="order-item">
            <img
              src={item.product?.image || "https://placehold.co/150"}
              alt={item.product?.title || "Product"}
              style={{ height: "50px", objectFit: "contain" }}
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/150";
              }}
            />
            {item.product?.title}
          </div>
        ))}
      </p>
      <p className="total-items-section">
        <span className="fw-bold">Total:</span> ${total}
      </p>
    </div>
  );
};

export default OrderSummary;
