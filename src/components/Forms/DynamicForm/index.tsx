import { Form } from "react-router-dom";
import { Label } from "../Label";
import { BaseInput } from "../Inputs/BaseInput";
import { FormField } from "../FormField";
import styles from "./DynamicForm.module.css";
import SubmitBtn from "../../Buttons/SubmitBtn";

type Model = {
    [propName: string]: any;
};
export default function DynamicForm({ model, onSubmit }: { model: Model; onSubmit?: () => void }) {
    const determineTypeFromProperty = (property: any) => {
        if (typeof property === "string") {
            if (isValidDate(property)) {
                return "date";
            }

            if (!Number.isNaN(property) && typeof property === "number") {
                return "number";
            }

            return "string";
        }

        return typeof property;
    };

    const isValidDate = (string: string) => {
        const regex = new RegExp(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/gm);
        const expectDate = Date.parse(string);
        if (!Number.isNaN(expectDate) && string.match(regex) !== null) {
            return true;
        }
        return false;
    };
    const inputfromProperty = (element: string, key: string) => {
        return [
            <FormField key={`${element}-${key}`}>
                <Label htmlFor={key.toLowerCase()}>{key}</Label>
                <BaseInput
                    type={determineTypeFromProperty(element)}
                    name={key.toLowerCase()}
                    id={key.toLowerCase()}
                    defaultValue={
                        determineTypeFromProperty(element) === "date"
                            ? new Date(element).toJSON().split("T")[0]
                            : element
                    }
                    onChange={console.log}
                />
            </FormField>,
        ];
    };
    const buildForm = () => {
        let formInputs = [];
        if (Object.keys(model).length) {
            for (const key in model) {
                if (Object.prototype.hasOwnProperty.call(model, key)) {
                    const element: string | object = model[key];
                    if (typeof element === "object" && Object.keys(element).length) {
                        if (Object.keys(element).length) {
                            for (const nestedKey in element) {
                                if (Object.prototype.hasOwnProperty.call(element, nestedKey)) {
                                    const nestedElement: string = element[nestedKey as keyof object];
                                    formInputs.push(inputfromProperty(nestedElement, `${key}[${nestedKey}]`));
                                }
                            }
                        }
                    }
                    if (typeof element === "string") {
                        formInputs.push(inputfromProperty(element, key));
                    }
                }
            }
        }
        return formInputs;
    };

    return (
        <div style={{ boxSizing: "border-box" }}>
            <h4 className={styles.formTitle}>Dynamic Form</h4>
            <div className={styles.formContainer}>
                <Form className={styles.form} method="post" action="/data-display" onSubmit={onSubmit}>
                    <div className={styles.formContent}>{buildForm()}</div>
                    <div>
                        <SubmitBtn title="Submit" />
                    </div>
                </Form>
            </div>
        </div>
    );
}
