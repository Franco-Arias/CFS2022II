import { useState } from 'react';

export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFistNameChange(e){
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e){
        setLastName(e.target.value)
    }
    function handleReset(){
        firstName = '';
        lastName = '';
    }

    return (
        <form onSubmit={e => e.persist()}>
            <input
                placeholder="Nombre"
                value={firstName}
                onChange={handleFistNameChange}
            />
            <input
                placeholder="Apellido"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hola, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reiniciar</button>
        </form>
    );
}