const container = document.getElementById('container');
const deleteBtn = document.querySelector('.delete-btn');

container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            container.innerHTML = `<img src="${e.target.result}" alt="Dropped Image">`;
        };
        reader.readAsDataURL(file);
    }
});

deleteBtn.addEventListener('click', () => {
    container.innerHTML = '';
});