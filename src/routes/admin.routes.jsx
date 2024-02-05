import { Routes, Route } from "react-router-dom";

import { DishDetails } from "../pages/admin/DishDetails";
import { Home } from "../pages/admin/Home";
import { NewDish } from "../pages/admin/NewDish";
import { EditDish } from "../pages/admin/EditDish";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Home />} />
      <Route path="/admin/dish-details/:id" element={<DishDetails />} />
      <Route path="/admin/new-dish" element={<NewDish />} />
      <Route path="/admin/edit-dish" element={<EditDish />} />
    </Routes>
  );
}
