import React from 'react'
import "./ExpenseItems.css"

export default function ExpenseItems(props) {
  return (
    <li>{props.date} {props.name} {props.price}</li>
  )
}
