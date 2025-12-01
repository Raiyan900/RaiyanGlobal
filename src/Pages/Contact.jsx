import Swal from 'sweetalert2'
import "../Components/style/contact.css";
import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "59544c84-5c0f-4bed-99a6-8eefb9dd033a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? Swal.fire({
      title: "Success!",
      text: "Message Sended successfully!",
      icon: "success"
    }) : "Error");
  };

  return (
    <div className="cont-continer-page">
      <div className='contact'>
        <div class="contact-section">
          <h1>Contact Us</h1>

          <div class="contact-container">
            <div class="contact-form">
              <h2>Get in Touch</h2>

              <form onSubmit={onSubmit}>
                <div class="form-row">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                  </div>
                  <div class="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="Enter business name" name='business name' />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" name='email' />
                  </div>
                  <div class="form-group">
                    <label>Contact Number</label>
                    <input type="tel" placeholder="Enter contact number" name='number' />
                  </div>
                </div>

                <div class="form-group full">
                  <label>Product Interest</label>
                  <input type="text" placeholder="Enter product name or type" name='Product Interest' />
                </div>

                <div class="form-group full">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Write your message" name='message'></textarea>
                </div>

                <button type="submit" class="send-btn">Send Message</button>
              </form>
            </div>

            <div class="contact-info">
              <h2>Contact Information</h2>

              <p><i class="fa-solid fa-location-dot"></i>
                E-3, Gulshan CHS, Versova, Andheri (West), Mumbai: 400061, Maharashtra, India
              </p>

              <p><i class="fa-solid fa-phone"></i> +91 59562629</p>
              <p><i class="fa-solid fa-phone"></i> +91 25926255</p>

              <p><i class="fa-solid fa-envelope"></i> sales.raiyanglobal@gmail.com</p>

              <h2>Business Hours</h2>
              <ul class="business-hours">
                <li><strong className='p2'>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                <li><strong className='p2'>Saturday:</strong> 10:00 AM - 4:00 PM</li>
                <li><strong className='p2'>Sunday:</strong> Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
