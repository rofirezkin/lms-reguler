const initTimeline = {
  course: [
    {
      id: 1,
      namaMatakuliah: 'Bahasa Inggris',
      namaDosen: 'Rizki Tirta',
      kodeDosen: 313452353,
    },
    {
      id: 2,
      namaMatakuliah: 'Pemograman Multimedia',
      namaDosen: 'Datya Rukyat',
      kodeDosen: 313452353,
    },
    {
      id: 3,
      namaMatakuliah: 'Sastra Indonesia',
      namaDosen: 'Sidiq jaria',
      kodeDosen: 37452353,
    },
    {
      id: 4,
      namaMatakuliah: 'Data Sains',
      namaDosen: 'Sinta Rosita',
      kodeDosen: 3134453,
    },
  ],
  items: [
    {
      id: 1,
      title: 'Tugas 01 Nama Mata Kuliah yang Diajarkan',
      aksesTerakhir: '30 menit yang lalu',
    },
    {
      id: 2,
      title: 'Quiz 02 Nama Mata Kuliah yang Diajarkan',
      aksesTerakhir: '10 menit yang lalu',
    },
    {
      id: 3,
      title: 'Tugas 05 Nama Mata Kuliah yang Diajarkan',
      aksesTerakhir: '10 menit yang lalu',
    },
    {
      id: 4,
      title: 'Tugas 07 Nama Mata Kuliah yang Diajarkan',
      aksesTerakhir: '30 menit yang lalu',
    },
  ],
  gambaranKursus: [
    {
      id: 1,
      namaMataKuliah: 'Bengkel Pemograman',
      semester: 'Genap',
      progress: 20,
      tahun: '2022',
    },
    {
      id: 2,
      namaMataKuliah: 'B. Indonesia',
      semester: 'Genap',
      progress: 30,
      tahun: '2022',
    },
  ],
  timeline: [
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
  ],
};

export const dasborReducer = (state = initTimeline, action) => {
  if (action.type === 'SET_COURSE') {
    return {
      ...state,
      course: action.value,
    };
  }

  if (action.type === 'SET_ITEM') {
    return {
      ...state,
      items: action.value,
    };
  }
  if (action.type === 'SET_GAMBARAN_KURSUS') {
    return {
      ...state,
      gambaranKursus: action.value,
    };
  }

  return state;
};
