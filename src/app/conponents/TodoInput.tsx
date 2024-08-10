"use client";

import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TodoInput = () => {
  const router = useRouter();
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: nanoid(), text }),
    });

    router.push("/");
    router.refresh();
    setText("");
  };

  return (
    <div className="flex justify-start w-4/5">
      <form onSubmit={handleSubmit} className="flex w-full mr-3">
        <input
          className="border border-gray-300 p-3 flex-1"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-orange-200 px-3 text-black">追加</button>
      </form>
    </div>
  );
};

export default TodoInput;
