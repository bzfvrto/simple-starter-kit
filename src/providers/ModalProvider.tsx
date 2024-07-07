import { PropsWithChildren, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";
import Modal from "../components/Modal";

export default function ModalProvider({ children }: PropsWithChildren) {
    const [visible, setVisible] = useState(false);
    const [editableModel, setEditableModel] = useState<object>();

    const changeVisibility = () => {
        console.log("changing visibility");

        setVisible((visible) => !visible);
    };

    const setModalModel = (model: object) => {
        console.log("setting model");

        setEditableModel(model);
    };

    const defaultModalContext = {
        component: Modal,
        show: visible,
        changeVisibility,
        model: editableModel,
        setModalModel,
    };

    return <ModalContext.Provider value={defaultModalContext}>{children}</ModalContext.Provider>;
}
