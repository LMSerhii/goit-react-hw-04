export const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};
