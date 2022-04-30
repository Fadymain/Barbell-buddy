import React from 'react'

const PlateListItem = (props) => {

  console.log("props", props);
  return (
    <div>{props.weight} lbs plate  :  {props.qty} per side</div>
  )
}

export default PlateListItem;