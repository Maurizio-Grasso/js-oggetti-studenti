var arrayStudenti = [
    
    {
        'nome'      : 'Davide' ,
        'cognome'   : 'Gandolfi' ,
        'eta'       :  26
    } ,

    {
        'nome'      : 'Giovanna' ,
        'cognome'   : 'Di Lorenzo' ,
        'eta'       :  30
    } ,

    {
        'nome'      : 'Alfredo' ,
        'cognome'   : 'Romanelli' ,
        'eta'       :  37
    }
];

document.getElementById('students-container').innerHTML = "";   // Reset HTML

for(let i = 0; i < arrayStudenti.length; i++) {
    printStudent(i);
}

newStudent();

// functions

function newStudent() {
    
    var oggettoTmp = {      
        'nome'      : null ,
        'cognome'   : null ,
        'eta'       : null
    };
    
    for(var key in oggettoTmp)
        oggettoTmp[key] = prompt("Inserisci un valore per il campo '"+key+"':");

    arrayStudenti.push(oggettoTmp);
    
    printStudent((arrayStudenti.length)-1);
}

function printStudent(indiceArray) {
    document.getElementById('students-container').innerHTML += '<ul class="single-student" id="single-student-'+(indiceArray+1)+'"></ul>';
    
    for (var key in arrayStudenti[indiceArray])
        document.getElementById('single-student-'+(indiceArray+1)).innerHTML += '<li>'+key+': '+arrayStudenti[indiceArray][key]+'</li>';
}