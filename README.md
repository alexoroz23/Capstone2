# Capstone2 Movie Recommendation App

## Description

This project is a movie recommendation app designed to help users discover new movies based on their preferences. The app utilizes data sourced from a PostgreSQL database containing information about various movies.

## Data Sourcing

### Database

The project utilizes a PostgreSQL database to store movie data. The database schema is designed based on the structure of the data obtained from The Movie Database API.

#### Schema Design

- **Tables**: Structured tables include information about movies, genres, languages, and production companies.
- **Keys**: Primary and foreign keys are defined to establish relationships between tables for efficient data retrieval.

## Project Organization

### Directory Structure

The project follows a structured directory layout within the `src` directory:

- **Components**: Contains React components used to build the user interface.
- **Services**: Includes modules for interacting with the backend server and database.
- **Pages**: Contains React components representing different pages of the application.
- **Data**: Contains data-related files, such as database schema and seed data.
- **Assets**: Stores static assets, such as images and CSS files.

### Components

The app is built using React components to create a dynamic and interactive user interface. Components are organized and reusable for efficient development and maintenance.

### Backend Server

The backend server is built using Express.js to handle requests and responses. It communicates with the PostgreSQL database to retrieve and manipulate movie data.

### Frontend

The frontend of the app is built using React.js to create a responsive and user-friendly interface. It interacts with the backend server to fetch and display movie recommendations based on user preferences.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies for both the frontend and backend using `npm install`.
3. Start the backend server using `npm start` or `npm run dev`.
4. Start the frontend development server using `npm start`.
