"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Moon, Sun } from "lucide-react";
import { TaskList } from "@/components/tasks/TaskList";
import { TaskForm } from "@/components/tasks/TaskForm";
import { FilterBar } from "@/components/tasks/FilterBar";
import type { Task, Filter, Priority } from "@/types/task";

const STORAGE_KEY = "taskflow-tasks";
const THEME_KEY = "taskflow-theme";

function migrateTasks(raw: unknown[]): Task[] {
  return raw.map((item) => {
    const t = item as Partial<Task> & { id: string; title: string };
    return {
      id: t.id,
      title: t.title,
      completed: Boolean(t.completed),
      createdAt: t.createdAt ?? new Date().toISOString(),
      priority: t.priority ?? "medium",
      dueDate: t.dueDate ?? null,
    };
  });
}

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTasks(migrateTasks(JSON.parse(saved)));
      } catch {
        setTasks([]);
      }
    }
    const theme = localStorage.getItem(THEME_KEY);
    const preferDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(preferDark);
    document.documentElement.classList.toggle("dark", preferDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark, mounted]);

  const addTask = (title: string, priority: Priority, dueDate: string | null) => {
    const newTask: Task = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority,
      dueDate,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTask = (
    id: string,
    updates: Partial<Pick<Task, "title" | "priority" | "dueDate">>
  ) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = tasks.filter((t) => !t.completed).length;

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <header className="relative mb-8 text-center">
        <button
          onClick={() => setDark((d) => !d)}
          className="absolute right-0 top-0 rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          TaskFlow
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Simple & beautiful task manager
        </p>
      </header>

      <TaskForm onAdd={addTask} />

      <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <FilterBar
          filter={filter}
          onChange={setFilter}
          activeCount={activeCount}
          hasCompleted={tasks.some((t) => t.completed)}
          onClearCompleted={clearCompleted}
        />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>

      <footer className="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">
        Built with Next.js + TypeScript + OpenCode
      </footer>
    </main>
  );
}
