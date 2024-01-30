import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

import './App.css';
import { getDataGallery } from '../js/helpers/api-service';

export const App = () => {
  const [currentList, setCurrentList] = useState([]);
  const [page, setPage] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setCurrentList([]);
        setError(false);
        setLoader(true);
        const response = await getDataGallery(currentQuery, page);
        setCurrentList(response.results);
      } catch (error) {
        console.log(error.message);
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

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {loader && (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#59595c"
          secondaryColor="#97979c"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
        />
      )}
      {error && <ErrorMessage />}
      {currentList.length > 0 && <ImageGallery imageList={currentList} />}
    </div>
  );
};
