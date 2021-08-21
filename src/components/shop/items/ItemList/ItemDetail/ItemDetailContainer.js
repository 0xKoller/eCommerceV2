import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import productsMock from "../ItemMock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getItem = new Promise((pass, deni) => {
    setTimeout(function () {
      pass(productsMock);
    }, 2000);
  });
  useEffect(() => {
    setIsLoading(true);
    getItem
      .then((pass) =>
        pass.forEach((element) => {
          if (element.id === id) {
            setProduct(element);
          }
        })
      )
      .catch((deni) => console.log(deni))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? <div>Cargando</div> : <ItemDetail product={product} />}
    </div>
  );
};
