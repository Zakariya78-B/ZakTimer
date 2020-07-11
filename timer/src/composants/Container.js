import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class Container extends Component {
    render(){
        return (
            <div>
               {this.props.isFormOpen ? 
               (
                    <TimerForm />
               ) : 
               (
                   <Timer />
               )}
            </div>           
        )
    }
}

export default Container;