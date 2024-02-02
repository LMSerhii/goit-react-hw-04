import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [description, setDescription] = useState(null);

  const open = (photo, alt_description) => {
    setIsOpen(true);
    setSelectedPhoto(photo);
    setDescription(alt_description);
  };

  const close = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
    setDescription(null);
  };

  return { description, selectedPhoto, isOpen, open, close };
};
