import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";

export default function DataDisplay() {
    const { data } = useLoaderData() as { result: boolean; data: object[] };
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

    return (
        <div style={{ height: "100%" }}>
            <h2 style={{ boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.075)", paddingBottom: "1rem", paddingTop: ".75rem" }}>
                Data Display
            </h2>
            <Table columns={myColums.filter((i) => i.title !== "")} elements={data} isExpandable={true} />
        </div>
    );
}
