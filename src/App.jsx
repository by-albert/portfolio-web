import './App.css'

// Importem tots els components
// Navegador
import Navbar from './02-Components/Navbar/Navbar';

// Sobre mi
import About from './02-Components/About/About';

// Footer
import Footer from './02-Components/Footer/Footer'; 

function App() {

  return(
    <div>
      <Navbar />
      <About />
      <Footer/>
    </div>
  )

}

export default App
