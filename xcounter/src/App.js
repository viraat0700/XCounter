import React from 'react';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <Counter />
  )
}

export default React.memo(App);