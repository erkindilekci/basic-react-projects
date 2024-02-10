import React, {useState} from 'react';
import reviews from "./data.js";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = reviews[index];

    const handlePrevClick = () => setIndex(prevState => prevState - 1);
    const handleNextClick = () => setIndex(prevState => prevState + 1);
    const handleRandomClick = () => setIndex(prevState => {
        const adjustedPreviousIndex = (prevState + reviews.length) % reviews.length;
        let randomIndex = Math.floor(Math.random() * reviews.length);
        while (randomIndex === adjustedPreviousIndex) randomIndex = Math.floor(Math.random() * reviews.length);
        return randomIndex;
    });

    return (<article className="review">
        <div className="img-container">
            <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon"><FaQuoteRight/></span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
            <button hidden={index === 0} className="prev-btn" onClick={handlePrevClick}><FaChevronLeft/></button>
            <button hidden={index === reviews.length - 1} className="next-btn" onClick={handleNextClick}>
                <FaChevronRight/></button>
        </div>
        <button className="random-btn" onClick={handleRandomClick}>Surprise Me</button>
    </article>);
};

export default Review;
