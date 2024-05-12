# Rick and Morty Fan App

## Overview

The Rick and Morty Fan App is a simple, yet engaging web application that allows users to explore various elements of the Rick and Morty universe. Inspired by the design aesthetics of the IMDB website, the app provides a clean and intuitive user interface. It features three main sections: episodes, characters, and locations, each accessible via a navigation bar.

Each section leverages the Rick and Morty API to display content, with episodes and characters using the RESTful service and the locations utilizing GraphQL.

## Features

- **Episodes Page**: A list of all episodes provided via the Rick and Morty REST API with pagination. Clicking on an episode reveals a modal with more details and the first three characters featured in that episode.
- **Characters Page**: An extensive list of characters with the ability to search by name and filter by status and gender. Instead of modals, all character details are directly accessible on the page.
- **Locations Page**: An exhaustive catalog of locations in the Rick and Morty universe. It implements GraphQL to fetch and display location data.

## Technology Stack

1. **React.js**: For building the user interface components.
2. **TailwindCSS**: For styling and implementing a responsive design.
3. **TypeScript**: To provide strong typing and enhance code quality and maintainability.
4. **Axios**: To make API requests to the Rick and Morty API.

## API Reference

This application makes use of the [Rick and Morty API](https://rickandmortyapi.com/documentation/) to fetch the data needed for each page.

## Contributors

- **Leonid Shamarin**
  
  - Front-end Developer

  - Email: [Leonideko1@gmail.com](mailto:Leonideko1@gmail.com)
  

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

