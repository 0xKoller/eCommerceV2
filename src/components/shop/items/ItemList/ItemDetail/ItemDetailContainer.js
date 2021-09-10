import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../../../../loading/loading";
import { getFirestore } from "../../../../../fireBase";
export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const items = db.collection("items");
    const consulta = items.doc(id);
    consulta
      .get()
      .then((document) => {
        if (!document.exists) {
          console.log("No hay items");
          return;
        }
        setProduct({ id: document.id, ...document.data() });
      })
      .finally(setIsLoading(false));
  }, [id]);
  return (
    <div>{isLoading ? <Loading /> : <ItemDetail product={product} />}</div>
  );
};
