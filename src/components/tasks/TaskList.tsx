"use client";

import { TaskItem } from "./TaskItem";
import type { Task } from "@/types/task";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    updates: Partial<Pick<Task, "title" | "priority" | "dueDate">>
  ) => void;
};

export function TaskList({ tasks, onToggle, onDelete, onEdit }: Props) {
  if (tasks.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-slate-400 dark:text-slate-500">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-100 dark:divide-slate-700">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
