import EmptyCart from "../components/EmptyCart";
import CartSummary from "../components/CartSummary";
import ShoppingCartItem from "../components/ShoppingCartItem";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useState } from "react";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [success, setSuccess] = useState("");

  const handleDeleteSuccess = (msg: string) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="container mt-4">
      <h1>Your Cart</h1>
      <p>{cartItems.length} items in your cart</p>
      <p>{cartItems.map((item) => item.product?.title).join(", ")}</p>
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="items-in-cart mb-3">
            <ul className="list-cart">
              {cartItems
                .filter((item) => item.product)
                .map((item) => (
                  <ShoppingCartItem
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                    price={Number(item.product.price)}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                ))}
            </ul>
          </div>
          <div className="cart-summary">
            <CartSummary products={cartItems} />
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
