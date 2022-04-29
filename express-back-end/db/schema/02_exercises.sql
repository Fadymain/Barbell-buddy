DROP TABLE IF EXISTS exercises CASCADE;
CREATE TABLE exercises (
    id SERIAL PRIMARY KEY NOT NULL,
    type VARCHAR (225) NOT NULL,
    description TEXT,
    active_exercise BOOLEAN DEFAULT TRUE
);
