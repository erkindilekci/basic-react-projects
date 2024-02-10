import React, {useState} from 'react';
import menu from "./data.js";
import Categories from "./Categories.jsx";
import Menu from "./Menu.jsx";

function App() {
    const [selectedButton, setSelectedButton] = useState('all');
    const [menuItems, setMenuItems] = useState(menu);

    const handleSelect = category => {
        setMenuItems(category === 'all' ? menu : menu.filter(m => m.category === category));
    }

    return <main>
        <section className="menu section">
            <div className="title">
                <h2>Our Menu</h2>
                <div className="underline"></div>
            </div>
            <Categories handleSelect={handleSelect}/>
            <Menu items={menuItems}/>
        </section>
    </main>;
}

export default App;
