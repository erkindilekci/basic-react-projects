import React, {useEffect, useState} from 'react';
import data from "./data.js";
import {FaQuoteRight} from "react-icons/fa6";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, people]);

    useEffect(() => {
        const interval = setInterval(() => setIndex(prevState => prevState + 1), 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (<section className="section">
        <div className="title">
            <h2>
                <span>/</span>Reviews
            </h2>
        </div>
        <div className="section-center">
            {people.map((person, personIndex) => (
                <article
                    className={
                        personIndex === index
                            ? 'activeSlide'
                            : (personIndex === index - 1 || index === 0 && personIndex === people.length - 1)
                                ? 'lastSlide'
                                : 'nextSlide'
                    }
                    key={person.id}>
                    <img className="person-img" src={person.image} alt={person.name}/>
                    <h4>{person.name}</h4>
                    <p className="title">{person.title}</p>
                    <p className="text">{person.quote}</p>
                    <FaQuoteRight className="icon"/>
                </article>))
            }

            <button className="prev" onClick={() => setIndex(prevState => prevState - 1)}><FiChevronLeft/></button>
            <button className="next" onClick={() => setIndex(prevState => prevState + 1)}><FiChevronRight/></button>
        </div>
    </section>);
}

export default App;
