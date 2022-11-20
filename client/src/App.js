import React, { Suspense, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, createTodo, changeTodo, deleteTodo } from "./store/todo";

import AppLoader from "./components/AppLoader";

import "./App.css";

const TodoForm = React.lazy(() => import("./components/TodoForm"));
const TodoList = React.lazy(() => import("./components/TodoList"));
const TodoProgress = React.lazy(() => import("./components/TodoProgress"));

function App() {
  const loading = useSelector((state) => state.todo.loading);
  const creating = useSelector((state) => state.todo.creating);
  const updating = useSelector((state) => state.todo.updating);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const onAdd = (todo) => {
    dispatch(createTodo(todo));
  };

  const onClear = (e, todo) => {
    console.log(todo);
  };

  const onEdit = (e, todo) => {
    e.preventDefault();
    console.log(todo);
  };

  const onDelete = (e, todo) => {
    e.preventDefault();
    console.log(todo);
  };

  const onRemove = () => {
    console.log("remove");
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col md="8" lg="6" className="mx-auto">
          <Suspense fallback={<AppLoader />}>
            <Card>
              <Card.Header>
                <Card.Title className="m-0 text-center">TODOLIST</Card.Title>
              </Card.Header>
              <Card.Body>
                {creating || updating ? (
                  <AppLoader />
                ) : (
                  <TodoForm onSubmit={onAdd} />
                )}
                {loading ? (
                  <AppLoader />
                ) : (
                  <TodoList
                    todos={todos}
                    onClear={onClear}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                )}
              </Card.Body>
              <Card.Footer>
                {loading ? (
                  <AppLoader />
                ) : (
                  <TodoProgress todos={todos} onRemove={onRemove} />
                )}
              </Card.Footer>
            </Card>
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
