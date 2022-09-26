import "./App.css";
import { useState, createContext } from "react";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./routes/Main";
import ProductDetail from "./routes/ProductDetail";
import NavBar from "./routes/NavBar";
import About from "./routes/About";
import Event from "./routes/Event";
import EventOne from "./routes/EventOne";
import EventTwo from "./routes/EventTwo";
import Cart from "./routes/Cart";

export let Context1 = createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [stock, setStock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, shoes }}>
              <ProductDetail shoes={shoes} />
            </Context1.Provider>
          }
        />
        {/* 아래는 nested route 라는 것 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<About />} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<EventOne />} />
          <Route path="two" element={<EventTwo />} />
        </Route>
        <Route path="*" element={<div>404 Error</div>} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
