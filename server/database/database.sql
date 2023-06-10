CREATE TABLE person
(
    id            SERIAL PRIMARY KEY,
    username      VARCHAR(255),
    password_hash VARCHAR(255),
    first_name    VARCHAR(255),
    last_name     VARCHAR(255),
    age           INTEGER
);

CREATE TABLE project
(
    id     SERIAL PRIMARY KEY,
    title  VARCHAR(255),
    text   VARCHAR(255),
    img_url VARCHAR(255)
);