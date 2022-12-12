import { useEffect, useState } from "react";

export default function useProducts({salesOnly}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  /* 
  화면 그릴경우 처음에 가져와야 할 데이터가 있다면 
  useEffect(api호출,재호출여부);
  */
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생"))
      .finally(() => setLoading(false));
    /* 초기화에 사용할 것 같음 */
    return () => {
      console.log("청소합니다.");
    };
  }, [salesOnly]);

  return [loading, error, products]
}