console.log('JS OK');

// Recuperare elementi dal DOM
// Creare funzione per creare le celle
// Reagire al click sul pulsante play che fa vedere la griglia
// In ogni cella devono comparire i numeri in ordine da 1 a 100;
// Reagire al click dell'utente che fa apparire il numero cliccato in console
// Reagire al click dell'utente che fa cambiare il colore delle celle



// FUNZIONI
// Creo una funzione per creare le celle
const createCells = (cellNumber, difficulty) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', difficulty);
    cell.append(cellNumber);
    return cell;
}

//Recupero elementi dal DOM
const form = document.querySelector('form');
const grid = document.getElementById('grid');
const select = document.querySelector('select');
const button = document.querySelector('button');
const score = document.getElementById('score');

// Aggiungo un evento al bottone Play
 const startGame = (e) => {
    // Modifico il normale funzionamento del bottone dentro il form
    e.preventDefault();

    // Al click del pulsante play/try again viene svuotata la griglia
    grid.innerHTML = '';

    // Rendo visibile i Punti
    score.classList.remove('d-none');

    // Una volta premuto il pulsante play compare al suo interno la scritta try again
    button.innerText = 'Try again';

    // Selettore difficoltà
    const difficulty = select.value;

    // Dati della griglia
    let rows = 10;
    let cols = 10;

    // Controllo in che valore del selected è l'utente    
    if (difficulty === 'medium') {
        rows = 9;
        cols = 9;
    } else if (difficulty === 'hard') {
        rows = 7;
        cols = 7;
    }

    // Calcolo le celle totali
    const totalCells = rows * cols;
    console.log(totalCells);
    
    // Ciclo for che calcola quante celle creare (100 o 81 o 49)
    for (let i = 0; i < totalCells; i++) {
    
        // Creo le celle
        const cell = createCells(i + 1, difficulty);

        // Aggiungo la classe per cambiare colore delle celle al click della cella
        cell.addEventListener('click', () => {
        cell.classList.add('clicked');

        // Vedo in console quale cella ha cliccato l'utente
        console.log(i + 1);
        })

    // Inserisco in pagina
    grid.appendChild(cell);
    }
}

form.addEventListener('submit', startGame);



