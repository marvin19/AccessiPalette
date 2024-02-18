import React from 'react';
import Heading from './Heading';
import CardGrid from './CardGrid';
const App: React.FC = (): React.ReactElement | null => {
  return (
    <main>
      <Heading />
      <CardGrid />
    </main>
  );
};
export default App;
