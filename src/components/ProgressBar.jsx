import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [progress, setProgress] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev - 10), 10;
    });

    return () => clearInterval(interval);
  }, []);

  return <progress value={progress} max={timer}></progress>;
}
