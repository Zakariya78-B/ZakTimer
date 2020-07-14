import React, { Component } from 'react';
import Container from './Container';

class ListContainer extends Component {
    renderContainer = () => {
        return this.props.timers.map((timer => {
            return (
                <Container
                    onSub={this.props.onSub}
                    onDelete={this.props.onDelete}
                    key={timer.id}
                    onPlay={this.props.onPlay}
                    onPause={this.props.onPause}
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