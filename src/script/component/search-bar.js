import btnSearch from "../../img/search.svg";

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchBox").value;
  }

  render() {
    this.innerHTML = `

    <style>
    input{
      position :relative;
      min-width: 400px;
      height: 55px;
      padding : 20px;
      margin-top: 10px;
      background-color: #ffffff;
      border: 2px solid #1B2E35 ;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 46, 109, 0.15);
      border-radius: 20px;
      
    }
    .btn-form{
      position:absolute;
      margin-left: -65px;
      margin-top :17px;
    }
    </style>
    <div class="search-box container d-flex text-align-center">
    <form class="search-box form ">
      <input id="searchBox" class="form-search" type="text" placeholder="Search" aria-label="cari..">
      <button id="searchButton" class="btn btn-form" type="button"><img src="${btnSearch}" alt="" /></button>
    </form>
    </div>
      `;
    this.querySelector("#searchButton").addEventListener(
      "click",
      this._clickEvent
    );
  }
}
customElements.define("search-bar", SearchBar);
