import { Component } from 'react';
import css from './imageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
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
