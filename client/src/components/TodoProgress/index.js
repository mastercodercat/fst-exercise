import { useMemo } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";

const TodoProgress = ({ todos, onRemove }) => {
  const completed = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );
  const progress = useMemo(() => {
    return (completed * 100) / todos.length;
  }, [completed, todos]);

  return (
    <div className="d-flex justify-content-between">
      <ProgressBar
        animated
        variant={completed === todos.length ? "success" : "primary"}
        now={progress}
        label={`${completed} of ${todos.length} checked`}
        className="w-50 h-auto"
      />
      <Button
        variant="danger"
        onClick={onRemove}
        className="d-flex align-items-center"
      >
        <span>Remove checked</span>
        <CloseIcon fontSize="small" />
      </Button>
    </div>
  );
};

export default TodoProgress;
