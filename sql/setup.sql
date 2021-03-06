DROP TABLE IF EXISTS jokes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    user_email TEXT NOT NULL
);

CREATE TABLE jokes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    joke_id INT NOT NULL,
    setup TEXT NOT NULL,
    punchline TEXT NOT NULL,
    joke_type TEXT NOT NULL,
    linked_user INT REFERENCES users(id) ON DELETE SET NULL
);
