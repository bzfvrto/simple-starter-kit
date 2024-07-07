import { startTransition, useState } from "react";
import styles from "./TableRow.module.css";
import { ExpandableRow } from "../ExpandableRow";
import { mergeClassNames } from "../../../utils/classNames";

export default function TableRow({
    data,
    colCount,
    details,
    className,
}: {
    data: string[];
    details: null | object;
    colCount: number;
    className?: string;
}) {
    const [expanded, setExpanded] = useState(false);
    const [show, setShow] = useState(false);
    const toggleRowExpansion = () => {
        setShow((show) => !show);
        startTransition(() => {
            setExpanded((expanded) => !expanded);
        });
    };

    const classNames = mergeClassNames(styles.container, className ?? "");

    return (
        <>
            <tr className={classNames} onClick={() => toggleRowExpansion()}>
                {data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <th scope="row" className={styles.rowCell} key={index}>
                                {item}
                            </th>
                        );
                    }
                    return (
                        <td
                            className={styles.rowCell}
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
