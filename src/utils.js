const calNewSnowLastDay = (data) => {
  let snow = data[0];
  let newSnowArray = [];
  let difference;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < snow && !undefined) {
      difference = snow - data[i];
      newSnowArray.push(difference);
    }
    snow = data[i];
  }
  let reducedArray = newSnowArray.reduce((a, b) => a + b, 0);
  return reducedArray
};

export const getSnow24hrs = (station) => {
  const newSnow = station.slice(0, 23).map((day) => {
    return day.snowHeight;
  });
  const newSnowCalc = calNewSnowLastDay(newSnow);
  return newSnowCalc;
}

export const getSnow48hrs = (station) => {
  const newSnow = station.slice(0, 47).map((day) => {
    return day.snowHeight;
  });
  const newSnowCalc = calNewSnowLastDay(newSnow);
  return newSnowCalc;
}

export const getSnow7Days = (station) => {
  const newSnow = station.slice(0, 160).map((day) => {
    return day.snowHeight;
  });
  const newSnowCalc = calNewSnowLastDay(newSnow);
  return newSnowCalc;
}

export const getWindData = (station, type) => {
  const last2days = station && station.slice(0, 23)
  const result = last2days.map((day) => {
    return type === "direction" ? day.windDirAvg : day.windSpeedAvg;
  });
  return result
}

export const getSnowForecast = (arr) => {
  if (arr) {
    const slicedArr = arr.slice(0, 4);
    return slicedArr
  }
};