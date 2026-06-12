// Smart Header Layout Configuration on Scroll Matrix
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 5%';
        header.style.boxShadow = '0 10px 30px rgba(10, 25, 49, 0.08)';
    } else {
        header.style.padding = '15px 5%';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.03)';
    }
});

// Volunteer registration form response validation handler
document.getElementById('yssRegForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    this.reset();
});
