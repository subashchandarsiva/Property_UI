import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_HOMES } from "./GraphQL/Queries";
import Homes from "./Homes";
import CreateHome from "./CreateHome";

const GetHomes = () => {
  //GraphQL Query
  const { loading, error, data } = useQuery(GET_HOMES);

  const [homes, setHomes] = useState([]);

  useEffect(() => {
    if (data) {
      setHomes(data.homes);
    }
  }, [data]);

  const addedHome = (data) => {
    let homesList = [...homes];
    homesList.push(data);
    setHomes(homesList);
  };

  const updateItem = (id) => {
    console.log(id);
  };

  const deletedItem = (id) => {
    let homesList = [...homes];
    const index = homesList.findIndex((data) => id === data.id);
    homesList.splice(index, 1);
    setHomes(homesList);
  };
  return (
    <>
      <CreateHome addedHome={addedHome} />
      <h3>Listed Homes</h3>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error :(</p>
      ) : (
        <Homes
          homes={homes}
          deletedItem={deletedItem}
          updateItem={updateItem}
          setHomes={setHomes}
        />
      )}
    </>
  );
};

export default GetHomes;
