import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import HomePage from "./HomePage";
import DetaljiKP from "./detalji/DetaljiKP";

const Rute = (
  <Routes>
    <Route key={uuidv4()} path="/" element={<HomePage />} />
    <Route key={uuidv4()} path="/detalji/:id" element={<DetaljiKP />} />
  </Routes>
);

export default Rute;
