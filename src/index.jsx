import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';



// const App = ({ title, caption }) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             <h2 style={{ background: 'red', color: 'white' }}>

//                 {caption}
//             </h2>
//             <input type="text" />
//         </div>
//     );
// }


ReactDOM.render(<Input title="Good morning" />, document.getElementById('root'));