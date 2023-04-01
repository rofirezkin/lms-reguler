export const noMeja = () => {
  const jumlah = 20;
  const dataMeja = [];
  for (let i = 1; i < jumlah + 1; i++) {
    const data = {
      id: i,
      label: `Table No. ${i}`,
      value: `${i}`,
    };
    dataMeja.push(data);
  }
  return dataMeja;
};
