import { useEffect, useState } from "react";
//custom hook design
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]); //[] this is dependency array which is used to call back when data of currency is
  console.log(data);
  return data;
}

export default useCurrencyInfo; //this is for returning whole function
