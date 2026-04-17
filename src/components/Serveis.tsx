import "../styles/serveis.css";

function Serveis() {
  return (
    <section className="section-serveis" id="serveis">
      <div className="main-card-section">
        <div className="main-card-text">
          <h1 className="card-title">
            Netpool serveis per a piscines i jardins
          </h1>
          <p className="card-text">
            Som una empresa especialitzada en el món de les piscines i jardins
            en la zona de Maresme i Barcelona.
            <br />
            <br />
            Oferim manteniment, construcció, reparació, instal·lació i reformes
            integrals per a posar al dia la teva piscina amb les tecnologies més
            innovadores.
            <br />
            <br />
            També oferim el servei de gestió del seu jardí: disseny, construcció
            i manteniment.
            <br />
            <br />
            Gestionem piscines i jardins de particulars, comunitats de veïns, i
            espais públics o privats.
            <br />
            <br />
            Contractant els nostres serveis només haurà de preocupar-se de
            gaudir de la seva piscina i jardí, de la resta ens encarreguem
            nosaltres.
          </p>
        </div>
        <img className="main-card-img" src="/sea-view.jpg" />
      </div>

      <div className="card-section">
        <div className="first_three">
          <div className="card card-1">
            <div className="column-card-text">
              <img className="card-img" src="/manteniment.jpeg" />
              <h1>
                Manteniment de piscines de particulars, comunitàries o
                públiques.
              </h1>
              <p>
                Realitzem manteniment de piscines particulars, comunitats o
                públiques. Oferim la gestió completa del manteniment de la seva
                piscina, això inclou visites periòdiques en les quals ens
                encarreguem de la desinfecció de l’aigua amb productes químics,
                neteja física i el manteniment de tots els components de la
                piscina per assegurar el bon funcionament d’aquesta. Ens ajustem
                a les seves necessitats.
              </p>
            </div>
          </div>

          <div className="card card-2">
            <div className="column-card-text">
              <img className="card-img" src="/productes-quimics.jpeg" />
              <h1>Productes químics</h1>
              <p>
                Disposem d’una àmplia varietat de productes pel tractament
                químic de l’aigua . Instal·lem equips automàtics de tractament
                de l’aigua per a spas i piscines, electròlisis salina,
                hidròlisis, bombes dosificadores, ultravioleta, etc.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="column-card-text">
              <img className="card-img" src="/reparacions.jpeg" />
              <h1>Reparacions</h1>
              <p>
                Realitzem tot tipus de reparacions de bombes, filtres, focus,
                borada.. Disposem de medis per a provar l’estanquitat de les
                tuberies, per a detectar possibles fugues d’aigua.
              </p>
            </div>
          </div>
        </div>

        <div className="second_three">
          <div className="card">
            <div className="column-card-text">
              <img className="card-img" src="/construccio-jardi.jpg" />
              <h1>Construcció i reformes de piscines</h1>
              <p>
                Construcció de tot tipus de piscines: d’obra, fibra, liner, acer
                i porexpan. Modifiquem els acabats de la seva piscina per a
                donar una nova imatge a casa seva, seleccionant el material que
                millor s’adapta a cada cas. El nostre equip ve a dissenyar la
                piscina que sempre ha volgut, seguint les teves indicacions i
                amb la base de la piscina que el teu jardí té actualment.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="column-card-text">
              <img className="card-img" src="/disenny_jardi.jpg" />
              <h1>Disseny</h1>
              <p>
                Dissenyem jardins, àrees verdes, patis, terrasses,
                instal·lacions esportives, etc. Projectem amb tu el teu jardí
                ideal. Construcció Construïm amb criteri, enginy, organització i
                agilitat tenint en compte les propietats del terreny, materials,
                característiques del sòl i necessitats hídriques de les plantes.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="column-card-text">
              <img className="card-img" src="/manteniment_jardi.jpg" />
              <h1>Manteniment</h1>
              <p>
                Tots els jardins necessiten certa cura i atenció per tal de
                mantenir-los en bon estat. Realitzem totes les tasques de
                manteniment i conservació del teu jardí. Aquest servei inclou
                actuacions periòdiques i puntuals de manera que el seu jardí
                sempre estarà perfecte per gaudir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serveis;
