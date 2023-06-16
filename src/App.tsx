import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />
    </Routes>
  );
}
