const TodoItem = ({ itemprop, handleChange, handleDelete }) => {

    // const handleChange = () => {
    //     setTodos((prevState) => {
    //         return (
    //             prevState.map((ele) => {
    //                 if (ele.id == itemprop.id) {
    //                     return ({
    //                         ...ele,
    //                         completed: !ele.completed,
    //                     })
    //                 }
    //                 return ele;
    //             })
    //         )
    //     })
    // }

    return (
        <li>
            <input type="checkbox"
                checked={itemprop.completed}
                onChange={() => handleChange(itemprop.id)} />
            <button onClick={() => handleDelete(itemprop.id)}>Delete</button>
            {itemprop.title}
        </li>
    )
}

export default TodoItem;