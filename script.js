const sidebar = document.getElementById('sidebar');

let overlay = document.getElementById('overlay');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
}

const toggleBtn = document.querySelector('.toggle-btn');

function updateToggleAria() {
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', sidebar.classList.contains('open') ? 'true' : 'false');
}

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('show-overlay');
  sidebar.setAttribute('aria-hidden','false');
  overlay.setAttribute('aria-hidden','false');
  updateToggleAria();
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show-overlay');
  sidebar.setAttribute('aria-hidden','true');
  overlay.setAttribute('aria-hidden','true');
  updateToggleAria();
}

function toggleSidebar() {
  if (sidebar.classList.contains('open')) closeSidebar(); else openSidebar();
}

// close on overlay click, touch, or escape
overlay.addEventListener('click', () => { closeSidebar(); });
overlay.addEventListener('touchstart', () => { closeSidebar(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSidebar(); } });

// menu links close sidebar
document.querySelectorAll('.sidebar .menu a').forEach(a => a.addEventListener('click', () => {
  closeSidebar();
}));


function syncSidebarOnResize() {
  
  closeSidebar();
  updateToggleAria();
}

window.addEventListener('resize', syncSidebarOnResize);
// initial sync
syncSidebarOnResize();

const texts = ["Studying in Web Development and  Programming", "a Student in BSc Computer science at Scott Christian college "];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); 
  } else {
    setTimeout(type, 100);
  }
}

type();
