import styles from "./TableHeader.module.css";

export default function TableHeader({ columns }: { columns: Column[] }) {
    console.log(columns);
    console.log(
        "HHHH",
        columns.map((item) => {
            return `item name : ${item.title}`;
        })
    );

    return (
        <thead className={styles.container}>
            <tr>
                {columns.map((column) => {
                    return (
                        <th key={column.title} scope="col" style={{ width: 175 }}>
                            {column.title}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
