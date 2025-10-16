import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { useState } from "react";
import type { Task, AddTaskProps } from "@/types/types";

function AddTask({ setTasks, tasks }: AddTaskProps) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const addTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: newTaskDescription || undefined,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <Card className='mb-6 p-4 shadow-sm'>
      <div className='space-y-3'>
        <Input
          placeholder='Task title...'
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className='border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0'
        />
        <Input
          placeholder='Description (optional)...'
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className='border-0 bg-transparent text-sm text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0'
        />
        <Button
          onClick={addTask}
          className='w-full bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600'>
          <Plus className='mr-2 h-4 w-4' />
          Add Task
        </Button>
      </div>
    </Card>
  );
}

export default AddTask;
