import { useEffect, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(
    Number.parseInt(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return [count, setCount];
}
