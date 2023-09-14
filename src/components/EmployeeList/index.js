import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box, Stack } from "@mui/material";
import Employee from "../Employee";
import { getSortedEmployeeDataBySortKey } from "../../helpers";

const EmployeeList = () => {
  const employeeList = useSelector((state) => state.employeeList);
  const searchTerm = useSelector((state) => state.searchTerm);
  const employeeSortBy = useSelector((state) => state.employeeSortBy);

  const filteredEmployees = employeeList.filter((employee) =>
    employee.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmployees = getSortedEmployeeDataBySortKey(
    filteredEmployees,
    employeeSortBy
  );

  return (
    <Box sx={{ width: "100%", marginTop: "8px" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Employee List
      </Typography>
      <Stack spacing={2}>
        {sortedEmployees.map((employee) => (
          <Employee key={employee.employeeId} employee={employee} />
        ))}
      </Stack>
    </Box>
  );
};

export default EmployeeList;
