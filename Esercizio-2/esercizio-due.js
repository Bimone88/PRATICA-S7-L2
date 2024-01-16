document.addEventListener("DOMContentLoaded", function () {
  // Recupera il valore del contatore da sessionStorage:
  let counter = sessionStorage.getItem("counter");

  // Inizializzo il contatore a 0:
  if (!counter) {
    counter = 0;
    sessionStorage.setItem("counter", counter);
  }

  // Chiamo la funzione che mostra il valore iniziale del contatore:
  updateCounter();

  // Aggiorna contatore ogni secondo:
  setInterval(function () {
    counter++;
    sessionStorage.setItem("counter", counter);
    updateCounter();
  }, 1000);

  // Funzione per aggiornare il valore del contatore:
  function updateCounter() {
    document.getElementById("counter").textContent = counter;
  }
});
