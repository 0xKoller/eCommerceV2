import Item from "./Item";
import "./ItemList.scss"

export const ItemList = ({ productos }) => {
  return (
    <>
      <div className="productList">
        {productos.map((item) => (
          <Item key={item.id} producto={item} />
        ))}
      </div>
    </>
  );
};
