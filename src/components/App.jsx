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
    isLoading: false,
  };

  onSubmitSearchForm = data => {
    if (data === this.state.query) return;
    this.setState({ query: data, photos: [], page: 1 });
  };

  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await fetchPhotos({ q: query, page: page });

        if (hits.length > 0) {
          this.setState(prev => ({
            photos: [...prev.photos, ...hits],
            loadMore: this.state.page < Math.ceil(totalHits / 12),
          }));
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.setState({ isLoading: false });
      }
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
