import React, {useState} from 'react';
import data from "./data.js";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const paragraphCount = count <= 0 ? 1 : count;
        setText(data.slice(0, paragraphCount));
    }

    return (
        <section className="section-center">
            <h3>Tired of lorem ipsum?</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor="amount">Paragraphs:</label>
                <input type="number" name="amount" id="amount" value={count} onChange={event => setCount(event.target.value)}/>
                <button type="submit" className="btn">Generate</button>
            </form>
            <article className="lorem-text">{text.map((item, index) => <p key={index}>{item}</p>)}</article>
        </section>
    );
}

export default App;
