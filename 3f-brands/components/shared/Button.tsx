import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor = 'primary', // Default background color
  textColor = 'white', // Default text color
  type = 'button', // Default button type
}) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} rounded-lg py-3 font-extralight leading-4 text-sm`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
