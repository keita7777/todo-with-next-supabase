import { Article } from "../types";
import SingleTodo from "./SingleTodo";

const TodoList = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/`, { cache: "no-store" });
  const articles = await res.json();

  return (
    <div className="w-3/4 max-w-lg mx-auto">
      <ul className="flex justify-center flex-col">
        {articles.map((article: Article) => (
          <SingleTodo key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
