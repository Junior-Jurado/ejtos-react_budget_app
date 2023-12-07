import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [exceedError, setExceedError] = useState(false); // Estado para manejar el error

    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);

        if (value < 0) {
            value = 0;
        } else if (value > 20000) {
            setExceedError(true); // Establece el error si el valor excede 20000
        } else {
            setExceedError(false); // Restablece el estado del error
        }

        setNewBudget(value);
    };

    useEffect(() => {
        dispatch({ type: 'SET_BUDGET', payload: parseFloat(newBudget) });
    }, [newBudget, dispatch]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                min={0}
                max={20000}
            />
            {exceedError && (
                <p style={{ color: 'red' }}>
                    Exceeded the limit of £20,000. Please enter a value within the range.
                </p>
            )}
        </div>
    );
};

export default Budget;
