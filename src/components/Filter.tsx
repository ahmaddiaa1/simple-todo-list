import type { FilterProps } from "@/types/types";
import { Button } from "./ui/button";

function Filter({ filter, setFilter }: FilterProps) {
  return (
    <div className='mb-6 flex gap-2'>
      <Button
        variant={filter === "all" ? "default" : "outline"}
        size='sm'
        onClick={() => setFilter("all")}
        className={
          filter === "all"
            ? "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600"
            : ""
        }>
        All
      </Button>
      <Button
        variant={filter === "active" ? "default" : "outline"}
        size='sm'
        onClick={() => setFilter("active")}
        className={
          filter === "active"
            ? "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600"
            : ""
        }>
        Active
      </Button>
      <Button
        variant={filter === "completed" ? "default" : "outline"}
        size='sm'
        onClick={() => setFilter("completed")}
        className={
          filter === "completed"
            ? "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600"
            : ""
        }>
        Completed
      </Button>
    </div>
  );
}

export default Filter;
