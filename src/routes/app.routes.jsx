import { Routes, Route } from "react-router-dom";

import { DishDetails } from "../pages/user/DishDetails";
import { Home } from "../pages/user/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish-details/:id" element={<DishDetails />} />
    </Routes>
  );
}
