import './Footer.scss';
import whiteGithub from '../../assets/img/whiteGithub.png';
import gmailIcon from '../../assets/img/gmail.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_contingut">

        <div className="contacte_correu">
          <img src={gmailIcon} alt="Icona correu electrónic" />
          <p>Gmail: apencas03@gmail.com </p>
        </div>
        
        <div className="contacte_github">
          <img src={whiteGithub} alt="Icona GitHub" />
          <p>Mi GitHub:<a href="https://github.com/albertITIC" target="_blank" rel="noopener noreferrer">AlbertITIC</a></p>
        </div>

        <p>© {new Date().getFullYear()} Albert PC</p>
     
      </div>
    </footer>
  );
}

export default Footer;
