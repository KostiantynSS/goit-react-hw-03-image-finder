import { Component } from 'react';
import css from './button.module.css';
class Button extends Component {
  loadMoreBtnHandler = e => {
    e.preventDefault();
    this.props.onClick();
  };
  render() {
    return (
      <button
        type="button"
        className={css.Button}
        onClick={this.loadMoreBtnHandler}
      >
        Load More
      </button>
    );
  }
}

export default Button;
