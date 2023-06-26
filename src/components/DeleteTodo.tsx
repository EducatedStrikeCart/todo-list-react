import { useTodoContext } from "../hooks/useTodoContext";

export default function DeleteTodo(props: { id: number }) {
    const { todoList, setTodoList } = useTodoContext();
    const deleteTodo = () => {
        setTodoList(
            todoList.filter((t) => {
                return t.id !== props.id;
            })
        );
    };

    return (
        <button className="btn btn-danger" onClick={deleteTodo}>
            Delete
        </button>
    );
}
