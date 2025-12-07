import "../Components/style/About.css";
import "../Components/style/Home.css";
import logo from "../assets/logo/logo.jpg";
import supplychainDesktop from "../assets/images/aboutimg.svg";
import supplychainMobile from "../assets/images/offerings-m-1.svg";

export default function About() {
  return (
    <>
      <div className='body-container'>
        <section className="about-main-section">
          <div className="about-container">

            <div className="about-text">
              <h1>About Raiyan<br />Global</h1>

              <p>The main goal of this organization from the beginning has been to deliver high-quality food goods including fruits, vegetables, and other edible items to every corner of the globe.</p>

              <p className="highlight">
                We at Raiyan Global export premium quality products that match international standards. Quality of the product is checked on various parameters at every stage of production.
              </p>

              <p>
                We significantly deal in four main categories i.e. Fruits, Vegetables, Mango's, Leafy Veggies, etc apart from food items we also deal in Temple essentials such as Marigold Mala, Coconut, Yellow Marigold, Jasmine Flower, Lotus Flower, Haldi Leaf, Durva Grass, Fancy Mala.
              </p>

              <h3 className="motto">Our Motto is "We Believe in Quality"</h3>
            </div>

            <div className="about-img-wrapper">
              <img src={logo} alt="Raiyan Global" />
            </div>

          </div>
        </section>



        <section className="quality-section">
          <div className="quality-box">
            <h1>Our Commitment to Quality</h1>

            <p>
              All of our fresh fruits and vegetables are hand-selected and cultivated
              under a hygienic environment. They are grown naturally without the use of
              any harmful toxins or pesticides. These fresh fruits and vegetables are
              packaged in high-quality materials to ensure they stay fresh for a long
              period of time.
            </p>

            <p className="highlight">
              All of our fresh fruits and vegetables are hand-selected and cultivated
              under a hygienic environment. They are grown naturally without the use of
              any harmful toxins or pesticides. These fresh fruits and vegetables are
              packaged in high-quality materials to ensure they stay fresh for a long
              period of time.
            </p>

            <p>
              The product range that is being supplied is available in both standard and
              customized specifications. We have solid business partnerships and ties
              with several reputable vendors in the domestic and international market
              thanks to our capacity to provide huge volumes within a set time frame.
              Our extensive distribution network spans Canada, Europe, Middle East and
              South America.
            </p>
          </div>
        </section>


<h2 className="supply-title">
            <span className="orange-text">Our</span> Supply Chain
          </h2>
        <div className="supplychain">
          <div className="supplychain-card-img">
            <picture>
              <source media="(max-width: 1024px)" srcSet={supplychainMobile} />
              <img src={supplychainDesktop} alt="Supply Chain" />
            </picture>
          </div>
        </div>





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
      </div>
    </>
  );
};
