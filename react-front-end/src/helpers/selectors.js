//getExercisesForDay get exercises done for the day by the user 
//getExercisesForUser gets exercises selected by the user



export function getWorkoutsForUser(state, userID) {
  const userExercise = [];
  for(const userWorkouts in state.workouts) {
    if(userWorkouts.user_id === userID) {
      userExercise[...userWorkouts]
    }
  }
  return userExercise;



}

export function getAllWorkoutsForDay(state, dayDate) {
  const completedExercise = [];
  for(const workout in state.workouts) {
    if(workout.date_at === dayDate) {
      completedExercise[...workout]
    }
  }
  return completedExercise;
}

export function getAllExerciseTypes(state,exerciseTypes) {
  /*
  const exercises = [];

  for(const exerciseInfo in state.exercises) {
    if(exerciseInfo.id === dayDate) {
      exercises[...workout]
    }
  }
  return exercises;
*/
  if (!exerciseTypes) {
    return null;
  }

  const exerciseID = exerciseTypes.id;
  const exerciseCollection = state.exercises;
  const exerciseItem = exerciseCollection[exerciseID];

  const exerciseContents = {
    ...exerciseTypes,
    exerciseItem
  };

  return exerciseContents;
}