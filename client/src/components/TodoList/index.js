import { ListGroup } from "react-bootstrap";

import TodoListItem from "../TodoListItem";

const TodoList = ({ todos, onClear, onEdit, onDelete }) => {
  return (
    <ListGroup variant="flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          onClear={(e) => onClear(e, todo)}
          onEdit={(e) => onEdit(e, todo)}
          onDelete={(e) => onDelete(e, todo)}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
