
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
        console.log(birthYearInput); // check in console
        const kmNumInput = document.getElementById('kmNum').value;
        console.log(kmNumInput); // check in console
        // calcolo etá
        const age = currentYear - birthYearInput;
        console.log(`la persona ha ${age} anni`); // check in console
    });





