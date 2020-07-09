import React, { Component } from 'react';


const list = [
  {id: "1", nom: "Shopie", age :"18" },
  {id: "2", nom: "Julienne", age :"28" },
  {id: "3", nom: "Marc", age :"30" },
  {id: "4", nom: "Alexandre", age :"14" },
]


class App extends Component{
  renderList(){
    return list.map(item =>{
      return (
      <h3 key={item.id}>{item.nom} a {item.age}</h3>
      )
    })
  }
  render(){
    return( 
      <div>
        <p>Je suis le component ZakApp</p>
        {this.renderList()}
      </div>
    )
  }
}

export default App;