const btn_opcoes_navbar = document.querySelector('#btn_opcoes_navbar');
const aba_opcoes_navbar = document.querySelector('.aba_opcoes_navbar');

btn_opcoes_navbar.addEventListener('click', () => {
    const icone = btn_opcoes_navbar.querySelector('i');

    //Para aparecer o bloco de opções do navbar
    aba_opcoes_navbar.classList.toggle('visivel');

    //Para mudar o icone de acordo com a visibilidade das opções do navbar
    icone.classList.toggle('fa-bars')
    icone.classList.toggle('fa-caret-down')

    //Para animar o icone, deixar mais bonito no resultado final
    icone.classList.remove('animar_icone')

    void icone.offsetWidth

    icone.classList.add('animar_icone')
})