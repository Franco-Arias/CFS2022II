let btnAgregar = document.getElementById('btnAgregar');
let btnMostarTodos = document.getElementById('btnMostarTodos');
let btnEstadisticas = document.getElementById('btnEstadisticas');
let btnBuscarTema = document.getElementById('btnBuscarTema');
let contenedorDocumentos = document.getElementById('tblDocumentos');
let contenedorEstadisticas = document.getElementById('contenedorEstadisticas');
let documentos = [
    {
        titulo: "Hispania Romana",
        autor: "Gabriel Hernandez",
        tema: "historia",
        fecha: "2017-03-25",
    },
    {
        titulo: "Ciencia Ficcion Argentina",
        autor: "Mariela Rossi",
        tema: "literatura",
        fecha: "2021-11-22",
    },
    {
        titulo: "Historia de Ayacucho",
        autor: "Martin Alvear",
        tema: "historia",
        fecha: "2016-09-07",
    },
    {
        titulo: "Historia de Cartago",
        autor: "Gabriel Hernandez",
        tema: "historia",
        fecha: "2009-12-11",
    },
];

const agregar = () => {
    let titulo = document.getElementById('titulo').value;
    let autor = document.getElementById('autor').value;
    let tema = document.getElementById('tema').value;
    let fecha = document.getElementById('fecha').value;

    let documento = {
        "titulo": titulo,
        "autor": autor,
        "tema": tema,
        "fecha": fecha,
    };

    documentos.push(documento);
};

const mostrarDocumentos = () => {
    let tabla = '';

    for (let r of documentos){
        tabla +=
      `<tr>
            <td>${r.titulo}</td>
            <td>${r.autor}</td>
           <td>${r.tema}</td>
           <td>${r.fecha}</td>
        </tr>
        `
    };

    contenedorDocumentos.innerHTML = tabla;
};

const mostrarEstadisticas = () => {
    contenedorEstadisticas.innerHTML = `${calcularAutorMasRepetido()}${calcularTemaMasRepetido()}${calcularFechas()}`;
};

const buscarTema = () => {
    let tabla = '';
    let temaABuscar = document.getElementById('temaABuscar').value;

    for (let r of documentos){
        if(temaABuscar === r.tema){
            tabla +=
      `<tr>
            <td>${r.titulo}</td>
            <td>${r.autor}</td>
           <td>${r.tema}</td>
           <td>${r.fecha}</td>
        </tr>
        `
        };
    };
    
    contenedorDocumentos.innerHTML = tabla;
};

const calcularFechas =() => {
    let documentoMasAntiguo;
    let documentoMasNuevo;

    for(let r of documentos){
        if(documentoMasAntiguo === undefined || new Date(documentoMasAntiguo.fecha) > new Date(r.fecha)){
            documentoMasAntiguo = r;
        };
        if(documentoMasNuevo === undefined || new Date(documentoMasNuevo.fecha) < new Date(r.fecha)){
            documentoMasNuevo = r;
        };
    };
    return `<p>El documento mas antiguo es: ${documentoMasAntiguo.titulo}.</p><p>El documento mas nuevo es: ${documentoMasNuevo.titulo}.</p>`;
};

const calcularAutorMasRepetido = () => {
    let lista = [];
    let conteoMaximo = 0;
    let autorMasRepetido = "";
    let autorEstaEnLista;

    for(let r of documentos){
        autorEstaEnLista = false;
        for(i = 0; i < lista.length; i++){
            if(r.autor === lista[i].autor){
                lista[i].conteo += 1;
                autorEstaEnLista = true;
            };
        };
        if(autorEstaEnLista === false){
            let nuevoAutor = {
                "autor" : r.autor,
                "conteo" : 1,
            };
            lista.push(nuevoAutor);
        };
    };
    for(let i = 0; i < lista.length; i++){
        if(lista[i].conteo > conteoMaximo){
            conteoMaximo = lista[i].conteo;
            autorMasRepetido = lista[i].autor;
        };
    };
    return `<p>El autor con mas trabajos es ${autorMasRepetido} con ${conteoMaximo} documentos.</p>`   
};

const calcularTemaMasRepetido = () => {
    let lista = [];
    let conteoMaximo = 0;
    let temaMasRepetido = "";
    let temaEstaEnLista;

    for(let r of documentos){
        temaEstaEnLista = false;
        for(i = 0; i < lista.length; i++){
            if(r.tema === lista[i].tema){
                lista[i].conteo += 1;
                temaEstaEnLista = true;
            };
        };
        if(temaEstaEnLista === false){
            let nuevoTema = {
                "tema" : r.tema,
                "conteo" : 1,
            };
            lista.push(nuevoTema);
        };
    };
    for(let i = 0; i < lista.length; i++){
        if(lista[i].conteo > conteoMaximo){
            conteoMaximo = lista[i].conteo;
            temaMasRepetido = lista[i].tema;
        };
    };
    return `<p>El tema con mas trabajos es ${temaMasRepetido} con ${conteoMaximo} documentos.</p>` 
};

btnAgregar.addEventListener('click', agregar);
btnMostarTodos.addEventListener('click', mostrarDocumentos);
btnEstadisticas.addEventListener('click', mostrarEstadisticas);
btnBuscarTema.addEventListener('click', buscarTema);