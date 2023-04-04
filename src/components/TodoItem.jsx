import styles from "@/styles/TodoItem.module.css"
import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemprop, handleChange, handleDelete, handleUpdate }) => {

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
                <button onClick={handleEdit}><AiFillEdit
                    style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>
                <button onClick={() => handleDelete(itemprop.id)}><FaTrash
                    style={{ color: "#5e5e5e", fontSize: "16px" }} /></button>
                <span style={itemprop.completed ? completedStyle : null}>{itemprop.title}</span>
            </div>
            <input style={editMode} defaultValue={itemprop.title} type="text" className={styles.textInput} onBlur={updateDone} />
        </li>
    )
}

export default TodoItem;