import { useTodoContext } from "../hooks/useTodoContext";
import TodoType from "../models/TodoType";

export default function DeleteTodo({ todo }: { todo: TodoType }) {
    const { todoList, setTodoList } = useTodoContext();
    const deleteTodo = () => {
        setTodoList(
            todoList.filter((t) => {
                return t.id !== todo.id;
            })
        );
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target={"#deleteModal-" + todo.id}
            >
                Delete
            </button>
            <div className="modal fade" id={"deleteModal-" + todo.id}>
                <div className="modal-dialog ">
                    <div className="modal-content themeBackground-subtle">
                        <div className="modal-header border-0">
                            <h5 className="fs-5" id="exampleModalLabel">
                                Confirm that you wish to delete todo: "
                                {todo.name}"
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-footer d-flex justify-content-between border-0">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={deleteTodo}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
