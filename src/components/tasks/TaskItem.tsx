"use client";

import { useState, KeyboardEvent } from "react";
import { Check, Pencil, Trash2, X } from "lucide-react";
import { clsx } from "clsx";
import type { Task } from "@/types/task";

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
};

export function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const saveEdit = () => {
    if (editTitle.trim() && editTitle !== task.title) {
      onEdit(task.id, editTitle);
    }
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditTitle(task.title);
    setEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <li className="group flex items-center gap-3 px-4 py-3 transition hover:bg-slate-50">
      <button
        onClick={() => onToggle(task.id)}
        className={clsx(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition",
          task.completed
            ? "border-brand-500 bg-brand-500 text-white"
            : "border-slate-300 hover:border-brand-400"
        )}
        aria-label={task.completed ? "Mark as active" : "Mark as completed"}
      >
        {task.completed && <Check size={14} strokeWidth={3} />}
      </button>

      {editing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={saveEdit}
          className="flex-1 rounded border border-brand-300 px-2 py-1 outline-none focus:ring-2 focus:ring-brand-500/30"
          autoFocus
        />
      ) : (
        <span
          className={clsx(
            "flex-1 cursor-default select-none",
            task.completed && "text-slate-400 line-through"
          )}
          onDoubleClick={() => setEditing(true)}
        >
          {task.title}
        </span>
      )}

      <div className="flex gap-1 opacity-0 transition group-hover:opacity-100">
        {editing ? (
          <>
            <button
              onClick={saveEdit}
              className="rounded p-1.5 text-brand-600 hover:bg-brand-50"
              aria-label="Save"
            >
              <Check size={16} />
            </button>
            <button
              onClick={cancelEdit}
              className="rounded p-1.5 text-slate-400 hover:bg-slate-100"
              aria-label="Cancel"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              className="rounded p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Edit"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="rounded p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
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
