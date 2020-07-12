import React, { Component } from 'react';
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

    render(){
        return (
            <div className="boxed--view">
                <div className="boxed--view__box">
                    <ListContainer timers={this.state.timers}/>
                    <ActionContainer
                       
                    />
                </div>
            </div>           
        )
    }
}

export default Box;