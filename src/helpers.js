export const transformCsvEmployeeData = (employeeCsvData) => {
  const employeeData = employeeCsvData.map((employee) => {
    const employeeId = employee[0];
    const employeeName = employee[1];
    const employeeDesignation = employee[2];
    return {
      employeeId,
      employeeName,
      employeeDesignation,
    };
  });
  return employeeData;
};

export const getSortedEmployeeDataBySortKey = (employeeData, sortKey) => {
  const sortedData = [...employeeData];

  switch (sortKey) {
    case "nameAsc":
      sortedData.sort((a, b) => a.employeeName.localeCompare(b.employeeName));
      break;
    case "nameDesc":
      sortedData.sort((a, b) => b.employeeName.localeCompare(a.employeeName));
      break;
    case "employeeIdAsc":
      sortedData.sort((a, b) => a.employeeId - b.employeeId);
      break;
    case "employeeIdDesc":
      sortedData.sort((a, b) => b.employeeId - a.employeeId);
      break;
    default:
      break;
  }
  return sortedData;
};
