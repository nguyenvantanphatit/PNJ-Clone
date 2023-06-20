import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
