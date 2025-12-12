import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../../Components/Data/ProductData";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();

  // 1️⃣ Get product FIRST
  const product = products.find((p) => String(p.id) === String(id));

  // 2️⃣ Initialize hooks IMMEDIATELY after product is found
  // If product is undefined → we use optional chaining to avoid crash
  const [activeImage, setActiveImage] = useState(product?.image || "");

  // 3️⃣ If product does not exist → return
  if (!product) {
    return (
      <main className="product-detail-page">
        <h1>Product Not Found</h1>
        <Link to="/products">← Back To Products</Link>
      </main>
    );
  }

  return (
    <main className="product-wrapper">
      <div className="product-detail-page">

        <Link to="/products" className="back-btn">← Back To Products</Link>

        <section className="detail-container">

          {/* LEFT SIDE */}
          <div className="left-section">

            {/* Main Image */}
            <div className="main-img-box">
              <img src={activeImage} alt={product.name} />
            </div>

            {/* Gallery */}
            <div className="thumb-row">

              {/* Product main image */}
              <img
                src={product.image}
                className="thumb-img"
                onClick={() => setActiveImage(product.image)}
              />

              {/* Gallery images */}
              {product.gallery?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="thumb-img"
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>

          </div>

          {/* RIGHT INFO CARD */}
          <div className="right-section">
            <p className="category-label">{product.category}</p>
            <h1 className="product-title">{product.name}</h1>

            <p className="detail-short">{product.shortDescription}</p>
            <p className="detail-full">{product.fullDescription}</p>

            <h3 className="specification_h3">Specifications</h3>
            <div className="spec-grid">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div className="spec-row" key={k}>
                  <div className="spec-key">{k}</div>
                  <div className="spec-val">{v}</div>
                </div>
              ))}
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
