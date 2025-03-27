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

document.addEventListener('DOMContentLoaded', function () {
  const floatingNavBtn = document.getElementById('floating-nav-btn');
  const sumarioSection = document.getElementById('sumario');

  if (floatingNavBtn && sumarioSection) {
    function scrollToSumario() {
      sumarioSection.scrollIntoView({ behavior: 'smooth' });
    }

    floatingNavBtn.addEventListener('click', scrollToSumario);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingNavBtn.classList.add('hidden');
        } else {
          floatingNavBtn.classList.remove('hidden');
        }
      });
    }, observerOptions);

    observer.observe(sumarioSection);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const floatingNavBtn = document.getElementById('floating-nav-btn');
  const sumarioSection = document.getElementById('sumario');

  console.log('Botão:', floatingNavBtn);
  console.log('Sumário:', sumarioSection);

  if (floatingNavBtn && sumarioSection) {
    // Resto do código
  } else {
    console.error('Elemento não encontrado');
  }
});
