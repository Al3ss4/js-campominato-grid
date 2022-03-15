console.log('JS OK!')


// Consegna
// creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



//creo una griglia 10 x 10
const grid = document.getElementById ('grid');

//numero delle colonne = 10
const columns = 10;

// numero delle righe = 10
const rows = 10;

// numero totale delle celle è dato dalla moltiplicazione di colonne + righe
const totalCells = columns * rows;

//creo una funzione che mi permetta di creare le mie celle 

createCell = () =>{
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}

// creo il for con all'interno la funzione per creare le celle e verifico se funziona
for(let i = 0; i < totalCells; i++){


    const cell = createCell();
    
    grid.appendChild(cell);

// inserisco all'interno delle celle i numeri, +1 lo inserisco così da non farlo partire da 0 ma da 1
    cell.innerText = (i +1);


// inserisco una funzione che mi permette di far cambiare il bg delle celle al click
    cell.addEventListener('click', function(event) {
        cell.classList.toggle('bg-celeste')
    })
}








