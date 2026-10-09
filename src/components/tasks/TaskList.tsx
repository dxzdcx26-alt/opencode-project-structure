"use client";

import { TaskItem } from "./TaskItem";
import type { Task } from "@/types/task";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
};

export function TaskList({ tasks, onToggle, onDelete, onEdit }: Props) {
  if (tasks.length === 0) {
    return (
      <div className="px-6 py-12 text-center text-slate-400">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-100">
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
