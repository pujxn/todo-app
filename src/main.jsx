import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "@/components/TodoApp";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);
root.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
)