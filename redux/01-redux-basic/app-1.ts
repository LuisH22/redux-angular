import { Action } from './ngrx-fake/ngrx';
// Acciones
// interface Action {
// 	type: string;
// 	payload?: any;
// }


// const incrementarAction: Action = {
//     type: 'INCREMENTAR'
// }

function reducer(state = 10, action: Action) {
	switch (action.type) {
		case 'INCREMENTAR':
			return state += 1;

		case 'DECREMENTAR':
			return state -= 1;

		case 'MULTIPLICAR':
			return state * action.payload;

		case 'DIVIDIR':
			return state / action.payload;


		default:
			return state;
	}
}


// Utilizar reducer

// const incrementarAction: Action = {
// 	type: 'INCREMENTAR'
// }

// console.log(reducer(10, incrementarAction));

// // const decrementarAction: Action = {
// // 	type: 'DECREMENTAR'
// // }

// console.log(reducer(10, decrementarAction));

// // const multiplicarAction: Action = {
// // 	type: 'MULTIPLICAR',
// // 	payload: 2
// // }

// console.log(reducer(10, multiplicarAction));

// // const dividirAction: Action = {
// // 	type: 'DIVIDIR',
// // 	payload: 2
// // }

// console.log(reducer(10, dividirAction));