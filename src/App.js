import React from 'react';
import './App.css';

import { OrderProvider, ProductProvider } from './Contexts';
import { OrderOverview } from './Components/orders';

const App = () => (
  <div className="App">
    <OrderProvider>
      <ProductProvider>
        <OrderOverview />
      </ProductProvider>
    </OrderProvider>
  </div>
);

export default App;
