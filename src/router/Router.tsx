import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FrontPage } from "../frontpage";
import { Confirmation } from "../page/Registration/Сonfirmation";
import { RegPages } from "../page/Registration/RegPages";
import { TestPages } from "../page/TestPages";

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/reg" element={<RegPages />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/test" element={<TestPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
