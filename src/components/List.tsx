import type { ListProps } from "@/types/types";
import { Card } from "./ui/card";
import ListCell from "./ListCell";

function List({
  filter,
  tasks,
  toggleTask,
  deleteTask,
  setEditingId,
}: ListProps) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className='space-y-2'>
      {filteredTasks.length === 0 ? (
        <Card className='p-8 text-center shadow-sm'>
          <p className='text-muted-foreground'>
            {filter === "active" && "No active tasks"}
            {filter === "completed" && "No completed tasks"}
            {filter === "all" && "No tasks yet. Add one to get started!"}
          </p>
        </Card>
      ) : (
        filteredTasks.map((task) => (
          <ListCell
            task={task}
            setEditingId={setEditingId}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default List;
