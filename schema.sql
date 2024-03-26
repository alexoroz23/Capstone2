-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255) -- Store hashed passwords securely
);

-- Create the favorites table
CREATE TABLE IF NOT EXISTS favorites (
    user_id INTEGER REFERENCES users(id),
    topmovie_id INTEGER REFERENCES topmovies(id),
    PRIMARY KEY (user_id, topmovie_id)
);

-- Create the search_history table
CREATE TABLE IF NOT EXISTS search_history (
    user_id INTEGER REFERENCES users(id),
    query VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
