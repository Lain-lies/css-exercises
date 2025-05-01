const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');
const modalDiv = document.querySelector('.popup-modal');
const backdrop = document.querySelector('.backdrop');

function openModal() {

  modalDiv.classList.add('show');
  modalDiv.classList.remove('hide');
  backdrop.classList.add('show');
  
}

function hideModal(){
  modalDiv.classList.remove('show');
  modalDiv.classList.add('hide');
  backdrop.classList.remove('show');


}
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', hideModal);
