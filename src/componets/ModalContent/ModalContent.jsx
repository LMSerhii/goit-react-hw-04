import { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import css from './ModalContent.module.css';

export const ModalContent = ({
  imageParams: { selectedPhoto, altDescription, description },
  closeModal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = description && description.slice(0, 100);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={css.modalContentBox}>
      {/* <button className={css.closeBtn} onClick={closeModal}>
        <IconContext.Provider value={{ size: 40, className: css.closeIcon }}>
          <div className="wrapp">
            <IoMdClose />
          </div>
        </IconContext.Provider>
      </button> */}
      <img className={css.img} src={selectedPhoto} alt={altDescription} />

      <div className={css.desc}>
        <p>{isExpanded ? description : shortText}</p>

        {description && description.length > 100 && (
          <button className={css.moreBtn} onClick={toggleExpansion}>
            {isExpanded ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
};
