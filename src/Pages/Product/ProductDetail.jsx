import { useParams, Link } from "react-router-dom";
import products from "../../Components/Data/ProductData";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <main className="product-detail-page">
        <h1>Product Not Found</h1>
        <Link to="/products">← Back</Link>
      </main>
    );
  }

  return (
    <main className="product-wrapper">
      <div className="product-detail-page">
        <div className="product-detail-page">
          <div className="detail-header">
            <h1>{product.name}</h1>
            <Link to="/products" className="back-link">
              ← Back to Products
            </Link>
          </div>

          <section className="detail-hero">
            <div className="detail-media">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="detail-info">
              <span className="detail-badge">{product.category}</span>

              <p className="detail-short">{product.shortDescription}</p>
              <p className="detail-full">{product.fullDescription}</p>

              <h3>Features</h3>
              <ul className="detail-list">
                {product.features?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h3>Specifications</h3>
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
      </div>
    </main>
  );
}
