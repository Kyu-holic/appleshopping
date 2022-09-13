import "./App.css";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./routes/Main";
import ProductDetail from "./routes/ProductDetail";
import NavBar from "./routes/NavBar";
import About from "./routes/About";
import Event from "./routes/Event";
import EventOne from "./routes/EventOne";
import EventTwo from "./routes/EventTwo";

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<ProductDetail shoes={shoes} />} />
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
      </Routes>
    </div>
  );
}

export default App;
