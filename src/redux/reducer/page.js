const initPage = {
  activeNumber: [true],
  activePage: 0,
  number: 0,
};

export const pageReducer = (state = initPage, action) => {
  if (action.type === 'SET_ACTIVE_NUMBER') {
    return {
      ...state,
      activeNumber: action.value,
    };
  }
  if (action.type === 'SET_ACTIVE_PAGE') {
    return {
      ...state,
      activePage: action.value,
    };
  }
  if (action.type === 'SET_NUMBER') {
    return {
      ...state,
      number: action.value,
    };
  }

  return state;
};
