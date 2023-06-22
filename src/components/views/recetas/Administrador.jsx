import { Table, Button } from "react-bootstrap";
const Administrador = () => {
    return (
        <section className="container mainSection">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 ">Productos disponibles</h1>
          <Button className="btn btn-primary" to='/administrar/crear'>
            Agregar
          </Button>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </Table>
      </section>
    );
};

export default Administrador;