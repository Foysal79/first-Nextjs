"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold text-red-600">
        Something went wrong!
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
