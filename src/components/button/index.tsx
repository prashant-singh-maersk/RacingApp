import React from 'react';
import './styles/index.scss';

interface ButtonProps {
  text: string;
  clickHandler: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    text,
    clickHandler
  } = props;

  return (
    <button
      className={`btn`}
      onClick={clickHandler}
    >
      {text}
    </button>
  )
}

export default Button;