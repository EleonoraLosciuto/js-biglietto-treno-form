
// estrazione form
const form = document.getElementById('ticket');
console.log(form); //check in console

//estrazione anno attuale
const d = new Date;
const currentYear = d.getFullYear();

//estrazione degli input senza value
const birthYear = document.getElementById('birthDate');
const kmNum = document.getElementById('kmNum');

// prevent default per gli input
birthYear.addEventListener('input', inp => inp.preventDefault());
kmNum.addEventListener('input', inp2 => inp2.preventDefault());

form.addEventListener('submit', e => 
    {   // prevent default all'evento submit (NO ricarica pagina)
        e.preventDefault(); 

        //Estrazione dati inseriti dall'utente - all'evento Submit
        const birthYearInput = birthYear.value; 
        const kmNumInput = kmNum.value;

        // calcolo etá
        const age = currentYear - birthYearInput;

        // call funzione per calcolo prezzo
        const ticketPrice = price(kmNumInput, age);
        
        // mostro output negli span della card
        const kmCard = document.getElementById('kmInput');
        kmCard.innerHTML = `${kmNumInput}`;
        
        const ageCard = document.getElementById('ageUser');
        ageCard.innerHTML = `${age}`;

        const finalPriceCard = document.getElementById('finalPrice');
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
    }




