import React from "react";
import List from "./List";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">
      <h1 className="text-4xl font-bold">Todo App</h1>
      <div className="w-full max-w-2xl mt-4">
        <List />
      </div>
    </main>
  );
}
