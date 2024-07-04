import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import styles from "./Table.module.css";

export default function Table({
    columns,
    elements,
    isExpandable = false,
}: {
    columns: Column[];
    elements: object[];
    isExpandable?: boolean;
}) {
    return (
        <div className={styles.container}>
            <table className={styles.tableContent}>
                <TableHeader columns={columns} />
                <TableBody rowElements={elements} columns={columns} isExpandable={isExpandable} />
            </table>
        </div>
    );
}
