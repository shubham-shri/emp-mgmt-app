import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
const Employee = ({ employee }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {employee.employeeName}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Employee ID: {employee.employeeId}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Designation: {employee.employeeDesignation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Employee;
