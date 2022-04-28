//getExercisesForDay get exercises done for the day by the user 
//getExercisesForUser gets exercises selected by the user



export function getWorkoutsForUser(state, userID) {
  const userExercise = [];
  for(const userWorkouts in state.workouts) {
    if(state.workouts[userWorkouts].user_id === userID) {
      userExercise.push(state.workouts[userWorkouts].user_id);
    }
  }
  return userExercise;



}

export function getAllWorkoutsForDay(state, dayDate) {
  const completedExercise = [];
  console.log("example of state", state.workouts);
  for(const workout in state.workouts) {
    console.log("specific workout", state.workouts[workout].day_at);
    if(compareDates(state.workouts[workout].day_at,dayDate)) {
      console.log("passed workouts", state.workouts[workout]);
      completedExercise.push(state.workouts[workout]);
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

  const exerciseContents ={
    ...exerciseTypes,
    exerciseItem
  };

  return exerciseContents;
}

export function compareDates (day1, day2) {
  const newDay1 = day1.slice(0,10);
  const newDay2 = day2.slice(0,10);

  if(newDay1 === newDay2) {
    return true;
  }
  return false;

}