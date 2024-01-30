import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imageList, onClick }) => {
  return (
    <ul className={css.list}>
      {imageList.map(({ id, alt_description, urls: { small } }) => {
        return (
          <li key={id} onClick={onClick}>
            <ImageCard src={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};
