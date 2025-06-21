// Toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll behavior
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Form Submission
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    Swal.fire({
        title: "Message Sent!",
        text: "Thank you! I'll get back to you soon.",
        icon: "success"
    });

    form.reset(); 
});

// CV Download
document.getElementById('downloadCv').addEventListener('click', function (event) {
    event.preventDefault();
    if (confirm('Would you like to download the CV file?')) {
        window.location.href = 'IRENE_T_Resume_Corrected.pdf'; 
    }
});

document.getElementById('downloadCv2').addEventListener('click', function (event) {
    event.preventDefault();
    if (confirm('Would you like to download the CV file?')) {
        window.location.href = 'IRENE_T_Resume_Corrected.pdf'; 
    }
});
