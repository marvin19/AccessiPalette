import React from 'react';
import Header from './components/Heading';
import CardGrid from './components/CardGrid';
const App: React.FC = (): React.ReactElement | null => {
    return (
        <main>
            <Header />
            <CardGrid />
        </main>
    );
};
export default App;
