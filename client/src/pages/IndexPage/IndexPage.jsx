import { useEffect, useState } from "react";
import PhoneListContainer from "../../components/PhoneListContainer/PhoneListContainer";
import getAllPhones from "../../services/phones.service";

const IndexPage = () => {
  const [phonesData, setPhonesData] = useState();

  useEffect(() => {
    getAllPhones()
      .then((response) => setPhonesData(response.data.phones))
      .catch((err) => console.log(err));
  }, []);

  return <PhoneListContainer phonesData={phonesData} />;
};

export default IndexPage;
