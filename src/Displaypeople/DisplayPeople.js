import React from 'react';

const DisplayPeople = (props) => {
    const { name, img } = props.displayPeople;
    return (
        <>
        <div className="d-flex align-items-center bg-success">
            <img src={img} alt="..." className="img-thumbnail w-25 me-4"></img>
            <h3 className="text-white">{name}</h3>
        </div>
        <hr></hr>
        </>
    );
};

export default DisplayPeople;