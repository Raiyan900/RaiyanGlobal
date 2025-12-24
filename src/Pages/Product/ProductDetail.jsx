import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../../Components/Data/ProductData";
import "./ProductDetail.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const randomProducts = shuffleArray(
    products.filter(
      (p) => String(p.id) !== String(product?.id)
    )
  ).slice(0, 6);

  // 🔁 Load product when ID changes
  useEffect(() => {
    const foundProduct = products.find(
      (p) => String(p.id) === String(id)
    );

    if (!foundProduct) {
      navigate("/products", { replace: true });
      return;
    }

    setProduct(foundProduct);
    setActiveImage(foundProduct.image);
    window.scrollTo(0, 0);
  }, [id, navigate]);


  // ⏳ Loading state
  if (!product) {
    return (
      <main className="product-detail-page">
        <h2>Loading product...</h2>
      </main>
    );
  }

  return (
    <main className="product-wrapper">
      <div className="product-detail-page">

        <Link to="/products" className="back-btn">
          ← Back To Products
        </Link>

        {/* ===== PRODUCT DETAILS ===== */}
        <section className="detail-container">

          {/* LEFT */}
          <div className="left-section">
            <div className="main-img-box">
              <img
                key={product.id}
                src={activeImage}
                alt={product.name}
              />
            </div>

            <div className="thumb-row">
              <img
                src={product.image}
                className="thumb-img"
                onClick={() => setActiveImage(product.image)}
              />

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

          {/* RIGHT */}
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

        {/* ===== SIMILAR PRODUCTS ===== */}
        <section className="similar-section">
          <div className="titles">
            <h1 className="h1_similar">See</h1>
            <h1 className="h1_similars">Other Product</h1>
          </div>
          <div className="prtds-slider-wrapper">

            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
              }}
              className="prtds-slider"
            >
              {randomProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="stretched-card"
                    onClick={() => navigate(`/product/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="stretched-img">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="stretched-content">
                      <p className="stretched-category">{item.category}</p>
                      <h3 className="stretched-title">{item.name}</h3>
                      <p className="stretched-short-desc">
                        {item.shortDescription}
                      </p>

                      <button className="stretched-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </main>
  );
}
