import { PropsWithChildren } from "react";
import styles from "./FormField.module.css";
import { mergeClassNames } from "../../../utils/classNames";

export function FormField({ className, children, ...rest }: { className?: string; rest?: any } & PropsWithChildren) {
    const defaultClass = styles.container;

    return (
        <div className={className ? mergeClassNames(defaultClass, className) : defaultClass} {...rest}>
            {children}
        </div>
    );
}
