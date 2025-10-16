import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useEffect, useState } from "react";
import type { EditTaskProps } from "@/types/types";

function EditTaskForm({
  editingId,
  tasks,
  setTasks,
  setEditingId,
}: EditTaskProps) {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    const task = tasks.find((i) => editingId === i.id);
    setEditTitle(task?.title || "");
    setEditDescription(task?.description || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingId]);

  const saveEdit = () => {
    if (!editTitle.trim() || !editingId) return;

    setTasks(
      tasks.map((task) =>
        task.id === editingId
          ? {
              ...task,
              title: editTitle,
              description: editDescription || undefined,
            }
          : task
      )
    );
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  return (
    <Dialog
      open={editingId !== null}
      onOpenChange={(open) => !open && cancelEdit()}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='space-y-4 py-4'>
          <div className='space-y-2'>
            <Label htmlFor='edit-title'>Title</Label>
            <Input
              id='edit-title'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder='Task title...'
              onKeyDown={(e) => e.key === "Enter" && saveEdit()}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='edit-description'>Description</Label>
            <Textarea
              id='edit-description'
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder='Add a description...'
              rows={3}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant='outline'
            onClick={cancelEdit}>
            Cancel
          </Button>
          <Button
            onClick={saveEdit}
            className='bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600'>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditTaskForm;
