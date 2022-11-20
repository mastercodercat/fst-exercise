import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";

const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");

  const onChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(todo);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Group className="w-100 me-2">
        <Form.Control
          type="text"
          placeholder="Please input todo..."
          value={todo}
          onChange={onChange}
        />
      </Form.Group>
      <Button type="submit" variant="success">
        <AddIcon fontSize="small" />
      </Button>
    </Form>
  );
};

export default TodoForm;
