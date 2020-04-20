import React from 'react';

import FetchData from './FetchData';

function Home() {
  return(
    <div className="container">
      <h3> COVID-19 in Global </h3>
      <FetchData />
    </div>  
  );
}

export default Home;