const initMataKuliah = {
  content: {
    statusProgres: 20,
    namaMatakuliah: 'bengkel Pemograman',
    identitasKuliah:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
    sejarahKuliah:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
    materiKuliah: [
      {
        judulMateri: 'P1 - Bengkel Pemograman',
        deskripsi:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
        statusForum: true,
        statusMateri: true,
        linkMateri: 'https://djkfdklasdkad',
        statusMateriPerkuliahan: false,
        statusVideoPembelajaran: true,
        linkVideoPembelajaran: 'https://safjkdfjkf',
        statusQuiz: true,
        statusTugas: true,
      },
      {
        judulMateri: 'P2 - Data Sains',
        deskripsi:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
        statusForum: true,
        statusMateri: true,
        linkMateri: 'https://djkfdklasdkad',
        statusMateriPerkuliahan: false,
        statusVideoPembelajaran: true,
        linkVideoPembelajaran: 'https://safjkdfjkf',
        statusQuiz: true,
        statusTugas: true,
      },
      {
        judulMateri: 'P3 - Big Data',
        deskripsi:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
        statusForum: true,
        statusMateri: true,
        linkMateri: 'https://djkfdklasdkad',
        statusMateriPerkuliahan: false,
        statusVideoPembelajaran: true,
        linkVideoPembelajaran: 'https://safjkdfjkf',
        statusQuiz: true,
        statusTugas: true,
      },
      {
        judulMateri: 'P4 - Mechine Learning I',
        deskripsi:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
        statusForum: true,
        statusMateri: true,
        linkMateri: 'https://djkfdklasdkad',
        statusMateriPerkuliahan: false,
        statusVideoPembelajaran: true,
        linkVideoPembelajaran: 'https://safjkdfjkf',
        statusQuiz: true,
        statusTugas: true,
      },
      {
        judulMateri: 'P5 - Algoritma Pemograman',
        deskripsi:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
        statusForum: true,
        statusMateri: true,
        linkMateri: 'https://djkfdklasdkad',
        statusMateriPerkuliahan: false,
        statusVideoPembelajaran: true,
        linkVideoPembelajaran: 'https://safjkdfjkf',
        statusQuiz: true,
        statusTugas: true,
      },
    ],
  },
};

export const mataKuliahReducer = (state = initMataKuliah, action) => {
  if (action.type === 'SET_CONTENT') {
    return {
      ...state,
      content: action.value,
    };
  }

  return state;
};
