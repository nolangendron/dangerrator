const template = document.createElement('template')
template.innerHTML = `
<style>
  .rating-card {
    width: 25%;
    border: 1px solid black;
    border-bottom: 0;
    padding: 1em;
    text-align: center;
    list-style-type: none;
  }
  h3 {
    color: coral;
  }
</style>
<li class="rating-card">
  <h3></h3>
</li>
`
export default class RatingCard extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }
  
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h3').innerText = 
    this.getAttribute('title')

  }

  attributeChangedCallback(title, oldValue, newValue) {
    if (oldValue === newValue) {
     return;
   }
      
    // console.log(`The attribute ${newValue} has changed`);
  }
}

window.customElements.define('rating-card', RatingCard)

