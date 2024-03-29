import { useState } from "react";
import "./App.css";
import useFetch from "./components/hooks/useFetch";
import Search from "./components/Search";
interface tgbank {
  error: string
}
function App() {
  const [name, setName] = useState("new haven");
  const [value, setValue] = useState("");
  const { data, isLoading, error, fetchData } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8566a60fd624223d180b1431fe1aa1cb`
  );
  
  function handleSubmit() {
    fetchData(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=8566a60fd624223d180b1431fe1aa1cb`
    );
  }
  return (
    <div className="App">
         <div style={{padding:"20px", color: "red"}}><h5>{error && error}</h5></div>
      <div>
        <Search
          data={data}
          Value={value}
          handleSubmit={handleSubmit}
          setValue={setValue}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
