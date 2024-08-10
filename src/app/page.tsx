import { useState } from "react";
import TodoInput from "./conponents/TodoInput";
import TodoList from "./conponents/TodoList";
import TodoSort from "./conponents/TodoSort";
import TodoListContainer from "./conponents/TodoListContainer";

export default function Home() {
  return (
    <main className=" bg-blue-300 p-6 h-screen">
      <div className="flex max-w-lg mx-auto">
        <TodoInput />
        <TodoSort />
      </div>

      <TodoListContainer />
    </main>
  );
}
