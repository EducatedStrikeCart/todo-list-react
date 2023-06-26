import { ChangeEvent, useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoType from "../models/TodoType";

/*Component for adding new Todos*/
export default function AddTodo() {
    const defaultTodoName = "New Todo";

    const todos = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState<TodoType>({
        id: 0,
        name: "",
        isComplete: false,
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo({ ...newTodo, name: e.target.value });
    };

    const addTodo: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        if (todos.todoList.length === 0) {
            todos.setTodoList([
                {
                    id: 1,
                    name: newTodo.name === "" ? defaultTodoName : newTodo.name,
                    isComplete: false,
                },
            ]);
        } else {
            const newIdNum = todos?.todoList.slice(-1)[0].id + 1;
            todos.setTodoList([
                ...todos?.todoList,
                {
                    id: newIdNum,
                    name: newTodo.name === "" ? defaultTodoName : newTodo.name,
                    isComplete: false,
                },
            ]);
        }
        setNewTodo({ ...newTodo, name: "" });
    };

    return (
        <form
            className="d-flex flex-column flex-md-row h-auto justify-content-center my-4 container"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label className="form-label">Todo name</label>
            <input
                className="form-control"
                type="text"
                placeholder="Add your new todo here"
                value={newTodo.name}
                onChange={onChangeHandler}
            ></input>
            <button className="btn btn-primary" onClick={addTodo}>
                Add Todo!
            </button>
        </form>
    );
}
