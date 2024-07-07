import { InputHTMLAttributes } from "react";
import styles from "./BaseInput.module.css";
import { mergeClassNames } from "../../../../utils/classNames";

export function BaseInput(props: InputHTMLAttributes<HTMLInputElement>) {
    const finalClasses = () => {
        let classNames = styles.input;
        if (props.className) {
            classNames = mergeClassNames(classNames, props.className);
            delete props.className;
        }
        return classNames;
    };
    return (
        <div style={{ marginTop: 12 }}>
            <input className={finalClasses()} {...props} />
        </div>
    );
}
