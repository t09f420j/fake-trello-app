import React, { Component } from 'react';
import CheckList from './CheckList';




class Card extends Component {
   constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.toggleContainer = React.createRef();
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
    onClickOutsideHandler(event) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }

   render() {
      return (
         <div ref={this.toggleContainer}>
         <button onClick={this.onClickHandler}>
         <div className="card">
            <div className="card__title">{this.props.title}</div>
            
         </div>
         </button>
         {this.state.isOpen && (
            <div className="card__details">
            {this.props.description}
            <CheckList cardId={this.props.id} tasks={this.props.tasks} />
         </div>
          )}
         </div>
      );
   }
}

export default Card;