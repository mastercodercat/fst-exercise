import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export default {
  fetchTodos: () => axios.get("/todos"),
  createTodo: (todo) => axios.post("/todos", { todo }),
  updateTodo: (id, todo) => axios.patch(`/todos/${id}`, { todo }),
  deleteTodo: (id) => axios.delete(`/todos/${id}`),
};
