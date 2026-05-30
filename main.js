
// estrazione form
const form = document.getElementById('ticket');
console.log(form); //check in console

//estrazione anno attuale
const d = new Date;
const currentYear = d.getFullYear();
console.log(currentYear); // check in console


form.addEventListener('submit', e => 
    {   // prevent default all'evento submit (NO ricarica pagina)
        e.preventDefault(); 

        //Estrazione dati inseriti dall'utente - all'evento Submit
        const birthYearInput = document.getElementById('birthDate').value; 
        const kmNumInput = document.getElementById('kmNum').value;
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
        if (age < 18) finalPrice = priceStandard * 0.8 * km;
        else if (age > 65) finalPrice = priceStandard * 0.6 * km;
        else finalPrice = priceStandard * km;
        return finalPrice.toFixed(2);
    }




