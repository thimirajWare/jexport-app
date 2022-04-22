import React from "react";
import Product from './Product'


const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/IMG-20220211-WA0021.jpg" class="d-block w-100" alt="..." height="500px" />
          </div>
          <div class="carousel-item">
            <img src="./images/Cloves.jpg" class="d-block w-100" alt="..." height="500px" />
          </div>
          <div class="carousel-item">
            <img src="./images/IMG-20220211-WA0023.jpg" class="d-block w-100" alt="..." height="500px"  />
          </div>
          <div class="carousel-item">
            <img src="./images/IMG-20220211-WA0024.jpg" class="d-block w-100" alt="..." height="500px"  />
          </div>
          <div class="carousel-item">
            <img src="./images/IMG-20220211-WA0025.jpg" class="d-block w-100" alt="..." height="500px"  />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </div>
  
  );
};

export default Home;
