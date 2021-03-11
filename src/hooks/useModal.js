import { useState } from 'react';

const useModal = () => {
    const [openModal, setOpenModal] = useState(false);

    function onModalHandleClick() {
        setOpenModal(!openModal);
    }

    return {
        openModal,
        onModalHandleClick,
    };
};

export default useModal;