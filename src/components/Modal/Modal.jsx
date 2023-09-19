import { Component } from 'react';
import css from './modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }
  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.modalHandler();
    }
  };
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
