import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "@/pages/home/Home";
import { Plans } from "@/pages/plans/Plans";
import { Summary } from "@/pages/summary/Summary";

export const MainRouter = () => {
  return (
    <>
      
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Navigate to={"/home"} />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/planes" element={<Plans />} />
              <Route path="/resumen" element={<Summary />} />
            </Routes>
          </BrowserRouter>
    </>
  );
};
