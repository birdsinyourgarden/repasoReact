// Ejercicio 1: Saludar
//Saludar.jsx: Creas un componente Saludar que reciba una prop nombre y muestre un saludo.

// Saludar.jsx
export default function Saludar(props) {
    return <h2 className="titulo-ejercicio">Hola {props.nombre}</h2>
  }
  
  // Ejercicio1.jsx: Importamos y usamos el componente Saludar.
  
  // Ejercicio1.jsx
  import Saludar from './Saludar';
  import TituloEjercicio from '../TituloEjercicio';
  
  export default function Ejercicio1() {
    return (
      <section className="caja-ejercicio">
        <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
        <Saludar nombre="Juan" />
      </section>
    );
  }
  
  // App.jsx: Importamos Ejercicio1 en el componente principal App.
  
  // App.jsx
  import Ejercicio1 from './components/Ejercicio1/Ejercicio1';
  import Footer from './components/Footer';
  import Header from './components/Header';
  import TituloPrincipal from './components/TituloPrincipal';
  import './index.css';
  
  export default function App() {
    return (
      <>
        <Header />
        <main>
          <TituloPrincipal />
          <Ejercicio1 />
        </main>
        <Footer />
      </>
    );
  }
  
  // Ejercicio 2: Lista de Productos
  // Lista.jsx: Creas un componente que reciba una lista de productos y los renderice.
  
  // Lista.jsx
  export default function Lista(props) {
    return (
      <ul>
        {props.productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    );
  }
  
  //Ejercicio2.jsx: Importas y usas el componente Lista.
  
  // Ejercicio2.jsx
  import Lista from './Lista';
  
  const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  
  export default function Ejercicio2() {
    return (
      <section className="caja-ejercicio">
        <h2>Lista de Productos</h2>
        <Lista productos={productos} />
      </section>
    );
  }
  
  // Ejercicio 3: Renderizado Condicional en la Lista
  // Lista.jsx: Modificamos el componente para verificar si la lista está vacía y mostrar un mensaje en caso de que no haya productos.
  
  // Lista.jsx
  export default function Lista(props) {
    if (props.productos.length === 0) {
      return <p>No hay elementos en la lista</p>;
    }
  
    return (
      <ul>
        {props.productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    );
  }
  
  //Ejercicio3.jsx: Usamos el componente Lista con una lista vacía para ver el mensaje de "No hay elementos en la lista".
  
  // Ejercicio3.jsx
  import Lista from './Lista';
  
  const productos = []; 
  
  export default function Ejercicio3() {
    return (
      <section className="caja-ejercicio">
        <h2>Lista de Productos</h2>
        <Lista productos={productos} />
      </section>
    );
  }
  
  // Ejercicio 4: Contador
  // Contador.jsx: Creas el contador con un botón que incrementa el valor cada vez que se presiona.
  
  // Contador.jsx
  import { useState } from 'react';
  
  export default function Contador() {
    const [contador, setContador] = useState(0);
  
    const incrementar = () => setContador(contador + 1);
  
    return (
      <div>
        <h2>Contador: {contador}</h2>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    );
  }
  
  // App.jsx: Importas y usas el componente Contador.
  
  // App.jsx
  import Contador from './components/Contador/Contador';
  
  export default function App() {
    return (
      <>
        <Header />
        <main>
          <Contador />
        </main>
        <Footer />
      </>
    );
  }
  
  //Ejercicio 5: Comunicación entre Componentes
  //ParentComponent.jsx: Definimos una variable de estado llamada message y lo propagamos a un componente hijo.
  
  // ParentComponent.jsx
  import { useState } from 'react';
  import ChildComponent from './ChildComponent';
  
  export default function ParentComponent() {
    const [message, setMessage] = useState('Mensaje inicial');
  
    return (
      <div>
        <button onClick={() => setMessage('Nuevo mensaje')}>
          Cambiar mensaje
        </button>
        <ChildComponent message={message} />
      </div>
    );
  }
  
  //ChildComponent.jsx: Recibe la prop message y la muestra en pantalla.
  
  // ChildComponent.jsx
  export default function ChildComponent(props) {
    return <p>Mensaje desde el componente padre: {props.message}</p>;
  }
  
  // Ejercicio 6: Uso de Formularios en React
  // Formulario.jsx: Creamos un formulario con campos para Nombre, Email y Mensaje.
  
  // Formulario.jsx
  import { useState } from 'react';
  
  export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ nombre, email, mensaje });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
  
  // Ejercicio 7: Enrutamiento (Routing) en React
  // App.jsx: Configuramos el enrutamiento utilizando react-router-dom.
  
  // App.jsx
  import { Route, Routes } from 'react-router-dom';
  import About from './pages/About';
  import Contact from './pages/Contact';
  import Home from './pages/Home';
  import NotFound from './pages/NotFound';
  
  export default function App() {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
  
  // Home.jsx: Agregamos los enlaces de navegación.
  
  // Home.jsx
  import { Link } from 'react-router-dom';
  
  export default function Home() {
    return (
      <div>
        <h1>Página de inicio</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  // Ejercicio 8: Llamadas a API en React
  // Personajes.jsx: Usamos useEffect para hacer una llamada a la API de Rick & Morty.
  
  // Personajes.jsx
  import { useEffect, useState } from 'react';
  
  export default function Personajes() {
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => {
          setPersonajes(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar los personajes:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>
        <h1>Personajes</h1>
        <ul>
          {personajes.map((personaje) => (
            <li key={personaje.id}>
              <img src={personaje.image} alt={personaje.name} />
              <p>{personaje.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }