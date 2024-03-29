import React, { ReactEventHandler, SetStateAction } from "react";

interface weatherA {
  description: string;
}

interface inputProps {
  data: {
    dt: number;
    id: number;
    name: string;
    sys: {
      country: string;
    };
    weather: weatherA[];
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  };
  Value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  error: string;
}

export default function Search({
  data,
  Value,
  setValue,
  handleSubmit,
  error,
}: inputProps) {
  
  //handle inpute value change function
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const date = new Date()
  const newDate = date.toLocaleString("en-GB", {dateStyle: "long"})
  return (
    <div className="main-wrapper">
      <div style={{ backgroundColor: "green", borderRadius: "15px" }}>
        <div className="input-wraper">
          <div className="input-field-container">
            <input
              type="text"
              value={Value}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="submit-button"
          >
            Submit
          </button>
        </div>
        <div className="content-container">
          <h2 className="text-color">{data && data?.name}</h2>
          <i className="text-color">{newDate}</i>
          <h1 className="text-color" style={{ margin: 0 }}>
            {data?.main?.temp}
          </h1>
          <p style={{ margin: 0, color: "white" }}>
            {data?.weather[0]?.description}
          </p>
          <div
            className="speed-humidity"
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
            }}
          >
            <div className="wind-speed">
              <h5 className="text-color">{data?.wind?.speed}</h5>
              <h4>Wind Speed</h4>
            </div>
            <div className="humidity">
              <h5 className="text-color">{data?.main?.humidity}</h5>
              <h4>Humidity</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
