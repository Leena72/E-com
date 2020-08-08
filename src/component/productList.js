import React from 'react';

import {connect} from 'react-redux'

// import './App.css';
// import './App.scss';

function ProductList() {
  return (
    <div className="ProductList">
       
       <img src="./wall.jpg" className="image" ></img>
  
    </div>
  );
}

export default connect()(ProductList)
