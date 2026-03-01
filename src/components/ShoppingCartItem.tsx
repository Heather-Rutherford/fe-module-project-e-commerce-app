import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { updateQuantity } from "../redux/cartSlice";
import { formatPrice } from "../utils/Formatters";
import { type CartItemProps } from "../types/CartItemProps";

interface ShoppingCartItemProps extends CartItemProps {
  onDeleteSuccess?: (msg: string) => void;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({
  product,
  quantity,
  price,
  onDeleteSuccess,
}) => {
  const dispatch = useDispatch();
  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) {
      handleDelete(); // Prevent quantity from going below 1
      return;
    }
    dispatch(updateQuantity({ id, quantity }));
  };

  const subtotal = formatPrice((price || 0) * (quantity || 1));

  const handleDelete = () => {
    if (window.confirm(`Remove ${product.title || "product"} from cart?`)) {
      dispatch(removeFromCart(product.id));
      if (onDeleteSuccess) {
        onDeleteSuccess("Product removed from cart successfully!");
      }
    }
  };

  return (
    <li className="cart-item">
      <img
        src={product.image || "https://placehold.co/150"}
        alt={product.title || "Product"}
        style={{ height: "150px", objectFit: "contain" }}
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/150";
        }}
      />
      <p className="product-title">
        {product.title || `Product ID: ${product.id || product.id}`}
      </p>
      <div className="cart-item-buttons">
        <button
          className="btn btn-warning mt-3"
          onClick={() => handleQuantityChange(product.id, quantity - 1)}
        >
          -
        </button>
        Quantity: {quantity || 1}
        <button
          className="btn btn-success mt-3"
          onClick={() => handleQuantityChange(product.id, quantity + 1)}
        >
          +
        </button>
        <button
          className="btn btn-danger mt-3"
          onClick={handleDelete}
          aria-label={`Remove ${product.title || "product"} from cart`}
        >
          Delete
        </button>
      </div>
      <div className="cart-item-price">
        <p>
          Price: ${formatPrice(product.price)}
          <br />
          Subtotal: ${subtotal || "0.00"}
        </p>
      </div>
    </li>
  );
};

export default ShoppingCartItem;
