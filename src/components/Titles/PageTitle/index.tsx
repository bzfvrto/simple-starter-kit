import { PropsWithChildren } from "react";
import styles from "./PageTitle.module.css";

export function PageTitle({ children }: PropsWithChildren) {
    return <h1 className={styles.titleContainer}>{children}</h1>;
}
