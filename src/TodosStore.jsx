import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";

const todosStore = (set) => create({
    todos: [],
    handleChange: (id) => {
        set((state) => ({
            todos: state.todos.map((ele) => {
                if (ele.id == id) {
                    return { ...ele, completed: !ele.completed }
                }
                else {
                    return ele;
                }
            })
        }
        ))
    },
    handleUpdate: (id, updatedTitle) => {
        set((state) => ({
            todos: state.todos.map((ele) => {
                if (ele.id == id) {
                    return { ...ele, title: updatedTitle }
                }
                else {
                    return ele;
                }
            })
        }
        ))
    },
    handleDelete: (id) => {
        set((state) => ({
            todos: state.todos.filter((ele) => (ele.id != id))
        }))
    },
    handleAdd: (todoTitle) => {
        const newEle = {
            title: todoTitle,
            completed: false,
            id: uuidv4()
        }
        set((state) => ({
            todos: [...state.todos, newEle]
        }))
    }

})

export const useTodosStore = create(persist(todosStore, {
    name: "persisted todos"
}));