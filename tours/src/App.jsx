import React, {useCallback, useEffect, useState} from 'react';
import Loading from "./Loading.jsx";
import Tours from "./Tours.jsx";

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const getData = useCallback(
        async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Something went wrong!');
                const data = await response.json();
                setTours(data);
            } catch (e) {
                console.error(e);
            }
            setIsLoading(false);
        }
        , [url]);

    useEffect(() => {
        getData();
    }, [getData]);

    const removeTour = id => {
        const newTours = tours.filter(t => t.id !== id);
        setTours(newTours);
    };

    if (isLoading) return <main><Loading/></main>;

    if (tours.length === 0) return (
        <main>
            <div className="title">
                <h2>No tours left.</h2>
                <button className="btn" onClick={getData}>Refresh</button>
            </div>
        </main>
    );

    return (
        <main>
            <Tours onRemove={removeTour} tours={tours}/>
        </main>
    );
}

export default App;
