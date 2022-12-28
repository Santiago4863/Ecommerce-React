import './App.css';
import Card from "./components/Card"
import Button from './components/Button/Button';
import NavBar from './components/NavBar/NavBar';
import Flex from './components/Flex/Flex';
import ItemListcontainer from './components/ItemListcontainer/ItemListcontainer';

function App() {

  const producto = {
    precio: 500,
    nombre: "Lentes",
    descripcion: "Lentes hombre",
  };

  const cardProduct = (
    <div>
      <h3>{producto.nombre}</h3>
      <br />
      <h3>$ {producto.precio}</h3>
      <h3>{producto.descripcion}</h3>
    </div>
  );

  function hacerAlgo() {
    alert("Gracias por elegirnos");
  }

  const miEstilo = {
    backgroundColor: "#445c83",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <ItemListcontainer greeting="Te damos la bienvenida a nuestra tienda"/>
      <Flex>
        <Card
          img="img/hombre-1.jpg"
          title="Lentes hombre"
          price={5000}
          detail="Lentes para hombre"
          />

        <Card
        img="img/mujer-1.jpg" 
        title="Lentes mujer" 
        price={4500} 
        detail="Lentes para mujer"
        />

        <Card
        img="img/niños-1.jpg" 
        title="Lentes niños" 
        price={3000} 
        detail="lentes para niños"
        />
        </Flex>

      <button onClick={hacerAlgo}>Comprar</button>
      </div>
  );
}

export default App;