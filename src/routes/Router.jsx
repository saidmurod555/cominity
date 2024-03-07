import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Products from "../page/Products";
import Contact from "../page/Contact";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Products" element={<Products />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}
