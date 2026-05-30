
// estrazione form
const form = document.getElementById('ticket');

//estrazione anno attuale
const d = new Date;
const currentYear = d.getFullYear();

//estrazione degli input senza value
const birthYear = document.getElementById('birthDate');
const kmNum = document.getElementById('kmNum');

//estrazione degli span della card dove mostreró i risultati
const kmCard = document.getElementById('kmInput');
const ageCard = document.getElementById('ageUser');
const finalPriceCard = document.getElementById('finalPrice');

//creo variabili globali con let per memorizzare gli input utente
let age = null;
let kmNumInput = 0;

// EVENT LISTENER PER INPUT 
// mostro l'input utente nella card

form.addEventListener('input', i => {
    // check con taget per evitare che si compili "anni 2026" nella card --> nota: target "isola" lo specifico elemento sul quale l'utente sta digitando 
    if (i.target.id === "birthDate") { // se utente sta digitando dentro l'input dell'anno di nascita
        let birthYearInput = birthYear.value;
    
        if (birthYearInput.length === 4 && (currentYear - birthYearInput >= 0)) {  // se l'anno indicato é di 4 cifre e precedente all'anno attuale, allora calcolo etá, aggiorno variabile e mostro input nella card
            age = currentYear - birthYearInput;
            ageCard.innerHTML = `${age}`;
        }

        else { // se l'utente inserisce piú o meno di 4 cifre, oppure un anno successivo all'attuale, svuoto il mio output nella card
            age = null;
            ageCard.innerHTML = "";
        }
    }

    else if (i.target.id === "kmNum") { // se utente sta digitando l'input dei km
    kmNumInput = kmNum.value;
    // mostro input utente nella card
    kmCard.innerHTML = `${kmNumInput}`;
    }

    });


//EVENT LISTENER PER SUBMIT
// prevent default per submit e mostro prezzo finale nella card
form.addEventListener('submit', e => 
    {   // prevent default all'evento submit (NO ricarica pagina)
        e.preventDefault(); 
        // definisco costante e chiamo funzione per calcolo per prezzo
        const ticketPrice = price(kmNumInput, age);
        // mostro il prezzo finale nella card
        finalPriceCard.innerHTML = `€${ticketPrice}`; 
    });

    //funzione per calcolo prezzo
    function price(km, age) {
        let finalPrice;
        const priceStandard = 0.21
        // controlli di validazione
        if (age < 0 || age > 120) alert("devi inserire l'anno di nascita");
        if (km <= 0 || km > 2000) alert("inserisci un numero di km valido");
        // funzione
        else if (age < 18) finalPrice = priceStandard * 0.8 * km;
        else if (age > 65) finalPrice = priceStandard * 0.6 * km;
        else finalPrice = priceStandard * km;
        return finalPrice.toFixed(2);
    };




