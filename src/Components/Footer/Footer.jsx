import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="address">
                    <h2>Raiyan Global</h2>

                    <div class="footer-item">
                        <i class="fa-solid fa-location-crosshairs"></i>
                        <p>E-3, Gulshan CHS Versova, Andheri (West) Mumbai: 400061, Maharashtra India</p>
                    </div>

                    <div class="footer-item">
                        <i class="fa-solid fa-phone"></i>
                        <p>+91 59562629</p>
                    </div>

                    <div class="footer-item">
                        <i class="fa-solid fa-phone"></i>
                        <p>+91 25926255</p>
                    </div>

                    <div class="footer-item">
                        <i class="fa-solid fa-envelope"></i>
                        <p>sales.raiyanglobal@gmail.com</p>
                    </div>

                    <div class="social-icons">
                        <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="/"><i class="fa-brands fa-facebook"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div class="abouts_us">
                    <h2>About Us</h2>
                    <p>Raiyan Global is the best exporter of premium fruits and vegetables, committed to delivering fresh,
                        high-quality produce to customers worldwide. We Ensure the Quality of product, Packaging and Trust of of
                        valued customers for variety of products that is fulfilled by us.</p>
                </div>

                <div class="quick-links">
                    <h2>Quick links</h2>
                    <div class="link-column">
                        <a href="#/">→Home</a>
                        <a href="#/about">→About</a>
                        <a href="#/products">→Product</a>
                        <a href="#/contact">→Contact</a>
                    </div>
                </div>
            </footer>

            <div class="bottom-footer">
                <p class="left">All Rights Reserved by Raiyan Global</p>
                <p class="right">Managed by Raiyan Global</p>
            </div>

        </>
    )
}
