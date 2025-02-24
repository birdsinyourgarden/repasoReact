## Ejercicio 1: Saludar

Crea un componente llamado "Saludar" que reciba el prop "nombre" y muestre un mensaje de saludo utilizando ese nombre.

### Instrucciones

1. Crea un nuevo componente llamado "Saludar".
2. Define una prop llamada "nombre" en el componente "Saludar".
3. En el renderizado del componente, muestra un mensaje de saludo que incluya el nombre recibido por props.
4. Utiliza este componente en tu aplicación principal importándolo y pasándole un nombre como prop.

Ejemplo:

1. Creamos el componente Saludar en la carpeta componentes:

- Saludar.jsx

  ```jsx
  export default function Saludar(props) {
    return <h2 className="titulo-ejercicio">Hola {props.nombre}</h2>
  }
  ```

2. Importamos el componente saludar en el componente Ejercicio1 y le pasamos la prop nombre="Juan":

- Ejercicio1.jsx

  ```jsx
  import Saludar from './Saludar'
  import TituloEjercicio from '../TituloEjercicio'

  export default function Ejercicio1() {
    return (
      <section className="caja-ejercicio">
        <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
        <Saludar nombre="Juan" />
      </section>
    )
  }
  ```

3. Importamos el componente Ejercicio1 a nuestro componente App:

- App.jsx

  ```jsx
  import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
  import Footer from './components/Footer'
  import Header from './components/Header'
  import TituloPrincipal from './components/TituloPrincipal'
  import './index.css'

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
    )
  }
  ```

## Ejercicio 2: Lista de Productos

Dada una lista de productos ubicada en el archivo de constantes, crea un componente llamado "Lista" que reciba esta lista como prop y la renderice en la pantalla.

### Instrucciones

1. Importa la lista de productos desde el archivo de constantes.
2. Crea un nuevo componente llamado "Lista".
3. Define una prop llamada "productos" en el componente "Lista" para recibir la lista de productos.
4. Dentro del renderizado del componente, itera sobre la lista de productos y muestra cada elemento en una lista o tabla.
5. Utiliza este componente en tu aplicación principal importándolo y pasándole la lista de productos como prop.

## Ejercicio 3: Renderizado Condicional en la Lista

Reutiliza el componente "Lista" que creaste en el ejercicio 2 y añade una funcionalidad de renderizado condicional. Si la longitud de la lista de productos es igual a cero, muestra el mensaje "No hay elementos en la lista".

### Instrucciones

1. Modifica el componente "Lista" para incluir una comprobación de longitud de la lista de productos.
2. Si la longitud es cero, muestra el mensaje "No hay elementos en la lista".
3. Si la longitud no es cero, renderiza la lista de productos como lo hiciste en el ejercicio 2.
4. Utiliza el componente modificado en tu aplicación principal.

## Ejercicio 4: Contador

Crea un contador simple que aumente su valor cada vez que se presiona un botón. Este ejercicio te ayudará a comprender cómo gestionar el estado en React.

### Instrucciones

1. Crea un componente llamado "Contador".
2. En el componente "Contador", define una variable de estado llamada "contador" con un valor inicial de 0.
3. Renderiza el valor del contador en la pantalla.
4. Agrega un botón que, cuando se presiona, incremente el valor del contador en 1.
5. Utiliza este componente en tu aplicación principal.

### Ejercicio 5: Comunicación entre componentes

#### Objetivo:

- Practicar la comunicación entre componentes mediante la propagación de props.

#### Instrucciones:

1. Crea un componente llamado `ParentComponent`.
2. Dentro de `ParentComponent`, crea una variable de estado llamada `message` con un valor inicial.
3. Crea un componente hijo llamado `ChildComponent`.
4. Propaga la variable `message` como una prop al componente `ChildComponent`.
5. En el componente `ChildComponent`, muestra el valor de `message` en la pantalla.
6. Implementa un botón en `ParentComponent` que permita cambiar el valor de `message` y observe cómo se actualiza en `ChildComponent`.

### Ejercicio 6: Uso de formularios en React

#### Objetivo:

- Aprender cómo manejar formularios en React.
- Utilizar los eventos `onChange` y `onSubmit` en un formulario.

#### Instrucciones:

1. Crea un formulario con los siguientes campos: Nombre, Email y Mensaje.
2. Crea un componente llamado `Formulario` que contenga el formulario.
3. Implementa funciones para manejar los eventos `onChange` de los campos del formulario y actualiza el estado correspondiente para cada campo.
4. Implementa una función para manejar el evento `onSubmit` del formulario y muestra los valores ingresados en la consola.

### Ejercicio 7: Enrutamiento (Routing) en React

#### Objetivo:

- Aprender a implementar enrutamiento en una aplicación de React.
- Utilizar la biblioteca React Router para gestionar las rutas de la aplicación.

#### Instrucciones:

