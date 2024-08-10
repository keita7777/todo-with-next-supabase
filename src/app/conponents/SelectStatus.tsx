import React, { useEffect, useState } from "react";
import { Article } from "../types";
import { supabase } from "../utils/supabaseClient";
import { getStatusName } from "../utils/getStatusName";
import { useRouter } from "next/navigation";

type SelectStatusProps = {
  article: Article;
};

const SelectStatus = ({ article }: SelectStatusProps) => {
  const router = useRouter();
  const [updateStatus, setUpdateStatus] = useState(article.status.id);

  useEffect(() => {
    const updateTodos = async () => {
      const { error } = await supabase
        .from("todos")
        .update({
          status: {
            id: updateStatus,
            name: getStatusName(updateStatus),
          },
        })
        .eq("id", article.id);

      if (error) {
        console.error("Error updating data:", error.message);
      }

      router.push("/");
      router.refresh();
    };
    updateTodos();
  }, [updateStatus]);

  return (
    <select
      value={updateStatus}
      onChange={(e) => setUpdateStatus(e.target.value)}
    >
      <option value="notstarted">未着手</option>
      <option value="progress">進行中</option>
      <option value="done">完了</option>
    </select>
  );
};

export default SelectStatus;
