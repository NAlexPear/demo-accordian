const questions = document.querySelectorAll('#accordian h3');

function expandDropdown(event){
  event.target.nextElementSibling.classList.toggle('hidden');
}

questions.forEach(question => question.addEventListener(
  'click',
  expandDropdown
));
