import React from 'react';

function RenderCountriesTableData({country, index}) {
  const {Country, TotalConfirmed, TotalDeaths, TotalRecovered} = country;

  return(
      <tr>
        <td>{Country}</td>
        <td>{TotalConfirmed}</td>
        <td>{TotalDeaths}</td>
        <td>{TotalRecovered}</td>
      </tr>  
  );
}

function GlobalCases(props) {
  const {NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = props.world;
  const countryCases = props.countries.map((country, index) => {
    return (
      <RenderCountriesTableData key={index} country={country}/>
    );
  })

  return(
    <div className="row">
      <div className="col s12 m8 l9">
        <table>
          <thead>
            <tr>
              <th> NewConfirmed </th>
              <th> TotalConfirmed </th>
              <th> NewDeaths </th>
              <th> TotalDeaths </th>
              <th> NewRecovered </th>
              <th> TotalRecovered </th>
            </tr>  
          </thead>
          <tbody>
            <tr>
              <td> {NewConfirmed} </td>
              <td> {TotalConfirmed} </td>
              <td> {NewDeaths} </td>
              <td> {TotalDeaths} </td>
              <td> {NewRecovered} </td>
              <td> {TotalRecovered} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col s12 m8 l9">
        <h3> Data in Each Country </h3>
      </div>
      <div className="col s12 m8 l9">
        <table>
          <tbody>
            {countryCases}
          </tbody>  
        </table>
      </div>  
    </div>  
  );
}

export default GlobalCases;