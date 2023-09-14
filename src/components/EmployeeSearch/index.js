import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/actions";
import { debounce } from "../../helpers";
import TextField from "@mui/material/TextField";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = debounce((e) => {
    dispatch(setSearchTerm(e.target.value));
  }, 300);

  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Search employees"
      onChange={handleSearch}
    />
  );
};

export default Search;
