import React, { Component } from 'react';
import Container from './Container';

class ListContainer extends Component {
    render(){
        return (
            <div className="list--container">
               <Container 
                    isFormOpen={false}
               />
               <Container
                    isFormOpen
                />
               
            </div>           
        )
    }
}

export default ListContainer;