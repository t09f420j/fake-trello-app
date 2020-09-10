import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List
          id="todo"
          title="To Do"
          cards={
           this.props.cards.filter((card) => card.status === 'todo')
          }
        />
        <List
          id="in-progress"
          title="作業中"
          cards={
            this.props.cards.filter((card) => card.status === 'in-progress')
          }
        />
        <List
          id="done"
          title="完了"
          cards={
            this.props.cards.filter((card) => card.status === 'done')
          }
        />
        <List
          id="QA"
          title="QA"
          cards={
            this.props.cards.filter((card) => card.status === 'QA')
          }
        />
      </div>
    );
  }
}
export default KanbanBoard;