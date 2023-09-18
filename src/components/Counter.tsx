import { useState } from 'react';

import { Icon } from '@iconify/react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(1);

  const handleClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickMinus = () => {
    count > 0 ? setCount((prev) => prev - 1) : '';
  };

  return (
    <div className='counter-container'>
      <button onClick={handleClickMinus}>
        <Icon icon='majesticons:minus-line' fontSize={20} />
      </button>
      <p className='counter-value'>{count}</p>
      <button onClick={handleClickPlus}>
        <Icon icon='octicon:plus-16' fontSize={20} />
      </button>
    </div>
  );
};

export default Counter;
