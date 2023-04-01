const initTimeline = {
  fakultas: [],
  prodi: [],
  mataKuliah: [],
};

export const berandaMahasiswaReducer = (state = initTimeline, action) => {
  if (action.type === 'SET_FAKULTAS') {
    return {
      ...state,
      fakultas: action.value,
    };
  }

  if (action.type === 'SET_PRODI') {
    return {
      ...state,
      prodi: action.value,
    };
  }
  if (action.type === 'SET_MATAKULIAH') {
    return {
      ...state,
      mataKuliah: action.value,
    };
  }

  return state;
};
