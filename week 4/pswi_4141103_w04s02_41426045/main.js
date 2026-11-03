document.addEventListener('DOMContentLoaded', () => {
  const greetingButton = document.getElementById('greeting-button');

  if (greetingButton) {
    greetingButton.addEventListener('click', () => {
      alert('Halo! Selamat datang di halaman ini.');
    });
  }
});