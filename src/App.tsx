import React from 'react';
import Header from './components/Header';
import Palette from './components/Palette';
const App: React.FC = (): React.ReactElement | null => {
    return (
        <main>
            <Header />
            <Palette />
        </main>
    );
};
export default App;
