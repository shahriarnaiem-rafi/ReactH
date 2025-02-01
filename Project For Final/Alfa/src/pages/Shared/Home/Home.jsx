import React from "react";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <div class="hero  min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/xSHHq43t/View.jpg"
            class=" rounded-lg shadow-2xl"
          />
          <div 
           style={{
            backgroundImage: 'url("https://i.ibb.co.com/SzGFCHt/Banner.jpg")', // Replace with your image URL
          }}
          >
            <h1 class="text-5xl font-bold">About</h1>
            <p class="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p class="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p class="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/xSHHq43t/View.jpg"
            class=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">About</h1>
            <p class="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p class="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p class="py-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
