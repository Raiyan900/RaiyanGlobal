import "../Components/style/Home.css";
import video from "../assets/MiscImages/fruits_video.mp4";
// import Mango from "../assets/images/products/mango/alphonsomango.png";
// import grapes from "../assets/images/products/fruits/GRAPES.jpg";
// import PoiBhaji from "../assets/images/products/vegetables/PoiBhaji.jpg";
// import bhindi from "../assets/images/products/vegetables/Bhindi.jpg";
// import carrot from "../assets/images/products/vegetables/carrot.jpg";
import background from "../assets/MiscImages/background.png";
import logo from "../assets/logo/Heroimage.gif";
import Certifications from "../Components/Certifications/Certifications";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Body = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <div className="body-container">
        <section className="Container" aria-label="Hero">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
          <div className="hero-content">
            <h1>Delivering Sustainable.</h1>
            <h2 className="h1_p">Food Solutions</h2>
            <p>
              We provide workplace dining that balances taste, nutrition and
              operational discipline. With strong hygiene protocols and trained
              manpower, we deliver reliability across industries. Sustainability
              guides not just what we serve, but how we source, prepare, and
              manage food services.
            </p>
            <a className="contact-btn" href="#/Contact" role="button">
              Contact us
            </a>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="aboutus-section" aria-label="About Raiyan Global">
          <div className="abt-img">
            <img src={logo} alt="Dining table with green chairs and dishes" />
          </div>

          <div className="abt-text">
            <h2 className="paras">Welcome to</h2>
            <h1>Raiyan Global</h1>
            <p className="p1">
              We were established in the year 2022. We are best exporter of
              premium fruits and vegetables, committed to delivering fresh,
              high-quality produce to customers worldwide..
            </p>
            <p className="p2">
              We have Expertise in the Field of Exports buy understanding the
              needs of our buyers and suppliers. We Ensure the Quality of
              product, Packaging and Trust of of valued customers for variety of
              products that is fulfilled by us.
            </p>
            <p className="p3">Our Motto is "We Believe in Quality"</p>
            <a className="learn-more-btn" href="#/About">
              Know More
            </a>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="why_choose_main_container" aria-label="Why Choose Us">
          <div className="wy-flex">
            <h1 className="wy-choose-uss">Why</h1>
            <h1 className="wy-choose-us">Choose Us</h1>
          </div>

          <div className="card-main">
            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l9 4.5v5.25c0 5-3.8 9.75-9 10-5.2-.25-9-5-9-10V6.5L12 2z"
                  />
                </svg>
              </div>
              <h2>Quality Assurance</h2>
              <p>
                We maintain strict quality control measures throughout our supply
                chain to ensure premium produce and reliability, from procurement
                to delivery.
              </p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s5-7 10-7 10 7 10 7-5 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2>Vision</h2>
              <p>
                Our vision is to become the most trusted global supplier of
                premium agricultural products, shaping the future of exports with
                purpose and passion.
              </p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2>Customer Focus</h2>
              <p>
                We prioritize customer satisfaction and build long-lasting
                relationships with our clients, ensuring their needs are met with
                excellence.
              </p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="24"
                  height="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2>Timely Delivery</h2>
              <p>
                Reliable and punctual delivery service to meet your business
                needs, ensuring your products reach you when you need them.
              </p>
            </article>
          </div>
        </section>

        {/* ===== PRODUCTS ===== */}
        <section className="products-section" aria-label="Featured Products">
          <div className="feature_product_flex">
            <h1 className="prdts-fd-h1_p1">Featured</h1>
            <h1 className="prdts-fd-h1_p2">Products</h1>
          </div>

          <div className="prdts-slider-wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={{ nextEl: ".prdts-next", prevEl: ".prdts-prev" }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
              }}
              modules={[Navigation]}
              className="prdts-slider"
            >
              <SwiperSlide>
                <div className="prdts-fd-cards fruits">
                  <Link to="/product/MG001" className="onclick_full_product_details">
                  <img src="" alt="Mango" />
                  <div className="prdts-content">
                    <h3>Mango</h3>
                    <h2>Premium Alphonso Mangoes</h2>
                    <p>Sweet and juicy Alphonso mangoes</p>
                    <Link to="/product/401" className="view-details">
                      View More
                    </Link>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="prdts-fd-cards spices">
                  <Link to="/Product/FR007" className="onclick_full_product_details">
                  <img src="" alt="Fruits" />
                  <div className="prdts-content">
                    <h3>Fruits</h3>
                    <h2>Fresh Premium Grapes</h2>
                    <p>Fresh, export-grade Grapes.</p>
                    <Link to="/Product/307" className="view-details">
                      View More
                    </Link>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="prdts-fd-cards spices">
                  <Link to="/Product/VG002" className="onclick_full_product_details">
                  <img src="" alt="Vegetables" />
                  <div className="prdts-content">
                    <h3>Vegetables</h3>
                    <h2>Fresh Premium Vegetables</h2>
                    <p>Fresh, export-grade vegetables.</p>
                    <Link to="/Product/202" className="view-details">
                      View More
                    </Link>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="prdts-fd-cards spices">
                  <Link to="/Product/VG008" className="onclick_full_product_details">
                  <img src="" alt="Vegetables" />
                  <div className="prdts-content">
                    <h3>Vegetables</h3>
                    <h2>Fresh Premium Vegetables</h2>
                    <p>Fresh, export-grade vegetables.</p>
                    <Link to="/Product/208" className="view-details">
                      View More
                    </Link>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="prdts-fd-cards spices">
                  <Link to="/Product/VG001" className="onclick_full_product_details">
                  <img src="" alt="Vegetables" />
                  <div className="prdts-content">
                    <h3>Vegetables</h3>
                    <h2>Fresh Premium Vegetables</h2>
                    <p>Fresh, export-grade vegetables.</p>
                    <Link to="/Product/201" className="view-details">
                      View More
                    </Link>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="prdts-fd-cards rice">
                  <Link to="/products" className="onclick_full_product_details">
                  <img src={background} alt="All Products" />
                  <div className="prdts-content">
                    <h3>View More</h3>
                    <h2>Explore All Products</h2>
                    <p>Explore our full range of export-quality items.</p>
                    <Link to="/products" className="view-details">
                      View Products
                    </Link>
                  </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="prdts-nav" aria-label="Product Slider Controls">
              <button className="prdts-prev" aria-label="Previous slide">
                <span className="svg_class_1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="35"
                    fill="#328781"
                  >
                    <path d="m423-480 278 277q22 23 22 55t-23 55q-22 22-54 22t-55-22L299-384q-20-21-30-45.5T259-480q0-27 10-51.5t30-44.5l292-292q23-22 55-22.5t55 22.5q22 22 22 55t-22 55L423-480Z" />
                  </svg>
                </span>
              </button>
              <button className="prdts-next" aria-label="Next slide">
                <span className="svg_class_2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    viewBox="0 -960 960 960"
                    width="35"
                    fill="#328781"
                  >
                    <path d="M542-480 265-758q-23-22-23-54t22-55q23-22 55.5-22t54.5 22l292 291q20 20 29.5 44.5T705-480q0 26-9.5 50.5T666-384L374-93q-22 22-54 21.5T265-94q-22-22-22-54.5t22-54.5l277-277Z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ===== Certificated SECTION ===== */}
        <Certifications />
      </div>
    </>
  );
};

export default Body;
