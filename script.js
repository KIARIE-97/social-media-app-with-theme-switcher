
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');
    const body = document.body;

    // Check for saved user preference, if any, on initial load
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark_mode');
        toggle.checked = true;
    } else {
        body.classList.add('light_mode');
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.replace('light_mode', 'dark_mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light_mode');
            localStorage.setItem('theme', 'light');
        }
    });
});

