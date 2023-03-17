const responsiveMenu = document.querySelector('.responsive-menu');
const tabs = document.querySelector('.tabs');

responsiveMenu.addEventListener('click', function() {
  tabs.classList.toggle('show');
});
