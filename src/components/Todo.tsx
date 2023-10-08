import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import TodoData from "./TodoData";
import { ToDos } from "../types/Todo.types";

const Todo = () => {
  const [todo, setTodo] = useState<ToDos[]>([]);

  // Fetch data from JSON Placeholder
  // Could have used ErrorBoundary instead of try catch to notify end user but for this use case went with traditional try catch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        data.length && setTodo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-800">
      <Navbar />

      <TodoData data={todo} />
    </div>
  );
};

export default Todo;
