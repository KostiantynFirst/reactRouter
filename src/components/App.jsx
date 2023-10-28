import { Routes, Route } from "react-router";
import { Layout } from "./Layout";

import { LoginPage } from "pages/LoginPages";

export const App = () => {
  return (

    <Routes path="/" element={<Layout />}>
      <Route path="login" element={<LoginPage />} />
      {/* <Route path="*" element={Navigate} /> */}
    </Routes>

  );
};
