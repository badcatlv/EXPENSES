import React from 'react'
import styles from "./Banner.css"

export default function Banner(props) {
  return (
    <div>{props.date} {props.name} {props.price}</div>
  );
}
