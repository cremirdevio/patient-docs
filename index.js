let selectedFiles = [];

const toggleSelection = (event) => {
  let element = event.target;

  console.log('Clicked', element.dataset.title);
}

let availableFileCards = document.querySelectorAll('.file-selector');

availableFileCards.forEach((fileCard) => {
  fileCard.addEventListener('click', toggleSelection)
})
