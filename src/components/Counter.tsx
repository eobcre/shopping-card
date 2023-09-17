import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickMinus = () => {
    count > 0 ? setCount((prev) => prev - 1) : '';
  };

  return (
    <div>
      <button onClick={handleClickMinus}>-</button>
      <p>{count}</p>
      <button onClick={handleClickPlus}>+</button>
    </div>
  );
};

export default Counter;
