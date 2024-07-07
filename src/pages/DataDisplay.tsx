import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
// import { Modal } from "../components/Modal";
import { useModal } from "../hooks/use-modal";
import DynamicForm from "../components/Forms/DynamicForm";
import { PageTitle } from "../components/Titles/PageTitle";
// import { useState } from "react";

export default function DataDisplay() {
    const { data } = useLoaderData() as { result: boolean; data: object[] };

    // const [modalModel, setModalModel] = useState({});
    // console.log("data is", data);

    // const columns = Object.keys(data[0]);
    // console.log(columns);
    // const tableColumnTitles = [{ title: "", dataKey: "" }] as [{ title: string; dataKey: string }];

    // columns.map((column) => {
    //     tableColumnTitles.push({
    //         title: column.toLowerCase().replace(new RegExp("_", "g"), " "),
    //         dataKey: column,
    //     });
    // });

    // console.log(tableColumnTitles);

    const myColums = [
        { title: "id", dataKey: "Id" },
        { title: "start", dataKey: "START" },
        { title: "encounter class", dataKey: "ENCOUNTERCLASS" },
    ];

    const modal = useModal();

    // const showModal = (details: any) => {
    //     console.log("showing modal", details);
    //     setModalModel(details);
    //     modal.handleChange();
    // };

    const handleFormSubmission = () => {
        console.log("FORM SUBMITED");
        console.log("closing modal");
        modal.handleChange();
    };

    return (
        <>
            {/* <Modal visible={false}>Modal</Modal> */}
            <modal.modalComponent>
                {modal.model && <DynamicForm model={modal.model} onSubmit={handleFormSubmission} />}
            </modal.modalComponent>
            <div style={{ height: "100%" }}>
                <PageTitle>Data Display</PageTitle>
                <Table columns={myColums.filter((i) => i.title !== "")} elements={data} isExpandable={true} />
            </div>
        </>
    );
}
