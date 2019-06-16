export const openModal = (modalType, modalProps) => {
  return {
    type: "MODAL_OPEN",
    payload: {
      modalType,
      modalProps
    }
  };
};

export const closeModal = () => {
  console.log("Close");
  return {
    type: "MODAL_CLOSE"
  };
};
