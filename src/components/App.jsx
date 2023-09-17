import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import fetchPhotos from 'helpers/fetchPhotos';
import css from 'styles.module.css';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    photos: [],
  };
  onSubmitSearchForm = data => {
    this.setState({ query: data });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      const {
        data: { hits },
      } = await fetchPhotos({ q: this.state.query });
      this.setState({ photos: hits });
    }
  }
  render() {
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmitSearchForm} />
        <ImageGallery photos={this.state.photos} />
      </div>
    );
  }
}
