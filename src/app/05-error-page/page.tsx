'use client';

import { useState } from 'react';

export default function Page() {
  const [counter, setCounter] = useState(0);
  if (counter === 5) {
    // Simulate a JS error
    throw new Error('I crashed!');
  }
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Crashed {counter}
      </button>
    </div>
  );
}