1. Instala React Router en tu proyecto si aún no lo has hecho: [React Router](https://reactrouter.com/).
2. Configura las siguientes rutas en tu aplicación:
   - Ruta de inicio ("/"): Mostrará un mensaje de bienvenida.
   - Ruta de Acerca de ("/about"): Mostrará información sobre la empresa o el proyecto.
   - Ruta de Contacto ("/contact"): Mostrará un formulario de contacto.
   - Ruta página no encontrada ("\*"): Se mostrará siempre que se ponga en el navegador una ruta no definida en nuestra applicación.
3. Crea componentes separados para cada una de las rutas.
4. Utiliza React Router para definir y renderizar las rutas en tu aplicación.
5. Agrega enlaces de navegación en la barra de navegación para cada ruta.
6. Implementa el enrutamiento para que cuando el usuario haga clic en un enlace, la vista correspondiente se muestre en la pantalla.

Ejemplo:

1. Primero deberiamos instalar la libreria react-router-dom de la siguiente manera, pero para este proyecto ya la encontrareis instalada y podeis saltaros este paso:

   ```bash
   npm install react-router-dom
   ```

2. Tenemos distintas opciones de routers para realizar el enrutamiento, pero nosotros utilizaremos el "BrowserRouter". Primero debemos hacer wrap (envolver) de la app con el enrutador.

- Fichero main.jsx

  ```jsx
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  //Importamos BrowserRouter de react-router-dom
  import { BrowserRouter } from 'react-router-dom'
  import App from './App.jsx'
  import '../index.css'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* Añadimos el BrowserRouter que envuelve la aplicación para poder añadir las rutas de la app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
  ```

3. Creamos una carpeta "pages" dentro de src y añadimos los siguientes componentes paginas (Home, About, Contact y NotFound):

- Home.jsx (Añadimos el contenido que teniamos en App.jsx)

  ```jsx
  import Ejercicio1 from '../components/Ejercicio1'
  import Ejercicio2 from '../components/Ejercicio2'
  import Ejercicio3 from '../components/Ejercicio3'
  import Ejercicio4 from '../components/Ejercicio4'
  import Footer from '../components/Footer'
  import Header from '../components/Header'
  import TituloPrincipal from '../components/TituloPrincipal'

  export default function Home() {
    return (
      <>
        <Header />
        <main>
          <TituloPrincipal />
          <Ejercicio1 />
          <Ejercicio2 />
          <Ejercicio3 />
          <Ejercicio4 />
        </main>
        <Footer />
      </>
    )
  }
  ```

- About.jsx

  ```jsx
  export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
      </div>
    )
  }
  ```

- Contact.jsx

  ```jsx
  export default function Contact() {
    return (
      <div>
        <h1>Página de Formulario de contacto</h1>
      </div>
    )
  }
  ```

- NotFound.jsx (Añadimos el componente "Link" de react-router-dom para volver a la pagina de inicio)

  ```jsx
  import { Link } from 'react-router-dom'

  export default function NotFound() {
    return (
      <div>
        <h1>Error 404 - Página no encontrada</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }
  ```

4. Definimos las rutas de nuestra app en el componente App.

- Fichero App.jsx

  ```jsx
  // Importamos Routes y Route de react-router-dom
  import { Route, Routes } from 'react-router-dom'
  import '../index.css'
  import About from './pages/About'
  import Contact from './pages/Contact'
  import Home from './pages/Home'
  import NotFound from './pages/NotFound'

  export default function App() {
    return (
      // Definimos las Rutas con el componente Padre Routes
      <Routes>
        <!-- Definimos cada ruta de nuestra app con el componente Route. En este caso decimos que es el index y no hace -->
        falta poner ninguna ruta.
        <Route index element={<Home />} />
        <!-- Definimos la ruta que corresponde en "path" y en element ponemos el componente pagina que tiene que ser renderizado.-->
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <!-- Usar path="*" significa "coincidir con cualquier cosa", por lo que esta ruta
          actúa como una captura de todas las URL para las cuales no tenemos rutas
          explícitas definidas. -->
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  }
  ```

5. Creamos nuestro componente Navegacion y añadimos los Links con las rutas de nuestra applicación.

- Fichero Navegacion.jsx

  ```jsx
  import { Link } from 'react-router-dom'

  export default function Navegacion() {
    return (
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
    )
  }
  ```

6. Añadimos nuestro componente Navegacion al Ejercicio3 y tambien en las otras paginas (Excepto NotFound).

- Ejemplo en pagina About (Fichero About.jsx):

  ```jsx
  import Navegacion from '../components/Ejercicio3/Navegacion'

  export default function About() {
    return (
      <div>
        <h1>Página sobre nosotros</h1>
        <Navegacion />
      </div>
    )
  }
  ```

### Ejercicio 8: Llamadas a API en React

#### Objetivo:

- Aprender a realizar llamadas a una API externa en una aplicación de React.
- Utilizar la función `fetch` para obtener datos de una API.
- Renderizar los personajes de la api de Rick & Morty y mostrar su imagen y nombre.

#### Instrucciones:

1. Crea un componente llamado `Personajes`.
2. Utiliza el hook `useEffect` para realizar una llamada a la API de rick and morty https://rickandmortyapi.com/api/character cuando el componente se monta.
3. Maneja el estado `cargando (loading)` cuando se inicia y termina la petición a la API con el hook `useState`.
4. Almacena los datos de recibidos en una variable usando el hook `useState`.
5. Muestra los datos obtenidos de la API en la pantalla usando el metodo `map` de manera legible (por ejemplo, en una lista) y muestra minimo la `imagen` y el `nombre del personaje`.
6. Maneja posibles errores en la llamada a la API y muestra un mensaje adecuado en caso de error.