// FUNZIONI
// Creo una funzione per creare le celle
const createCells = (cellNumber, difficulty) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', difficulty);
    cell.append(cellNumber);
    return cell;
}

// Creo funzione che genera numeri casuali (bombe)
const createRandomNumbers = (max, totalNumbers) => {
    const randomNumbers = [];

    // Ciclo while poiché dovrò pescare più volte il numero casuale per non avere doppioni
    while (randomNumbers.length < totalNumbers) {
        const randomNumber = Math.floor(Math.random() * max) + 1;

        // Controllo se il numero creato è già nell'array. Se si, genero altri numeri
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

// RECUPERO ELEMENTI DAL DOM
const form = document.querySelector('form');
const grid = document.getElementById('grid');
const select = document.querySelector('select');
const button = document.querySelector('button');
const scoreElement = document.getElementById('score');
let resultElement = document.getElementById('result');

// Aggiungo un evento al bottone Play
 const startGame = (e) => {
    // Modifico il normale funzionamento del bottone dentro il form
    e.preventDefault();

    // Al click del pulsante play/try again viene svuotata la griglia
    grid.innerHTML = '';

    // Una volta premuto il pulsante play compare al suo interno la scritta try again
    button.innerText = 'Try again';

    // Selettore difficoltà
    const difficulty = select.value;

    // Assegno 0 come valore al punteggio
    let score = 0;

    // Assegno
    resultElement.innerText = 'In attesa del risultato';

    // Numero totale delle bombe
    let totalBombs = 16;

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

    // Calcolo del punteggio massimo
    const maxScore = totalCells - totalBombs;

    // Creo le bombe
    const bombs = createRandomNumbers(totalCells, totalBombs);
    console.log(bombs);
    
    // Ciclo for che calcola quante celle creare (100 o 81 o 49)
    for (let i = 0; i < totalCells; i++) {
    
        // Creo le celle
        const cell = createCells(i + 1, difficulty);

        // Aggiungo la classe per cambiare colore delle celle al click della cella
        cell.addEventListener('click', () => {

            // Se le celle hanno già la classe clicked, il punteggio non vieve aumentato
            if (cell.classList.contains('clicked')) return;

            // Controllo se l'utente ha beccato la cella con la bomba
            if (bombs.includes(i + 1)) {
                // Aggiungo la classe bomb
                cell.classList.add('bomb');
                resultElement.innerText = `Hai Perso! hai totalizzato ${score} punti!`;
            } else {
                // Aggiungo la classe clicked alle celle clickate
                cell.classList.add('clicked');

                // Aggiungo i punti al giocatore
                scoreElement.innerText = 'Punti: ' + ++score;

                if (score === maxScore) {
                    resultElement.innerText = `Hai Vinto! hai totalizzato ${score} punti!`;
                }
            }
        })

    // Inserisco in pagina
    grid.appendChild(cell);
    }
}

form.addEventListener('submit', startGame);
