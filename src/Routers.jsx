import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Try from "./assets/Components/Try";

export default function Routers() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/try" element={<Try />}></Route>
    </Routes>
  </BrowserRouter>;
  return <>This is the Router page hai guys</>;
}
