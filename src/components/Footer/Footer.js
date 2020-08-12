import React from 'react';
import classes from './Footer.module.css';
//Components
import Toggle from '../UI/Toggle/Toggle';
import Button from '../UI/Button/Button';

//This is Footer containing buttons and knobs 
// Please check out BoxContainer.js that's where all the magic is✨
const Footer = (props) => {
  
  return (
    <div className={classes.footer}>
    <div className={classes.toggle}>
    <Toggle click={props.toggleGimmick} />
      <p> : Toggle Gimmick</p>
    </div>
    <div className={classes.button}>
    <Button click={props.buttonClick}>Add Box</Button>
    </div>
    <div className={classes.toggle}>
      <p>Keyboard Access : </p>
    <Toggle click={props.toggleChecked} />
    </div>
    </div>
  );
};
 
export default Footer;