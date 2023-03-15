import CreateProduct from "./api/product/CreateProduct";
import GetAllProduct from "./api/product/GetAllProduct";

function Productos() {
  return (
    // <CreateProduct/>
    <GetAllProduct/>
  );
}

export default Productos;

// <div>
    //   <h1>PRODUCTOS</h1>
    //   <Table celled size="small" color="purple">
    //     <Table.Header>
    //       <Table.Row>
    //         <Table.HeaderCell>Id</Table.HeaderCell>
    //         <Table.HeaderCell>Nombre</Table.HeaderCell>
    //         <Table.HeaderCell>Descripcion</Table.HeaderCell>
    //         <Table.HeaderCell>Precio</Table.HeaderCell>
    //         <Table.HeaderCell>Foto</Table.HeaderCell>
    //       </Table.Row>
    //     </Table.Header>

    //     <Table.Body>
    //       {producto.map((data => (
    //         <Table.Row key={data.id}>
    //           <Table.Cell className="table-celdas-azules">{data.id}</Table.Cell>
    //           <Table.Cell>{data.nombreProducto}</Table.Cell>
    //           <Table.Cell>{data.descripcion}</Table.Cell>
    //           <Table.Cell>{data.precio}</Table.Cell>
    //           <Table.Cell><img src={data.foto} alt="Foto del producto" width={50} height={50}/></Table.Cell>
    //         </Table.Row>
    //       )))}
    //     </Table.Body>
    //   </Table>
      /* <h1>Post</h1>
            <form onSubmit={postProductos}>
                <label htmlFor="nombreProducto">Nombre</label><br></br>
                <input type="text" name="NombreProducto" id="nombreProducto" value={producto.nombreProducto} onChange={handleChangePost}></input><br></br>

                <label htmlFor="descripcion">Descripción</label><br></br>
                <input type="text" name="Descripcion" id="descripcion" value={producto.descripcion} onChange={handleChangePost}></input><br></br>
  
                <label htmlFor="idCategoria">Id categoria</label><br></br>
                <input type="text" name="CategoriaId" id="idCategoria" value={producto.idCategoria} onChange={handleChangePost}></input><br></br>
                
                <label htmlFor="precio">Precio</label><br></br>
                <input type="text" name="Precio" id="precio" value={producto.precio} onChange={handleChangePost}></input><br></br>

                <label htmlFor="foto">Foto</label><br></br>
                <input type="file" name="Foto"  id="foto" value={producto.foto}  onChange={handleChangeFoto}></input><br></br>

                <button type="submit">Agregar</button>
            </form>               */
    // </div>