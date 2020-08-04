import React from 'react';
import ReactDOM from 'react-dom';
import "../css/app.css";
import Layout from './Layout';

const App = () => {
    return ( 
        <Layout/>
     );
}
 
ReactDOM.render(<App/>, document.getElementById('root'));
