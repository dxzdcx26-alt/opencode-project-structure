"use client";

import { useState, KeyboardEvent } from "react";
import { Check, Pencil, Trash2, X, Calendar } from "lucide-react";
import { clsx } from "clsx";
import type { Task, Priority } from "@/types/task";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (
    id: string,
    updates: Partial<Pick<Task, "title" | "priority" | "dueDate">>
  ) => void;
};

const priorityStyle: Record<Priority, string> = {
  low: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
  medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  high: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

function isOverdue(dueDate: string | null, completed: boolean) {
  if (!dueDate || completed) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(dueDate) < today;
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState<Priority>(task.priority);
  const [editDue, setEditDue] = useState(task.dueDate ?? "");

  const saveEdit = () => {
    if (editTitle.trim()) {
      onEdit(task.id, {
        title: editTitle.trim(),
        priority: editPriority,
        dueDate: editDue || null,
      });
    }
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditTitle(task.title);
    setEditPriority(task.priority);
    setEditDue(task.dueDate ?? "");
    setEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  const overdue = isOverdue(task.dueDate, task.completed);

  return (
    <li className="group flex items-start gap-3 px-4 py-3 transition hover:bg-slate-50 dark:hover:bg-slate-700/50">
      <button
        onClick={() => onToggle(task.id)}
        className={clsx(
          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
          task.completed
            ? "border-brand-500 bg-brand-500 text-white"
            : "border-slate-300 hover:border-brand-400 dark:border-slate-500"
        )}
        aria-label={task.completed ? "Mark as active" : "Mark as completed"}
      >
        {task.completed && <Check size={14} strokeWidth={3} />}
      </button>

      <div className="min-w-0 flex-1">
        {editing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded border border-brand-300 px-2 py-1 outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-brand-600 dark:bg-slate-900 dark:text-slate-100"
              autoFocus
            />
            <div className="flex flex-wrap gap-2">
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value as Priority)}
                className="rounded border border-slate-200 px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <input
                type="date"
                value={editDue}
                onChange={(e) => setEditDue(e.target.value)}
                className="rounded border border-slate-200 px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
              />
            </div>
          </div>
        ) : (
          <>
            <span
              className={clsx(
                "block cursor-default select-none",
                task.completed && "text-slate-400 line-through dark:text-slate-500"
              )}
              onDoubleClick={() => setEditing(true)}
            >
              {task.title}
            </span>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <span
                className={clsx(
                  "rounded-full px-2 py-0.5 text-xs font-medium capitalize",
                  priorityStyle[task.priority]
                )}
              >
                {task.priority}
              </span>
              {task.dueDate && (
                <span
                  className={clsx(
                    "inline-flex items-center gap-1 text-xs",
                    overdue
                      ? "font-medium text-red-600 dark:text-red-400"
                      : "text-slate-400 dark:text-slate-500"
                  )}
                >
                  <Calendar size={12} />
                  {task.dueDate}
                  {overdue && " · overdue"}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      <div className="flex shrink-0 gap-1 opacity-0 transition group-hover:opacity-100">
        {editing ? (
          <>
            <button
              onClick={saveEdit}
              className="rounded p-1.5 text-brand-600 hover:bg-brand-50 dark:hover:bg-slate-700"
              aria-label="Save"
            >
              <Check size={16} />
            </button>
            <button
              onClick={cancelEdit}
              className="rounded p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Cancel"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              className="rounded p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-200"
              aria-label="Edit"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="rounded p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/30"
              aria-label="Delete"
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
      </div>
    </li>
  );
}
