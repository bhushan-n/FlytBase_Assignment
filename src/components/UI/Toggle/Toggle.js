import React from 'react';
import classes from './Toggle.module.css'

const Toggle = (props) => {
  
  return (<div className={classes.Toggle}>
    <div className={classes.button} id="btn">
      <input onClick={props.click} type="checkbox" className={classes.checkbox}/>
      <div className={classes.knobs}>
        <span className={classes.span}></span>
      </div>
      <div className={classes.layer}></div>
    </div>
  </div>   
  );
};
 
export default Toggle;