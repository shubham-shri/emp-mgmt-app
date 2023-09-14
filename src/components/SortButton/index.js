import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeSortBy } from "../../redux/actions";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SortSelect() {
  const dispatch = useDispatch();
  const employeeSortBy = useSelector((state) => state.employeeSortBy);

  const handleSortChange = (event) => {
    dispatch(setEmployeeSortBy(event.target.value));
  };

  return (
    <FormControl fullWidth sx={{ minWidth: 120 }}>
      <InputLabel>Sort By</InputLabel>
      <Select
        value={employeeSortBy}
        onChange={handleSortChange}
        label="Sort By"
      >
        <MenuItem value="nameAsc">Sort by Name (Asc)</MenuItem>
        <MenuItem value="nameDesc">Sort by Name (Desc)</MenuItem>
        <MenuItem value="employeeIdAsc">Sort by Employee Id (Asc)</MenuItem>
        <MenuItem value="employeeIdDesc">Sort by Employee Id (Desc)</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortSelect;
