import React, { Component } from 'react';

class CheckList extends Component {
   render() {
      const tasks = this.props.tasks.map((task) => (
         <li className="checklist__task">
            <input type="checkbox" defaultChecked={task.done} />
            {task.name}
            <span className="checklist__task--remove" />
         </li>
      ));

      return (
         <div className="checklist">
            <ul>{tasks}</ul>
         </div>
      );
   }
}
   
export default CheckList;