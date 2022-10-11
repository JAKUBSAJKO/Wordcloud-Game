import './button.css';

export const Button = (props) => {
  return <button {...props}>{props.text}</button>;
};
