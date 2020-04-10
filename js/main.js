// Variables y constantes
const buttons = document.querySelectorAll('button');
let screen = document.querySelector('.screen > div'),
	flat = false;

// Funciones
let setKey = ( button ) => {
	let key = button.innerHTML;
	
	if ( key >= 0 ) {
		setNumber( key );
	}else if ( key == '=' || key.toLowerCase() == 'ac' || key.toLowerCase() == 'ce') {
		setOperation( key );
		flat = false;
	}else {
		setMath( key );
	}
}
let setNumber = ( key ) => {
	clearZero();
	if( flat == false ) clearScreen();
	writeScreen( key );
	flat = true;
}
let setOperation = ( key ) => {
	if ( key == '=' ) {
		let result = eval(readScreen());
		clearScreen();
		writeScreen( result );
	} else if( key == 'ac' ) {
		clearScreen();
		writeScreen('0');
	}else{
		let borrado = readScreen().slice( 0, -1 );
		clearScreen();
		writeScreen( borrado );
	}
}
let setMath = ( key ) => writeScreen( key );
let readScreen = () => screen.innerHTML;
let writeScreen = ( digits ) => screen.append( digits );
let clearZero = () => { if(screen.innerHTML == 0) clearScreen() }
let clearScreen = () => screen.innerHTML = '';
writeScreen( 0 );

// Eventos
buttons.forEach( function(button, index) {
	button.addEventListener( 'click', () => setKey( button ) );
});