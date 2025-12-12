import { Link } from "react-router-dom";
import "./ProductCards.css";

export default function ProductCard({ product }) {
  return (
    <div className="stretched-card">
      <Link to={`/product/${product.id}`} className="stretched-link">
        {/* IMAGE */}
        <div className="stretched-img">
          <img src={product.image} alt={product.name} />
        </div>

        {/* CONTENT */}
        <div className="stretched-content">

          <p className="stretched-category">{product.category}</p>

          <h3 className="stretched-title">{product.name}</h3>

          <p className="stretched-desc">{product.description}</p>

          <p className="stretched-short-desc">{product.shortDescription}</p>


          <Link to={`/product/${product.id}`} className="view-btn-link">
            <button className="stretched-btn">View Details</button>
          </Link>
        </div>
      </Link>
    </div>
  );
}
