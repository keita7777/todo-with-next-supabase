"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabaseClient";
import { useRouter } from "next/navigation";
import { getStatusName } from "@/app/utils/getStatusName";

interface Props {
  params: {
    id: string;
  };
}

const EditPage = ({ params }: Props) => {
  const { id } = params;
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching data:", error.message);
      }
      setText(data.text);
      setStatus(data.status.id);
    };

    fetchData();
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from("todos")
      .update({
        text,
        status: {
          id: status,
          name: getStatusName(status),
        },
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating data:", error.message);
    }

    router.push("/");
    router.refresh();
  };

  return (
    <main className="bg-blue-300 p-6 h-screen">
      <div className="flex justify-center">
        <form onSubmit={handleEdit} className="flex w-3/4 max-w-lg">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="notstarted">未着手</option>
            <option value="progress">進行中</option>
            <option value="done">完了</option>
          </select>
          <input
            className="border border-gray-300 p-3 flex-1"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="bg-orange-200 px-3 text-black">
            更新
          </button>
          <button
            onClick={() => router.push("/")}
            type="button"
            className="bg-red-600 px-3 text-slate-100"
          >
            キャンセル
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditPage;
