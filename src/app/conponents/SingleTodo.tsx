"use client";

import React from "react";
import { Article } from "../types";
import { useRouter } from "next/navigation";

type SingleTodoProps = {
  article: Article;
};

const SingleTodo = ({ article }: SingleTodoProps) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    router.push("/");
    router.refresh();
  };

  const openEdit = (id: string) => {
    router.push(`/edit/${id}`);
  };

  return (
    <>
      <li className="flex justify-between bg-slate-100 mt-2">
        <p className="flex-shrink-0 p-2 flex justify-center items-center">
          {article.status.name}
        </p>
        <p className="flex-1 p-2">{article.text}</p>
        <button
          onClick={() => openEdit(article.id)}
          className="flex-shrink-0 p-2 bg-green-700 text-slate-100"
        >
          編集
        </button>
        <button
          onClick={() => handleDelete(article.id)}
          className="flex-shrink-0 p-2 bg-red-700 text-slate-100"
        >
          削除
        </button>
      </li>
    </>
  );
};

export default SingleTodo;
