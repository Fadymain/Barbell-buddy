DROP TABLE IF EXISTS workouts CASCADE;
CREATE TABLE workouts (
    id SERIAL PRIMARY KEY NOT NULL,
    users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    day_at DATE NOT NULL Default Now(),
    exercises_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE,
    active_workout BOOLEAN DEFAULT TRUE
);
