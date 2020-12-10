import { getWeatherStationData } from '../js/api'
import { 
  getSnow24hrs, 
  getSnow48hrs, 
  getWindData, 
} from '../utils'
import { getWeatherForecast, formatWeather } from '../weatherForecast'

const template = document.createElement('template')
template.innerHTML = `
<button></button>
`
export default class CustomButton extends HTMLElement {

    connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    const button = this.shadowRoot.querySelector("button")
    button.innerText = this.getAttribute('name')
    button.addEventListener("click", this.handleClick)
  }

  handleClick() {
    getWeatherForecast(formatWeather).then((data) => {
      const sliceData = data.snowFall.slice(0, 4)
      console.log(Number(sliceDatac))
    });
      

    

    getWeatherStationData(17).then((stationData) => {
      // console.log(stationData)
      const lastDaySnow = getSnow24hrs(stationData);
      console.log(lastDaySnow)
      const lastDayWind = getWindData(stationData)
      // console.log(lastDayWind)
      const lastTwoDaysSnow = getSnow48hrs(stationData)
      // console.log(lastTwoDaysSnow)
      const snowPack = stationData[0].snowHeight;
      // console.log(snowPack)

      const list = document.querySelector("rating-card");
      list.setAttribute("title", lastDaySnow);
    });
  }
}

window.customElements.define('custom-button', CustomButton)