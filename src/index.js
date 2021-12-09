import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './class-component';
import FunctionComponent from './function-component';
import Maths from './maths';
import DataTypeValidation from './data-type-validation';
import { Greet } from './task-greet-dec-09';

ReactDOM.render(
  <div>
    <FunctionComponent />
    <ClassComponent />
    <Maths />
    <DataTypeValidation name="Senthil" age={24} />
    <DataTypeValidation name="Seeni" />
    <Greet />
  </div>,
  document.getElementById('root')
);
