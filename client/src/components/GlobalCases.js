import React from 'react';

function GlobalCases({world}) {
  const {NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = world;

  return(
    <div>
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

      {/* <table>
        <thead>
          <>
        </thead> 
        <tbody>
        </tbody>  
      </table>   */}
    </div>  
  );
}

export default GlobalCases;