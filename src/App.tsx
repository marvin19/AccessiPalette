import React from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import Palette from './components/Palette';
const App: React.FC = (): React.ReactElement | null => {
    return (
        <main>
            <Header />
            <Palette />
            <CardGrid />
        </main>
    );
};
export default App;
