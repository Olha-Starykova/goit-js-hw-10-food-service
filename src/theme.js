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

refs.checkBox.addEventListener('change', setClassList);
refs.checkBox.addEventListener('change', setLocalStorage);

function setClassList() {
    const check = refs.checkBox.checked;
 if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
};

function setLocalStorage() {
  const check = refs.checkBox.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeHistory = localStorage.getItem('theme');

if (themeHistory === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.checkBox.checked = true;
};



 