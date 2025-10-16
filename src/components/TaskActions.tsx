import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import type { TaskActionProps } from "@/types/types";

function TaskActions({ id, deleteTask, setEditingId }: TaskActionProps) {
  return (
    <div className='flex gap-1 opacity-0 transition-opacity group-hover:opacity-100'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setEditingId(id)}
        className='h-8 w-8 text-muted-foreground hover:text-foreground'
        aria-label='Edit task'>
        <Pencil className='h-4 w-4' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => deleteTask(id)}
        className='h-8 w-8 text-muted-foreground hover:text-destructive'
        aria-label='Delete task'>
        <Trash2 className='h-4 w-4' />
      </Button>
    </div>
  );
}

export default TaskActions;
