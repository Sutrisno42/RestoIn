class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `

    <style>
    .card{
      width: 280px;
      height: 360px;
      padding: 2rem 1rem;
      background: #fff;
      position: relative;
      display: flex;
      align-items: flex-end;
      box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
      transition: 0.5s ease-in-out;
    }

    .card:hover{
      transform: translateY(20px);
    }
    .card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 176, 155, 0.5),
        rgba(150, 201, 61, 1)
      );
      z-index: 2;
      transition: 0.5s all;
      opacity: 0;
    }

    .card:hover::before {
      opacity: 1;
    }
    .card img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .card .info {
      position: relative;
      z-index: 3;
      color: #fff;
      opacity: 0;
      transform: translateY(30px);
      transition: 0.5s all;
    }
    .card:hover .info {
      opacity: 1;
      transform: translateY(0px);
    }

    .card .info h1 {
      margin: 0;
    }

    .card .info p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
      margin-bottom: 20px;
    }
    .card .info .btn {
      text-decoration: none;
      padding: 0.5rem 1rem;
      background: #fff;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease-in-out;
    }
    .card .info .btn:hover {
      box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
    }
    .btn-card{
      background-color:#5F8D4E;
      color: #fff;
      height:50px;
      border-radius:20px;
      outline :none;
    }
    .btn-card:hover{
      background-color:#285430;
      color: #fff;
    }
    </style>
    <div class="col mb-3">
      <div class="card pb-3">
      <div class="card-body text-center">
      <img src="${this._meal.strMealThumb}" class="card-img" alt="..." />
      <div class="info">
      <h2>${this._meal.strMeal}</h2>
      <h4>${this._meal.strCategory}</h4> 
      <button class="btn btn-card w-60 m-auto"><span>${this._meal.strArea}</span></button>
      </div>
      </div>
      </div>
    </div>
      `;
  }
}

customElements.define("meal-item", MealItem);
