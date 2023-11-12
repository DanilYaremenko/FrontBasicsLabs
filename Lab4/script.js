document.addEventListener('DOMContentLoaded', () => {
    const firstElement = document.getElementById('first-element');
    const secondElement = document.querySelector('#second-element');

    function swapStyles() {
        firstElement.classList.toggle('blue');
        firstElement.classList.toggle('green');
        secondElement.classList.toggle('blue');
        secondElement.classList.toggle('green');
    }

    firstElement.addEventListener('click', swapStyles);
    secondElement.addEventListener('click', swapStyles);

    const addButton = document.querySelector('#add');
    const enlargeButton = document.querySelector('#enlarge');
    const reduceButton = document.querySelector('#reduce');
    const deleteButton = document.querySelector('#delete');
    const image = document.querySelector('#image');

    addButton.addEventListener('click', () => {
        image.style.display = 'inline';
    });

    enlargeButton.addEventListener('click', () => {
        const currentWidth = parseInt(getComputedStyle(image).getPropertyValue('width'));
        image.style.width = `${currentWidth + 50}px`;
    });

    reduceButton.addEventListener('click', () => {
        const currentWidth = parseInt(getComputedStyle(image).getPropertyValue('width'));
        image.style.width = `${currentWidth - 50}px`;
    });

    deleteButton.addEventListener('click', () => {
        image.style.display = 'none';
    });
});