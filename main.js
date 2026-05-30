
// estrazione form
const form = document.getElementById('ticket');
console.log(form); //check in console

//estrazione anno attuale
const d = new Date;
const currentYear = d.getFullYear();

//estrazio input senza value
const birthYear = document.getElementById('birthDate');
const kmNum = document.getElementById('kmNum');


form.addEventListener('submit', e => 
    {   // prevent default all'evento submit (NO ricarica pagina)
        e.preventDefault(); 

        //Estrazione dati inseriti dall'utente - all'evento Submit
        const birthYearInput = birthYear.value; 
        const kmNumInput = kmNum.value;
        console.log(`km da percorrere: ${kmNumInput}`); // check in console

        // calcolo etá
        const age = currentYear - birthYearInput;
        console.log(`la persona ha ${age} anni`); // check in console

        // call funzione per calcolo prezzo
        console.log(`il prezzo finale é € ${price(kmNumInput, age)}`);
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




