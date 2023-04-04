import { useState } from "react";

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
            }}>
                <input type="text" placeholder="Add todo..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button>Submit</button>
            </form>
            <span>{warning}</span>
        </>
    )
}

export default InputTodo;