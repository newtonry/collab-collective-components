import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const componentJs = () => {
    // Auto resize textarea
  var autoExpand = function (field) {

  	// Reset field height
  	field.style.height = 'inherit';

  	// Get the computed styles for the element
  	var computed = window.getComputedStyle(field);

  	// Calculate the height
  	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
  	             + parseInt(computed.getPropertyValue('padding-top'), 10)
  	             + field.scrollHeight
  	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
  	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  	field.style.height = height + 'px';

  };

  document.addEventListener('input', function (event) {
  	if (event.target.tagName.toLowerCase() !== 'textarea') return;
  	autoExpand(event.target);
  }, false);
};


componentJs();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
