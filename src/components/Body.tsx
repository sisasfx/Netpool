import "../styles/body.css";

function Body() {
  return (
    <section className="hero" id="inici">
      <img
        className="hero-image"
        src="/portada.webp"
        alt="Piscina exterior reformada por Netpool"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-kicker">Piscines i jardins</p>

        <h1 className="hero-title">
          Manteniment, reformes i construcció de piscines amb acabat
          professional
        </h1>

        <p className="hero-description">
          A Netpool oferim solucions completes per a la cura, reparació i
          millora de piscines i jardins, amb un servei proper, fiable i adaptat
          a cada espai.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#footer">
            Demana pressupost
          </a>
          <a className="hero-button hero-button-secondary" href="#serveis">
            Veure serveis
          </a>
        </div>
      </div>
    </section>
  );
}

export default Body;
