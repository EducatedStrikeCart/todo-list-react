import { ChangeEvent, useState } from "react";
import TodoType from "../models/TodoType";
import TodoMenu from "./TodoMenu";
import { useTodoContext } from "../hooks/useTodoContext";

export default function TodoDisplay({ todo }: { todo: TodoType }) {
    const { todoList, setTodoList } = useTodoContext();

    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [editedTodo, setEditedTodo] = useState<TodoType>(todo);

    const editHandler = () => {
        const newTodoList: TodoType[] = todoList.map((t) => {
            if (t.id === todo.id) {
                return {
                    id: t.id,
                    name: editedTodo.name,
                    isComplete: editedTodo.isComplete,
                };
            } else {
                return t;
            }
        });
        setTodoList(newTodoList);
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEditedTodo({
            ...editedTodo,
            name: e.target.value,
        });
    };

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newTodoList: TodoType[] = todoList.map((t) => {
            if (t.id === todo.id) {
                return {
                    id: t.id,
                    name: t.name,
                    isComplete: !t.isComplete,
                };
            } else {
                return t;
            }
        });
        setTodoList(newTodoList);
    };

    // Causes defocus upon pressing the 'enter' key
    const enterKeydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.currentTarget.blur();
        }
    };

    return (
        <div className="d-flex justify-content-between  my-3 ">
            {isEditable ? (
                <form
                    className="container"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className="form-control"
                        type="text"
                        onBlur={(e) => {
                            setIsEditable(false);
                            editHandler();
                        }}
                        value={editedTodo.name}
                        onChange={changeHandler}
                        onKeyDown={enterKeydownHandler}
                    ></input>
                </form>
            ) : (
                <button
                    className={
                        todo.isComplete
                            ? "btn btn-success container text-break"
                            : "btn bg-danger-subtle container text-break"
                    }
                    bs-data-theme="dark"
                    onClick={onClickHandler}
                >
                    {todo.name}
                </button>
            )}
            <TodoMenu todo={todo} isEditable={isEditable} setIsEditable={setIsEditable} />
        </div>
    );
}
