// This is where all the magic is✨

import React,{Component} from 'react';
//Component scoped styling
import classes from './BoxContainer.module.css'
//Footer for buttons and knobs
import Footer from '../../components/Footer/Footer';
//Auxillary HOC 
import Aux from '../../hoc/Aux'
//Our good ol' Box📦
import Box from './Box/Box';

//Implementing class-based react component as I plan to use state in this application.
class BoxContainer extends Component{
  //Pretty colors for our boxes ✨
  colors = ['#FFCCCC','#FFFFCC','#CCFFE5','#CCFFFF','#CCE5FF','#CCE5FF','#CCCCFF','#FFCCFF','#FFCCFF','#FFCCE5']
  //Initial State
  state={
    boxes:[],
    noOfBoxes: 0,
    addMode:0,
    active:0,
    height:0, 
    width:0
  }
  //This fn is triggered by the 'Add Box' button located in footer.
  addBoxHandler=()=>{

    this.setState((prevState)=>{
      //This code below that allow that "gimmick" to work.
      //I calculate position of the newly crated box using most recently created box.
      //and of-course not letting it get out of our Responsive Container
      let top, left, addMode=prevState.addMode;
      if(prevState.boxes.length<1){
        top=10;
        left=10;
        addMode=1;
      }
      else if(prevState.addMode!==0){
        top=prevState.boxes[prevState.boxes.length-1].top;
        left=prevState.boxes[prevState.boxes.length-1].left;
        if(prevState.addMode===1){
          if(top+20>prevState.height){
            addMode=2;
          }
          else if(left+20>prevState.width){
            addMode=3;
          }
          else{
          top=top+20;
          left=left+20;
          }
        }
        else if(prevState.addMode===2){
          if(left+20>prevState.width){
            addMode=4;
          }
          else if(top-20<0){
            addMode=1;
          }
          else{
          top=top-20;
          left=left+20;
          }
        }
        else if(prevState.addMode===3){
          if(top+20>prevState.height){
            addMode=4;
          }
          else if(left-20<0){
            addMode=1;
          }
          else{
          top=top+20;
          left=left-20;
          }
        }
        else if(prevState.addMode===4){
          if(left-20<0){
            addMode=2;
          }
          else if(top-20<0){
            addMode=3;
          }
          else{
          top=top-20;
          left=left-20;
          }
        }
      }
      //Updating the state with our newly added box
      return {addMode:addMode,noOfBoxes:prevState.noOfBoxes+1,boxes:[...prevState.boxes, 
        {id:prevState.noOfBoxes+100,
          top:top, 
          left:left}]}})
  }
  //'Keyboard Access' toggle triggers this. 
  addListener =(event)=>{
    if(event.target.checked){
      //We add a listener only when user toggles it on.
      document.addEventListener('keydown', this.keypressHandler);
    }
    else{
      //We also remove it when user toggles it off.
      document.removeEventListener('keydown',this.keypressHandler);
    }
  }
  //'Gimmick Toggle'
  toggleGimmick =(event)=>{
    //as we plan to use this 'event' asynchronously we should call
    event.persist();
    //which will remove the synthetic event from the pool and allow references to the event

    if(event.target.checked){
      //Calling 'Add Box'- This is where all the magic is.✨
      this.addBoxHandler();
      //I use setTimeout to asynchronous recursive call in order to avoid overloading the event loop.
      setTimeout(this.toggleGimmick.bind(this, event), 0);
    }
  }
  //KeyDown Listener
  keypressHandler=(event)=>{
    console.log(event.key)
    switch(event.key){
      case 'W':
      case 'w':
      case 'ArrowUp':
        if(this.state.active!==0){
          this.setState((prevState)=>{
            let boxes = [...prevState.boxes]
            let index = boxes.findIndex((el)=>el.id===prevState.active)
            if(boxes[index].top-10 > 0){
            boxes[index] = {...boxes[index], top:boxes[index].top-10 }
            return {boxes:boxes}
            }else return null;
          });
        }
        break;
      case 'S':
      case 's':
      case 'ArrowDown':
        if(this.state.active!==0){
          this.setState((prevState)=>{
            let boxes = [...prevState.boxes]
            let index = boxes.findIndex((el)=>el.id===prevState.active)
            if(boxes[index].top+10 < this.state.height){
            boxes[index] = {...boxes[index], top:boxes[index].top+10 }
            return {boxes:boxes}
          }else return null;
          });
        }
        break;
      case 'A':
      case 'a':
      case 'ArrowLeft':
        if(this.state.active!==0){
          this.setState((prevState)=>{
            let boxes = [...prevState.boxes]
            let index = boxes.findIndex((el)=>el.id===prevState.active)
            if(boxes[index].left-10 > 0){
            boxes[index] = {...boxes[index], left:boxes[index].left-10 }
            return {boxes:boxes}
          }else return null;
          });
        }
        break;
      case 'D':
      case 'd':
      case 'ArrowRight':
        if(this.state.active!==0){
          this.setState((prevState)=>{
            let boxes = [...prevState.boxes]
            let index = boxes.findIndex((el)=>el.id===prevState.active)
            if(boxes[index].left+10 < this.state.width){
            boxes[index] = {...boxes[index], left:boxes[index].left+10 }
            return {boxes:boxes}
          }else return null;
          });
        }
        break;
      case 'Delete':
      case 'Backspace':
        if(this.state.active!==0){
          this.setState((prevState)=>{
            let boxes = [...prevState.boxes]
            let index = boxes.findIndex((el)=>el.id===prevState.active)
            boxes.splice(index, 1)
            return {active:0, boxes:boxes}
          });
        }
        break;
      default:
        break;
    }
  }
  //Simple "HighLight on click"
  boxClickHandler =(key)=>{
    this.setState({active:key});
  }
  componentDidMount() {
    //Getting the container size when this component gets rendered
    let height = parseInt(document.getElementById('container').offsetHeight)-203;
    let width = parseInt(document.getElementById('container').offsetWidth)-203;
    this.setState({ height:height, width:width });
  }
  componentDidUpdate() {
    //👀 Looking out for Container Size changes in order to make it Fluid
    let height = parseInt(document.getElementById('container').offsetHeight)-203;
    let width = parseInt(document.getElementById('container').offsetWidth)-203;
    if(height!==this.state.height||width!==this.state.width)
    this.setState({ height:height, width:width });
  }
  render(){

    return (
      <Aux>
      <div className={classes.BoxContainer} id="container">
        {this.state.boxes.map((el)=><Box color={this.colors[el.id%10]} active={this.state.active===el.id} click={this.boxClickHandler} key={el.id} id={el.id} top={el.top} left={el.left}/>)}
      </div>
      <Footer toggleGimmick={this.toggleGimmick} buttonClick={this.addBoxHandler} toggleChecked={this.addListener}/>
      </Aux>
      
    );
  }

}
 
export default BoxContainer;