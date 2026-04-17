import { useState } from "react";

const App = () => {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  console.log(countries[0].cities);

  const [country, setCountry] = useState("");

  return (
    <div>
      <select
        onClick={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
          console.log("capital", country);
        }}
        name={countries.name}
        id=""
      >
        {countries.map((data, index) => (
          <option value={data.cities[0]} key={index}>
            {data.name}
          </option>
        ))}
      </select>
      {/* <select name={countries[cities]} id=""></select> */}
      <select name={countries[0].name} id="">
        <option value={country}>{country}</option>
      </select>
    </div>
  );
};

export default App;
