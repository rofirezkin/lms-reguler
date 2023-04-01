const initGambaranKursus = {
  gambaranKursus: [
    {
      id: 1,
      tahun: '2022',
      semester: 'genap',
      namaMatakuliah: 'Pemograman 1',
      progress: 20,
    },
    {
      id: 2,
      tahun: '2022',
      semester: 'genap',
      namaMatakuliah: 'Data Sains 1',
      progress: 30,
    },
    {
      id: 3,
      tahun: '2022',
      semester: 'genap',
      namaMatakuliah: 'Artificial Intelligence 1',
      progress: 30,
    },
    {
      id: 4,
      tahun: '2022',
      semester: 'genap',
      namaMatakuliah: 'Javascript Basic',
      progress: 60,
    },
    {
      id: 5,
      tahun: '2022',
      semester: 'genap',
      namaMatakuliah: 'Backend Developer',
      progress: 60,
    },
  ],
};

export const gambaranKursusReducer = (state = initGambaranKursus, action) => {
  if (action.type === 'SET_GAMBARAN_KURSUS_ALL') {
    return {
      ...state,
      gambaranKursus: action.value,
    };
  }

  return state;
};
