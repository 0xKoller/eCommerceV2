import Item from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item) => (
        <Item key={item.id} producto={item} />
      ))}
    </>
  );
};
