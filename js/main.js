const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  serachInputEl.focus();
});

serachInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  serachInputEl.setAttribute('placeholder', '통합검색');
});

serachInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  serachInputEl.setAttribute('placeholder', '');
});
