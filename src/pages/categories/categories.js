import { useEffect, useState } from "react";
import { ItemList } from "../../components/shop/items/ItemList/ItemList";
import { getFirestore } from "../../fireBase/index";
import Loading from "../../components/loading/loading";
import { useParams } from "react-router";

export const Categories = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [categorie, setCategorie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const categoriesCollection = db.collection("categories");
    categoriesCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay productos!");
        }
        setCategorie(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => alert(err));
    const itemsCollection = db.collection("items");
    itemsCollection
      .where("categoryId", "==", `${categoryId}`)
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
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, [categoryId]);

  if (products < 1) {
    return <Loading />;
  }
  return (
    <div>
      <ItemList productos={products} />
    </div>
  );
};
