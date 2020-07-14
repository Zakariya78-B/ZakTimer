import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimerForm from './TimerForm';
import Button from './Button';

class ActionContainer extends Component {
    static propTypes={
        onSub:PropTypes.func.isRequired
    }
    state = {
        isFormOpen:false
    }
    handleFormOpen = () =>{
        this.setState({isFormOpen:true});
    }
    handleFormClose = () =>{
        this.setState({ isFormOpen:false})
    }
    onSub = ({ title, project,}) =>{
        this.handleFormClose();
        this.props.onSub({title,project});
    }
    render(){
        if(this.state.isFormOpen){
            return (
                <TimerForm 
                    onSub={this.onSub}
                    onCloseForm={this.props.handleFormClose}
                />
                )
        }else{
            return <Button  handleFormOpen={this.handleFormOpen}/>
        }
    }
}

export default ActionContainer;