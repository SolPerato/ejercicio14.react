import { Container, Row } from "react-bootstrap";
import CardProducto from "../recetas/DetalleProducto";
const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://img.freepik.com/foto-gratis/ingredientes-italianos-apetitosos-frescos-sabrosos-comida-fondo-oscuro-listo-cocinar-inicio-italiano-comida-saludable-concepto-cocina-viraje_1220-1820.jpg?w=2000"
        alt="fondo recetas"
      />
      <Container>
        <h1 className="display-4 text-center">Recetas Faciles y sencillas</h1>
        <hr />
        <Row>
            <CardProducto></CardProducto>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
