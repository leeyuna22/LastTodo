import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddTodo from "../pages/AddTodo";
import DetailTodo from "../pages/DetailTodo";
import ListTodo from "../pages/ListTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/detail/:id" element={<DetailTodo />} />
        <Route path="/listtodo" element={<ListTodo />} />
        <Route path="*" element={<>404 NOT FOUND</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
