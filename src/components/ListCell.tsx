import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import type { ListCellProps } from "@/types/types";
import TaskActions from "./TaskActions";

function ListCell({
  task,
  toggleTask,
  deleteTask,
  setEditingId,
}: ListCellProps) {
  return (
    <Card
      key={task.id}
      className='group p-4 shadow-sm transition-all hover:shadow-md'>
      <div className='flex items-start gap-3'>
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => toggleTask(task.id)}
          className='mt-1 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600 dark:data-[state=checked]:bg-cyan-500 dark:data-[state=checked]:border-cyan-500'
        />
        <div className='flex-1 min-w-0'>
          <h3
            className={`text-base font-medium leading-relaxed ${
              task.completed
                ? "text-muted-foreground line-through"
                : "text-foreground"
            }`}>
            {task.title}
          </h3>
          {task.description && (
            <p className='mt-1 text-sm text-muted-foreground leading-relaxed'>
              {task.description}
            </p>
          )}
        </div>
        <TaskActions
          deleteTask={deleteTask}
          setEditingId={setEditingId}
          id={task.id}
        />
      </div>
    </Card>
  );
}

export default ListCell;
