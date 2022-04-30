//getExercisesForDay get exercises done for the day by the user 
//getExercisesForUser gets exercises selected by the user

//getworkouts for a specific user regardless of date.

export function getWorkoutsForUser(state, userID) {
  const userExercise = [];
  for(const userWorkouts in state.workouts) {
    if(state.workouts[userWorkouts].users_id === userID) {
      userExercise.push(state.workouts[userWorkouts].users_id);
    }
  }
  return userExercise;



}

// get workouts for specific date and user id
export function getAllWorkoutsForDay(state, dayDate, userID = 1) {
  const completedExercise = [];
  
  for(const workout in state.workouts) {
    
    if(compareDates(state.workouts[workout].day_at,dayDate) && (state.workouts[workout].users_id === userID)) {
      
      completedExercise.push(state.workouts[workout]);
    }
  }
  return completedExercise;
}

export function getAllExerciseTypes(state,exerciseTypes) {
  
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

export function getTypeExercise(state, workoutD) {
  
  const exerciseID = workoutD.exercises_id;
  const exerciseCollection = state.exercises;
  
  const exerciseItem = exerciseCollection[exerciseID - 1];
  const exerciseResult = exerciseItem.type;

  return exerciseResult;
}

export function compareDates (day1, day2) {
  const newDay1 = day1.slice(0,10);
  const newDay2 = day2.slice(0,10);

  if(newDay1 === newDay2) {
    return true;
  }
  return false;

}


// getUniqueExercise unique exercises in db

export function getUniqueExercise (state) {
  const exerciseList = [];
  const objectExerciseList = [];
  for(const elm in state.exercises) {
    if (!exerciseList.includes(state.exercises[elm].type)) {
      exerciseList.push(state.exercises[elm].type);
      objectExerciseList.push(state.exercises[elm]);
    }
  }
  console.log("uniqueExercises",objectExerciseList);
  return objectExerciseList;
}