const dividerNav = document.querySelector('.divider-nav');
const dividerInfo = document.querySelector('.divider-info');
const nav = document.querySelector('.nav');
const infoPlaying = document.querySelector('.info-playing');
const center = document.querySelector('.center'); // Certifique-se de que a div center seja selecionada corretamente.

let isResizing = false;
let activeDivider = null;

dividerNav.addEventListener('mousedown', (event) => {
  isResizing = true;
  activeDivider = 'nav';
  document.body.style.userSelect = 'none';
});

dividerInfo.addEventListener('mousedown', (event) => {
  isResizing = true;
  activeDivider = 'infoPlaying';
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (event) => {
  if (!isResizing) return;

  if (activeDivider === 'nav') {
    const newWidth = event.clientX - nav.getBoundingClientRect().left;
    nav.style.width = `${newWidth}px`;

    const newWidthCenter = window.innerWidth - newWidth - infoPlaying.offsetWidth;
    center.style.width = `${newWidthCenter}px`;
  } else if (activeDivider === 'infoPlaying') {
    const newWidth =  infoPlaying.getBoundingClientRect().right - event.clientX;
    infoPlaying.style.width = `${newWidth}px`;

    const newWidthCenter = window.innerWidth - newWidth - nav.offsetWidth;
    center.style.width = `${newWidthCenter}px`;
  }
});

document.addEventListener('mouseup', () => {
  isResizing = false;
  activeDivider = null;
  document.body.style.userSelect = 'auto';
});

const navContent = document.querySelector('.nav-content')

// Função para mostrar a barra de rolagem
function showScrollbar(event) {
  event.target.style.overflow = 'auto';  // Mostra a barra de rolagem
}

// Função para esconder a barra de rolagem
function hideScrollbar(event) {
  event.target.style.overflow = 'hidden';  // Esconde a barra de rolagem
}

// Adicionando ouvintes de evento para as divs
navContent.addEventListener('mouseenter', showScrollbar);
center.addEventListener('mouseenter', showScrollbar);
infoPlaying.addEventListener('mouseenter', showScrollbar);

// Remover a barra de rolagem quando o mouse sair
navContent.addEventListener('mouseleave', hideScrollbar);
center.addEventListener('mouseleave', hideScrollbar);
infoPlaying.addEventListener('mouseleave', hideScrollbar);