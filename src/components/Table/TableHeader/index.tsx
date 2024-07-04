import styles from "./TableHeader.module.css";

export default function TableHeader({ columns }: { columns: Column[] }) {
    return (
        <thead className={styles.container}>
            <tr>
                {columns.map((column) => {
                    return (
                        <th key={column.title} scope="col" style={{ width: 175 }} className={styles.tableHeaderCell}>
                            {column.title}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
