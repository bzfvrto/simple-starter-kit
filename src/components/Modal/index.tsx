import { PropsWithChildren } from "react";
import styles from "./Modal.module.css";
import { useModal } from "../../hooks/use-modal";

export default function Modal({ children }: PropsWithChildren) {
    const modal = useModal();
    console.log(modal.visible);

    if (!modal.visible) {
        return null;
    }

    const handleVisibilityChange = () => {
        console.log("handlig from cpmnt");
        modal.handleChange();
    };

    return (
        <div className={styles.modalContainer} onClick={handleVisibilityChange}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.scrollableContainer}>{children}</div>
            </div>
        </div>
    );
}
