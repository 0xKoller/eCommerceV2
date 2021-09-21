import { useEffect, useState } from "react";
import { ItemList } from "../../components/shop/items/ItemList/ItemList";
import { getFirestore } from "../../fireBase/index";
import Loading from "../../components/loading/loading";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./categories.scss";

export const Categories = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore();
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
    return (
      <>
        <Loading />
        <div className="sasukeThinking">
          <p>
            Si Sasuke no deja de pensar es que no logro encontrar lo que
            buscabas, te invitamos a que vuelvas a la pagina principal!
          </p>
          <Link to="/" className="goBack">
            ¡Volver a la pagina principal!
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <ItemList productos={products} />
    </div>
  );
};
