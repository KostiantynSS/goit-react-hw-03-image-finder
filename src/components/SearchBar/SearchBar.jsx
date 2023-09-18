import { Component } from 'react';
import css from './searchBar.module.css';
class SearchBar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const query = elements[1].value;
    if (query.trim() === '') return;
    this.props.onSubmit(query);
    e.currentTarget.reset();
  };
  render() {
    return (
      <header className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
