DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS alerts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    photo VARCHAR(1000)
);

CREATE TABLE alerts (
    id SERIAL PRIMARY KEY NOT NULL,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    due_date DATE NOT NULL,
    alert_time TIMESTAMP NOT NULL,
    SMS BOOLEAN DEFAULT FALSE,
    email BOOLEAN DEFAULT FALSE,
    calendar BOOLEAN DEFAULT FALSE
);