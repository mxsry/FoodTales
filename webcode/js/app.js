const modalElement = document.getElementById('myModal');
const myModal = new bootstrap.Modal(modalElement);
document.getElementById('openModalBtn').addEventListener('click', () => {
    myModal.show();
});