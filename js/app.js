document.addEventListener('DOMContentLoaded', () => {
    let abrirModal = document.querySelector('.formulario__input--boton')
    let cerrarModal = document.querySelector('.modal-contenedor__boton')
    let modalBody = document.querySelector('.modal');
    let modalContenedor = document.querySelector('.modal-contenedor');
    let email = document.querySelector('.formulario__input--texto');
    const error = document.querySelector('.error');

    abrirModal.addEventListener('click', () => {
        var re = /\S+@\S+\.\S+/;
        if (!re.test(email.value)) {
            error.classList.add('show');
            email.classList.add('err');
        } else {
            modalBody.classList.add('show');
            setTimeout(() => {
                modalContenedor.classList.add('show');
            }, 100);
        }
    });
    cerrarModal.addEventListener('click', () => {
        modalContenedor.classList.remove('show');
        setTimeout(() => {
            modalBody.classList.remove('show');
        }, 500);
        email.value = "";
        error.classList.remove('show');
        email.classList.remove('err');
    });
})