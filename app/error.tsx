"use client"; // Error components must be Client Components
import Image from "next/image";
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
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>
      <Image
        src={"/ruben-from-giphy.gif"}
        width={400}
        height={400}
        alt="error"
      />
      <button
        className="bg-white text-black px-3 py-2 rounded-lg font-semibold"
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
