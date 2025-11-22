import '../Components/Hero/Hero.css';
import Images from "../assets/logo/image.png";
import Mango from "../assets/products/mango/alphonsomango.png";
import PoiBhaji from "../assets/products/vegetables/PoiBhaji.jpg";
import background from "../assets/background.png";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="Container">
        <img src={Images} alt="Fresh Vegetables" className="hero-image" />
        <div className="hero-content">
          <h1>Freshness Beyond Borders.</h1>
          <button className="contact-btn"><a href="#/Contact">Contact us</a></button>
        </div>
      </div>

      <div className="aboutus-section">
        <div className="abt-img">
          <img src={logo} alt="" className="about-image" />
        </div>

        <div className="abt-text">
          <p className="para">
            Welcome to
          </p>
          <h1>Raiyan Global</h1>
          <p>
            We were established in the year 2022. We are best exporter of premium fruits and vegetables, committed to delivering fresh, high-quality produce to customers worldwide..
          </p>
          <p>
            We have Expertise in the Field of Exports buy understanding the needs of our buyers and suppliers. We Ensure the Quality of product, Packaging and Trust of of valued customers for variety of products that is fulfilled by us.
          </p>
          <p>
            Our Motto is "We Believe in Quality"
          </p>
          <button className="learn-more-btn"><a href="#/About">Learn More...</a></button>
        </div>
      </div>


      <h1 className="wy-choose-us">Why choose Us</h1>
      <div className="card-main">
        <div className="card">
          <div className="icon">
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
            chain to ensure premium produce and reliability, from procurement to delivery.
          </p>


        </div>

        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 12s5-7 10-7 10 7 10 7-5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h2>Vision</h2>
          <p>
            Our vision is to become the most trusted global supplier of premium agricultural products, shaping the future of exports with purpose and passion.
          </p>


        </div>

        <div className="card">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2>Customer Focus</h2>
          <p>
            We prioritize customer satisfaction and build long-lasting relationships with our clients, ensuring their needs are met with excellence.
          </p>


        </div>

        <div className="card">
          <div className="icon">
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
            Reliable and punctual delivery service to meet your business needs, ensuring your products reach you when you need them.
          </p>


        </div>

      </div >

      <div className="products-section">
        <h1 className="prdts-fd-h1">Featured Products</h1>

        <div className="prdts-fd">
          {/* Card 1 */}
          <div className="prdts-fd-cards fruits">
            <img src={Mango} alt="Mango" />
            <div className="prdts-content">
              <h3>Mango</h3>
              <h2>Premium Alphonso Mangoes</h2>
              <p>Sweet and juicy Alphonso mangoes</p>
              <Link to="/product/401" className="view-details">
                View More →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="prdts-fd-cards spices">
            <img src={PoiBhaji} alt="Spices" />
            <div className="prdts-content">
              <h3>Vegetables</h3>
              <h2>Fresh Premium Vegetables</h2>
              <p>Fresh, export-grade vegetables.</p>
              <Link to="/Product/208" className="view-details">
                View More →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="prdts-fd-cards rice">
            <img src={background} alt="Rice" />
            <div className="prdts-content">
              <h3>View More</h3>
              <h2>Explore All Products</h2>
              <p>Explore our full range of export-quality items.</p>
              <Link to="/product" className="view-details">
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default Body;
