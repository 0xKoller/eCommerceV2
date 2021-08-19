import Item from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="productListWrapper">
      <div className="productList">
        {productos.map((item) => (
          <Item key={item.id} producto={item} />
        ))}
      </div>
    </div>
  );
};
