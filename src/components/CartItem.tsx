import Image from '../assets/item.png';

const CartItem: React.FC = () => {
  return (
    <div>
      <div className='item-container'>
        <img src={Image} alt='Image' width={70} height={70} />
        <p className='item-name'>
          Ecovacs Deebot OZMO N8 + robot vacuum cleaner W125978483
        </p>
      </div>
      <span>In stock</span>
    </div>
  );
};

export default CartItem;
