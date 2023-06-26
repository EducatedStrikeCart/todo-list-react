import { useTodoContext } from "../hooks/useTodoContext";
import TodoType from "../models/TodoType";
import TodoDisplay from "./TodoDisplay";

export default function TodoList() {
    const { todoList } = useTodoContext();
    return (
        <>
            {todoList.map((todo: TodoType, index) => {
                return <TodoDisplay todo={todo} />;
            })}
        </>
    );
}
