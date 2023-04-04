import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {

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

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
        },
    ]);

    return (
        <>
            <InputTodo handleAdd={handleAdd} />
            <TodosList todosprop={todos} handleChange={handleChange} handleDelete={handleDelete} />
        </>

    )
}

export default TodosLogic;