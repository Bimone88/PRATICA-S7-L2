// DOM traversing:
const userNameInput = document.getElementById("userName");
const saveButton = document.querySelector(".btn-primary");
const removeButton = document.querySelector(".btn-danger"); // ciao orsi :(
const valoreSalvatoElement = document.getElementById("valoreSalvato");

// intercetto il suo evento di submit
saveButton.addEventListener("click", function () {
  // recupo il valore inserito dall'utente
  const userName = userNameInput.value;

  // salvo in localStorage:
  localStorage.setItem("userName", userName);

  // aggiorno valore che c'era sopra l'input field:
  updateValoreSalvato();
});

// intercetto pulsante "Rimuovi":
removeButton.addEventListener("click", function () {
  // rimuovo il valore dal localStorage:
  localStorage.removeItem("userName");

  // aggiorno valore che c'è su l'input field:
  updateValoreSalvato();
});

// funzione per aggiornare il valore che c'è sopra l'input field:
function updateValoreSalvato() {
  const userName = localStorage.getItem("userName");
  valoreSalvatoElement.textContent = userName || "Nessun valore salvato";
}

// all'avvio della pagina, aggiorniamo il valore mostrato sopra l'input field
updateValoreSalvato();
