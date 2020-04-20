import React, { Component } from 'react';

class Taiwan extends Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m8 l9">
            <p> Table </p>
            {/* table for Coronavirus Cases in Taiwan */}
            <table className="highlight">
              <thead>
                <tr>
                  <th> Area </th>
                  <th> Coronavirus Cases </th>
                </tr>    
              </thead>
              <tbody>
                <tr>
                  <td> Taipei </td>
                  <td> 33 </td>
                </tr>  
              </tbody>    
            </table>  
          </div>
          <div className="col s12 m4 l3">
            <p> Menu </p>
          </div>  
        </div>  
      </div>
    );
  }
}

export default Taiwan;