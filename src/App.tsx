import React, { useState } from 'react';
import Header from './components/Header';
import Palette from './components/Palette';
import Toolbar from './components/Toolbar';

const App: React.FC = (): React.ReactElement | null => {
    const [selectedContrast, setSelectedContrast] = useState<number>(3.0);
    const [selectedMode, setSelectedMode] = useState<string>('neighbor');
    const [enableDragAndDrop, setEnableDragAndDrop] = useState<boolean>(false);

    return (
        <main>
            <Header
                setSelectedContrast={setSelectedContrast}
                setSelectedMode={setSelectedMode}
            />
            <Toolbar
                enableDragAndDrop={enableDragAndDrop}
                setEnableDragAndDrop={setEnableDragAndDrop}
            />
            <Palette
                selectedContrast={selectedContrast}
                selectedMode={selectedMode}
                enableDragAndDrop={enableDragAndDrop}
            />
        </main>
    );
};

export default App;
