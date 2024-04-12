import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import DetailItem from "./components/DetailItem";
//import { items } from "./items";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/items")
      .then((result) => {
        setItems(result.data);
      })
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Header title="The Coffee Corner" />
      <Routes>
        <Route path="/details" element={<Details items={items} />}>
          <Route path=":id" element={<DetailItem />} />
          <Route index element={<div>No Item Selected</div>} />
        </Route>
        <Route path="/" element={<Home items={items} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
