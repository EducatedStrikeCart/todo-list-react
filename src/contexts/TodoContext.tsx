import { ReactElement, createContext, useState } from "react";
import TodoType from "../models/TodoType";

type TodoContextType = {
    todoList: TodoType[];
    setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export const TodoContext = createContext<TodoContextType>({
    todoList: [],
    setTodoList: () => {},
});

export const TodoProvider = ({ children }: { children: ReactElement }) => {
    const [todoList, setTodoList] = useState<TodoType[]>([{id:1, name:"Click your todos to mark them as done!", isComplete:false}]);

 
    return (
        <TodoContext.Provider value={{ todoList, setTodoList}}>
            {children}
        </TodoContext.Provider>
    );
};