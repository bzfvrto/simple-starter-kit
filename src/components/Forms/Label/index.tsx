import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { mergeClassNames } from "../../../utils/classNames";
import styles from "./Label.module.css";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement> & PropsWithChildren) {
    const finalClasses = () => {
        let classNames = styles.label;
        if (props.className) {
            classNames = mergeClassNames(classNames, props.className);
            delete props.className;
        }
        return classNames;
    };
    return (
        <div style={{ textAlign: "left" }}>
            <label className={finalClasses()} {...props}>
                {props.children}
            </label>
        </div>
    );
}
