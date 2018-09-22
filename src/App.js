import React from 'react';
import './App.css';

import { OrderProvider } from './Contexts';
import { OrderOverview } from './Components';

const App = () => (
  <div className="App">
    <OrderProvider>
      <OrderOverview />
    </OrderProvider>
  </div>
);

export default App;
