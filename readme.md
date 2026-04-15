# 🌤️ Weather Point

A sleek, minimalist, and responsive weather dashboard built with Vanilla JavaScript. This application fetches real-time weather data using the **OpenWeatherMap API**, providing users with instant updates on temperature, humidity, and wind speed.

<p align="center">
  <img src="output.png" width="350" alt="Weather Point Screenshot">
</p>

## 🚀 Features

* **Real-time Data:** Fetches live weather updates for any city worldwide.
* **Detailed Metrics:** Displays temperature (Celsius), humidity levels, and wind speed.
* **Error Handling:** Includes alerts for invalid city names or API key issues.
* **Clean UI:** A modern, "Glassmorphism" inspired card design.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Custom styling and layout.
* **JavaScript (ES6):** Fetch API and DOM manipulation.
* **OpenWeatherMap API:** External data source.

## 📦 Setup & Installation

Since the API key is kept private for security, you will need to set up a configuration file locally to run the project.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/apatheticdev-saad/weather-point.git](https://github.com/apatheticdev-saad/weather-point.git)
    cd weather-point
    ```

2.  **Create a configuration file:**
    In the root directory, create a file named `config.js`.

3.  **Add your API Key:**
    Inside `config.js`, add your OpenWeatherMap API key:
    ```javascript
    const config = {
        API_KEY: "YOUR_API_KEY_HERE"
    };
    ```

4.  **Launch the App:**
    Open `index.html` in your favorite browser!

## 📝 Note on Security
The `config.js` file is included in the `.gitignore` to prevent the API key from being published to GitHub. This is a best practice for protecting sensitive credentials in frontend projects. 
Maintaining steasks


---

## 👤 Author

**Saad** GitHub: [@apatheticdev-saad](https://github.com/apatheticdev-saad)