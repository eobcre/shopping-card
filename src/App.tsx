import Title from './components/Title';
import CartItem from './components/CartItem';
import Counter from './components/Counter';
import Price from './components/Price';
import Button from './components/Button';

const App = () => {
  return (
    <div className='container'>
      <div className='inner-container'>
        <Title />
        <CartItem />
        <Counter />
        <Price />
        <hr />
        <Button name='Checkout' />
      </div>
    </div>
  );
};

export default App;
