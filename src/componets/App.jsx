import { useEffect, useState } from 'react';
import { useToggle } from '../js/helpers/useToggle';
import { Oval } from 'react-loader-spinner';
import Modal from 'react-modal';
import { toast, Toaster } from 'react-hot-toast';

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

Modal.setAppElement('#root');

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { isOpen, open, close } = useToggle(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImage = async () => {
      try {
        setError(false);
        setLoader(true);

        const response = await getDataGallery(query, page);

        if (!response.results.length)
          toast('Nothing was found', {
            icon: '☠️',
            style: { borderRadius: '10px', background: '#333', color: '#fff' },
          });

        if (totalPages >= response.total_pages) return;

        setCurrentList(prevList => [...prevList, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchImage();
  }, [query, page]);

  const searchImages = currentQuery => {
    setQuery(currentQuery);
    setPage(1);
    setCurrentList([]);
  };

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

      <SearchBar onSearch={searchImages} />

      {error && <ErrorMessage />}
      {currentList.length > 0 && (
        <ImageGallery imageList={currentList} onClick={open} />
      )}
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
      {currentList.length > 0 && !loader && (
        <LoadMoreBtn onClick={handleClick} />
      )}
      <Toaster />
    </div>
  );
};
