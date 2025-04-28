const langSwitcher = document.querySelector('.lang-switcher');

if (langSwitcher) {
  langSwitcher.addEventListener('click', () => {
    const currentLang = document.documentElement.getAttribute('lang');

    if (currentLang === 'pt-br') {
      document.documentElement.setAttribute('lang', 'en');

      document
        .querySelectorAll('[lang="pt-br"]')
        .forEach(element => (element.style.display = 'none'));
      document
        .querySelectorAll('[lang="en"]')
        .forEach(element => (element.style.display = 'block'));
    } else {
      document.documentElement.setAttribute('lang', 'pt-br');

      document.querySelectorAll('[lang="en"]').forEach(element => (element.style.display = 'none'));
      document
        .querySelectorAll('[lang="pt-br"]')
        .forEach(element => (element.style.display = 'block'));
    }
  });
}

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
  const linksParaRastrear = [
    'link-sobre-mim-pt',
    'link-about-me-en',
    'link-portfolio-pt',
    'link-portfolio-en',
    'link-curriculum-pt',
    'link-curriculum-en',
    'projeto-m1-marketing',
    'projeto-etl',
    'projeto-analise-financeira',
    'projeto-analise-sentimento',
    'projeto-analise-marketing',
    'projeto-analise-rh',
    'projeto-evasao-clientes',
    'projeto-e-commerce',
    'projeto-google-apps',
    'projeto-excel-marketing',
    'projeto-excel-demanda',
    'projeto-excel-vpn',
  ];

  linksParaRastrear.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.addEventListener('click', function () {
        let eventCategory = 'geral';
        if (id.startsWith('link-')) {
          eventCategory = 'navegacao';
        } else if (id.startsWith('projeto-')) {
          eventCategory = 'portfolio';
        }

        gtag('event', 'click_link', {
          event_category: eventCategory,
          event_label: id,
        });
      });
    }
  });
});
