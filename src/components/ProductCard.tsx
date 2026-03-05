import { Button } from "react-bootstrap";
import { type Product } from "../types/Product";
import { addToCart } from "../types/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleAddToCart = () => {
    try {
      dispatch(addToCart(product));
      window.alert("Product added to cart successfully!");
    } catch (err) {
      console.error(err);
      window.alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <>
      <div className="card">
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top product-img"
          style={{ height: "150px", objectFit: "contain" }}
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/150?text=Product+Image";
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div>
            {"★".repeat(product.rate)}
            {"☆".repeat(5 - product.rate)}
          </div>
          <p className="card-text fw-bold">{product.category}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
        </div>
        <div className="card-footer">
          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <Button
            className="btn btn-primary float-end"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
