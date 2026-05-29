// Modifico comportamento di default del bottone submit
const form = document.querySelector('form');
form.addEventListener('submit', event => event.preventDefault);

// Salvo le informazioni in due variabili

const birthDate = document.getElementById(birthDate);
const km = document.getElementById(kmNum);
