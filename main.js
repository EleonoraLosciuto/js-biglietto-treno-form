
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


// EVENT LISTENER PER INPUT 
// //prevent default per gli input e mostro l'input utente nella card

birthYear.addEventListener('input', inp => {
    inp.preventDefault()
    
    // calcolo etá
    const birthYearInput = birthYear.value; 
    const age = currentYear - birthYearInput;

    // mostro input utente nella card
    ageCard.innerHTML = `${age}`;
    });

kmNum.addEventListener('input', inp2 => {
    inp2.preventDefault()
    
    const kmNumInput = kmNum.value;

    // mostro input utente nella card
    kmCard.innerHTML = `${kmNumInput}`;
    });


//EVENT LISTENER PER SUBMIT
// prevent default per submit e mostro prezzo finale nella card
form.addEventListener('submit', e => 
    {   // prevent default all'evento submit (NO ricarica pagina)
        e.preventDefault(); 
        
        // estrazione degli input
        const birthYearInput = birthYear.value; 
        const kmNumInput = kmNum.value;

        // calcolo etá
        const age = currentYear - birthYearInput; 

        const ticketPrice = price(kmNumInput, age);
        finalPriceCard.innerHTML = `€${ticketPrice}`; 
    });

    //funzione per calcolo prezzo
    function price(km, age) {
        let finalPrice;
        const priceStandard = 0.21
        if (age < 0 || age > 100) alert("devi inserire l'anno di nascita");
        if (km < 0 || km > 2000) alert("inserisci un numero di km valido");
        else if (age < 18) finalPrice = priceStandard * 0.8 * km;
        else if (age > 65) finalPrice = priceStandard * 0.6 * km;
        else finalPrice = priceStandard * km;
        return finalPrice.toFixed(2);
    };




