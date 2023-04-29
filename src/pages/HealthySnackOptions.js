import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HealthySnackOptions.css';

const options = [
  {
    name: 'Apple Slices with Peanut Butter',
    ingredients: ['apple', 'peanut butter'],
    calories: 200,
    preparation: 'Slice apple and serve with peanut butter for dipping.',
  },
  {
    name: 'Hummus with Carrot Sticks',
    ingredients: ['hummus', 'carrot sticks'],
    calories: 150,
    preparation: 'Serve hummus with carrot sticks for dipping.',
  },
  {
    name: 'Greek Yogurt with Honey and Almonds',
    ingredients: ['Greek yogurt', 'honey', 'almonds'],
    calories: 250,
    preparation: 'Top Greek yogurt with honey and chopped almonds.',
  },
];

const HealthySnackOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="healthy-snack-options-container">
      <h2>Healthy Snack Options</h2>
      <Link to='/nutrition'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
      <label htmlFor="healthy-snack-options-select">Choose an option:</label>
      <select id="healthy-snack-options-select" onChange={handleOptionChange}>
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

export default HealthySnackOptions;
