import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-eyebrow">Contacte</p>

          <h2 className="footer-title">
            Parlem del teu projecte de piscina o jardí
          </h2>

          <p className="footer-text">
            Si necessites manteniment, una reparació, una reforma o vols posar
            al dia el teu espai exterior, estarem encantats d’ajudar-te.
          </p>

          <div className="footer-contact">
            <a className="footer-contact-item" href="tel:+34656559733">
              <img
                className="footer-icon"
                src="/phone-solid.svg"
                alt=""
                aria-hidden="true"
              />
              <span>656 55 97 33</span>
            </a>

            <a className="footer-contact-item" href="mailto:bernat@netpool.cat">
              <img
                className="footer-icon"
                src="/envelope-solid.svg"
                alt=""
                aria-hidden="true"
              />
              <span>bernat@netpool.cat</span>
            </a>
          </div>

          <div className="footer-actions">
            <a
              className="footer-button footer-button-primary"
              href="tel:+34656559733"
            >
              Trucar ara
            </a>
            <a
              className="footer-button footer-button-secondary"
              href="mailto:bernat@netpool.cat"
            >
              Enviar correu
            </a>
          </div>
        </div>

        <div className="footer-image-wrapper">
          <img
            className="footer-image"
            src="/quisom.jpg"
            alt="Piscina i jardí cuidats per Netpool"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Netpool. Tots els drets reservats.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
