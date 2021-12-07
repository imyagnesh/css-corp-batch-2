import React from 'react';
import ReactDOM from 'react-dom';



const App = ({ title, caption }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2 style={{ background: 'red', color: 'white' }}>

                {caption}
            </h2>
            <input type="text" />
        </div>
    );
}

ReactDOM.render(<App title="Good morning" caption="Thank you" />, document.getElementById('root'));