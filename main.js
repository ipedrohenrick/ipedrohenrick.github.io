let themeSwitcher = document.getElementsByClassName('theme-switcher')[0];
let themeDark = true;

themeSwitcher.addEventListener('click', () => {
  let contentDiv = document.getElementsByClassName('content')[0];
  if (themeDark) {
    contentDiv.classList.add('light')
  } else {
    contentDiv.classList.remove('light')
  }
  themeDark = !themeDark;
});
