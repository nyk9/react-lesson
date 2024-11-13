import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        value={count}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setCount(Number(e.currentTarget?.value) + 1)
        }
      >
        incremental
      </button>
      <button
        value={count}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          setCount(Number(e.currentTarget?.value) - 1)
        }
      >
        decremental
      </button>
      {count}
    </div>
  );
}
