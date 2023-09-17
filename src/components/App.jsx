import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchPhotos from 'helpers/fetchPhotos';
import css from 'styles.module.css';
import Button from './Button/Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    photos: [],
    loadMore: false,
  };
  onSubmitSearchForm = data => {
    this.setState({ query: data, photos: [], page: 1 });
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      const {
        data: { hits, totalHits },
      } = await fetchPhotos({ q: query, page: page });

      prevState.query === query
        ? this.setState({
            photos: [...prevState.photos, ...hits],
            loadMore: this.state.page < Math.ceil(totalHits / 12),
          })
        : this.setState({
            photos: hits,
            loadMore: this.state.page < Math.ceil(totalHits / 12),
            page: 1,
          });
    }
  }
  loadMoreBtnHandler = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  render() {
    const { photos, loadMore } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmitSearchForm} />
        {photos.length > 0 && <ImageGallery photos={photos} />}
        {loadMore && <Button onClick={this.loadMoreBtnHandler} />}
      </div>
    );
  }
}
