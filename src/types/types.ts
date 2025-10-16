import type { Dispatch, SetStateAction } from "react";
type setSetter<T> = Dispatch<SetStateAction<T>>;
export type Task = {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  completed: boolean;
};

export type Filter = "all" | "active" | "completed";

export type AddTaskProps = {
  setTasks: setSetter<Task[]>;
  tasks: Task[];
};

export type TaskActionProps = {
  id: string;
  setEditingId: setSetter<string | null>;
  deleteTask: (id: string) => void;
};

export type FilterProps = {
  setFilter: setSetter<Filter>;
  filter: Filter;
};

export type ListCellProps = {
  task: Task;
  setEditingId: setSetter<string | null>;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export type ListProps = {
  tasks: Task[];
  filter: Filter;
  setEditingId: setSetter<string | null>;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
};

export type EditTaskProps = {
  editingId: string | null;
  tasks: Task[];
  setTasks: setSetter<Task[]>;
  setEditingId: setSetter<string | null>;
};
