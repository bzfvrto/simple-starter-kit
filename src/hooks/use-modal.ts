import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const useModal = () => {
    const modal = useContext(ModalContext);

    return {
        modalComponent: modal.component,
        visible: modal.show,
        handleChange: modal.changeVisibility,
        model: modal.model,
        setModalModel: modal.setModalModel
    }
}
