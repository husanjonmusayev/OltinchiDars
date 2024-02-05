import "./home.css";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  function hendalClick(prod) {
    props.click(prod);
  }

  return (
    <main>
      {product.map((prod) => {
        return (
          <div className="card" key={prod.id}>
            <img src={prod.image} alt="card_img" />
            <h2>{prod.title}</h2>
            <h3>{prod.price}$</h3>
            <button
              id={prod.id}
              onClick={() => {
                hendalClick(prod);
              }}
            >
              savatka
            </button>
          </div>
        );
      })}
    </main>
  );
}
