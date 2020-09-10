import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
   render() {
      const cards = this.props.cards.map((card) => {
         return (<Card
            id={card.id}
            title={card.title}
            escription={card.description}
            tasks={card.tasks}
         />
         );
      });

     return (
      <div className="list">
         <h1>{this.props.title}</h1>
         {cards}
      </div>
     );
   }
 }

 export default List;