import { useEffect, useState } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import './App.css';
import { getDataGallery } from '../js/helpers/api-service';

export const App = () => {
  const [currentList, setCurrentList] = useState([]);
  const [page, setPage] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const response = await getDataGallery(currentQuery, page);
      setCurrentList(response.results);
    };
    fetchImage();
  }, [currentQuery, page]);

  const handleSubmit = (values, actions) => {
    const { query } = values;
    setCurrentQuery(query);

    actions.resetForm();
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      {currentList.length > 0 && <ImageGallery imageList={currentList} />}
    </div>
  );
};
