import React from 'react'
import ExpenseItems from './ExpenseItems';

export default function ExpenseList(props) {
  return (
    <ul>
    { props.expense.map(expense => <ExpenseItems date={expense.date} name={expense.name} prices={expense.prices} />) }
    </ul>
  );
}
