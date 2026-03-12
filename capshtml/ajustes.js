
(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedFont = localStorage.getItem('font') || 'mono';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-font', savedFont);
})();

function toggleSettings() {
    document.querySelector('.settings-container').classList.toggle('open');
}

function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
}

function setFont(fontName) {
    document.documentElement.setAttribute('data-font', fontName);
    localStorage.setItem('font', fontName);
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.font === fontName);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const currentFont = document.documentElement.getAttribute('data-font');
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
    
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.font === currentFont);
    });
});


function showSplash() {
    const splash = document.getElementById('splash');
    splash.classList.remove('fade-out');
    splash.style.pointerEvents = 'auto';
    
    setTimeout(() => {
        splash.classList.add('fade-out');
        splash.style.pointerEvents = 'none';
    }, 200);
}

// Show on initial load
document.addEventListener('DOMContentLoaded', showSplash);

// Modify setTheme to trigger splash
function setTheme(themeName) {
    showSplash();
    
    setTimeout(() => {
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === themeName);
        });
    }, 100); // Halfway through fade for smoothness
}
