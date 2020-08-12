import React from 'react';
//Component Level styling
import classes from './Button.module.css';

//A simple and nice looking custom button ✨
const Button = (props) => {
  return (
    <button onClick={props.click} className={classes.button}>
      {props.children}
    </button>
  );
};

export default Button;
