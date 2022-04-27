import React from 'react'

const PlateListItem = (props) => {

  console.log("props", props);
  return (
    <div>{props.weight} lbs plate x {props.qty}</div>
  )
}

export default PlateListItem;