import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import TodoCard from "../pages/TodoCard";
import { GlobalStyle } from "../globalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo/:id" element={<TodoCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
