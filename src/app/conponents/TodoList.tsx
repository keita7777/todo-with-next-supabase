"use client";

import { useRecoilValue } from "recoil";
import { Article } from "../types";
import SingleTodo from "./SingleTodo";
import { statusState } from "../recoil/atom";

type TodoListProps = {
  articles: Article[];
};

const TodoList = ({ articles }: TodoListProps) => {
  const selectedStatus = useRecoilValue(statusState);

  const filteredArticles = articles.filter((article: Article) =>
    selectedStatus === "all" ? true : article.status.id === selectedStatus
  );

  return (
    <div className="w-3/4 max-w-lg mx-auto">
      <ul className="flex justify-center flex-col">
        {filteredArticles.map((article: Article) => (
          <SingleTodo key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
