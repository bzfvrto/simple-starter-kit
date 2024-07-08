import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";
// import { Modal } from "../components/Modal";
import { useModal } from "../hooks/use-modal";
import DynamicForm from "../components/Forms/DynamicForm";
import { PageTitle } from "../components/Titles/PageTitle";
// import { useState } from "react";

export default function DataDisplay() {
    const { data } = useLoaderData() as { result: boolean; data: any };

    const myColums = [
        { title: "id", dataKey: "Id" },
        { title: "Encounter class", dataKey: "ENCOUNTERCLASS" },
        { title: "Description", dataKey: "DESCRIPTION" },
    ];

    const modal = useModal();

    const handleFormSubmission = () => {
        console.log("FORM SUBMITED");
        console.log("closing modal");
        modal.handleChange();
    };

    return (
        <>
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
