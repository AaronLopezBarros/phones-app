import { useEffect, useState } from "react";
import getAllPhones from "../../services/phones.service";

const IndexPage = () => {
  const [phonesData, setPhonesData] = useState()
    
  useEffect(() => {
    getAllPhones()
      .then((response) => setPhonesData(response.data.phones))
      .catch((err) => console.log(err));
  }, []);
  console.log(phonesData);
  return <h1>Hola</h1>;
};

export default IndexPage;
