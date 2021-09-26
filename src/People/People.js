import React, {useState, useEffect } from 'react';
import DisplayPeople from '../Displaypeople/DisplayPeople';
import List from '../List/List';
import './People.css';

const People = () => {
    const [peoples, setPeoples] = useState([]);
    const [select, setSelect] = useState([]);
    useEffect(() => {
        fetch('./people.JSON')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])
    const handlePeople = (people) => {
        const newSelect = [...select, people];
        setSelect(newSelect);
    }
    let totalIncome = 0;
    for (const person of select) {
        totalIncome = totalIncome + person.income;
    }
    return (
        <div className="people container">
            <div className="list-group">
                {
                   peoples.map(people=> <List key={people.key} people={people} handlePeople={handlePeople}></List>)
                }
            </div>
            <div className="select-group">
                <h3>People Total Summary</h3>
                <h4>Selected People Count: {select.length}</h4>
                <h4>Total Income: ${totalIncome}</h4>
                <h5>Selected People Name:</h5>
                {select.map(displayPeople=><DisplayPeople key={displayPeople.key} displayPeople={displayPeople}></DisplayPeople>)}
            </div>
        </div>
    );
};

export default People;