import toast from 'react-hot-toast';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
