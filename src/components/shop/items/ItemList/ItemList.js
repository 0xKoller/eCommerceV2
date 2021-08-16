import Item from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((item) => (
        <Item key={item.id} producto={item} />
      ))}
    </div>
  );
};
