const btn = document.getElementById('theme-switcher');
const body = document.body;

btn.addEventListener('click', () => {
​ ​ if (body.classList.contains('theme-light')) {
​ ​ ​ ​ body.classList.remove('theme-light');
​ ​ ​ ​ body.classList.add('theme-dark');
​ ​ ​ ​ btn.textContent = '☀️';
​ ​ } else {
​ ​ ​ ​ body.classList.remove('theme-dark');
​ ​ ​ ​ body.classList.add('theme-light');
​ ​ ​ ​ btn.textContent = '🌑';
​ ​ }
});
