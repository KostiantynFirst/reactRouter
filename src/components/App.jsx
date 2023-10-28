import { Routes, Route } from "react-router";
import { Layout } from "./Layout";

import { LoginPage } from "pages/LoginPages";

export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>

  );
};
