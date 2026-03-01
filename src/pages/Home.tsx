import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { getProductsListing } from "../redux/productSlice";
import { useSelector } from "react-redux";
import { useCategories } from "../hooks/useCategories";
import { type RootState } from "../redux/store";
import "../styles/styles.css";

// Home page component to display list of products
// Fetches products from Fake Store API and displays them
// using ProductCard component

// Example API: https://fakestoreapi.com/products
// Each product has id, title, price, description, category,
// image, rate

// Displays products in a grid layout
// Each product is wrapped in a Bootstrap column
// for responsiveness

// Location: src/pages/Home.tsx
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(getProductsListing(data));
    }
    fetchProducts();
  }, [dispatch]);

  // Filter state for dropdowns
  type Filter = {
    category: string;
  };

  const [filters, setFilters] = useState<Filter>({
    category: "All",
  });

  const { data: categories = [] } = useCategories();

  // Filter products based on dropdown values
  const filteredProducts = products.filter(
    (product) =>
      filters.category === "All" || product.category === filters.category,
  );

  // if (isLoading) return <LoadingSpinner message="Loading products..." />;
  // if (error)
  // return <p className="text-center mt-5 text-danger">{error.message}</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Products</h1>
      {/* Category filter dropdown */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>Products count: {filteredProducts.length}</div>
        <div className="d-flex align-items-center">
          <label htmlFor="categoryFilter" className="me-2 mb-0">
            Filter by category:
          </label>
          <select
            id="categoryFilter"
            className="form-select w-auto"
            aria-label="Filter products by category"
            value={filters.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setFilters({ ...filters, category: e.target.value })
            }
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
