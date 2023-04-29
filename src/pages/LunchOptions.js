import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LunchOptions.css';

const options = [
  {
    name: 'Grilled Chicken Salad',
    ingredients: ['grilled chicken', 'mixed greens', 'tomatoes', 'cucumbers', 'avocado', 'balsamic vinaigrette'],
    calories: 350,
    preparation: 'Mix all ingredients together and drizzle with balsamic vinaigrette.',
  },
  {
    name: 'Quinoa and Black Bean Salad',
    ingredients: ['quinoa', 'black beans', 'corn', 'red bell pepper', 'avocado', 'cilantro-lime dressing'],
    calories: 400,
    preparation: 'Cook quinoa according to package directions. Mix all ingredients together and drizzle with cilantro-lime dressing.',
  },
  {
    name: 'Salmon and Broccoli Bowl',
    ingredients: ['salmon', 'brown rice', 'broccoli', 'carrots', 'edamame', 'teriyaki sauce'],
    calories: 450,
    preparation: 'Cook brown rice according to package directions. Roast broccoli and carrots in the oven at 400°F for 15 minutes. Grill or bake salmon until cooked through. Assemble bowl with rice, vegetables, salmon, edamame, and drizzle with teriyaki sauce.',
  },
];

const LunchOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="lunch-options-container">
      <h2>Lunch Options</h2>
      <Link to='/nutrition'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
      <label htmlFor="lunch-options-select">Choose an option:</label>
      <select id="lunch-options-select" onChange={handleOptionChange}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div className="option-details">
          <h3>{selectedOption}</h3>
          <p>
            <span className="orange">Ingredients:</span> {options.find((option) => option.name === selectedOption).ingredients.join(', ')}
          </p>
          <p>
            <span className="orange">Calories:</span> {options.find((option) => option.name === selectedOption).calories}
          </p>
          <p>
            <span className="orange">Preparation:</span> {options.find((option) => option.name === selectedOption).preparation}
          </p>
        </div>
      )}
    </div>
  );
};

export default LunchOptions;
