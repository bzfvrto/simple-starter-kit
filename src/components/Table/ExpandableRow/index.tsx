import { useModal } from "../../../hooks/use-modal";
import styles from "./ExpandableRow.module.css";

export function Item({ property, value }: { property: string; value: string }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                margin: "15px 10%",
                justifyContent: "space-around",
            }}
        >
            <dt style={{ fontWeight: "bold", textAlign: "left" }}>{property}</dt>
            <dd style={{ textAlign: "left" }}>{value !== "" ? value : "n/a"}</dd>
        </div>
    );
}
export function ExpandableRow({ details, expanded }: { details: any; expanded: boolean }) {
    const getDetailList = () => {
        const list = [];
        for (const key in details) {
            if (Object.prototype.hasOwnProperty.call(details, key)) {
                list.push(<Item key={key} property={key} value={details[key]} />);
            }
        }
        return list;
    };

    const modal = useModal();

    const handleEdition = () => {
        modal.setModalModel(details);
        modal.handleChange();
    };

    return (
        <div className={styles.container} style={{ height: expanded ? "100%" : 0, opacity: expanded ? 1 : 0 }}>
            {/* <div className={styles.content}>{JSON.stringify(details)}</div> */}
            <div className={styles.content}>
                <div className={styles.detailTitleContainer}>
                    <h5 className={styles.detailTitle}>Details</h5>
                    <button className={styles.editBtn} type="button" onClick={handleEdition}>
                        Edit
                    </button>
                </div>
                <dl className={styles.detailList}>{getDetailList()}</dl>
            </div>
        </div>
    );
}
