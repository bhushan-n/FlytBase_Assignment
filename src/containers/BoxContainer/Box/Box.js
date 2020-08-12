import React from 'react';
import classes from './Box.module.css'

const Box = (props) => {
  let attachedClasses=[classes.Box]
  if(props.active) attachedClasses=[classes.Box, classes.active]
  return (
    <div className={attachedClasses.join(' ')} onClick={props.click.bind(this,props.id)} style={{top:props.top, left:props.left, zValue:props.id, backgroundColor:props.active?null:props.color}}></div>
  );
};
 
export default Box;