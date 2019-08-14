document.addEventListener('DOMContentLoaded', function(){

    const $containerLogin = document.getElementById('container_login'); 
    const $blur = document.getElementById('blur'); 

    document.getElementById('side-menu__open-btn').addEventListener('click', function() {
        document.getElementById('side-menu').classList.add('open');
    });
    document.getElementById('side-menu__close-btn').addEventListener('click', function() {
        document.getElementById('side-menu').classList.remove('open');
    });
    document.getElementById('login').addEventListener('click', function() {
        $containerLogin.style.display = 'flex';
        $blur.style.display = 'flex';
    });
    document.getElementById('container_login-close-btn').addEventListener('click', function() {
        $containerLogin.style.display = 'none';
        $blur.style.display = 'none';
    }); 
    document.getElementById('recover_password').addEventListener('click', function() {
        document.getElementById('container_recover-password').style.display = 'flex';
        $blur.style.display = 'flex';
        $containerLogin.style.display = 'none';
    });
    document.getElementById('conteiner_recover_password-close-btn').addEventListener('click', function() {
        document.getElementById('container_recover-password').style.display = 'none';
        $blur.style.display = 'none';
    });
});