import React from "react";

type EditButtonProps = {
  openEdit: (id: string) => void;
  id: string;
};

const EditButton = ({ openEdit, id }: EditButtonProps) => {
  return (
    <button
      onClick={() => openEdit(id)}
      className="flex-shrink-0 p-2 bg-green-700 text-slate-100"
    >
      編集
    </button>
  );
};

export default EditButton;
