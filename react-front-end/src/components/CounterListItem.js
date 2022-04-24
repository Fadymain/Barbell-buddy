import React from 'react'

const CounterListItem = (props) => {

  return (
    <li>Set {props.index} - {props.rep} Reps @ {props.weight} lbs </li>
  )
}

export default CounterListItem;