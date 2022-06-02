const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {

    event.preventDefault();

    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }

    });
    if (response.ok) {
        this.reset();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Hemos recibido tus datos!!',
            showConfirmButton: false,
            timer: 1500
          })
    } else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'verfica que tus datos hayan sido cargados correctamente',
            showConfirmButton: false,
            timer: 1500
          })

    };
};