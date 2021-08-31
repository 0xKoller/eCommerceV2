import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.scss";
import { getFirestore } from "../../../../fireBase/index";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [getIsEmpty, setGetIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setGetIsEmpty(true);
        }
        setProducts(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div id="grid">
      {isLoading ? <div>Cargando</div> : <ItemList productos={products} />}
    </div>
  );
}

export default ItemListContainer;
