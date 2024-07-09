# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Weather Dashboard

A Weather Dashboard application that provides current weather information and forecasts for different cities. This project uses React for the frontend, Material-UI for styling, and a weather API to fetch weather data.

## Features

- View current weather information for selected cities.
- Get a 7-day weather forecast for selected cities.
- Search for weather information by city name.
- Responsive design with Material-UI components.

## Technologies Used

- React
- Material-UI
- Weather API (OpenWeatherMap API)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from [OpenWeatherMap](https://openweathermap.org/api).

### Usage

- Open your browser and navigate to `http://localhost:5173/`.
- Use the search bar to enter a city name and get the current weather and forecast information.

## Components

- **CitySearch**: A component for searching and selecting cities.
- **CurrentWeather**: A component for displaying the current weather information.
- **Forecast**: A component for displaying the 7-day weather forecast.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/api) for providing the weather data API.
- [Material-UI](https://material-ui.com/) for the UI components.
