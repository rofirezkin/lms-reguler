const initGlobalState = {
  isError: false,
  message: 'Error',
  isLoading: false,
  loadingSkeleton: true,
  loadingSplash: false,
};

export const loadingReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.messsage,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === 'SET_LOADING_SKELETON') {
    return {
      ...state,
      loadingSkeleton: action.value,
    };
  }
  if (action.type === 'SET_LOADING_SPLASH') {
    return {
      ...state,
      loadingSplash: action.value,
    };
  }
  return state;
};
