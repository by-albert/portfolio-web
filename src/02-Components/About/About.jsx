import './About.scss';
import miFoto from '../../assets/img/mi-foto.jpeg';

function About() {
  return (
    <section className="about">
      {/* Información a cerca de mi */}
      <div className="about__text">
        <h2>SOBRE MI</h2>
        <h3>Desarrollador Web Junior y Editor de Video</h3>
        <p>
          Buenas, soy Albert — una persona creativa que se expresa mediante el arte del diseño  web y el contenido audiovisual.
        </p>
      </div>

      {/* Foto */}
      <div className="about__photo">
        <img src={miFoto} alt="Foto de Albert" />
      </div>

      {/* CV */}
      <div>

      </div>

    </section>

  );
}

export default About;
