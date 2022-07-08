import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import MortgageInsurance from './components/MortgageInsurance';

const insuranceCompanies = [
  {name: 'Альфа страхование', price: 6180, options: [{name:  'Жизнь', value: 13000}, {name:  'Имущество', value: 13000},{name: 'Титульное', value: 13000},{name:  'Агентское вознагр.', value: 13000}]},
  // {name: 'Росгосстрах', price: 6743, options: [{name:  'Жизнь', value: 13000}, {name:  'Имущество', value: 13000},{name: 'Титульное', value: 13000},{name:  'Агентское вознагр.', value: 13000}]}
]

function App() {
  return (
    <div className="App">

      <div className="container">

        <MortgageInsurance insuranceCompanies={insuranceCompanies} />

      </div>

    </div>
  );
}

export default App;
