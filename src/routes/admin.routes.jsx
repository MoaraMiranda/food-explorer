import { Routes, Route } from "react-router-dom";

import { DishDetails } from "../pages/admin/DishDetails";
import { Home } from "../pages/admin/Home";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Home />} />
      <Route path="/admin/dish-details/:id" element={<DishDetails />} />
    </Routes>
  );
}
