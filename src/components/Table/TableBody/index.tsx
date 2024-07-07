// import TableRow from "../TableRow";
import TableRow from "../TableRow";
import styles from "./TableBody.module.css";

export default function TableBody({
    rowElements,
    columns,
    isExpandable,
}: {
    rowElements: object[];
    columns: Column[];
    isExpandable: boolean;
}) {
    const propertiesToDisplay = columns.map((column) => column.dataKey);
    const columnizeObject = (element: any) => {
        const displayableCols = [];
        for (const key in element) {
            if (Object.prototype.hasOwnProperty.call(element, key) && propertiesToDisplay.includes(key)) {
                displayableCols.push(element[key]);
            }
        }
        return displayableCols;
    };

    return (
        <>
            <tbody className={styles.container}>
                {rowElements.map((element, index) => {
                    return (
                        <TableRow
                            key={index}
                            data={columnizeObject(element)}
                            details={isExpandable ? element : null}
                            colCount={columns.length}
                            className={styles.row}
                        />
                    );
                })}
            </tbody>
        </>
    );
}
