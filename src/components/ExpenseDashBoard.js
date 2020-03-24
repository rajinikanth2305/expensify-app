import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from "./ExpenseListItem"
import ExpenseListFilters from "./ExpenseListFilter"
import ViewTotalExpenses from './ExpensesSummary'
const ExpenseDashboardPage = () => (
  <div>
    <ViewTotalExpenses />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
