import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ imageList }) => {
  return (
    <ul>
      {imageList.map(({ id, alt_description, urls: { small } }) => {
        return (
          <li key={id}>
            <ImageCard src={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};
