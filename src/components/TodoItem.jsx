import styles from "@/styles/TodoItem.module.css"
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
// import { useTodosContext } from "@/context/TodosContext";
import { useTodosStore } from "@/TodosStore";
import { useAuthContext } from "@/context/AuthContext";

const TodoItem = ({ itemprop }) => {
    const { user } = useAuthContext();
    const handleChange = useTodosStore((state) => state.handleChange);
    const handleDelete = useTodosStore((state) => state.handleDelete);
    const handleUpdate = useTodosStore((state) => state.handleUpdate);

    // const { handleChange, handleDelete, handleUpdate } = useTodosContext();

    const [editing, setEditing] = useState(false);

    const updateDone = (e) => {
        handleUpdate(itemprop.id, e.target.value);
        setEditing(false);
    }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };

    const handleEdit = () => {
        setEditing(true);
    }

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    }
    else {
        editMode.display = "none";
    }

    return (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input type="checkbox"
                    checked={itemprop.completed}
                    onChange={() => handleChange(itemprop.id)} />
                {user && (<button onClick={handleEdit}><AiFillEdit
                    style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>)}
                <button onClick={() => handleDelete(itemprop.id)}><FaTrash
                    style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>
                <span style={itemprop.completed ? completedStyle : null}>{itemprop.title}</span>
            </div>
            <input style={editMode} defaultValue={itemprop.title} type="text" className={styles.textInput} onBlur={updateDone} />
        </li>
    )
}

export default TodoItem;