import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
      alert('Please enter valid height and weight values.');
      return;
    }

    const bmi = weightInKg / (heightInMeters ** 2);
    const result = bmi.toFixed(2);

    setBmiResult(result);

    let status = '';
    if (bmi < 18.5) {
      status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obesity';
    }

    setBmiStatus(status);
  };

  return (
    <div className="page-content bmi-container">
      
      

      <div className="bmi-calculator">
        <h1>BMI Calculator</h1>
        <div className="calculator">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <button onClick={calculateBMI}>Calculate BMI</button>

          {bmiResult && (
            <div className="result">
              <h2>Your BMI: <span>{bmiResult}</span></h2>
              <p>{bmiStatus}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bmi-table">
        <h2>BMI Table for Adults</h2>
        <p>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 20 or older.</p>

        <table>
          <thead>
            <tr>
              <th>Classification</th>
              <th>BMI range - kg/m²</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Severe Thinness</td>
              <td>&lt; 16</td>
            </tr>
            <tr>
              <td>Moderate Thinness</td>
              <td>16 - 17</td>
            </tr>
            <tr>
              <td>Mild Thinness</td>
              <td>17 - 18.5</td>
            </tr>
            <tr>
              <td>Normal</td>
              <td>18.5 - 25</td>
            </tr>
            <tr>
              <td>Overweight</td>
              <td>25 - 30</td>
            </tr>
            <tr>
              <td>Obese Class I</td>
              <td>30 - 35</td>
            </tr>
            <tr>
              <td>Obese Class II</td>
              <td>35 - 40</td>
            </tr>
            <tr>
              <td>Obese Class III</td>
              <td>&gt; 40</td>
            </tr>
          </tbody>
        </table>
      </div>
      <img id='imge' src={`${process.env.PUBLIC_URL}/images/istockphoto-1370909639-612x612.jpg`} alt="Example" />
      
      <div className="weight-loss-plan">
        <h2>Weight Loss Diet Plan Chart – (Day Wise)</h2>
        <p>You must follow a diet plan containing foods that are low in carbs and rich in fibre...</p>

        <h3>Day 1</h3>
        <ul>
          <li><strong>8:00 AM:</strong> 1 medium size apple</li>
          <li><strong>10:30 AM:</strong> Sliced muskmelon (1/2 bowl)</li>
          <li><strong>12:30 PM:</strong> Watermelon (1 bowl)</li>
          <li><strong>4:00 PM:</strong> 1 big Mosambi or Orange</li>
          <li><strong>6:30 PM:</strong> Pomegranate salad with 1 cup of muskmelon</li>
          <li><strong>8:30 PM:</strong> ½ cup watermelon</li>
        </ul>

        <h3>Day 2</h3>
        <ul>
          <li><strong>8:00 AM:</strong> Boiled potatoes (1 cup)</li>
          <li><strong>10:30 AM:</strong> Cucumber (1/2 bowl)</li>
          <li><strong>12:30 PM:</strong> Lettuce, cucumber, spinach and capsicum (1 cup each)</li>
          <li><strong>4:00 PM:</strong> Sliced carrots (1/2 cup), lemon juice (1 glass) with a pinch of salt</li>
          <li><strong>6:30 PM:</strong> Boiled broccoli (1 cup) and green peas</li>
          <li><strong>8:30 PM:</strong> 1 cucumber</li>
        </ul>

        <h3>Day 3</h3>
        <ul>
          <li><strong>8:00 AM:</strong> Muskmelon (1/2 bowl)</li>
          <li><strong>10:30 AM:</strong> Pineapple or pear (1 cup)</li>
          <li><strong>12:30 PM:</strong> Lettuce, cucumber, spinach and capsicum (1 cup each)</li>
          <li><strong>4:00 PM:</strong> Sliced carrots (1/2 cup), lemon juice (1 glass) with a pinch of salt</li>
          <li><strong>6:30 PM:</strong> Boiled broccoli (1 cup) and green peas</li>
          <li><strong>8:30 PM:</strong> 1 cucumber</li>
        </ul>

        <h3>Day 4</h3>
        <ul>
          <li><strong>8:00 AM:</strong> 2 bananas</li>
          <li><strong>10:30 AM:</strong> 1 banana</li>
          <li><strong>12:30 PM:</strong> Milkshake containing 2 bananas, a dash of cocoa powder, and a glass of milk</li>
          <li><strong>4:00 PM:</strong> 2 bananas</li>
          <li><strong>6:30 PM:</strong> 1 banana and 1 glass of milk</li>
          <li><strong>8:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 5</h3>
        <ul>
          <li><strong>8:00 AM:</strong> 3 tomatoes</li>
          <li><strong>10:30 AM:</strong> Brown rice (1/2 cup) sautéed assorted veggies.</li>
          <li><strong>12:30 PM:</strong> 2 tomatoes</li>
          <li><strong>4:00 PM:</strong> Brown rice (1 bowl)</li>
          <li><strong>6:30 PM:</strong> 1 tomato with ½ cup of sautéed veggies</li>
          <li><strong>8:30 PM:</strong> A bowl of tomato soup with a bit of salt and pepper</li>
        </ul>

        <h3>Day 6</h3>
        <ul>
          <li><strong>8:00 AM:</strong> 3 tomatoes</li>
          <li><strong>10:30 AM:</strong> Brown rice (1/2 cup) sautéed assorted veggies.</li>
          <li><strong>12:30 PM:</strong> 2 tomatoes</li>
          <li><strong>4:00 PM:</strong> Brown rice (1 bowl)</li>
          <li><strong>6:30 PM:</strong> 1 tomato with ½ cup of sautéed veggies</li>
          <li><strong>8:30 PM:</strong> A bowl of tomato soup with a bit of salt and pepper</li>
        </ul>

        <h3>Day 7</h3>
        <ul>
          <li><strong>9:00 AM:</strong> 1 glass of orange or apple juice</li>
          <li><strong>12:00 PM:</strong> 1 bowl of brown rice with any steamed veggies</li>
          <li><strong>2:00 PM:</strong> Steamed veggies (1/2 bowl)</li>
          <li><strong>4:00 PM:</strong> 1 bowl of watermelon, muskmelon, and pineapple mix</li>
          <li><strong>6:30 PM:</strong> 1 tomato, ½ cucumber, and ½ carrot</li>
          <li><strong>8:30 PM:</strong> 1 glass of water and 1 bowl of watermelon</li>
        </ul>
      </div>

      <img id='imge' src={`${process.env.PUBLIC_URL}/images/fatrunning.jpg`} alt="Example" />

      <div className="weight-gain-plan">
        <h2>Weight Gain Diet Plan Chart – (Day Wise)</h2>
        <p>Follow this plan to gain weight in a healthy way...</p>

        <h3>Day 1</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 3 boiled eggs, 1 glass of milk with 10 almonds</li>
          <li><strong>9:30 AM:</strong> 1 bowl of oats with banana and honey</li>
          <li><strong>12:00 PM:</strong> 1 bowl of rice, 2 chapatis, 1 cup of dal, and a vegetable curry</li>
          <li><strong>4:00 PM:</strong> 1 glass of fruit smoothie with nuts</li>
          <li><strong>7:30 PM:</strong> 2 chapatis, 1 bowl of vegetable curry, and a salad</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 2</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 2 chapatis with butter and 1 glass of milk</li>
          <li><strong>9:30 AM:</strong> 1 bowl of upma with veggies</li>
          <li><strong>12:00 PM:</strong> 2 chapatis, 1 bowl of dal, and paneer curry</li>
          <li><strong>4:00 PM:</strong> 1 bowl of fruit salad with nuts</li>
          <li><strong>7:30 PM:</strong> 1 bowl of rice with mixed vegetable curry</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 3</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 3 boiled eggs, 1 glass of milk with 10 almonds</li>
          <li><strong>9:30 AM:</strong> 1 bowl of poha with peanuts</li>
          <li><strong>12:00 PM:</strong> 1 bowl of rice, 2 chapatis, 1 cup of dal, and a chicken curry</li>
          <li><strong>4:00 PM:</strong> 1 bowl of yogurt with honey and nuts</li>
          <li><strong>7:30 PM:</strong> 2 chapatis with a bowl of dal and mixed vegetables</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 4</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 2 chapatis with butter and 1 glass of milk</li>
          <li><strong>9:30 AM:</strong> 1 bowl of oats with banana and honey</li>
          <li><strong>12:00 PM:</strong> 1 bowl of rice, 2 chapatis, 1 cup of dal, and paneer curry</li>
          <li><strong>4:00 PM:</strong> 1 glass of fruit smoothie with nuts</li>
          <li><strong>7:30 PM:</strong> 2 chapatis with mixed vegetable curry and a salad</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 5</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 3 boiled eggs, 1 glass of milk with 10 almonds</li>
          <li><strong>9:30 AM:</strong> 1 bowl of poha with peanuts</li>
          <li><strong>12:00 PM:</strong> 1 bowl of rice, 2 chapatis, 1 cup of dal, and chicken curry</li>
          <li><strong>4:00 PM:</strong> 1 bowl of yogurt with honey and nuts</li>
          <li><strong>7:30 PM:</strong> 2 chapatis with mixed vegetable curry and a salad</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 6</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 3 boiled eggs, 1 glass of milk with 10 almonds</li>
          <li><strong>9:30 AM:</strong> 1 bowl of oats with banana and honey</li>
          <li><strong>12:00 PM:</strong> 2 chapatis with a bowl of dal and paneer curry</li>
          <li><strong>4:00 PM:</strong> 1 bowl of fruit salad with nuts</li>
          <li><strong>7:30 PM:</strong> 2 chapatis with mixed vegetable curry and a salad</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>

        <h3>Day 7</h3>
        <ul>
          <li><strong>7:30 AM:</strong> 2 chapatis with butter and 1 glass of milk</li>
          <li><strong>9:30 AM:</strong> 1 bowl of upma with veggies</li>
          <li><strong>12:00 PM:</strong> 1 bowl of rice, 2 chapatis, 1 cup of dal, and chicken curry</li>
          <li><strong>4:00 PM:</strong> 1 bowl of yogurt with honey and nuts</li>
          <li><strong>7:30 PM:</strong> 2 chapatis with mixed vegetable curry and a salad</li>
          <li><strong>9:30 PM:</strong> 1 glass of milk</li>
        </ul>
      </div>
      <img id='imge' src={`${process.env.PUBLIC_URL}/images/weightgain.jpg`} alt="Example" />
    </div>
  );
};

export default Services;
