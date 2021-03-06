const refs = {
    body: document.querySelector('body'),
    checkBox: document.querySelector("#theme-switch-toggle")
};
// console.dir(refs.body);
// console.dir(refs.checkBox);

 const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//вариант первый ставим класс на боди  <div class="theme-switch"> 
refs.checkBox.addEventListener('click', toogleTeme);

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  themeName === Theme.DARK
    ? refs.body.classList.replace(Theme.LIGHT, Theme.DARK)
    : refs.body.classList.replace(Theme.DARK, Theme.LIGHT)
}

function toogleTeme() {
  refs.checkBox.checked
    ? setTheme(Theme.DARK)
    : setTheme(Theme.LIGHT);
}

if (localStorage.getItem('theme') === Theme.DARK) {
  refs.checkBox.setAttribute('checked', 'true');
  toogleTeme();
}
//вариант второй, класс на боди не нужен

// refs.checkBox.addEventListener('change', setClassList);
// refs.checkBox.addEventListener('change', setLocalStorage);

// function setClassList() {
//     const check = refs.checkBox.checked;
//  if (check) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT);
//   } else {
//     refs.body.classList.add(Theme.LIGHT);
//     refs.body.classList.remove(Theme.DARK);
//   }
// };

// function setLocalStorage() {
//   const check = refs.checkBox.checked;

//   if (check) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// const themeHistory = localStorage.getItem('theme');

// if (themeHistory === Theme.DARK) {
//   refs.body.classList.add(Theme.DARK);
//   refs.checkBox.checked = true;
// };



 