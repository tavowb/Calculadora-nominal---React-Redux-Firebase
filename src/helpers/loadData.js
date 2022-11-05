import { db } from "../firebase/config-firebase";

export const loadData = async (id) => {
  const response = await db.collection(`${id}/nominas/nomina`).get();
  const data = [];

  response.forEach((nomina) => {
    const nominaData = nomina.data();
    data.push({
      id: nomina.id,
      ...nominaData,
    });
  });

  console.log(data);

  return data;
};
