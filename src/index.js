import React from 'react';
import ReactDOM from 'react-dom';
import Plot from './Plot';
import { getSprints } from './jira';

const baseCurve = {
  x: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
  y: [0,5.225,11.555,18.94,27.46,37.585,50.95,65.95,82.72,100.78,121.33],
  name: 'Base'
}

const storyPoints = {
  // Days of sprint
  x: ["1","2","3","4","5","6","7","8","9","10","11"],
  // Story Points
  y: [0, 19.82, 18.95, 18.64, 23.99, 38.14, 57.29, 64.26, 83.54, 107.46, 128.95],
  name: 'Story Points'
}

const demoDeployDone = {
  // Days of sprint
  x: ["1","2","3","4","5","6","7","8","9","10","11"],
  // Story Points
  y: [0, 2,9,12.5,20,32,45,60.5,78,79,97,109],
  name: 'Demo / Deploy / Done'
}

const data = [baseCurve, storyPoints, demoDeployDone];

getSprints(240, { state: 'active' }).then(sprints => console.log(sprints))

ReactDOM.render(
  <div className="wrapper">
    <h1 className="title">React - DBB</h1>
    <Plot Data={data} Type="scatter"/>
  </div>,
  document.getElementById('root')
);
