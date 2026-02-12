
import React from 'react';
import Header from './components/Header';
import EmployeeGrid from './components/EmployeeGrid';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <EmployeeGrid />
            </main>
        </div>
    );
};

export default App;
