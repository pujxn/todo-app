import TodoItem from "@/components/TodoItem"

const TodosList = ({ todosprop, handleChange, handleDelete, handleUpdate }) => {
    return (
        <ul>
            {todosprop.map(e => (
                <TodoItem key={e.id} itemprop={e} handleChange={handleChange} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            ))}
        </ul>
    )
}

export default TodosList;