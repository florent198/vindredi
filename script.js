document.addEventListener('DOMContentLoaded', () => {
  console.log('Script chargé avec succès');
});

function addCard() {
  const container = document.getElementById('cardContainer');

  const card = document.createElement('div');
  card.style.padding = '15px';
  card.style.margin = '10px 0';
  card.style.border = '1px solid #ddd';
  card.style.borderRadius = '5px';
  card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  card.style.backgroundColor = '#fff';

  const title = document.createElement('h3');
  title.textContent = 'Nouvelle Fiche';
  title.style.margin = '0 0 10px';

  const input = document.createElement('textarea');
  input.rows = 4;
  input.style.width = '100%';
  input.style.padding = '10px';
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '5px';
  input.placeholder = 'Entrez vos notes ici...';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Supprimer';
  removeButton.style.marginTop = '10px';
  removeButton.style.backgroundColor = '#e53935';
  removeButton.style.borderColor = '#e53935';
  removeButton.addEventListener('click', () => {
    container.removeChild(card);
  });

  card.appendChild(title);
  card.appendChild(input);
  card.appendChild(removeButton);
  container.appendChild(card);
}
