import { useState, useEffect } from "react";

const useFetch = (url) => {
  /*THIS IS THE COMPONENT */

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const [data, setData] = useState(null);
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch the data!!");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  // return data and isLoading as an object using object destructuring!;

  //   return {
  //     firstName,
  //     lastName
  // };

  //   let names = getNames();

  // let firstName = names.firstName,
  //     lastName = names.lastName;

  return { data, isLoading };
}; /*THIS IS WHERE COMPONENT ENDS */

export default useFetch;
