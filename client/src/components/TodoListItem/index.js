import { Form, ListGroup } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoListItem = ({ todo, isCleared, onClear, onEdit, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <Form.Check
        type="checkbox"
        label={todo.title}
        onClick={onClear}
        value={true}
      />
      <div>
        <a href="#" onClick={onEdit} className="text-primary me-2">
          <EditIcon fontSize="small" />
        </a>
        <a href="#" onClick={onDelete} className="text-danger">
          <DeleteIcon fontSize="small" />
        </a>
      </div>
    </ListGroup.Item>
  );
};

export default TodoListItem;
