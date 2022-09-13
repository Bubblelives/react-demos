import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home/Home.jsx";
import List from "@/pages/List/List.jsx";
import NotFound from "@/pages/404/404.jsx";
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
export default router;
