fetch('components/navbar.html')
.then(response => response.text())
.then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
});

fetch('components/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
});