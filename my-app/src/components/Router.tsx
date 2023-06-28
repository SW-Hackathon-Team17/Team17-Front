import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import List from "pages/List/List";
import Detail from "pages/Detail/Detail";
import Add from "pages/Add/Add";
import NotFound from "pages/NotFound/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
