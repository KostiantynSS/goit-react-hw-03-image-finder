import { Component } from 'react';
import css from './imageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  imgClickHandler = () => {
    const largePhoto = {
      src: this.props.largePhoto,
      alt: this.props.description,
    };
    this.props.onClick(largePhoto);
  };

  render() {
    return (
      <li className={css.ImageGalleryItem} onClick={this.imgClickHandler}>
        <img
          className={css.ImageGalleryItemImage}
          src={this.props.preview}
          alt={this.props.description}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
