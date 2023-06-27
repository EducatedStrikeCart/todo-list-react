import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import TodoType from "../models/TodoType";

export default function TodoMenu({
    todo,
    isEditable,
    setIsEditable,
}: {
    todo: TodoType;
    isEditable: boolean;
    setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <>
            <div className="d-none d-sm-none d-md-flex">
                <EditTodo
                    todo={todo}
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                />
                <DeleteTodo todo={todo} />
            </div>
            <div className="dropdown d-md-none" data-bs-theme="dark">
                <button
                    className="btn btn-secondary"
                    type="button"
                    id="dropdownMenuButtonDark"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="bi bi-list"></i>
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButtonDark"
                >
                    <li>
                        <EditTodo
                            todo={todo}
                            isEditable={isEditable}
                            setIsEditable={setIsEditable}
                        />
                    </li>
                    <li>
                        <DeleteTodo todo={todo} />
                    </li>
                </ul>
            </div>
        </>
    );
}
