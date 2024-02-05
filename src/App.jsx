import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sigin from "./components/Registar/Sigin";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  function getData(data) {
    setData(data);
  }
  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <div className="logo">
            <a href="#">
              <img src="/Logo.png" alt="logotive" />
            </a>
          </div>
          <form>
            <img src="/search.png" alt="search_icon" />
            <input type="text" />
          </form>

          <nav className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin panel</Link>
              </li>
            </ul>
          </nav>
          <div className="Registar">
            <Link to="/Reg">sigin In</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home click={getData} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Reg" element={<Sigin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
