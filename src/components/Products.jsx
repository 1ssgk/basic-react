import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  /* 
  화면 그릴경우 처음에 가져와야 할 데이터가 있다면 
  useEffect(api호출,재호출여부);
  */
  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터를 가져왔습니다.");
        setProducts(data);
      });
    /* 초기화에 사용할 것 같음 */
    return () => {
      console.log("청소합니다.");
    };
  }, [checked]);

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
