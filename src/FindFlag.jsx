import React, { useState, useEffect } from "react";
import axios from "axios";
import "./findFlag.css";
import "./media.css";

function findFlag() {
  const [country, setCountry] = useState("");
  const [codes, setCodes] = useState({});
  const [flag, setFlag] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://flagcdn.com/en/codes.json");
      setCodes(response.data);
    }
    fetchData();
    setCountry(country.charAt().toUpperCase() + country.slice(1));
  }, [country]);

  function getFlag() {
    for (let x in codes) {
      if (codes[x] === country) {
        setFlag(x);
      }
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="findFlag">
          <input
            type="text"
            placeholder="Enter a country name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <button onClick={getFlag}>Get Flag</button>
        </div>

        <div className="result">
          {flag ? (
            <img src={`https://flagcdn.com/256x192/${flag}.png`} alt="" />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default findFlag;
