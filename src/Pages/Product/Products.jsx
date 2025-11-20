import React, { useEffect,useState } from 'react';
import productsData from '../../Components/Data/ProductData';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './Product.css';

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsPerPage = 9;
  const categories = [
    "All",
    "Fruits",
    "Mangos",
    "Spices",
    "Vegetables",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedCategory]);
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="products-container">
      <h1>Our Export Products</h1>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active-cat" : ""}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          ⬅ Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
}
