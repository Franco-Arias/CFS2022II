import { useState } from 'react';
import { sculptureList } from './data.js'

export default function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [nextButtonStatus, setNextButtonStatus] = useState(false)
    const [PreviousButtonStatus, setPreviousButtonStatus] = useState(true)

    function handleNextClick(){
        setIndex(index + 1);
        setPreviousButtonStatus(false);
        if(index > 9){setNextButtonStatus(true)}
    };
    function handlePreviousClick(){
        setIndex(index - 1);
        setNextButtonStatus(false);
        if(index < 2){setPreviousButtonStatus(true)}
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return(
        <>
            <button disabled={PreviousButtonStatus} onClick={handlePreviousClick}>
                Anterior
            </button>
            <button disabled={nextButtonStatus} onClick={handleNextClick}>
                Siguiente
            </button>
            <h2>
                <i>{sculpture.name}</i>
                por {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} de {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Ocultar' : 'Mostrar'} detalles
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    )
}