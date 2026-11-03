const greetingButton =
 document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
 alert('Semangat yapp!');
});
console.log('main.js berhasil dijalankan');

// Formulir pendaftaran
const form = document.getElementById("formPendaftaran");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Pendaftaran berhasil dikirim!");

    form.reset();

});


