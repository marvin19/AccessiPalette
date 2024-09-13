import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Palette from './components/Palette';

const App: React.FC = (): React.ReactElement | null => {
    const [selectedContrast, setSelectedContrast] = useState<number>(3.0);
    const [selectedMode, setSelectedMode] = useState<
        'all' | 'third' | 'neighbor'
    >('neighbor');

    return (
        <main>
            <Header
                setSelectedContrast={setSelectedContrast}
                setSelectedMode={setSelectedMode}
            />
            <Palette
                selectedContrast={selectedContrast}
                selectedMode={selectedMode}
            />
        </main>
    );
};

export default App;
