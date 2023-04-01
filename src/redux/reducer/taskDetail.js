const initTaskDetail = {
  taskDetail: [
    {
      id: 0,
      title: 'Pengumpulan Quiz 01',
      namaMataKuliah: 'Data Sains',
      startDate: 'Jumat, 20 Oktober',
      startTime: '22:00',
      endDate: 'Sabtu, 30 Desember',
      endTime: '22:00',
      deskripsi:
        'Menurut Data Robot, data science merupakan ilmu yang menggabungkan sebuah kemahiran di bidang ilmu tertentu dengan keahlian pemrograman, matematika, dan statistik. Tujuannya adalah untuk mengekstrak sebuah pengetahuan atau informasi dari data. Biasanya, orang-orang yang mahir dalam bidang data science menggunakan algoritma machine learning atau pemelajaran mesin. Hal ini berguna dalam mengolah teks, gambar, video, audio, dan lain-lain untuk menghasilkan sistem kecerdasan buatan. Sistem kecerdasan buatan ini dapat dirancang untuk melakukan berbagai tugas yang terlalu sulit untuk kecerdasan manusia. Hasil data yang diolah sistem kecerdasan buatan akan dapat dimanfaatkan oleh analis dan pengguna dalam bisnis untuk merancang strategi yang tepat untuk menyelesaikan suatu masalah atau mencapai sebuah tujuan.',
      statusSubmit: false,
      statusPenilaian: false,
      komentar: null,
      waktuTersisa: '16 jam 25 menit 7 detik',
    },
    {
      id: 1,
      title: 'Pengumpulan Tugas 01',
      namaMataKuliah: 'Pengumpulan Tugas 01',
      startDate: 'Jumat, 20 September',
      startTime: '22:00',
      endDate: 'Sabtu, 30 September',
      endTime: '22:00',
      deskripsi:
        'Pendidikan Kewarganegaraan adalah adalah pendidikan yang mengingatkan kita akan pentingnya nilai-nilai hak dan kewajiban seorang warga negara agar setiap hal yang dikerjakan sesuai dengan tujuan dan cita-cita bangsa. Dalam Pasal 3 UU RI No. 20 Tahun 2003 tentang Sisdiknas adalah untuk berkembangnya potensi peserta didik agar menjadi manusia yang beriman dan bertaqwa kepada Tuhan Yang Maha Esa, yang berakhlak mulia, sehat, berilmu, cakap, kreatif, mandiri dan menjadi warga negara yang demokratis  dan bertanggung jawab.',
      statusSubmit: false,
      statusPenilaian: false,
      komentar: 'Cukup baik dan bisa menjelaskan dengan lancar',
      waktuTersisa: '10 jam 25 menit 7 detik',
    },
  ],
};
export const taskDetailReducer = (state = initTaskDetail, action) => {
  if (action.type === 'SET_TASK_DETAIL') {
    return {
      ...state,
      taskDetail: action.value,
    };
  }

  return state;
};
