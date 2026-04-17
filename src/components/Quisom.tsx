import "../styles/quisom.css";

function Quisom() {
  return (
    <section className="qui_som" id="quisom">
      <div className="second_card_section">
        <div className="three_blocks_quisom">
          <div className="row_two">
            <div className="atencio_quisom">
              <img className="card-img" src="/atencio.png" />
              <h1>Atenció del client</h1>
              <p>
                Posem a la seva disposició tots els nostres canals d’atenció per
                atendre urgències i anticipar-nos a les seves necessitats.
              </p>
            </div>
            <div className="atencio_quisom">
              <img className="card-img" src="/satisfacio_client.jpg" />
              <h1>Satisfacció del client</h1>
              <p>
                El nostre objectiu és satisfer les necessitats dels nostres
                clients en cada projecte que realitzem, per petit que sigui el
                servei.
              </p>
            </div>
            <div className="atencio_quisom">
              <img className="card-img" src="/equip_netpool.jpg" />
              <h1>Equip</h1>
              <p>
                Disposem d’un equip fixe de professionals especialitzats en el
                món de les piscines i jardins. La nostra prioritat ets tu!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="segundo_bloque"></div> */}
    </section>
  );
}

export default Quisom;
