import React, {useState} from 'react';
import Values from "values.js";
import SingleColor from "./SingleColor.jsx";

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#7c3aed').all(5));

    const handleSubmit = event => {
        event.preventDefault();
        try {
            const colors = new Values(color).all(5);
            setList(colors);
        } catch (e) {
            setError(true);
        }
    };

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input className={error && 'error'} type="text" placeholder="#7c3aed" value={color}
                           onChange={e => setColor(e.target.value)}/>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index} hex={color.hex}/>;
                })}
            </section>
        </>
    );
}

export default App;
