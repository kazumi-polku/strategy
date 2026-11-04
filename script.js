document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-pending-link]').forEach(link => link.addEventListener('click', event => event.preventDefault()));
