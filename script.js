document.addEventListener('DOMContentLoaded', () => {
  console.log('Script chargé avec succès');
});

function addCard() {
  const container = document.getElementById('cardContainer');

  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h3');
  title.textContent = 'Nouvelle Fiche';

  const input = document.createElement('textarea');
  input.rows = 4;
  input.placeholder = 'Entrez vos notes ici...';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Supprimer';
  removeButton.addEventListener('click', () => {
    container.removeChild(card);
  });

  card.appendChild(title);
  card.appendChild(input);
  card.appendChild(removeButton);
  container.appendChild(card);
}
