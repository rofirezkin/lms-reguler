const initPemberitahuan = {
  pemberitahuan: [
    {
      id: 1,
      title: 'Perkuliahan Akan dimulai',
      datetime: '12/12/2022 12:00',
      deskripsi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
    },
    {
      id: 2,
      title: 'Ada Quiz yang harus di lihat',
      datetime: '12/12/2022 12:00',
      deskripsi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
    },
    {
      id: 3,
      title: 'Ada Tugas yang harus di lihat',
      datetime: '12/12/2022 12:00',
      deskripsi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi est, dapibus in orci porta, iaculis sagittis libero. In lobortis elit in egestas',
    },
  ],
};

export const pemberitahuanReducer = (state = initPemberitahuan, action) => {
  if (action.type === 'SET_CONTENT') {
    return {
      ...state,
      pemberitahuan: action.value,
    };
  }

  return state;
};
