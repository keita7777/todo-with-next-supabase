"use client";

import React, { useEffect, useState } from "react";

const Edit = async ({ params }: { params: { id: string; text: string } }) => {
  const [text, setText] = useState("");

  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // const res = await fetch(`${API_URL}/api/${params.id}`, {
  //   next: { revalidate: 10 },
  // });
  // const article = await res.json();

  useEffect(() => {
    const getData = async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${API_URL}/api`, {
        next: { revalidate: 10 },
      });
      const article = await res.json();
      console.log(article[params.id]);
    };
    getData();
  }, []);

  const handleEdit = () => {};

  return (
    <main className=" bg-blue-300 p-6 h-screen">
      <div className="flex justify-center">
        <form onSubmit={handleEdit} className="flex w-3/4 max-w-lg">
          <input
            className="border border-gray-300 p-3 flex-1"
            type="text"
            // value={text}
            // onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-orange-200 px-3 text-black">更新</button>
        </form>
      </div>
    </main>
  );
};

export default Edit;
