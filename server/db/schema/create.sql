DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS due_dates CASCADE;
DROP TABLE IF EXISTS alerts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(13) UNIQUE NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    due_date_id INTEGER REFERENCES due_dates(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL UNIQUE,
    author VARCHAR(255) NOT NULL
);

CREATE TABLE alerts (
    id SERIAL PRIMARY KEY NOT NULL,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    notes VARCHAR(255),
    text BOOLEAN,
    email BOOLEAN,
    calendar BOOLEAN
);