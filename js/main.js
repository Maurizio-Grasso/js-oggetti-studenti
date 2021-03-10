var arrayStudenti = [
//  Array preesistente contenente 3 schede studenti
    {
        'nome'      : 'Stanis' ,
        'cognome'   : 'LaRochelle' ,
        'eta'       :  35
    } ,

    {
        'nome'      : 'Corinna' ,
        'cognome'   : 'Negri' ,
        'eta'       :  24
    } ,

    {
        'nome'      : 'Alessandro' ,
        'cognome'   : 'Tiberi' ,
        'eta'       :  30
    }
];

printStudent('all');

document.getElementById('add-student-button'). addEventListener("click" , function() {
//  Al click del pulsante "inserisci studente" invoca la relativa funzione newStudent
    newStudent();
});

function newStudent() {
//  Questa funzione aggiunge una nuova scheda studente    
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

function printStudent(posizione) {
//  Questa funzione stampa una scheda studente nell'Html

    if(posizione == 'all') {
        document.getElementById('students-container').innerHTML = "";   // Reset HTML
        
        for (var i = 0; i< arrayStudenti.length; i++)
            printStudent(i);
    }
    else {
        document.getElementById('students-container').innerHTML += '<ul class="single-student" id="single-student-'+(posizione+1)+'"></ul>';
        
        for (var key in arrayStudenti[posizione]) {
            document.getElementById('single-student-'+(posizione+1)).innerHTML += '<li><strong>'+key+'</strong>: '+arrayStudenti[posizione][key]+'</li>';        
        }
        document.getElementById('single-student-'+(posizione+1)).innerHTML += '<li class="student-index">'+(posizione+1)+'</li>';        
        document.getElementById('single-student-'+(posizione+1)).innerHTML += '<li class="delete-student" onclick="removeStudent(this)"><i class="fas fa-user-minus"></i></li>';
    }
}

function removeStudent(element) {
    var elementIndex = parseInt(element.previousSibling.innerHTML) - 1; // Posizione dell'elemento (partendo da 0)
    arrayStudenti.splice((elementIndex) , 1);   //  Rimuove elemento dall'Array
    printStudent('all');    // Ristampa l'array aggiornato
}

