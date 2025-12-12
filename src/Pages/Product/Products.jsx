import { useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import productsData from "../../Components/Data/ProductData";
import "./Product.css";

export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const pageSize = 12;

  // All categories
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  // Filter + search logic
  const filteredProducts = productsData.filter((p) => {
    const q = query.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q);

    const matchesCategory = category === "All" || p.category === category;

    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <main className="product-wrapper">
      <div className="products-page">
        <h1 className="page-title">
          <span className="mint-text">Our</span> <span className="orange-text">Products</span>
        </h1>

        {/* Search + Category Pills */}
        <div className="products-toolbar">

          {/* LEFT = FILTER PILLS */}
          <div className="toolbar-left">
            <div className="category-pills">
              {categories.map((c) => (
                <div
                  key={c}
                  className={`category-pill ${category === c ? "active" : ""}`}
                  onClick={() => {
                    setCategory(c);
                    setPage(1);
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT = SEARCH BAR */}
          <div className="toolbar-right">
            <input
              className="search-input"
              placeholder="Search products..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>

        </div>


        {/* Product Grid */}
        <div className="products-grid">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* PAGINATION UI LIKE REFERENCE */}
        <div className="pagination">

          {/* Prev Arrow */}
          <button
            className="page-btn"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ‹
          </button>

          {/* Page Numbers */}
          <div className="page-status">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`page-number ${page === i + 1 ? "active" : ""}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            className="page-btn"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </main>
  );
}
