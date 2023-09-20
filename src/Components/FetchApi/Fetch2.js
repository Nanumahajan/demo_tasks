import React, { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/users";

const Fetch2 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>

          {data?.map((element) => {
            const { street, city, zipcode } = element.address;
            // console.log(element.address)
            console.log(element);
            return (
              <>
                <tr>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>
                    {street}
                    {city}
                    {zipcode}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Fetch2;
