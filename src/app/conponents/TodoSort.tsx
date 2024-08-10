import React from "react";

const TodoSort = () => {
  return (
    <select
      className="flex w-1/5"
      // value={status}
      // onChange={(e) => setStatus(e.target.value)}
    >
      <option value="all">すべて</option>
      <option value="notstarted">未着手</option>
      <option value="progress">進行中</option>
      <option value="done">完了</option>
    </select>
  );
};

export default TodoSort;
