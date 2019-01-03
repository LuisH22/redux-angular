import {Action} from '../ngrx-fake/ngrx'

const incrementarAction: Action = {
	type: 'INCREMENTAR'
}



const decrementarAction: Action = {
	type: 'DECREMENTAR'
}



const multiplicarAction: Action = {
	type: 'MULTIPLICAR',
	payload: 2
}



const dividirAction: Action = {
	type: 'DIVIDIR',
	payload: 2
}

