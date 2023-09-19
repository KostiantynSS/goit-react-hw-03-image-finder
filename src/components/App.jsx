import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchPhotos from 'helpers/fetchPhotos';
import css from 'app.module.css';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    photos: [],
    loadMore: false,
    isLoading: false,
    showModal: false,
    src: null,
    alt: null,
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

  openModalHandler = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };
  largePhoto = ({ src, alt }) => {
    this.setState({ src: src, alt: alt });
    this.openModalHandler();
  };
  render() {
    const { photos, loadMore, isLoading, showModal, src, alt } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmitSearchForm} />
        {photos.length > 0 && (
          <ImageGallery photos={photos} onClick={this.largePhoto} />
        )}
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.loadMoreBtnHandler} />}
        {showModal && (
          <Modal modalHandler={this.openModalHandler} src={src} alt={alt} />
        )}
      </div>
    );
  }
}
