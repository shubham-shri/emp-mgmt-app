import React from "react";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import { setEmployeeList } from "../../redux/actions";
import { transformCsvEmployeeData } from "../../helpers";
import { Paper } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["csv"];
export default function CsvUpload() {
  const dispatch = useDispatch();

  const handleChange = async (file) => {
    if (file) {
      try {
        Papa.parse(file, {
          worker: true,
          complete({ data }) {
            // const headers = data[0];
            const employeeCsvData = data.slice(1);
            const employeeData = transformCsvEmployeeData(employeeCsvData);
            dispatch(setEmployeeList(employeeData));
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const sampleCsvLink = (
    <a
      href={process.env.PUBLIC_URL + "/sample-employee-data.csv"}
      download="sample-employee-data.csv"
    >
      Download Sample CSV
    </a>
  );

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: "16px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          label={"Upload Employee list/CSV here"}
          hoverTitle={"Drop your CSV here"}
        />
        <div style={{ marginTop: "16px" }}>{sampleCsvLink}</div>
      </Paper>
    </div>
  );
}
