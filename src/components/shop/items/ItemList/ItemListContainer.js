import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import Loading from "../../../loading/loading";
import { getFirestore } from "../../../../fireBase/index";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay productos!");
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
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="filters">
            <div className="categoryFilter">
              <label for="type">Categorias:</label>
              <div className="categoryOptions">
                <span>Accesorios</span>
                <input type="radio" value="accesories" name="type" id="type" />
                <span>Indumentaria</span>
                <input
                  type="radio"
                  value="indumentaria"
                  name="type"
                  id="type"
                />
                <span>Colecionables</span>
                <input
                  type="radio"
                  value="collectibles"
                  name="type"
                  id="type"
                />
                <span>Manga</span>
                <input type="radio" value="manga" name="type" id="type" />
              </div>
            </div>
            <div className="priceFilter">
              <label for="prices">Precio</label>
              <input type="number" name="prices" id="minPrice" />

              <input type="number" name="prices" id="maxPrice" />
            </div>
          </div>
          <ItemList productos={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
