import React from 'react';
import menu from "./data.js";

const Categories = ({handleSelect}) => {
    const categories = ['all', ...new Set(menu.map(m => m.category))];

    return (
        <div className="btn-container">
            {categories.map(c => <button onClick={() => handleSelect(c)} className="filter-btn" key={c}>{c}</button>)}
        </div>
    );
};

export default Categories;
