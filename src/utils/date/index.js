export const getChatTime = date => {
  const hour = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const getUidTime = oldDate => {
  const year = oldDate.getUTCFullYear();
  const month = ('0' + (oldDate.getMonth() + 1)).slice(-2);
  const date = ('0' + oldDate.getDate()).slice(-2);
  const hour = ('0' + oldDate.getHours()).slice(-2);
  const minutes = ('0' + oldDate.getMinutes()).slice(-2);
  const second = ('0' + oldDate.getSeconds()).slice(-2);
  return `${year}${month}${date}${hour}${minutes}${second}`;
};

export const setDateChat = oldDate => {
  const year = oldDate.getUTCFullYear();
  const month = ('0' + (oldDate.getMonth() + 1)).slice(-2);
  const date = ('0' + oldDate.getDate()).slice(-2);
  return `${year}-${month}-${date}`;
};

export const setDateFormatDDDMMMYYY = oldDate => {
  const year = oldDate.getUTCFullYear();
  const month = ('0' + (oldDate.getMonth() + 1)).slice(-2);
  const date = ('0' + oldDate.getDate()).slice(-2);
  return `${date}-${month}-${year}`;
};

export const setDateSlash = oldDate => {
  const year = oldDate.getUTCFullYear();
  const month = ('0' + (oldDate.getMonth() + 1)).slice(-2);
  const date = ('0' + oldDate.getDate()).slice(-2);
  return `${year}/${month}/${date}`;
};
export const getDelay = oldDate => {
  const second = ('0' + oldDate.getSeconds()).slice(-2);
  const miliscnd = ('0' + oldDate.getMilliseconds()).slice(-2);
  return `${second}: ${miliscnd}`;
};

export const getDayName = oldDate => {
  const month = oldDate.getMonth();
  const day = oldDate.getDay();
  const date = oldDate.getDate();
  let monthsArray = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  let daysArray = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  return `${daysArray[day]}, ${date} ${monthsArray[month]}`;
};
