document.addEventListener('DOMContentLoaded', function() {
    const msgcookies = document.getElementById('cookies-msg');
    const aceitarcookies = document.getElementById('aceitarcookies');
    function mostrarcookies(){

        msgcookies.classList.add('mostrar')
    }

    function escondercookies (){
        msgcookies.classList.remove('mostrar')
    }
    
    mostrarcookies ();

    aceitocookies.addEventListener('click' , function() {
        escondercookies();
    });
})