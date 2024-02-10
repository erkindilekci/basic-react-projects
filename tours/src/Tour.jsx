import React, {useState} from 'react';

const Tour = ({onRemove, id, image, info, price, name}) => {
    const [readMore, setReadMore] = useState(false);

    return <li>
        <article className="single-tour">
            <img src={image} alt={name}/>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        onClick={() => setReadMore(prevState => !prevState)}>{readMore ? 'Show less' : 'Show more'}</button>
                </p>
                <button onClick={() => onRemove(id)} className="delete-btn">not interested</button>
            </footer>
        </article>
    </li>;
};

export default Tour;
