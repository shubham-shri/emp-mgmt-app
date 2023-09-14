export const setEmployeeList = (employeeList) => ({
  type: "SET_EMPLOYEE_LIST",
  payload: employeeList,
});

export const setSearchTerm = (searchTerm) => ({
  type: "SET_SEARCH_TERM",
  payload: searchTerm,
});

export const setEmployeeSortBy = (employeeSortBy) => ({
  type: "SET_EMPLOYEE_SORT_BY",
  payload: employeeSortBy,
});
