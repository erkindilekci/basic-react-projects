import React, {useEffect, useState} from 'react';

const SingleColor = ({rgb, weight, index, hex}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `#${hex.toUpperCase()}`;

    useEffect(() => {
        const timeout = setTimeout(() => setAlert(false), 1000);
        return () => clearTimeout(timeout);
    }, [alert]);

    const handleClick = async () => {
        setAlert(true);
        await navigator.clipboard.writeText(hexValue);
    };

    return (
        <article
            onClick={handleClick}
            className={`color ${index > 10 && 'color-light'}`}
            style={{backgroundColor: `rgb(${bcg})`}}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p>Copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
