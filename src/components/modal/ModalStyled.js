import styled from "styled-components";

const ModalStyled = styled.div`
    /* max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px); */

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    /* z-index: 100; */
  }

  .modalBody {
    position: relative;
    padding: 50px;
    background-color: #fff;
    width: calc(100vw - 200px);
    z-index: 200;

  }
  .modalIcon {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .modalBtn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      & .modalIcon {
        fill: #024f94;
      }
    }
  }
`;
export default ModalStyled;
