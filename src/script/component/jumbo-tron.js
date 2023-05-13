import meal from "../../img/meal7.png";
import meal1 from "../../img/meal4.png";

class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute("title") || null;
    this.description = this.getAttribute("description") || null;

    this.innerHTML = `
        <div class="jumbotron">
        <div class="row justify-content-between align-items-center row-jumbotron">
            <div class="tc-container col-lg-5 col-md-5">  
                <img src="${meal}"  alt="" />
                <img src="${meal1}" class="top-img" alt="" />
            </div>
            <div class="col-lg-5 col-md-5 ">
            <h1><strong>${this.title}</strong></h1>
            <p>${this.description}</p>
            </div>
        </div>
    </div>
    <style>
    .tc-container{
        margin-top:20px;
        width:400px;
        height:400px;
        position:relative;
    }
    .tc-container img{
        width:100%;
        height:100%;
    }
    
    .top-img{
        position:absolute;
        top:0;
        left:0;
        opacity:0;
        transition: all 0.7s ease;
    }
    .top-img:hover{
        opacity:1;
    }


    h1{
        font-size: 60px;
        font-family:"Poppins";
    }
    p{
        font-size:22px;
    }

    .jumbotron{
        background:#E5D9B6;
        padding : 1rem 0 0 0 ;
        width: 100%;
    }

    @media screen and (max-width: 768px){
        .jumbotron{
            text-align :center;
        }
        .row-jumbotron{
            flex-direction: column-reverse;
        }
    }

    </style>
    `;
  }
}

customElements.define("jumbo-tron", Jumbotron);
