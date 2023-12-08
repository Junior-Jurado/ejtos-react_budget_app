import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);
        setNewBudget(value);
    };

    useEffect(() => {
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            setNewBudget(budget); // Restaura el valor del presupuesto al valor actual
        } else if (newBudget > 20000) {
            alert("Exceeded the limit of £20,000. Please enter a value within the range.");
            setNewBudget(budget); // Restaura el valor del presupuesto al valor actual
        } else {
            dispatch({ type: 'SET_BUDGET', payload: parseFloat(newBudget) });
        }
    }, [newBudget, dispatch, budget, totalExpenses]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Location}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                min={0}
                max={20000}
            />
        </div>
    );
};

export default Budget;
