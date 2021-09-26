import React from 'react';

const List = (props) => {
    const {name, country, age, income,img}=props.people;
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid w-100 rounded-start" alt=""></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title">{ name }</h4>
                    <h6 className="card-text">Country: { country }</h6>
                    <h6 className="card-text">Age: {age}</h6>
                    <h5 className="card-text">Income: ${income}</h5>
                    <button className="btn btn-success" onClick={()=>props.handlePeople(props.people)}>Select Person</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default List;