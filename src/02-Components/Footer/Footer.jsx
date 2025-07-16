import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Albert PC · Portfolio Web</p>
        <div className="footer__social">
          <a href="https://github.com/albertITIC" target="_blank" rel="noopener noreferrer">GitHub</a>
          <p><b>Correo:</b> apencas03@gmail.com </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
