import Counter from '../components/Counter';

import Image from '../assets/item.png';

const CartItem: React.FC = () => {
  return (
    <div className='item-container'>
      <div className='item-inner-container'>
        <img src={Image} alt='Image' width={70} height={70} />
        <div className='item-details'>
          <p className='item-name'>
            Ecovacs Deebot OZMO N8 + robot vacuum cleaner W125978483
          </p>
          <span className='item-stock'>In stock</span>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
