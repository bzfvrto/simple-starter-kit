import React, { createContext, SetStateAction } from "react";
import Modal from "../components/Modal"

interface ModalContext {
    component: React.JSX.Element,
    show: boolean,
    model?: object,
    changeVisibility: () => void,
    setModalModel: SetStateAction<object>
}

export const ModalContext = createContext({
    component: Modal,
    show: false,
    model: undefined as undefined | object,
    changeVisibility: () => {},
    setModalModel: (_model: object) => {}
});
