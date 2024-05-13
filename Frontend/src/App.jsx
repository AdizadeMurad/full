import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Admin from "../pages/Admin";
import NoPage from "../pages/NoPage";
import MainLayout from "../layout/MainLayout";
import Data from "../pages/Data";
import AddProduct from "../pages/AddProduct";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/data" element={<Data />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
