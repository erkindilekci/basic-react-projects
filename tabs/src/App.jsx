import React, {useEffect, useState} from 'react';
import {FaAngleDoubleRight} from "react-icons/fa";

const url = 'https://course-api.com/react-tabs-project';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [jobIndex, setJobIndex] = useState(0);

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Something went wrong!');
                const data = await response.json();
                console.log(data);
                setJobs(data);
            } catch (e) {
                console.error(e);
            }
            setIsLoading(false);
        };
        fetchJobs();
    }, [url]);

    if (isLoading) return (
        <section className="section loading">
            <h1>Loading...</h1>
        </section>
    );

    const {company, dates, duties, title} = jobs[jobIndex];

    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((item, index) => (
                        <button key={item.id} onClick={() => setJobIndex(index)}
                                className={`job-btn ${index === jobIndex && 'active-btn'}`}>
                            {item.title}
                        </button>
                    ))}
                </div>

                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => <div key={index} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"/>
                        <p>{duty}</p>
                    </div>)}
                </article>
            </div>
        </section>
    );
}

export default App;
