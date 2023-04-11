import CardPelicula from "./CardPelicula";

function Body() {
   
    const listaPeliculas = [
        {id: 1, nombre: "Cada día", description: "Rhiannon, una joven de 16 años, se enamora de un misterioso ser llamado A, que se despierta en un cuerpo diferente cada día. Sintiendo una enorme conexión, Rhiannon y A intentan verse, sin saber qué o quién les traerá el nuevo día.", img:"/img/img6.jpg", precio:"65"},
        {id: 2, nombre: "El hombre araña", description: "Mordido por una araña genéticamente modificada, un estudiante de secundaria tímido y torpe obtiene increíbles capacidades como arácnido. Pronto comprenderá que su cometido es utilizarlas para luchar contra el mal y defender a sus vecinos.", img:"/img/img5.jpg", precio:"75"},
        {id: 3, nombre: "Misterio a la vista", description: "Como detectives privados que han iniciado su propia agencia, Nick y Audrey Spitz aterrizan en el centro de una investigación internacional cuando un amigo es secuestrado.", img:"/img/img4.jpg", precio:"300"},
        {id: 4, nombre: "Más allá del cielo", description: "Charlie aceptó un trabajo en el cementerio en el que está enterrado su hermano pequeño, y cada noche habla y juega con el. Cuando una chica se cruza en su camino, Charlie deberá decidir si seguir a su enamorada o permanecer fiel a su hermano.", img:"/img/img3.jpg", precio:"55"},
        {id: 5, nombre: "Cuestión de tiempo", description: "Un hombre que tiene el don de revivir el pasado, decide conquistar el corazón de la bella Mary, pero pronto descubre que la senda del amor verdadero puede ser tan divertida como difícil... aunque se tenga la posibilidad de intentarlo una y otra vez.", img:"/img/img2.jpg", precio:"65"},
        {id: 6, nombre: "Camp Rock", description: "Mitchie Torres tiene la oportunidad de asistir a Camp Rock, el prestigioso campamento musical. Pero mientras trabaja duro para perfeccionar sus talentos musicales, Mitchie descubre lo competitivos que son los campistas.", img:"/img/img1.jpg", precio:"60"}
      ]
    return (

        <div className="Body-servicios">
            <h1 className="titulo-servicios">Cartelera</h1>

            <div className="ContainerProductos-servicio">
              {listaPeliculas.map((listaPeliculas) => {
              return (
  
                <CardPelicula
                key={listaPeliculas.id}
                nombre={listaPeliculas.nombre}
                img={listaPeliculas.img}
                description={listaPeliculas.description}
                precio={listaPeliculas.precio}
                />

                );
              })}
            </div>

        </div>
    )
}
export default Body;