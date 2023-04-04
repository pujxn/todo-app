import TodoItem from "@/components/TodoItem"

const TodosList = ({ todosprop, handleChange, handleDelete }) => {
    return (
        <ul>
            {todosprop.map(e => (
                <TodoItem key={e.id} itemprop={e} handleChange={handleChange} handleDelete={handleDelete} />
            ))}
        </ul>
    )
}

export default TodosList;