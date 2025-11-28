import { useState, useMemo } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import productsData from "../../Components/Data/ProductData";
import "./Product.css";

export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const pageSize = 8;

  // All categories
  const categories = ["All", ...new Set(productsData.map(p => p.category))];

  // Search + filter
  const filteredProducts = productsData.filter(p => {
    const q = query.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q);

    const matchesCategory =
      category === "All" || p.category === category;

    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <main className="product-wrapper">
      <div className="products-page">
        <h1 className="page-title">Our Products</h1>

        {/* Toolbar */}
        <div className="products-toolbar">
          <input
            className="search-input"
            placeholder="Search products..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />

          <select
            className="category-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="page-btn"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <span className="page-status">
            Page {page} of {totalPages}
          </span>

          <button
            className="page-btn"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
