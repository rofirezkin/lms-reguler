const initAllTimeline = {
  allTimeline: [
    {
      id: 0,
      title: 'Pengumpulan Quiz 01',
      time: '20:00',
      date: 'jumat, 25 Maret',
      mataKuliah: 'Data Sains I',
      type: 'quiz',
    },
    {
      id: 1,
      title: 'Pengumpulan Tugas 01',
      time: '20:00',
      date: 'jumat, 25 Maret',
      mataKuliah: 'Kewarganegaraan I',
      type: 'tugas',
    },
    {
      id: 0,
      title: 'Pengumpulan Quiz Pemograman 02',
      date: 'jumat, 25 Maret',
      time: '20:00',
      mataKuliah: 'Teknik Digital',
    },
    {
      id: 1,
      title: 'Pengumpulan Tugas Big Data 01',
      date: 'jumat, 25 Maret',
      time: '20:00',
      mataKuliah: 'Kewirausahaan',
    },
    {
      id: 0,
      title: 'Pengumpulan Quiz Data Sains 01',
      date: 'jumat, 25 Maret',
      time: '20:00',
      mataKuliah: 'Javascript Dasar',
    },
  ],
};

export const allTimelineReducer = (state = initAllTimeline, action) => {
  if (action.type === 'SET_ALL_TIMELINE') {
    return {
      ...state,
      allTimeline: action.value,
    };
  }

  return state;
};
