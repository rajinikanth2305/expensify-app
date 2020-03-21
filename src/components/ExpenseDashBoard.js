import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from "./ExpenseListItem"
import ExpenseListFilters from "./ExpenseListFilter"

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
