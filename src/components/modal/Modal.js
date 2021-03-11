import PropTypes from "prop-types";
import CrossIcon from "./CrossIcon";
import ModalStyled from "./ModalStyled";

const Modal = ({ openModal, onModalHandleClick, children }) => {

  const onOverlayClick = (e) => {
   e.target.className === "overlay" && onModalHandleClick();
  }

  return (
    <>
      {openModal && (
        <ModalStyled>
          <div className="overlay" onClick={onOverlayClick}>
            <div className="modalBody">
              <button
                onClick={onModalHandleClick}
                className="modalBtn"
                type="button"
              >
                <CrossIcon/>
              </button>
              {children}
            </div>
          </div>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;

Modal.propTypes = {
  openModal: PropTypes.bool,
  onModalHandleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

