// Lock brown splash immediately
(function() {
    const splash = document.getElementById('splash');
    if (splash) {
        splash.className = 'splash-screen normal';
    }
})();

// Fade out once loaded
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('splash').classList.add('fade-out');
    }, 100);
});

// Link clicks
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('#') || link.target === '_blank') return;
    
    e.preventDefault();
    const splash = document.getElementById('splash');
    splash.className = 'splash-screen normal';
    
    setTimeout(() => {
        window.location.href = link.href;
    }, 50);
});

const userLang = navigator.language || navigator.userLanguage;

// Mensajes
const message = userLang.startsWith('es') 
    ? "Recordatorio: Si la página se congela en algún momento, por favor recárgala" 
    : "Reminder: If the page freezes at any point, please reload it";

if (!localStorage.getItem('freezeReminderShown')) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            alert(message);
            // Guardar en localStorage para no volver a mostrar
            localStorage.setItem('freezeReminderShown', 'true');
        }, 3000);
    });
}
