import "../styles/serveis.css";

function Serveis() {
  return (
    <section className="services-section" id="serveis">
      <div className="services-intro">
        <div className="services-intro__text">
          <p className="services-intro__eyebrow">Serveis</p>
          <h2 className="services-intro__title">
            Solucions completes per a piscines i jardins
          </h2>
          <p className="services-intro__description">
            Som una empresa especialitzada en el món de les piscines i jardins a
            la zona del Maresme i Barcelona.
          </p>
          <p className="services-intro__description">
            Oferim manteniment, construcció, reparació, instal·lació i reformes
            integrals per posar al dia la teva piscina amb solucions eficients i
            tecnologia actual.
          </p>
          <p className="services-intro__description">
            També oferim serveis de jardineria: disseny, construcció i
            manteniment per a espais exteriors particulars, comunitaris i
            privats.
          </p>
          <p className="services-intro__description">
            Ens encarreguem de la gestió completa perquè tu només t’hagis de
            preocupar de gaudir del teu espai.
          </p>
        </div>

        <img
          className="services-intro__image"
          src="/sea-view.webp"
          alt="Piscina exterior amb vistes al mar"
        />
      </div>

      <div className="services-grid">
        <article className="service-card">
          <img
            className="service-card__image"
            src="/manteniment.webp"
            alt="Treballs de manteniment de piscina"
          />
          <div className="service-card__content">
            <h3 className="service-card__title">Manteniment de piscines</h3>
            <p className="service-card__text">
              Realitzem manteniment de piscines particulars, comunitàries i
              públiques. Oferim una gestió completa que inclou visites
              periòdiques, desinfecció de l’aigua, neteja física i revisió dels
              components per garantir-ne el bon funcionament.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img
            className="service-card__image"
            src="/productes-quimics.webp"
            alt="Productes i sistemes per al tractament de l'aigua"
          />
          <div className="service-card__content">
            <h3 className="service-card__title">Productes químics</h3>
            <p className="service-card__text">
              Disposem d’una àmplia varietat de productes per al tractament
              químic de l’aigua. També instal·lem equips automàtics per a spas i
              piscines, com electròlisi salina, hidròlisi, bombes dosificadores
              i sistemes ultraviolats.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img
            className="service-card__image"
            src="/reparacions.webp"
            alt="Reparació de sistemes i components de piscina"
          />
          <div className="service-card__content">
            <h3 className="service-card__title">Reparacions</h3>
            <p className="service-card__text">
              Realitzem reparacions de bombes, filtres, focus i canonades.
              Disposem dels recursos necessaris per comprovar l’estanquitat de
              les instal·lacions i detectar possibles fugues d’aigua.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img
            className="service-card__image"
            src="/construccio-jardi.webp"
            alt="Construcció i reforma de piscina"
          />
          <div className="service-card__content">
            <h3 className="service-card__title">
              Construcció i reformes de piscines
            </h3>
            <p className="service-card__text">
              Construïm i reformem piscines d’obra, fibra, liner, acer i
              porexpan. Actualitzem acabats, renovem la imatge de l’espai i
              adaptem cada projecte a les necessitats del terreny i de cada
              client.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img
            className="service-card__image"
            src="/disenny_jardi.webp"
            alt="Disseny de jardí i espais exteriors"
          />
          <div className="service-card__content">
            <h3 className="service-card__title">Disseny de jardins</h3>
            <p className="service-card__text">
              Dissenyem jardins, terrasses, patis i àrees verdes pensant en
              l’estètica, l’ús i el manteniment futur. Projectem cada espai amb
              criteri tècnic, funcionalitat i una visió adaptada al teu entorn.
            </p>
          </div>
        </article>

        <article className="service-card">
          <img
            className="service-card__image"
            src="/manteniment_jardi.webp"
            alt="Servei de manteniment de jardí"
          />
          <div className="service-card__content">
            <h3 className="service-card__title">Manteniment de jardins</h3>
            <p className="service-card__text">
              Realitzem tasques periòdiques i puntuals de manteniment i
              conservació perquè el teu jardí es mantingui en bon estat durant
              tot l’any i sempre estigui preparat per gaudir-ne.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Serveis;
