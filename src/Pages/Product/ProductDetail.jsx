import { useParams, Link } from "react-router-dom";
import productsData from "../../Components/Data/ProductData";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  const {
    name,
    category,
    image,
    shortDescription,
    fullDescription,
    features,
    specifications
  } = product;

  return (
    <div className="product-detail-container">
      <div className="breadcrumb-section">
        <p className="breadcrumb">
          <Link to="/">Home</Link> &gt;
          <Link to="/product">Products</Link> &gt;
          <span>{name}</span>
        </p>
        <Link to="/product" className="back-btn">← Back</Link>
      </div>

      <div className="product-main-content">

        {/* Updated Image Wrapper */}
        <div className="product-images">
          <div className="detail-image-wrapper">
            <img className="detail-main-image" src={image} alt={name} />
          </div>
        </div>

        <div className="product-details">
          <p className="category-tag">{category}</p>
          <h1>{name}</h1>

          <p className="short-description">{shortDescription}</p>

          <ul className="features-list">
            {features.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <p className="detailed-description">{fullDescription}</p>

          <h2>Specifications</h2>
          <table className="specifications-table">
            <tbody>
              {Object.entries(specifications).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
