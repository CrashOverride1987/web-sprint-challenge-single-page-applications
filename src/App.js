import './App.css';
import axios from 'axios';
import PizzaForm from './Form';
import React, {useEffect, useState} from 'react';
import schema from './schema';
import Pizza from './Pizza'

const initialValue = {
  name: '',
  size: '',
  special: '',
  peperoni: false,
  cheese: false,
  xSauce: false,
  mushrooms: false,
  }

const initialDisabled = true;

function App() {
    const [value, setValue] = useState(initialValue);
    const [disabled, setDisabled] = useState(initialDisabled);
    const [pizzas, setPizzas] = useState([]);

    const onSubmit = () => {
      const submitValues = {
        name: value.name.trim(),
        size: value.size.trim(),
        special: value.special.trim(),
        pepperoni: value.peperoni,
        cheese: value.cheese,
        xSauce: value.xSauce,
        mushrooms: value.mushrooms
      }
      setPizzas(submitValues, ...pizzas)
    }


    const inputChange = (name, value1) => {
      setValue({...value, [name]: value1,});
    };
  
    useEffect(() => {
      schema.isValid(value).then((valid) => {
        setDisabled(!valid)
      })
    }, [value]);
  
    return (
      <div className="App">
      <header>
        <h1>Lambda Eats!</h1>
      </header>
        <PizzaForm
        values = {value}
        submit = {onSubmit}
        change = {inputChange}
        disabled = {disabled}
        /> 
      {/* {pizzas.map((pizza, idx) => {return <Pizza key={idx} values={pizza} />})} */}
      </div>
    );
  }
  

  export default App;