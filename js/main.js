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

document.getElementById('students-container').innerHTML = "";   // Reset HTML

for(let i = 0; i < arrayStudenti.length; i++)
//  Stampa su Html le schede studente preesistenti
    printStudent(i);

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

    document.getElementById('students-container').innerHTML += '<ul class="single-student" id="single-student-'+(posizione+1)+'"></ul>';
    
    for (var key in arrayStudenti[posizione])
        document.getElementById('single-student-'+(posizione+1)).innerHTML += '<li>'+key+': '+arrayStudenti[posizione][key]+'</li>';

    document.getElementById('single-student-'+(posizione+1)).innerHTML += '<li class="student-index">'+(posizione+1)+'</li>';

}
