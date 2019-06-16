import React from "react";
import { connect } from "react-redux";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const modalLookup = {
  LoginModal,
  RegisterModal
};

const ModalManager = ({ currentModal }) => {
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

const mapStateToProps = state => {
  return { currentModal: state.modals };
};

export default connect(mapStateToProps)(ModalManager);
