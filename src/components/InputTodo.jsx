import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons";


const InputTodo = ({ handleAdd }) => {

    const [inputText, setInputText] = useState("");
    const [warning, setWarning] = useState("");

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (inputText.trim()) {
                    handleAdd(inputText);
                    setInputText("");
                    setWarning("");
                }
                else {
                    setWarning("Please enter a Todo before submitting");
                }
            }} className="form-container">
                <input className="input-text" type="text" placeholder="Add todo..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <IconContext.Provider value={{
                    color: "darkcyan",
                    style: { fontSize: "20px", color: "#ff0000" },
                    className: "submit-icon",
                }}>
                    <button className="input-submit"><FaPlusCircle /></button>
                </IconContext.Provider>

            </form>
            <span className="submit-warning">{warning}</span>
        </>
    )
}

export default InputTodo;