import { useEffect, useState } from 'react';
import { useToggle } from '../js/helpers/useToggle';
import { Oval } from 'react-loader-spinner';
import Modal from 'react-modal';

import { SearchForm } from './SearchForm/SearchForm';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

import './App.css';
import { getDataGallery } from '../js/helpers/api-service';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const App = () => {
  const [currentList, setCurrentList] = useState([]);
  const [page, setPage] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, open, close } = useToggle(false);

  useEffect(() => {
    if (!currentQuery) return;

    const fetchImage = async () => {
      try {
        setCurrentList([]);
        setError(false);
        setLoader(true);
        const response = await getDataGallery(currentQuery, page);
        setCurrentList(response.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchImage();
  }, [currentQuery, page]);

  // const handleSubmit = ({ query }, actions) => {
  //   setCurrentQuery(query);
  //   actions.resetForm();
  // };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={close}>CLose</button>
      </Modal>

      <SearchBar onSearch={setCurrentQuery} />

      {/* <SearchForm onSubmit={handleSubmit} /> */}

      {loader && (
        <Oval
          visible={true}
          height="50"
          width="50"
          color="#59595c"
          secondaryColor="#97979c"
          ariaLabel="oval-loading"
          wrapperClass="loader"
        />
      )}
      {error && <ErrorMessage />}
      {currentList.length > 0 && (
        <ImageGallery imageList={currentList} onClick={open} />
      )}
      {currentList.length > 0 && <LoadMoreBtn onClick={handleClick} />}
    </div>
  );
};
