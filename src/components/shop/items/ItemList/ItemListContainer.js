import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import productsMock from "./ItemMock";
import Loading from "../../../loading/loading";

function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getItems = new Promise((pass, deni) => {
    setTimeout(function () {
      pass(productsMock);
    }, 4000);
  });

  useEffect(() => {
    setIsLoading(true);
    getItems
      .then((pass) => setListProducts(pass))
      .catch((deni) => console.log(deni))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{isLoading ? <Loading /> : <ItemList productos={listProducts} />}</>;
}

export default ItemListContainer;
