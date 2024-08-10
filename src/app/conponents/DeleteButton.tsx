import React from "react";

type DeleteButtonProps = {
  handleDelete: (id: string) => Promise<void>;
  id: string;
};

const DeleteButton = ({ handleDelete, id }: DeleteButtonProps) => {
  return (
    <button
      onClick={() => handleDelete(id)}
      className="flex-shrink-0 p-2 bg-red-700 text-slate-100"
    >
      削除
    </button>
  );
};

export default DeleteButton;
