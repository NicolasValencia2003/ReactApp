import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NutritionBreakfast.css';

const options = [
  {
    name: 'Greek Yogurt with Berries and Almonds',
    ingredients: ['Greek yogurt', 'mixed berries', 'almonds'],
    calories: 250,
    preparation: 'Top Greek yogurt with mixed berries and almonds.',
  },
  {
    name: 'Avocado Toast with Egg',
    ingredients: ['whole grain bread', 'avocado', 'egg', 'salt', 'pepper'],
    calories: 300,
    preparation: 'Toast bread. Mash avocado and spread on toast. Top with a fried egg and salt and pepper to taste.',
  },
  {
    name: 'Oatmeal with Banana and Walnuts',
    ingredients: ['oats', 'banana', 'walnuts', 'cinnamon'],
    calories: 350,
    preparation: 'Cook oats according to package directions. Top with sliced banana, chopped walnuts, and a sprinkle of cinnamon.',
  },
];

const NutritionBreakfast = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="breakfast-options-container">
      <h2>Breakfast Options</h2>
      <Link to='/nutrition'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
      <label htmlFor="breakfast-options-select">Choose an option:</label>
      <select id="breakfast-options-select" onChange={handleOptionChange}>
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

export default NutritionBreakfast;
