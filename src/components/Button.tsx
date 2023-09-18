type ButtonProps = {
  name: string;
};

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className='button-container'>
      <button>{name}</button>
    </div>
  );
};

export default Button;
