console.log('JS OK');

// Recuperare elementi dal DOM
// Creare funzione per creare le celle
// Reagire al click sul pulsante play che fa vedere la griglia
// In ogni cella devono comparire i numeri in ordine da 1 a 100;
// Reagire al click dell'utente che fa apparire il numero cliccato in console
// Reagire al click dell'utente che fa cambiare il colore delle celle



// FUNZIONI
// Creo una funzione per creare le celle della griglia con il contenuto (100 celle)
const create100Cells = content => {
    const cell = document.createElement('div');
    cell.classList.add('cell-l');
    cell.append(content);
    return cell;
}
// 81 celle
const create81Cells = content => {
    const cell = document.createElement('div');
    cell.classList.add('cell-m');
    cell.append(content);
    return cell;
}

// 49 celle
const create49Cells = content => {
    const cell = document.createElement('div');
    cell.classList.add('cell-s');
    cell.append(content);
    return cell;
}



//Recupero elementi dal DOM
const form = document.querySelector('form');
const grid = document.getElementById('grid');
const select = document.querySelector('select');
const button = document.querySelector('button');

// Selettore difficoltà
const difficulty = select.value;

// Dati della griglia
let rows = 10;
let cols = 10;
const totalCells = rows * cols;
console.log(totalCells);

// Controllo in che valore del selected è l'utente
select.addEventListener('change', () => {
    
    if (difficulty === 'medium') {
        rows = 9;
        cols = 9;
    } else if (difficulty === 'hard') {
        rows = 7;
        cols = 7;
    }
})

totalCells;
console.log(totalCells);

// Aggiungo un evento al bottone Play
button.addEventListener('click', function(e) {
    // Modifico il normale funzionamento del bottone dentro il form
    e.preventDefault();

    // Al click del pulsante play si vedrà la griglia selezionata
    grid.classList.toggle('d-none');
    
})

// Ciclo for che calcola quante celle creare (100 o 81 o 49)
for (let i = 0; i < totalCells; i++) {
    
    // Creo le celle
    let cell = create100Cells(i + 1);

    // Aggiungo la classe per cambiare colore delle celle al click della cella
    cell.addEventListener('click', () => {
        cell.classList.add('clicked');

        // Vedo in console quale cella ha cliccato l'utente
        console.log(cell.innerText);
    })

    // Inserisco in pagina
    grid.appendChild(cell);
}


