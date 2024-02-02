import { IconContext } from 'react-icons';
import { IoSearch } from 'react-icons/io5';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

// const notify = () => toast('Here is your toast.');

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.search.value.trim() === '') {
      toast.error('Search is empty.');
      return;
    }

    onSearch(evt.target.elements.search.value);
    evt.target.reset();
  };

  return (
    <header>
      <div className={css.formWrapper}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <IconContext.Provider value={{ color: 'wheat' }}>
              <IoSearch />
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </header>
  );
};
