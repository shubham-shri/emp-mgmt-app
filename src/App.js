import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EmployeeList from "./components/EmployeeList";
import EmployeeSearch from "./components/EmployeeSearch";
import CsvUpload from "./components/CsvUpload";
import SortButton from "./components/SortButton";
import "./App.css";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Typography variant="h4" className="app-header">
        Employee Directory
      </Typography>
      <CsvUpload />
      <Grid container spacing={2} style={{ marginTop: "12px" }}>
        <Grid item xs={8}>
          <EmployeeSearch />
        </Grid>
        <Grid item xs={4}>
          <SortButton />
        </Grid>
      </Grid>
      <EmployeeList />
    </Container>
  );
};

export default App;
