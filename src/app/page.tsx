"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "@/components/tasks/TaskList";
import { TaskForm } from "@/components/tasks/TaskForm";
import { FilterBar } from "@/components/tasks/FilterBar";
import type { Task, Filter } from "@/types/task";

const STORAGE_KEY = "taskflow-tasks";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTasks(JSON.parse(saved));
      } catch {
        setTasks([]);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, mounted]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
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

  const editTask = (id: string, title: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: title.trim() } : t))
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
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          TaskFlow
        </h1>
        <p className="mt-2 text-slate-500">Simple & beautiful task manager</p>
      </header>

      <TaskForm onAdd={addTask} />

      <div className="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">
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

      <footer className="mt-8 text-center text-sm text-slate-400">
        Built with Next.js + TypeScript + OpenCode
      </footer>
    </main>
  );
}
