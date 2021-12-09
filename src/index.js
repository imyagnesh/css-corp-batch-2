import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './class-component';
import FunctionComponent from './function-component';
import Maths from './maths';
import DataTypeValidation from './data-type-validation';
import { Greet } from './task-greet-dec-09';
import LifeCycleHook from './react-life-cycle';

ReactDOM.render(
  <div>
    <LifeCycleHook />
    <Maths />
    <FunctionComponent />
    <ClassComponent />
    <Greet />

    <h1>PropType Components</h1>
    <DataTypeValidation name="Senthil" age={24} />
    <DataTypeValidation age={27} />
  </div>,
  document.getElementById('root')
);
