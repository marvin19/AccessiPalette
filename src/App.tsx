import React, { useState } from 'react';
import Header from './components/Header';
import Palette from './components/Palette';

const App: React.FC = (): React.ReactElement | null => {
    const [selectedContrast, setSelectedContrast] = useState<number>(3.0);

    return (
        <main>
            <Header setSelectedContrast={setSelectedContrast} />
            <Palette selectedContrast={selectedContrast} />
        </main>
    );
};

export default App;
