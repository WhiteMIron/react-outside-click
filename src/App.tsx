import React, { FC } from 'react';
import Header from './components/header';

const App: FC = () => {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      Hello, React-TS!
    </div>
  );
};

export default App;
