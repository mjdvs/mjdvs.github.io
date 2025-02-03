document.addEventListener('DOMContentLoaded', (event) => {
    const descElement = document.getElementById('site-description');
    if (descElement) {
        descElement.innerHTML = descElement.innerHTML.replace(/\[\[(.*?)\|\|(.*?)\]\]/g, '<a href="$2">$1</a>');
    }

    const accordionButtons = document.querySelectorAll('.accordion-btn');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
