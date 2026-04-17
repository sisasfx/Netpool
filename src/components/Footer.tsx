import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* <h1>Contacte</h1> */}
      <div className="dades-contacte">
        <p>
          <img className="icon-phone" src="/envelope-solid.svg" />
          <a href="mailto:correo@ejemplo.com">
            Email:<strong className="footer_info">bernat@netpool.cat </strong>
          </a>
        </p>
        <p>
          <img className="icon-phone" src="/phone-solid.svg" />
          Telèfon: <strong className="footer_info">656 55 97 33 </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
