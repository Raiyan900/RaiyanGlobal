import '../style/Footer.css';
import logos from "../../assets/logo/logo.jpg";

export default function Footer() {
    return (
        <>
            {/* TOP FULL-WIDTH DIVIDER */}
            <div className="full-divider"></div>

            <footer className="footer">

                {/* ABOUT SECTION */}
                <div className="footer-col abouts_us">
                    <div className="img-cnt">
                        <img src={logos} alt="Logo" />
                        <h2>Raiyan Global</h2>
                    </div>

                    <p>
                        Raiyan Global is the best exporter of premium fruits and vegetables, committed to delivering
                        fresh, high-quality produce to customers worldwide.
                    </p>

                    <p>
                        We ensure quality, packaging and trust for all valued customers for our variety of products.
                    </p>
                </div>

                {/* VERTICAL DIVIDER */}
                <div className="vertical-divider"></div>

                {/* QUICK LINKS */}
                <div className="footer-col quick-links">
                    <h2>Quick Links</h2>

                    <div className="link-column">
                        <a href="#/">Home</a>
                        <a href="#/about">About</a>
                        <a href="#/products">Product</a>
                        <a href="#/contact">Contact</a>
                    </div>
                </div>

                {/* VERTICAL DIVIDER */}
                <div className="vertical-divider"></div>

                {/* ADDRESS */}
                <div className="footer-col address">
                    <h2>Stay in Touch!</h2>

                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <p>Versova, Andheri West, Mumbai 500061, Maharashtra</p>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 9920810651</p>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 8879917449</p>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-phone"></i>
                        <p>+91 8928608614</p>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-envelope"></i>
                        <p>sales.raiyanglobal@gmail.com</p>
                    </div>

                </div>

            </footer>

            {/* BOTTOM FULL-WIDTH DIVIDER */}
            <div className="full-divider"></div>

            <div className="bottom-footer">
                <p className="left">© 2025 Raiyan Global. All Rights Reserved.</p>
                <p className="right">Managed by Raiyan Global</p>
            </div>
        </>
    );
}
