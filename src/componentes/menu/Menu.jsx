import Aplication from "./Aplication";
import ProductCard from "./ProductCard";

function Menu () {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={ProductCard.id}
          img={product.img}
          titulo={ProductCard.titulo}
          precio={ProductCard.precio}
        />
      ))}
    </div>
  );
};

export default Menu;