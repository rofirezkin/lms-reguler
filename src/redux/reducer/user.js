const initTimeline = {
  name: '',
  scope: '',
  jenis: '',
  role: '',
  email: '',
};

export const userReducer = (state = initTimeline, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      name: action.value.name,
      scope: action.value.scope,
      jenis: action.value.jenis,
      role: action.value.role,
      email: action.value.email,
    };
  }

  return state;
};
