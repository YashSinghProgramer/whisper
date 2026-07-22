'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="bg-slate-900 text-white flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
        >
          Try again
        </button>
      </body>
    </html>
  );
}