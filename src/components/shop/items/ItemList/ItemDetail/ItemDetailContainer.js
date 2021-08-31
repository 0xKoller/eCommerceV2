import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../../../../loading/loading";
import { getFirestore } from "../../../../../fireBase";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    console.log(itemsCollection);
    const element = itemsCollection.where("id", "==", { id });
    element
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.size);
        if (querySnapshot.size === 0) {
          console.log("No existe el producto");
        }

        setProducts(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>{isLoading ? <Loading /> : <ItemDetail product={product} />}</div>
  );
};
