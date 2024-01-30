import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import Modal from 'react-modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = ({ query }, actions) => {
    setCurrentQuery(query);
    actions.resetForm();
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>CLose</button>
      </Modal>
      <SearchBar onSubmit={handleSubmit} />
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
        <ImageGallery imageList={currentList} onClick={openModal} />
      )}
      {currentList.length > 0 && <LoadMoreBtn onClick={handleClick} />}
    </div>
  );
};
