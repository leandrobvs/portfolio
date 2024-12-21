const langSwitcher = document.querySelector('.lang-switcher');

langSwitcher.addEventListener('click', () => {
  const currentLang = document.documentElement.getAttribute('lang');

  if (currentLang === 'pt-br') {
    document.documentElement.setAttribute('lang', 'en');

    document
      .querySelectorAll('[lang="pt-br"]')
      .forEach(element => (element.style.display = 'none'));
    document.querySelectorAll('[lang="en"]').forEach(element => (element.style.display = 'block'));
  } else {
    document.documentElement.setAttribute('lang', 'pt-br');

    document.querySelectorAll('[lang="en"]').forEach(element => (element.style.display = 'none'));
    document
      .querySelectorAll('[lang="pt-br"]')
      .forEach(element => (element.style.display = 'block'));
  }
});
