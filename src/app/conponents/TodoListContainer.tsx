import { Article } from "../types";
import TodoList from "./TodoList";

const TodoListContainer = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/`, { cache: "no-store" });
  const articles = await res.json();

  return <TodoList articles={articles} />;
};

export default TodoListContainer;
