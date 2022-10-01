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

//footer - 년도 자동 수정
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
