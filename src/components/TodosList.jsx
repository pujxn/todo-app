import TodoItem from "@/components/TodoItem"
import { useTodosContext } from "@/context/TodosContext";
const TodosList = () => {

    const { todos } = useTodosContext();

    return (
        <ul>
            {todos.map(e => (
                <TodoItem key={e.id} itemprop={e} />
            ))}
        </ul>
    )
}

export default TodosList;