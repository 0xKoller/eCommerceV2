import ItemCount from "../../ItemCounter/ItemCounter";

export const ItemDetail = ({ product, setModalIsOpen }) => {
  const onAdd = (amount) => {
    alert(`Agregaste ${amount} al carrito`);
    setModalIsOpen(false);
  };
  return (
    <div className="ItemDetail">
      <button className="closeButton" onClick={() => setModalIsOpen(false)}>
        {" "}
        X{" "}
      </button>
      <img src={product.pictureUrl} alt="Imagen del Productos" />
      <h2>{product.title}</h2>
      <h4>${product.price}</h4>
      <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      {/* Este es el console log que me mostro el problema, si lo veas al iniciar
      vas a ver que al principio devuelve un objeto sin nada adentro y luego
      devuelve el array con todos los productos que tengo cargados a nivel demo
      probe poniendo el elemento 0 en el ItemDetailContainer pero, como es
      obvio, tira error ya que que ademas de ser un objeto este no esta
      definido.*/}
      {console.log(product)}
    </div>
  );
};
