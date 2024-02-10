import React from 'react';
import questions from "./data.js";
import Question from "./Question.jsx";

function App() {
    return (
        <main>
            <div className="container">
                <h3>Questions and answers about login</h3>
                <section className="info">
                    {questions.map((question) => (
                        <Question key={question.id} question={question}/>
                    ))}
                </section>
            </div>
        </main>
    );
}

export default App;
