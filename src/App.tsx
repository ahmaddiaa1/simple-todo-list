import { useState } from "react";
import type { Filter, Task } from "@/types/types";
import Header from "@/components/Header";
import AddTask from "@/components/AddTask";
import FilterComponents from "@/components/Filter";
import List from "./components/List";
import EditTaskForm from "./components/EditTaskForm";

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design new landing page",
      description: "Create mockups for the homepage redesign",
      completed: false,
    },
    {
      id: "2",
      title: "Review pull requests",
      description: "Check team PRs before EOD",
      completed: false,
    },
    {
      id: "3",
      title: "Update documentation",
      completed: true,
    },
  ]);

  const [filter, setFilter] = useState<Filter>("all");
  const [editingId, setEditingId] = useState<string | null>(null);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='min-h-screen bg-background transition-colors duration-300'>
      <Header />
      <main className='mx-auto max-w-3xl px-4 py-8 sm:px-6'>
        <AddTask
          setTasks={setTasks}
          tasks={tasks}
        />
        <FilterComponents
          setFilter={setFilter}
          filter={filter}
        />
        <List
          tasks={tasks}
          filter={filter}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          setEditingId={setEditingId}
        />
        <EditTaskForm
          tasks={tasks}
          editingId={editingId}
          setTasks={setTasks}
          setEditingId={setEditingId}
        />
        {tasks.length > 0 && (
          <div className='mt-6 text-center text-sm text-muted-foreground'>
            {tasks.filter((t) => !t.completed).length} active •
            {tasks.filter((t) => t.completed).length} completed
          </div>
        )}
      </main>
    </div>
  );
}
