"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
            Counter
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Click the button to increment the counter
          </p>
        </div>

        {/* Counter Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800">
          {/* Display */}
          <div className="text-center mb-8">
            <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
              {count}
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Current count
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition-colors"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-6 py-3 rounded-lg bg-zinc-400 hover:bg-zinc-500 text-white font-semibold transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
