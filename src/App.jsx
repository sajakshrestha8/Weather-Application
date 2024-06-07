import { useEffect, useState } from "react";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.meteosource.com/api/v1/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key=46shk2vcsseeb1dovukfi0hdirjf89slcuz0hsj4"
    );
  }, []);

  return <>Helllo World</>;
}
