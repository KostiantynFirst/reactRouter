import { Routes, Route } from "react-router";
import { Layout } from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* <Route path="*" element={Navigate} /> */}
    </Routes>

  );
};
