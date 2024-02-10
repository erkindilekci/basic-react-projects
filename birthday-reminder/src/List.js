import React from 'react';

const List = ({people}) => {
    return (
        <ul>
            {people.map(person => <li key={person.id}>
                <article className="person">
                    <img src={person.image} alt={person.name}/>
                    <div>
                        <h4>{person.name}</h4>
                        <p>{person.age} years</p>
                    </div>
                </article>
            </li>)}
        </ul>
    );
};

export default List;
