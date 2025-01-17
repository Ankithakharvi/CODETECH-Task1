<!DOCTYPE>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather Project</title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="card">
      <div class="search">
        <input
          type="text"
          id="city-input"
          placeholder="Enter City Name"
          spellcheck="false"
        />
        <button id="search-button">
          <img src="images/search.png" alt="Search" />
        </button>
      </div>
      <div class="weather" id="weather-data" style="display: none">
        <img
          src="images/placeholder.png"
          class="weather-icon"
          alt="Weather Icon"
        />
        <h1 class="temp">--<sup>°C</sup></h1>
        <h2 class="city">Loading...</h2>
        <div class="details">
          <div class="col">
            <img src="images/humidity.png" />
            <div>
              <p class="humidity">--%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div class="col">
            <img src="images/wind.png" />
            <div>
              <p class="wind">-- Kmph</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
      <div id="error-message" style="display: none">Invalid place</div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
