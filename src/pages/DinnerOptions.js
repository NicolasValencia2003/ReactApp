import React, { useState } from 'react';
import './DinnerOptions.css';
import { Link } from 'react-router-dom';

const options = [
  {
    name: 'Grilled Salmon with Roasted Vegetables',
    ingredients: ['salmon', 'vegetables'],
    calories: 400,
    preparation: 'Season salmon fillets with salt, pepper, and olive oil, then grill until cooked through. Roast vegetables (such as asparagus, broccoli, or Brussels sprouts) in the oven with olive oil, salt, and pepper until tender.',
  },
  {
    name: 'Spaghetti with Meat Sauce',
    ingredients: ['spaghetti', 'ground beef', 'tomato sauce'],
    calories: 500,
    preparation: 'Cook spaghetti according to package instructions. Brown ground beef in a large pan over medium heat. Add tomato sauce and simmer for 10 minutes. Serve meat sauce over cooked spaghetti.',
  },
  {
    name: 'Stir Fry with Tofu and Vegetables',
    ingredients: ['tofu', 'vegetables', 'soy sauce'],
    calories: 350,
    preparation: 'Cut tofu into cubes and sauté in a large pan with olive oil over medium-high heat until browned. Add chopped vegetables (such as bell peppers, broccoli, and carrots) and continue to sauté until vegetables are tender. Season with soy sauce to taste.',
  },
];

const DinnerOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dinner-options-container">
      <h2>Dinner Options</h2>
      <Link to='/nutrition'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
      <label htmlFor="dinner-options-select">Choose an option:</label>
      <select id="dinner-options-select" onChange={handleOptionChange}>
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

export default DinnerOptions;
