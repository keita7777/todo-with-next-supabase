import React from "react";
import { Article } from "../types";
import { useRouter } from "next/navigation";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SelectStatus from "./SelectStatus";

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

  const createdAtDate = new Date(article.created_at);
  const formattedDate = createdAtDate.toLocaleDateString();

  return (
    <>
      <li className="flex justify-between bg-slate-100 mt-2">
        <SelectStatus article={article} />
        <p className="flex-1 p-2">{article.text}</p>
        <p className="p-2">{formattedDate}</p>
        <EditButton openEdit={openEdit} id={article.id} />
        <DeleteButton handleDelete={handleDelete} id={article.id} />
      </li>
    </>
  );
};

export default SingleTodo;
