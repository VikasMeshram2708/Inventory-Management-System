"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center flex-col pt-10">
      <h2 className="text-3xl font-bold text-centerI">Something went wrong!</h2>
      <button
        className="bg-pink-500 hover:bg-pink-400 text-white font-bold mt-10 px-4 py-2 rounded shadow"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
