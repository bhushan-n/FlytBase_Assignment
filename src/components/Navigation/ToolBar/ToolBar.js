import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../../Logo/Logo';
//Simple top Nav bar
const ToolBar = (props) => {
  return (
    <header className={classes.ToolBar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <p style={{color:"white"}}>Use W,A,S,D to move the Box. Press Delete/BackSpace to Remove the Box.</p>
    </header>
  );
};

export default ToolBar;
