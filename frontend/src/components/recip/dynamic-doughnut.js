import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {open} from './recipecomparison.js'
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'time',
    'ingredient',
    'score'
  ],
  datasets: [{
    data: [getRandomInt(0, 100), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
    '#CCC',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
});
let createReactClass = require('create-react-class');
export default createReactClass({
 
  displayName: 'DynamicDoughnutExample',

	getInitialState() {
    console.log('hi')
    
		return getState();
	},

	componentWillMount() {
		setInterval(() => {
			this.setState(getState());
		}, 5000);
	},

  render() {
    return (
      <div>
      
        <Doughnut data={this.state} />
      </div>
    );
  }
});