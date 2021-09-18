import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import Loading from "../../../loading/loading";
import { getFirestore } from "../../../../fireBase/index";
import NotFound from "../../../../pages/notFound/notFound";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(null);

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
        setFilter(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  const filterItems = (option) => {
    if (option) {
      const test = filter.filter((item) => {
        return item.categoryName === option;
      });
      setProducts(test);
    } else {
      console.log("No hay filtro");
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="filters">
            <div className="categoryFilter">
              <label>Categorias:</label>
              <div className="categoryOptions">
                <span>Accesorios</span>
                <input
                  type="radio"
                  value="Accesories"
                  name="type"
                  id="type"
                  onClick={() => filterItems("Accesories")}
                />
                <span>Indumentaria</span>
                <input
                  type="radio"
                  value="Indumentaria"
                  name="type"
                  id="type"
                  onClick={() => filterItems("Indumentaria")}
                />
                <span>Colecionables</span>
                <input
                  type="radio"
                  value="Collectibles"
                  name="type"
                  id="type"
                  onClick={() => filterItems("Collectibles")}
                />
                <span>Manga</span>
                <input
                  type="radio"
                  value="manga"
                  name="type"
                  id="type"
                  onClick={() => filterItems("Manga")}
                />
              </div>
            </div>
          </div>
          <ItemList productos={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
