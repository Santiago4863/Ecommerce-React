import React, { useState } from 'react';
import "./itemCount.css";

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const [trigger, setTrigger] = useState(false);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div className='item-count'>
            <button className='item-count-button' disabled={count===0?true:false} onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button className='item-count-button' onClick={incrementCount}>+</button>
            <button className='item-count-button' disabled={count===0?true:false}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;