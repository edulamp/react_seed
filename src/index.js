import { curry } from 'ramda';
import 'rxjs';
import './app.css';

console.log('app load');

export function sayHello() {
	return 'hello world';
}

export { curry };
