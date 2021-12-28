import React, { ChangeEventHandler, useState } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Country from "./Country";
import CapitalWeather from "./CapitalWeather";
import { useNavigate } from "react-router-dom";

const objCountry = {
  name: "",
  capital: "",
  population: 0,
  lat: 0,
  lng: 0,
  flag: "",
};

const objCapital = {
  temperature: 0,
  weather_icon: "",
  wind_speed: 0,
  precip: 0,
};

const AppWrapper: React.FC<AppWrapperProps> = ({ setShowLoading }) => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [country, setCountry] = useState<string>("");
  const [countryData, setCountryData] = useState<typeof objCountry>(objCountry);
  const [capitalWeather, setCapitalWeather] =
    useState<typeof objCapital>(objCapital);
  function getCountryDetails(): void {
    setShowLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((json) => {
        json.map((data: any, key: any) => {
          setCountryData({
            name: data.name.common,
            capital: data.capital,
            population: data.population,
            lat: data.latlng[0],
            lng: data.latlng[1],
            flag: data.flags["png"],
          });
        });
        setShowLoading(false);
        navigate("/country");
      })
      .catch((error) => {
        alert("Write full country name.");
        setShowLoading(false);
      });
  }
  function getCapitalDetails(): void {
    setShowLoading(true);
    const capital_name = countryData["capital"];
    fetch(
      `http://api.weatherstack.com/current?access_key=c63901e6269dcb53df1b52bcf39d5474&query=${capital_name}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCapitalWeather({
          temperature: json.current.temperature,
          weather_icon: json.current.weather_icons[0],
          wind_speed: json.current.wind_speed,
          precip: json.current.precip,
        });
        setShowLoading(false);
        navigate("/capital-weather");
      });
  }
  const textChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
    if (e.target.value) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Homepage
          btnDisabled={btnDisabled}
          textChanged={textChanged}
          country={country}
          getCountryDetails={getCountryDetails}
        />
      ),
    },
    {
      path: "/country",
      element: (
        <Country
          countryData={countryData}
          getCapitalDetails={getCapitalDetails}
        />
      ),
    },
    {
      path: "/capital-weather",
      element: <CapitalWeather capitalWeather={capitalWeather} />,
    },
  ]);
  return routes;
};

const App: React.FC = () => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  return (
    <div className="App">
      <Router>
        {/* {showLoading ? (
          <h1> Loading </h1>
        ) : (
          
        )} */}
        <AppWrapper setShowLoading={setShowLoading} />
      </Router>
    </div>
  );
};
export interface HompageProps {
  btnDisabled: boolean;
  textChanged: ChangeEventHandler;
  country: string;
  getCountryDetails: Function;
}

export interface AppWrapperProps {
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CountryProps {
  countryData: typeof objCountry;
  getCapitalDetails: Function;
}

export interface CapitalWeatherProps {
  capitalWeather: typeof objCapital;
}

export default App;
