import React from 'react';
import Recipe from './components/Recipe';
import {uHomeBody} from './styles';

function HomePage() {
  
  return (
    <div className={uHomeBody}>
      <Recipe/>
    </div>
  );
}

export default HomePage;
