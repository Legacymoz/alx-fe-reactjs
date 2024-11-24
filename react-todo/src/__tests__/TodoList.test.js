// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    const title = screen.getByText(/Todo List/i);
    expect(title).toBeInTheDocument();
  });

  test("renders initial todo items", () => {
    render(<TodoList />);
    const todo1 = screen.getByText(/Learn React/i);
    const todo2 = screen.getByText(/Build a Todo App/i);
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    const newTodo = screen.getByText(/New Todo/i);
    expect(newTodo).toBeInTheDocument();
  });

  test("toggles the todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);

    fireEvent.click(todo); // First click to mark as completed
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo); // Second click to mark as not completed
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/Delete/i);

    fireEvent.click(deleteButton);
    const todo = screen.queryByText(/Learn React/i);
    expect(todo).not.toBeInTheDocument();
  });
});
