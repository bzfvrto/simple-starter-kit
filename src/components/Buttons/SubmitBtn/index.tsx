import { ButtonHTMLAttributes } from "react";
import { mergeClassNames } from "../../../utils/classNames";
import styles from "./SubmitBtn.module.css";

export default function SubmitBtn({
    title,
    className = "",
    ...rest
}: { title: string; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="submit" className={mergeClassNames(styles.submitBtn, className)} {...rest}>
            {title}
        </button>
    );
}
