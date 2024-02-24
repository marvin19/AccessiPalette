import React from 'react';
import Heading from './components/Heading';
import CardGrid from './components/CardGrid';
const App: React.FC = (): React.ReactElement | null => {
    return (
        <main>
            <Heading />
            <CardGrid />
        </main>
    );
};
export default App;
