import css from './ImageCard.module.css';

export const ImageCard = ({
  small,
  regular,
  alt_description,
  description,
  onModal,
}) => {
  return (
    <div>
      <img
        className={css.img}
        src={small}
        alt={alt_description}
        loading="lazy"
        onClick={() => onModal(regular, alt_description, description)}
      />
    </div>
  );
};
