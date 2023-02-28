import { useState } from 'react';

export default function FeedbackForm(){
    let name = '';

    function handleClick(){
        name = prompt('¿Cuál es tu nombre?');
        alert(`¡Hola, ${name}!`);
    }

    return(
        <button onClick={handleClick}>
            Saludar
        </button>
    );
}

/*La variable de  estado no era necesaria porque la pagina se renderiza 
luego de mostrar el mensaje de saludo, por lo que el nombre se muestra 
la siguiente vez que se presiona el boton */