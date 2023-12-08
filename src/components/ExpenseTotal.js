import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, dispatch, Location } = useContext(AppContext);

    // Cálculo del total de gastos
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    useEffect(() => {
        dispatch({ type: 'SET_EXPENSE', payload: parseFloat(totalExpenses) });
    }, [expenses, dispatch, totalExpenses]);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
