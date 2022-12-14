import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const handleChange = () => setChecked((prev) => !prev);

  /* 
  화면 그릴경우 처음에 가져와야 할 데이터가 있다면 
  useEffect(api호출,재호출여부);
  */
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
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
  }, [checked]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>
  return (
    <>
      <input type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checked">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
