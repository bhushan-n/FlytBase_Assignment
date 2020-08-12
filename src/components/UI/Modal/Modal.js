import React, { Component } from 'react';
//Component Level styling
import classes from './Modal.module.css';
//Components
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

//Custom Modal Component
class Modal extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps !== this.props;
  };
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform:
              this.props.show === true ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show === true ? 1 : 0,
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
