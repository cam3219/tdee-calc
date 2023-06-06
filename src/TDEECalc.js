import React, { useState } from 'react';
import Slider from 'rc-slider';
import SliderGroup from './SliderGroup'
import Form from './Form'
import 'rc-slider/assets/index.css';

const originalTDEE = 0;

const TDEECalc = () => {
const [age, setAge] = useState(25);
const [weight, setWeight] = useState(70);
const [height, setHeight] = useState(170);
const [activityLevel, setActivityLevel] = useState(1.2);
const [TDEE, setTDEE] = useState(originalTDEE);

//Females: (10*weight [kg]) + (6.25*height [cm]) – (5*age [years]) – 161
//Males: (10*weight [kg]) + (6.25*height [cm]) – (5*age [years]) + 5

/*-----
Multiply by scale factor for activity level:
Sedentary *1.2
Lightly active *1.375
Moderately active *1.55
Active *1.725
Very active *1.9
-----*/

  const calculateTDEE = () => {
    weight = weight/2.205
    const bmr = 10;
    return bmr;
  }

  const clickHandler = () => {
    setTDEE(calculateTDEE);
  }

  return(
    <div>
        <h1>TDEE CALCULATOR</h1>
        <p>This calculator will output a rough estimation of your total daily energy expenditure or about how many calories you will burn in a day.
           In order to theoretically lose one pound of fat in a week you would eat at your TDEE - 500 calories per day. 

        </p>
        <h2>
        You are {age} years old
    </h2>
    

        <Slider
    min={0}
    max={99}
    step={1}
    value={age}
    onChange={value => setAge(value)}
    style={{width: '33%'}}/>
    
    
    <h2>You weigh {weight} lbs</h2>
    <Slider 
    value = {weight}
    min={0}
    step = {1}
    max = {500}
    style = {{width: '33%'}}
    onChange = {value => setWeight(value)}
    />
    <Form />
    <button className="CalculateButton"
    onClick={clickHandler}
    >Calculate</button>
    <h2>{TDEE}</h2>
    </div>
  );
}


export default TDEECalc;