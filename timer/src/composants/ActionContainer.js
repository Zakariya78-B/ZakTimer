import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Button from './Button';

class ActionContainer extends Component {
    state = {
        isFormOpen:false
    }
    handleFormOpen = () =>{
        this.setState({isFormOpen:true});
    }
    render(){
        if(this.state.isFormOpen){
            return <TimerForm onSub={this.props.onSub}/>
        }else{
            return <Button  handleFormOpen={this.handleFormOpen}/>
        }
    }
}

export default ActionContainer;