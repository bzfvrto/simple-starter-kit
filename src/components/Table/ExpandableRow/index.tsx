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
    console.log(details, expanded);

    const getDetailList = () => {
        const list = [];
        for (const key in details) {
            if (Object.prototype.hasOwnProperty.call(details, key)) {
                list.push(<Item key={key} property={key} value={details[key]} />);
            }
        }
        return list;
    };

    return (
        <div className={styles.container} style={{ height: expanded ? "100%" : 0, opacity: expanded ? 1 : 0 }}>
            {/* <div className={styles.content}>{JSON.stringify(details)}</div> */}
            <div className={styles.content}>
                <dl className={styles.detailList}>{getDetailList()}</dl>
            </div>
        </div>
    );
}
