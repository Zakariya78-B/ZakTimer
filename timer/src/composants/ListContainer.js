import React, { Component } from 'react';
import Container from './Container';

class ListContainer extends Component {
    renderContainer = () => {
        return this.props.timers.map((timer => {
            return (
                <Container
                    onSubmit={this.props.onSubmit}
                    onDelete={this.props.onDelete}
                    key={timer.id}
                    {...timer}
                />
            )
        }))
    }
    render(){
        return (
            <div className="list--container">
                {this.renderContainer()}              
            </div>           
        )
    }
}

export default ListContainer;