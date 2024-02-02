import { useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [altDescription, setAltDescription] = useState(null);
  const [description, setDescription] = useState(null);

  const imageParams = {
    selectedPhoto,
    altDescription,
    description,
  };

  const open = (photo, alt_description, description) => {
    setIsOpen(true);
    setSelectedPhoto(photo);
    setAltDescription(alt_description);
    setDescription(description);
  };

  const close = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
    setAltDescription(null);
    setDescription(null);
  };

  return { imageParams, isOpen, open, close };
};
