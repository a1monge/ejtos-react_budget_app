import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > 20000) {
            setError('Budget cannot exceed 20,000');
        } else if (value < 960) {
            setError('Budget cannot be lower than money spent');
        } else {
            setError('');
            setNewBudget(value);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{newBudget}</span>
            <div className="currency">
                <span>{currency}</span>
                <input 
                    type="number" 
                    step="10" 
                    value={newBudget} 
                    onChange={handleBudgetChange}
                    style={{ marginLeft: '0.5rem' }}
                />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Budget;
