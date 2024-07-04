import { startTransition, useState } from "react";
import styles from "./TableRow.module.css";
import { ExpandableRow } from "../ExpandableRow";

export default function TableRow({
    data,
    colCount,
    details,
}: {
    data: string[];
    details: null | object;
    colCount: number;
}) {
    const [expanded, setExpanded] = useState(false);
    const [show, setShow] = useState(false);
    const toggleRowExpansion = () => {
        setShow((show) => !show);
        startTransition(() => {
            setExpanded((expanded) => !expanded);
        });
    };
    return (
        <>
            <tr className={styles.container} onClick={() => toggleRowExpansion()}>
                {data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <th scope="row" className={styles.row} key={index}>
                                {item}
                            </th>
                        );
                    }
                    return (
                        <td
                            className={styles.row}
                            key={index}
                            style={{ width: 250, paddingTop: 5, paddingBottom: 5, position: "relative" }}
                        >
                            <div>{item}</div>
                        </td>
                    );
                })}
            </tr>
            {details && show && (
                <tr className={styles.hiddenRow}>
                    <td colSpan={colCount}>
                        <ExpandableRow details={details} expanded={expanded} />
                    </td>
                </tr>
            )}
        </>
    );
}
