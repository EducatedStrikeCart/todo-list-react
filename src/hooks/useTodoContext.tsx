import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function useTodoContext() {
    return useContext(TodoContext);
}
