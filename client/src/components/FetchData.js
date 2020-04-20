/* This Component for fetching Data from the third-party API */
import React, { Component } from 'react';
import GlobalCases from './GlobalCases';

class FetchData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      world: [],
      countries: []
    }
  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            world: data.Global,
            countries: data.Countries
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  render() {
    const { error, isLoaded, world} = this.state;

    if (error) {
      return <div> Error: {error.message} </div>
    } else if (!isLoaded) {
      return <div> Loading </div>
    } else {
      return(
        <div>
          <GlobalCases world={world}/>  
        </div>
      );
    } 
  }
}

export default FetchData;