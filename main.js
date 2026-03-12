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
