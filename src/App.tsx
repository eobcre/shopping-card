import Title from './components/Title';
import CartItem from './components/CartItem';
import Counter from './components/Counter';
import Price from './components/Price';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <div>
        <Title />
        <CartItem />
        <Counter />
        <Price />
        <Button name='Checkout' />
      </div>
    </div>
  );
};

export default App;
