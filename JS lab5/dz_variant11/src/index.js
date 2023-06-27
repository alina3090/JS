import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState } from "react";

const list = [`привет`,`пока`, `бро`];

const MyInput = ({ options }) => {
    const [value, setValue] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const InputChange = (event) => {
        const inputValue = event.target.value;
        const foundOption = options.find((option) =>
            option.toLowerCase().startsWith(inputValue.toLowerCase())
        );
        setValue(inputValue);
        setSelectedOption(foundOption || null);
    };

    const Submit = (event) => {
        event.preventDefault();
        if (value && !options.includes(value)) {
            options.push(value);
        }
        setValue("");
        setSelectedOption(null);
    };

    return (
        <form onSubmit={Submit}>
            <input value={selectedOption || value} onChange={InputChange} />
            <button>Отправить</button>
        </form>
    );
};

export default MyInput;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyInput options={list}/>
);

