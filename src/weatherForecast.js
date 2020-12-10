const request = require('request');
const cheerio = require('cheerio');

export const formatWeather = ($) => {
  const data = {
    rain: [],
    snowFall: [],
    highTemp: [],
    lowTemp: [],
    freezingLevel: [],
    wind: []
  }
  $('.forecast__table-rain > td > span.forecast__table-value').each((i, el) => {
    data.rain[i] = ($(el).find('span').text()) 
  })
  $('.forecast__table-snow > td > span.forecast__table-value').each((i, el) => {
    data.snowFall[i] = ($(el).find('span').text()) 
  })
  $('.forecast__table-max-temperature > td > span.forecast__table-value').each((i, el) => {
    data.highTemp[i] = ($(el).find('span').text())
  })
  $('.forecast__table-min-temperature > td > span.forecast__table-value').each((i, el) => {
    data.lowTemp[i] = ($(el).find('span').text()) 
  })
  $('.forecast__table-freezing-level > td').each((i, el) => {
    data.freezingLevel[i] = ($(el).find('span').text()) 
  })
  $('.forecast__table-wind > td > div > div.windcell').each((i, el) => {
    data.wind[i] = ($(el).find('span').text()) 
  })
  return data;
}

export const getWeatherForecast = async (callback) => {
  const response = await fetch(
    'https://cors-anywhere.herokuapp.com/https://www.mountain-forecast.com/peaks/Yak-Peak/forecasts/2039'
  );
  const text = await response.text()
  const $ = cheerio.load(text);
  const data = callback($)
  return data
}


