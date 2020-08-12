import React, { Component } from 'react';
//Component level styling
import classes from './ErrorBoundary.module.css';

//importing svg illustration Kudos to https://undraw.co/
import img from '../../assets/images/Error.svg';
//Components
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';

//A higher Order component to wrap the app to gracefully handle runtime errors
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError)
      return (
        <Aux>
          <img alt="404 Error" src={img} className={classes.ErrorImg} />
          <div className={classes.ErrorContainer}>
            <h1>Something went Wrong :( </h1>
            <h2>{this.state.errorMessage}</h2>
          </div>
          <div className={classes.ErrorButton}>
            <Button click={() => this.props.history.push('/')}>Go Home</Button>
          </div>
        </Aux>
      );
    else {
      return this.props.children;
    }
  }
}
