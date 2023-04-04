import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {

    const getInitialTodos = () => {
        const temp = JSON.parse(localStorage.getItem("todos"));
        return temp || [];
    }

    const handleChange = (id) => {
        setTodos((prevState) => (
            prevState.map((ele) => {
                if (ele.id == id) {
                    return { ...ele, completed: !ele.completed };
                }
                else {
                    return ele;
                }
            })
        ))
    }

    const handleUpdate = (id, updatedTitle) => {
        setTodos(todos.map((ele) => {
            if (ele.id == id) {
                return { ...ele, title: updatedTitle }
            }
            else {
                return ele;
            }
        }));
    }

    const handleDelete = (id) => {
        setTodos((prevState) => (
            prevState.filter((ele) => ele.id != id)
        ));
    }

    const handleAdd = (todoTitle) => {
        setTodos((prevState) => ([...prevState, {
            id: uuidv4(),
            title: todoTitle,
            completed: false,
        }]))
    }

    const [todos, setTodos] = useState(getInitialTodos());

    useEffect(() => {
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    },
        [todos])


    return (
        <>
            <InputTodo handleAdd={handleAdd} />
            <TodosList todosprop={todos} handleChange={handleChange} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        </>

    )
}

export default TodosLogic;