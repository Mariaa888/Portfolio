
let bar = document.querySelector(".navbar");
function show() {
    bar.style.display = "flex";
}
function closebar() {
    bar.style.display = 'none';
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }); 
        if (window.innerWidth < 720) {
            closebar();
        }
    });
});
