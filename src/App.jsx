import Navbar from "./components/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero";
import Fondo from "./assets/Fondo.png"         


function App() {

  const bgImage={
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
     backgroundPosition: "button",
      backgroundSize: "cover",
       position: "relative",
  }
  return (
    <div style={bgImage} className="overflow-hidden min-h-screen">
      <Navbar />   
      <Hero />     
    </div>
  );
}


export default App;


