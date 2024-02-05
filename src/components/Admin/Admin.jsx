import React from "react";
import "./admin.css";
import { useState, useEffect } from "react";

export default function About() {
  const [caunt, setCaunt] = useState(0);
  const [addCard, setAddcard] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [users, setUser] = useState([]);
  const [products, setProducts] = useState([]);

  // get product and users all

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUser(json));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  // Product delete

  function hendalDeletclick(delProduct) {
    fetch(`https://fakestoreapi.com/carts/${delProduct}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setProducts((prev) => {
      return prev.filter((praduct) => {
        return praduct.id !== delProduct;
      });
    });
  }

  // product edit

  function hendalEditclick(editProduct) {
    fetch(`https://fakestoreapi.com/carts/${editProduct}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: 3,
        date: 2019 - 12 - 10,
        products: [{ productId: 1, quantity: 3 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  // add Card to product

  function formSubmit(e) {
    e.preventDefault();
    // fetch("https://fakestoreapi.com/carts", {
    //   method: "POST",
    //   body: JSON.stringify(addCard),
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));

    setProducts([...products, addCard]);

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  }

  return (
    <div className="adminContent">
      <div className="admin">
        {/* add product  */}
        <div className="addProduct">
          <h2>Add product</h2>
          <form onSubmit={formSubmit}>
            {/* entir product name  */}
            <>
              <p>Product name</p>
              <input
                type="text"
                required
                placeholder="Entir name.."
                onChange={(e) => {
                  setAddcard((prev) => {
                    return { ...prev, title: e.target.value };
                  });
                }}
              />
            </>
            {/* entir price product  */}
            <>
              <p>Product price</p>
              <input
                type="number"
                required
                placeholder="Entir pice.."
                onChange={(e) => {
                  setAddcard((prev) => {
                    return { ...prev, price: e.target.value };
                  });
                }}
              />
            </>
            {/* texarea input  */}
            <>
              <p>Product description</p>
              <textarea
                placeholder="Entir description.."
                required
                cols="30"
                rows="10"
                onChange={(e) => {
                  setAddcard((prev) => {
                    return { ...prev, description: e.target.value };
                  });
                }}
              />
            </>
            <button>Saqlash</button>
          </form>
        </div>
        <div className="userAll">
          <h2>All user</h2>
          <ul>
            {/* get users all  */}
            {users.map((user) => {
              return (
                <li key={user.id}>
                  <div className="user">
                    <p>{user.id}</p>
                    <p>{user.name.firstname}</p>
                    <p>{user.name.lastname}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.pssword}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* all product and delete or edit  */}
      <div className="productsAll">
        <h2>All product</h2>
        <ul className="products">
          {products.map((products) => {
            return (
              <li key={products.id}>
                <div className="product">
                  <p>Product name:</p>
                  <p>{products.title}</p>
                  <p>{products.price} $</p>
                  <div className="end">
                    <img
                      src="/edit.png"
                      onClick={() => {
                        hendalEditclick(products.id);
                      }}
                    />
                    <img
                      src="/delete.png"
                      onClick={() => {
                        hendalDeletclick(products.id);
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
