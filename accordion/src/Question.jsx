import React, {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = ({question}) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleClick = () => setShowInfo(prevState => !prevState);

    return (
        <article className="question">
            <header>
                <h4>{question.title}</h4>
                <button onClick={handleClick} className="btn">{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            {showInfo && <p>{question.info}</p>}
        </article>
    );
};

export default Question;
