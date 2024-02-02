import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imageList, onModal }) => {
  return (
    <ul className={css.list}>
      {imageList.map(
        ({
          id,
          alt_description,
          description,
          likes,
          urls: { small, regular },
          user: { name },
        }) => {
          return (
            <li key={id}>
              <ImageCard
                small={small}
                regular={regular}
                alt_description={alt_description}
                description={description}
                onModal={onModal}
              />
              <div className={css.shortDesc}>
                <p>Autor: {name}</p>
                <p>Likes: {likes}</p>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};
