import React from 'react'

const PlateListItem = (props) => {

  console.log("props", props);
  return (
    <li>{props.weight} weight {props.qty} quantity </li>
  )
}

export default PlateListItem;