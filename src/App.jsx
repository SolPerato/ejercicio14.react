import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";

function App() {
  return (
    <>
      <Menu></Menu>
      {/* <Error404></Error404> */}
      <Inicio></Inicio>
      {/* <DetalleProducto></DetalleProducto> */}
      {/* <CrearProducto></CrearProducto> */}
      {/* <EditarProducto></EditarProducto> */}
      {/*<Administrador></Administrador>*/}
      <Footer></Footer>
    </>
  );
}

export default App;