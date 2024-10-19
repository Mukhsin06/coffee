import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/component/page/Home/Home';
import About from '../src/component/page/About/About';
import Locations from '../src/component/page/Locations/Locations';
import Menu from "./component/page/Menu/Menu";
import News from "./component/page/News/News";
import Products from "./component/page/Products/Products";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Locations" element={<Locations />} />
                <Route path="/Menu" element={<Menu/> } />
                <Route path="/News" element={<News/> } />
                <Route path="/Products" element={<Products/> } />

            </Routes>
        </Router>
    );
}

export default App;
