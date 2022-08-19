import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from 'react-icons/io';
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from 'react-icons/bs';

import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';

const APIkey = '200905de7c747b8357845382b172ca68';

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Danmark');

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);

  //Loader if the data is not fetching or false
  if (!data) {
    return (
      <div>
        {' '}
        <ImSpinner8 className="text-5xl animate-spin" />
      </div>
    );
  }

  //icons setting accroding to the ewathers

  let icon;
  console.log(data.weather[0].main);

  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy />;
      break;
    case 'Clear':
      icon = <IoMdSunny />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill />;
      break;
    case 'Snow':
      icon = <IoMdSnow />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }

  return <div className="flex justify-center ...">{icon}</div>;
};

export default App;
