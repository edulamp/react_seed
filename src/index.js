import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

const mountNode = document.getElementById('app');
class HelloMessage extends React.Component {
	render() {
		return <div>Hello {this.props.name}</div>;
	}
}
console.log('hello world launch');

ReactDOM.render(<HelloMessage name="world" />, mountNode);
