import Title from './components/Title';
import CartItem from './components/CartItem';
import Price from './components/Price';
import Button from './components/Button';

const App = () => {
  return (
    <div className='container'>
      <div className='inner-container'>
        <div className='inner-inner-container'>
          <Title />
          <CartItem />
          <hr />
          <Price />
          <Button name='Checkout' />
        </div>
      </div>
    </div>
  );
};

export default App;
