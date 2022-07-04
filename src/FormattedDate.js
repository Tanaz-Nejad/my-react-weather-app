import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);

  let day = props.date.getDay();

  return <div>{day}</div>;
}
