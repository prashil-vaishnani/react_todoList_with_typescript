import { RiCloseCircleLine } from "react-icons/ri";
import "./Todo.css";

interface todos_ {
  isComplete: boolean;
  id: number;
  text: string;
}

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
}: {
  todos: todos_[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}) => {
  const myList: JSX.Element[] = todos.map(
    (todo: todos_, index: number | null | undefined) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
        </div>
      </div>
    )
  );
  return <ol className="TodoList">{myList}</ol>;
};

export default Todo;
