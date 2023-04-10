import CardServicios from "./CardServicios";


function Body() {
    const listaServicios = [
        {id: 1, nombre: "Cafe moca", description: "Mólido de café extra fino, Sabor Amargo", img:"/img/tab-item-01.jpg", precio:"100"},
        {id: 2, nombre: "Cafe moca", description: "Mólido de café extra fino, Sabor Amargo", img:"/img/tab-item-01.jpg", precio:"200"},
        {id: 3, nombre: "Cafe moca", description: "Mólido de café extra fino, Sabor Amargo", img:"/img/tab-item-01.jpg", precio:"300"},
        {id: 4, nombre: "Cafe moca", description: "Mólido de café extra fino, Sabor Amargo", img:"/img/tab-item-01.jpg", precio:"400"},
        {id: 5, nombre: "Cafe moca", description: "Mólido de café extra fino, Sabor Amargo", img:"/img/tab-item-01.jpg", precio:"500"},
        {id: 6, nombre: "Cafe moca", description: "Mólido de café extra fino, Sabor Amargo", img:"/img/tab-item-01.jpg", precio:"500"}
      ]
    return (

        <div className="Body-servicios">

            <h1 className="titulo-servicios">Servicios</h1>

            <div className="ContainerProductos-servicio">
              {listaServicios.map((listaServicios) => {
              return (
  
                <CardServicios 
                key={listaServicios.id}
                nombre={listaServicios.nombre}
                img={listaServicios.img}
                description={listaServicios.description}
                precio={listaServicios.precio}
                />

                );
              })}
            </div>

        </div>
    )
}
export default Body;