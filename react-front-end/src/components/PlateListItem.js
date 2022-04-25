import React from 'react'

const PlateListItem = (props) => {

  console.log("props", props);
  return (
    <li>{props.weight} lbs plate x {props.qty}</li>
  )
}

export default PlateListItem;