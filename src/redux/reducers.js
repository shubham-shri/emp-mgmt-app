const initialState = {
  employeeList: [],
  searchTerm: "",
  employeeSortBy: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMPLOYEE_LIST":
      return {
        ...state,
        employeeList: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_EMPLOYEE_SORT_BY":
      return {
        ...state,
        employeeSortBy: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
