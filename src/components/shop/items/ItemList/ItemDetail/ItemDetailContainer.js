import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../../../../loading/loading";
import { getFirestore } from "../../../../../fireBase";
export const ItemDetailContainer = () => {
  // const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const items = db.collection("items");
    const consulta = items.where("id", "==", "bgckbL4DPuvbkIQJ6wF5");
    consulta
      .get()
      .then((products) => {
        products.forEach((doc) => {
          let data = doc.data();
          console.log(data);
        });
      })
      .finally(setIsLoading(false));
  }, []);
  return (
    <div>{isLoading ? <Loading /> : <ItemDetail product={product} />}</div>
  );
};
