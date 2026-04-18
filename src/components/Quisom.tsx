import "../styles/quisom.css";

function Quisom() {
  return (
    <section className="about-section" id="quisom">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            className="about-image"
            src="/equip_netpool.webp"
            alt="Equip de Netpool treballant en una piscina"
          />
        </div>

        <div className="about-content">
          <p className="about-eyebrow">Nosaltres</p>

          <h2 className="about-title">
            Experiència, proximitat i cura pels detalls
          </h2>

          <p className="about-text">
            A Netpool treballem per oferir un servei professional, proper i de
            confiança en el manteniment, la reparació i la reforma de piscines i
            jardins.
          </p>

          <p className="about-text">
            Ens impliquem en cada projecte amb una atenció personalitzada,
            buscant sempre solucions eficients, duradores i adaptades a les
            necessitats de cada client i de cada espai exterior.
          </p>

          <p className="about-text">
            El nostre objectiu és que puguis gaudir del teu entorn amb
            tranquil·litat, sabent que darrere hi ha un equip compromès amb la
            qualitat del servei i el bon resultat final.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Quisom;
