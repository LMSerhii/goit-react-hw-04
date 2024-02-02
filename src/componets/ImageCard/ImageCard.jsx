export const ImageCard = ({ small, regular, alt_description, onModal }) => {
  return (
    <div>
      <img
        src={small}
        alt={alt_description}
        loading="lazy"
        onClick={() => onModal(regular, alt_description)}
      />
    </div>
  );
};
