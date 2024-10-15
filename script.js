const dividerNav = document.querySelector('.divider-nav');
const dividerInfo = document.querySelector('.divider-info');
const nav = document.querySelector('.nav')
const infoPlaying = document.querySelector('.info-playing');

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
  } else if (activeDivider === 'infoPlaying') {
    const newWidth = event.clientX - infoPlaying.getBoundingClientRect().left;
    infoPlaying.style.width = `${newWidth}px`;
  }
});

document.addEventListener('mouseup', () => {
  isResizing = false;
  activeDivider = null; 
  document.body.style.userSelect = 'auto';
});