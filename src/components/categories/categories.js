import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../fireBase";
import Loading from "../loading/loading";
import { ItemList } from "../shop/items/ItemList/ItemList";

const Categories = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [item, setItem] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("categories");
    const currentItem = itemCollection.doc(categoryId);
    currentItem.get().then((document) => {
      if (!document.exists) {
        console.log("No existe el item");
        return;
      }
      setCategory(document.data().name);
    });
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay productos!");
        } else {
          setProducts(
            querySnapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
        // const filterItems = items.filter((item) => {
        //   return item.categoryName === category;
        // });
        // console.log("Items Filtrados" + filterItems);
        // setItem(filterItems);
        // console.log(item);
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    console.log("Cambio el ID", categoryId);
  }, [categoryId]);

  if (!products) return <Loading />;

  return (
    <div>
      <h1>{category}</h1>
      <div className="productList">
        <ItemList productos={products} />
      </div>
    </div>
  );
};

export default Categories;
