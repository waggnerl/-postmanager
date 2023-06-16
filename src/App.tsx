import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";

export default function App() {
  return (
    <Routes>
      <Route index element={<SignUp />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
