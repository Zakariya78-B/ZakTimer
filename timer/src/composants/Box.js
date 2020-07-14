import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';
class Box extends Component {

    state = {
        timers: [
            {
                title: "Apprendre  React",
                project: "Développement Web",
                elapsed: 5609620,
                id: "0a4a79cb",
                runningSince: null
            },
            {
                title: "Apprendre Angular",
                project: "Développement Web",
                elapsed: 1349620,
                id: "0a4a79ca",
                runningSince: null
            }
      
        ]
    }
    handleCreateTimer = ({title, project}) => {
        const timer = {
            title,
            project,
            id: uuid(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers:[...this.state.timers,timer]
        })
    }
    handleEditTimer = ({id , title, project}) => {
        this.setState({
            timers : this.state.timers.map(timer => {
                if(timer.id === id){
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return { ...timer}
            })
        })
    }
    handleDelete = id =>{
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        });
    }
    render(){
        return (
            <div className="boxed--view">
                <div className="boxed--view__box">
                    <ListContainer 
                        onSubmit={this.props.handleEditTimer}
                        onDelete={this.handleDelete}
                        timers={this.state.timers}
                    />
                    <ActionContainer onSubmit={this.handleCreateTimer}/>
                </div>
            </div>           
        )
    }
}

export default Box;