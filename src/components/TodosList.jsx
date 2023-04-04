import TodoItem from "@/components/TodoItem"
// import { useTodosContext } from "@/context/TodosContext";
import { useTodosStore } from "@/TodosStore";
const TodosList = () => {

    const todos = useTodosStore((state) => state.todos);

    return (
        <ul>
            {todos.map(ele => (
                <TodoItem key={ele.id} itemprop={ele} />
            ))}
        </ul>
    )
}

export default TodosList;