import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import productsMock from "./ItemMock";
import "./ItemListContainer.scss";
import { getFirestore } from "../../../../fireBase/index";

function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getItems = new Promise((pass, deni) => {
    setTimeout(function () {
      pass(productsMock);
    }, 2000);
  });

  useEffect(() => {
    let data = [];
    const db = getFirestore();
    const ItemCollection = db.collection("items");
    ItemCollection.get()
      .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
      })
      .catch((error) => console.error(error));

    console.log(data);
    setIsLoading(true);
    getItems
      .then((pass) => setListProducts(pass))
      .catch((deni) => console.log(deni))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="grid">
      {isLoading ? <div>Cargando</div> : <ItemList productos={listProducts} />}
    </div>
  );
}

export default ItemListContainer;
