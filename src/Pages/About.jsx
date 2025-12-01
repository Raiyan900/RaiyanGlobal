import "../Components/style/About.css";
import logo from "../assets/logo/logo.jpg";
import farm from "../assets/images/Farm.png";
import packhouse from "../assets/images/packhouse.png";
import airport from "../assets/images/airport.png";
import importer from "../assets/images/import.png";
import customer from "../assets/images/customer.png";

export default function About() {
  return (
    <>
      <div className='body-container'>
        <div class="aboutcompany_detail">
          <div class="textpart_aboutus">
            <h1>About Raiyan Global</h1>
            <p className='p1'>The main goal of this organization from the beginning has been to deliver high-quality food goods including
              fruits, vegetables, and other edible items to every corner of the globe.</p>
            <p className='p2'>We at Raiyan Global export premium quality products that match international standards. Quality of the
              product is checked on various parameters at every stage of production.</p>
            <p className='p3'>We significantly deal in four main categories i.e. Fruits, Vegetables, Mango's, Leafy Veggies, etc apart from
              food items we also deal in Temple essentials such as Marigold Mala, Coconut, Yellow Marigold, Jasmine
              Flower, Lotus Flower, Haldi Leaf, Durva Grass, Fancy Mala.</p>
            <h3>Our Motto is "We Believe in Quality"</h3>
          </div>

          <div class="imagepart_aboutus">
            <div class="image-bg">
              <img src={logo} alt="Raiyan Global Logo" />
            </div>
          </div>
        </div>
        <div class="box">
          <div class="our_community">
            <h2>Our Commitment to Quality</h2>
            <p className='p1'>All of our fresh fruits and vegetables are hand-selected and cultivated under a hygienic environment. They are grown naturally without the use of any harmful toxins or pesticides. These fresh fruits and vegetables are packaged in high-quality materials to ensure they stay fresh for a long period of time.</p>
            <p className='p2'>All of our fresh fruits and vegetables are hand-selected and cultivated under a hygienic environment. They are grown naturally without the use of any harmful toxins or pesticides. These fresh fruits and vegetables are packaged in high-quality materials to ensure they stay fresh for a long period of time.</p>
            <p className='p3'>The product range that is being supplied is available in both standard and customized specifications. We have solid business partnerships and ties with several reputable vendors in the domestic and international market thanks to our capacity to provide huge volumes within a set time frame. Our extensive distribution network spans Canada, Europe, Middle East and South America.</p>
          </div>
        </div>

        <div class="supplychain">
          <div className="supplychain-flex">
            <h1 className="h1_h1">Our </h1>
            <h1 className="h2_h2"> Supply </h1>
            <h1 className="h1_h1">Supply</h1>
          </div>
          <div class="supplychain-cards">
            <div class="supplychain-card">
              <img src={farm} alt="Farm" />
              <div class="icon"><i class="fa-solid fa-seedling"></i></div>
              <h3>Farm</h3>
              <p>High-quality produce from our certified farms</p>
            </div>

            <div class="supplychain-card">
              <img src={packhouse} alt="Packhouse" />
              <div class="icon"><i class="fa-solid fa-box"></i></div>
              <h3>Packhouse</h3>
              <p>Careful sorting and premium packaging</p>
            </div>

            <div class="supplychain-card">
              <img src={airport} alt="Airport" />
              <div class="icon"><i class="fa-solid fa-plane-departure"></i></div>
              <h3>Airport</h3>
              <p>Temperature-controlled air transport</p>
            </div>

            <div class="supplychain-card">
              <img src={importer} alt="Importer" />
              <div class="icon"><i class="fa-solid fa-building"></i></div>
              <h3>Importer</h3>
              <p>Trusted partners in destination countries</p>
            </div>

            <div class="supplychain-card">
              <img src={customer} alt="Customer" />
              <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
              <h3>Customer</h3>
              <p>Fresh produce for consumers worldwide</p>
            </div>
          </div>
        </div>
        <div className="wy-flex">
          <h1 className="wy-choose-uss">Why</h1>
          <h1 className="wy-choose-us">Choose Us</h1>
        </div>
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
      </div>
    </>
  );
};
