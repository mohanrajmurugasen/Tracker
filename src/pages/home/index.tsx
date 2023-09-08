import React, { useState } from "react";

const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="counter">
      <button
        data-testid="increment"
        onClick={() => setCounter((pre) => pre + 1)}
      >
        +
      </button>
      <div data-testid="counter">Counter: {`${counter}`}</div>
      <button
        data-testid="decrement"
        onClick={() => setCounter((pre) => pre - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Home;
