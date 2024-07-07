// import { FormProps } from "react-router-dom";

import { redirect } from "react-router-dom";

export const fakeFormAction = async ({ request, params }: any) => {
    console.log("UPDATING ", request, params);
    const formData = await request.formData();
    const formToJSON = {} as any;
    for (const [key, value] of [...formData.entries()]) {
        formToJSON[key] = value;
    }
    console.log("FORM DATA", "formData", formData, "formToJSON", formToJSON);
    const properties = [];
    for (const key in formToJSON) {
        if (Object.prototype.hasOwnProperty.call(formToJSON, key)) {
            const element = formToJSON[key];
            properties.push(`${key} : ${element}`);
        }
    }
    // alert(properties.join("\n"));
    console.log("form properties : ", properties);
    return redirect("/data-display");
};
