import { certifications } from "./certificationsData";
import "./Certifications.css";

export default function Certifications() {
  const looped = [...certifications, ...certifications];

  return (
    <section className="cert-section">
      <div className="cert-container">
        <h2 className="cert-title">Certification</h2>

        <div className="cert-slider">
          <div className="cert-track">
            {looped.map((cert, index) => (
              <div className="cert-item" key={index}>
                <img src={cert.image} alt={cert.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
