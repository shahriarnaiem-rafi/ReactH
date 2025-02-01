import React from "react";

const About = ({user}) => {
  const {name,username,email,phone}=user;
  return (
    <>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">{name}</h1>
            <h1 class="text-5xl font-bold">{username}</h1>
            <h1 class="text-5xl font-bold">{email}</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
