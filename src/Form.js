
import React from 'react';
import {Link} from 'react-router-dom';
export default function PizzaForm({ values, submit, change, disabled}) {

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = (evt)=>{
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>

        <label>Name
            <input
            value={values.name}
            onChange={onChange}
            type='text'
            name='name'
            />
        </label>

        <div className='size'>
            <label>Size: 
                <select
                onChange={onChange}
                value={values.size}
                name='size'>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                </select>
            </label>
        </div>

        <div className='toppings'>
            <h2>Toppings</h2>
            
            <label>Pepperoni
                <input
                type='checkbox'
                name='pepperoni'
                checked={values.pepperonni}
                onChange={onChange}
                />
            </label>

            <label>Cheese
                <input
                type='checkbox'
                name='cheese'
                checked={values.cheese}
                onChange={onChange}
                />
            </label>

            <label>Extra Sauce
                <input
                type='checkbox'
                name='xSauce'
                checked={values.xSauce}
                onChange={onChange}
                />
            </label>

            <label>Mushrooms
                <input
                type='checkbox'
                name='mushrooms'
                checked={values.mushrooms}
                onChange={onChange}
                />
            </label>
    </div>

    <div className='Special'>
        <label>Special Instructions
            <input
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
            />
        </label>
    </div>
        <button disabled={disabled}>
            Order Now!
        </button>
    </form>
    )
}
