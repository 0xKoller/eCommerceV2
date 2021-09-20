import { useEffect, useState } from "react";
import { ItemList } from "../../components/shop/items/ItemList/ItemList";
import { getFirestore } from "../../fireBase/index";
import Loading from "../../components/loading/loading";
import { useParams } from "react-router";

export const Categorie = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(null);
  console.log(categoryId);
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
};
