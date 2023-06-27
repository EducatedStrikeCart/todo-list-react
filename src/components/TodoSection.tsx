import { TodoProvider } from "../contexts/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function TodoSection() {
    return (
        <TodoProvider>
            <section>
                <div className="border-bottom d-flex flex-column align-items-center">
                    <h2>Todos</h2>
                        <AddTodo />
                </div>
                <TodoList />
            </section>
        </TodoProvider>
    );
}
