"use client";

import { clsx } from "clsx";
import type { Filter } from "@/types/task";

type Props = {
  filter: Filter;
  onChange: (filter: Filter) => void;
  activeCount: number;
  hasCompleted: boolean;
  onClearCompleted: () => void;
};

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

export function FilterBar({
  filter,
  onChange,
  activeCount,
  hasCompleted,
  onClearCompleted,
}: Props) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 text-sm">
      <span className="text-slate-500">
        {activeCount} item{activeCount !== 1 ? "s" : ""} left
      </span>

      <div className="flex gap-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={clsx(
              "rounded-md px-3 py-1 transition",
              filter === f.value
                ? "bg-brand-50 font-medium text-brand-700"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className="text-slate-400 transition hover:text-red-500 disabled:invisible"
      >
        Clear completed
      </button>
    </div>
  );
}
