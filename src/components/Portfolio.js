import React from "react";

const Portfolio = () => {
  return (
    <section className="port-sect">
      <h1>Portfolio</h1>
      <div className="card w-75">
        <div className="card-body">
          <h2 className="text-dark">Productivity App</h2>
          <p className="card-text text-dark">
            Brain breaks is a productivity app built in JavaScript that rewards
            you during your breaks with memes from Reddit.
          </p>
          <a
            href="https://hudsonhancock.github.io/07-Project-Brain_Breaks/"
            className="btn btn-primary"
          >
            Deployed App
          </a>
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <h2 className="text-dark">Fundraising Page</h2>
          <p className="card-text text-dark">
            I used HTML, CSS, and JS to create a simple fundraising page for
            Feed The Hungry in Acworth, Ga. The site is fully optimized and easy
            to use.
          </p>
          <a href="https://feedthehungry.info/" className="btn btn-primary">
            Live Site
          </a>
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <h2 className="text-dark">Recruitment Website</h2>
          <p className="card-text text-dark">
            For a Wordpress client, I created an easy to update recruitment
            website. They use this site mainly as a point for potential
            employees to show interest.
          </p>
          <a href="https://excelelectrical.com/" className="btn btn-primary">
            Live Site
          </a>
        </div>
      </div>
      <div className="card w-75">
        <div className="card-body">
          <h2 className="text-dark">Weather App</h2>
          <p className="card-text text-dark">
            JavaScript weather app pulling data from OpenWeather API provides
            you accurate real-time weather information.
          </p>
          <a
            href="https://hudsonhancock.github.io/06-weather-app/"
            className="btn btn-primary"
          >
            Deployed App
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
