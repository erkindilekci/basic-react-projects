import React from 'react';
import Tour from "./Tour.jsx";

const Tours = ({tours, onRemove}) => {
    return (
        <section>
            <div className="title">
                <h3>Our Tours</h3>
                <div className="underline">

                </div>
                <ul>
                    {tours.map(t => <Tour onRemove={onRemove} key={t.id} {...t} />)}
                </ul>
            </div>
        </section>
    );
};

export default Tours;
