const $form = document.querySelector('#form')
const article = document.querySelector('.article')
const menu = document.getElementById('menu')

window.onscroll = function() {navBgT()};



const navBgT = ()=>{
    if(document.documentElement.scrollTop < 56) {
        menu.classList.remove('bg-black')
        menu.classList.add('bg-transparent');
    } else {
        menu.classList.remove('bg-transparent')
        menu.classList.add('bg-black');
}
}


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


const animacion = ()=>{
    const animation = article.animate([
        {transform:"translateY(-100px)"},
        {transform:"translateY(0px)"}
    ],{
        easing:"linear",
        iterations: 1,
        duration: 1000

    });
    return animation.finished
}


