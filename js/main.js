// Milestone #1:
//
// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
    'nome'      : 'Marianna' ,
    'cognome'   : 'Berlinguer' ,
    'eta'       :  31
};

for(var key in studente) {
    console.log(key +": "+ studente[key]);
}

// Milestone #2
//
// Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome.

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


for(var i = 0; i < arrayStudenti.length; i++)
    console.log(arrayStudenti[i].nome + " "+ arrayStudenti[i].cognome);

// Milestone #3:
// 
// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

var oggettoTmp = {      
    'nome'      : null ,
    'cognome'   : null ,
    'eta'       : null
};

for(var key in oggettoTmp)
    oggettoTmp[key] = prompt("Inserisci un valore per il campo '"+key+"':");

arrayStudenti.push(oggettoTmp);

console.log(arrayStudenti);