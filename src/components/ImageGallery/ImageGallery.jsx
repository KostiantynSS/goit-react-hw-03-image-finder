import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './imageGallery.module.css';

class ImageGallery extends Component {
  imgClickHandler = photoObj => {
    this.props.onClick(photoObj);
  };

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.photos.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            largePhoto={largeImageURL}
            preview={webformatURL}
            description={tags}
            onClick={this.imgClickHandler}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
