import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imageList, onModal }) => {
  return (
    <ul className={css.list}>
      {imageList.map(({ id, alt_description, urls: { small, regular } }) => {
        return (
          <li key={id}>
            <ImageCard
              small={small}
              regular={regular}
              alt_description={alt_description}
              onModal={onModal}
            />
          </li>
        );
      })}
    </ul>
  );
};
