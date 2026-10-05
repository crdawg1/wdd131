// let btnchange = document.querySelector('.menu-btn');
// let navigation = document.querySelector('nav');

// btnchange.addEventListener('click', function() {
//     btnchange.classList.toggle('open');
//     navigation.classList.toggle('open');
// });

const button = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');
const links = document.querySelectorAll('nav a');

function setLinks(show) {
    links.forEach(link => {
        link.style.display = show ? 'block' : '';
        link.style.textAlign = show ? 'center' : '';
        link.style.borderTop = show ? '1px solid gray' : '';
    });
}

button.addEventListener('click', () => {
    const isOpen = button.classList.toggle('change');
    navigation.classList.toggle('open', isOpen);
    setLinks(isOpen);
});

// Reset when the window grows to desktop width so the inline styles don't interfere
window.addEventListener('resize', () => {
    if (window.innerWidth >= 700) {
        button.classList.remove('change');
        navigation.classList.remove('open');
        setLinks(false);
    }
});