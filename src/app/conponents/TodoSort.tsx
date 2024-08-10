"use client";

import { useRecoilState } from "recoil";
import { statusState } from "../recoil/atom";

const TodoSort = () => {
  const [slectedStatus, setSlectedStatus] = useRecoilState(statusState);

  return (
    <select
      className="flex w-1/5"
      value={slectedStatus}
      onChange={(e) => setSlectedStatus(e.target.value)}
    >
      <option value="all">すべて</option>
      <option value="notstarted">未着手</option>
      <option value="progress">進行中</option>
      <option value="done">完了</option>
    </select>
  );
};

export default TodoSort;
