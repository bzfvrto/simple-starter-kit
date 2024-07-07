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
    // console.log(model, typeof model.Id);

    const determineTypeFromProperty = (property: any) => {
        if (typeof property === "string") {
            // Try to convert string to date
            const expectation = Date.parse(property);
            if (!Number.isNaN(expectation) && typeof expectation === "number") {
                return "date";
            }
            return "string";
        }
        return typeof property;
    };

    const buildForm = () => {
        let formInputs = [];
        if (Object.keys(model).length) {
            for (const key in model) {
                if (Object.prototype.hasOwnProperty.call(model, key)) {
                    const element: string = model[key] as string;
                    // console.log(element, typeof element);
                    // console.log(`type of ${element} is :`, determineTypeFromProperty(element));
                    // console.log(determineTypeFromProperty(element) === "date" && new Date(element).toJSON());

                    formInputs.push([
                        <FormField key={`${element}-${key}`}>
                            <Label htmlFor={key.toLowerCase()}>{key}</Label>
                            <BaseInput
                                type={determineTypeFromProperty(element)}
                                name={key.toLowerCase()}
                                id={key.toLowerCase()}
                                // value={element}
                                defaultValue={
                                    determineTypeFromProperty(element) === "date"
                                        ? new Date(element).toJSON().split("T")[0]
                                        : element
                                }
                                onChange={console.log}
                            />
                        </FormField>,
                    ]);
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
            {/* <div>{JSON.stringify(model)}</div> */}
        </div>
    );
}
