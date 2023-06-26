import TodoType from "../models/TodoType";

export default function EditTodo({
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
            <button
                className="btn btn-secondary"
                onMouseDown={() => {
                    setIsEditable(!isEditable);
                }}
            >
                Edit
            </button>
        </>
    );
}
