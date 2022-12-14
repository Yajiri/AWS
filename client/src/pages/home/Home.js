import React, { Component } from 'react';
import axios from 'axios';

const API = axios.create({
  baseURL: `https://raw.githubusercontent.com/feldob/dit355_2020/master/dentists.json`
});

class Home extends Component{

  constructor() {
    super();
    API.get().then(res => {
      console.log(res.data);
    });
  }

  render() {
    return(
      <div>omg</div>
    );
  }
}

export default Home;