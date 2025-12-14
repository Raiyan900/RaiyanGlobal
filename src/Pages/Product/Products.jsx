import { useState,useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import productsData from "../../Components/Data/ProductData";
import Pagination from "../../Components/pagination/pagination";
import "./Product.css";

export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

useEffect(() => {
  setPage(1);
}, [category]);


  function shuffleArray(array) {
    return array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((obj) => obj.item);
  }

  const pageSize = 12;

  // All categories
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  // Filter + search logic
  let filteredProducts = productsData.filter((p) => {
    const q = query.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q);

    const matchesCategory =
      category.toLowerCase() === "all" ||
      p.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // If ALL selected → shuffle results
  if (category.toLowerCase() === "all") {
    filteredProducts = shuffleArray(filteredProducts);
  }



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

        {/* PAGINATION */}
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />



      </div>
    </main>
  );
}
