import { IoMdClose } from 'react-icons/io';

export const ModalContent = ({ selectedPhoto, description, closeModal }) => {
  return (
    <div>
      <button onClick={closeModal}>
        <IoMdClose />
      </button>
      <img src={selectedPhoto} alt={description} />
    </div>
  );
};
