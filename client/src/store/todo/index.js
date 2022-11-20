import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../service";

const initialState = {
  loading: false,
  creating: false,
  updating: false,
  todos: [],
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await api.fetchTodos();

  return response.data;
});

export const createTodo = createAsyncThunk("todo/createTodo", async (todo) => {
  const response = await api.createTodo(todo);

  return response.data;
});

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (id, todo) => {
    const response = await api.updateTodo(id, todo);

    return response.data;
  }
);

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  const response = await api.deleteTodo(id);

  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createTodo.pending, (state, action) => {
        state.creating = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.creating = false;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.creating = false;
      });
  },
});

export default todoSlice.reducer;
