"use client";

import { useState, FormEvent } from "react";
import { Plus } from "lucide-react";

type Props = {
  onAdd: (title: string) => void;
};

export function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
        autoFocus
      />
      <button
        type="submit"
        disabled={!title.trim()}
        className="flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Plus size={18} />
        Add
      </button>
    </form>
  );
}
