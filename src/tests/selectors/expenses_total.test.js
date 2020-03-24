import selectExpensesTotal from "../../selectors/expense-total"
import expenses from "../fixtures/expenses"
test("should return zero if no expenses",()=>
{
    const res=selectExpensesTotal([]);
    expect(res).toBe(0);
})

test("should add up correctley with a single expense",()=>
{
    const res=selectExpensesTotal([expenses[0]])
    expect(res).toBe(800)
})

test("should add up correctley with all expenses",()=>
{
    const res=selectExpensesTotal(expenses)
    expect(res).toBe(1500)
})