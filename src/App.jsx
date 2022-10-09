import "./App.css";
import { useState, useEffect } from "react";
import countrydata from "./Task/countries.json";

function App() {
  const [countries, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [state, setState] = useState([]);

  useEffect(() => {
    let pp = Object.keys(countrydata);
    if (pp.length == 0) return;
    setCountry(pp);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const states = countrydata[selectedCountry];
      setState(states);
    }
  }, [selectedCountry]);

  return (
    <div className="App">
      <div className="country">
        <h2>Countries & Their States</h2>
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">Select Country</option>
          {countries &&
            countries.map((counts, ids) => (
              <option value={counts} key={ids}>
                {counts}
              </option>
            ))}
        </select>
        <select>
          <option>Select State</option>
          {state.map((counts, ids) => (
            <option key={ids}>{counts}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
